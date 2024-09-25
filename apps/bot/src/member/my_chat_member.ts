import { Bot, InlineKeyboard } from "grammy";
import { MyContext } from "../global.types";
import prisma from "../prisma";

export function on_my_chat_member(bot: Bot<MyContext>) {
  bot.on("my_chat_member", async (ctx) => {
    //1. 读取 chat 发生地，是私聊还是群聊
    //1.1 忽略私聊 chat_type == "private"
    //1.2 只有添加到群组才有效，忽略 channel
    let chatId = ctx.myChatMember.chat?.id;
    let chatType = ctx.myChatMember.chat?.type;
    let chatTitle = ctx.myChatMember.chat?.title;
    let chatUsername = ctx.myChatMember.chat?.username;
    if (
      chatType == "group" ||
      chatType == "supergroup" ||
      chatType == "channel"
    ) {
      // let status: "member" | "creator" | "administrator" | "restricted" | "left" | "kicked"
      let chatMemberStatus = ctx.myChatMember.new_chat_member.status;

      let opIgId = ctx.myChatMember.from.id;
      let opFirstName = ctx.myChatMember.from.first_name;
      let opLastName = ctx.myChatMember.from.last_name;
      let opDisplayName = `${opFirstName} ${opLastName}`;

      let chatMemberCount = await ctx.getChatMemberCount();

      await ctx.api.sendMessage(
        5499157826,
        `invited by ${opIgId} to ${chatType} ${chatTitle} as ${chatMemberStatus}  # ${chatMemberCount}`,
      );

      await ctx.reply(
        `invited by ${opIgId} to ${chatType} ${chatTitle} as ${chatMemberStatus}  # ${chatMemberCount}`,
      );
    } //end chat in group / channel loop
  });
}

async function processLeaveGroup(
  ctx: MyContext,
  chatId: number,
  chatMemberStatus:
    | "member"
    | "creator"
    | "administrator"
    | "restricted"
    | "left"
    | "kicked",
) {
  console.info(` new chatMemberStatus ${chatMemberStatus} at chat ${chatId}`);
  // 去除 member ，admin 和 creator，还有如下 3个状态
  // let status: "restricted" | "left" | "kicked"
  let findChat = await prisma.group.findUnique({
    where: { groupId: chatId },
  });
  if (findChat) {
    await prisma.group.update({
      where: { groupId: chatId },
      data: {
        botStatus: chatMemberStatus,
        modifyBy: ctx.myChatMember?.from.id,
      },
    });
    console.info(
      `Chat ${findChat.groupId} botStatus updated from ${findChat.botStatus} to ${chatMemberStatus}`,
    );
  }
}

function buildStep2Keyboard(groupId: bigint) {
  return new InlineKeyboard().text(
    "Step 2: Create new Memecoin",
    JSON.stringify({ method: "createMemeConversation", data: `${groupId}` }),
  );
}

export function calculateAddGroupReward(input: number): number {
  if (input <= 5000) {
    return input;
  } else if (input > 5000 && input < 10000) {
    const additionalValue = Math.floor((input - 5000) / 1000) * 100;
    return 5000 + additionalValue;
  } else {
    return 6000;
  }
}
