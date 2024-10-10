// page.tsx (server component) is where we'll fetch data and render our table.

import { Locale } from "@/config/i18n-config";
import { getDictionary } from "@/lib/get-dictionary";
import { cn } from "@/utils/utils";
import { Category } from "@prisma/client";
import { columns, Project } from "@/app/[lang]/(public)/components/columns";
import { DataTable } from "@/app/[lang]/(public)/components/data-table";

import prisma from "@gramlisting/db";
import { HeadTabs } from "@/app/[lang]/(public)/components/head-tabs";

async function getData(): Promise<Project[]> {
  // Fetch data from your API here.
  return [
    {
      id: 1,
      name: "Dogs",
      category: ["TG Mini Game", "TG  Game"],
      cloutIndex: 99,
      channels: [
        {
          id: 123,
          title: "DOGS Community",
          username: "@dogs_community",
          members: 89098787,
          delta: -123,
        },
        {
          id: 123,
          title: "DOGS Community",
          username: "@dogs_community",
          members: 10023,
          delta: 123456,
        },
      ],
      groups: [
        {
          id: 223,
          title: "DOGS Chat",
          username: "@tonkeeperwallet_official",
          members: 211000,
          delta: 1234,
        },
        {
          id: 223,
          title: "DOGS Chat",
          username: "@tonkeeperwallet_official",
          members: 211000,
          delta: 12,
        },
      ],
      bots: [
        {
          id: 323,
          title: "Dogs",
          username: "abc_bot",
          members: 123000,
          delta: -55,
        },
        {
          id: 323,
          title: "Dogs",
          username: "abc_bot",
          members: 123000,
          delta: -55,
        },
      ],
      links: [
        {
          type: "website",
          url: "http://localhost:8080",
          visitors: 20000,
        },
        {
          type: "twitter",
          url: "https://x.com/memeclubai",
          name: "@memeclubai",
          followers: 20000,
          delta: -11,
        },
      ],
    },
    {
      id: 2,
      name: "Tonkeeper",
      category: ["Wallet"],
      cloutIndex: 98,
      channels: [
        {
          id: 123,
          title: "Tonkeeper News",
          username: "@tonkeeper_news",
          langCode: "en",
          members: 341000,
          delta: 123,
        },
        {
          id: 123,
          title: "",
          username: "@tonkeeper_ru",
          members: 341000,
          delta: 123,
        },
        {
          id: 123,
          title: "@tonkeeper_farsi",
          username: "@tonkeeper_farsi",
          members: 341000,
          delta: 123,
        },
      ],
      groups: [
        {
          id: 223,
          title: "TONKEEPER WALLET",
          username: "@tonkeeperwallet_official",
          members: 211000,
          delta: 1234,
        },
      ],
      bots: [
        {
          id: 323,
          title: "TONKEEPER Bot",
          username: "abc_bot",
          members: 1230,
        },
      ],
      links: [
        {
          type: "website",
          url: "https://tonkeeper.com",
          followers: 20000,
          delta: 113,
        },
      ],
    },
    {
      id: 3,
      name: "Notcoin ",
      category: ["TG Mini Game"],
      cloutIndex: 94,
      channels: [
        {
          id: 123,
          title: "Notcoin Explore",
          username: "@notcoin_explore",
          members: 30000000,
          delta: 8900,
        },
      ],
      groups: [],
      bots: [
        {
          id: 323,
          title: "Notcoin",
          username: "abc_bot",
          members: 123000,
          delta: 18900,
        },
      ],
      links: [
        {
          type: "twitter",
          name: "xx_twitter",
          url: "http://localhost:8080",
          followers: 20000,
        },
      ],
    },
    {
      id: 3,
      name: "Yescoin",
      category: ["TG Mini Game"],
      cloutIndex: 89,
      channels: [
        {
          id: 123,
          title: "Yescoin News",
          username: "abc_news",
          members: 341000,
          delta: 900,
        },
      ],
      groups: [
        {
          id: 223,
          title: "Yescoin Chats",
          username: "abc_groups",
          members: 211000,
          delta: 18900,
        },
      ],
      bots: [
        {
          id: 323,
          title: "Yescoin",
          username: "abc_bot",
          members: 123000,
          delta: 234,
        },
      ],
      links: [
        {
          type: "twitter",
          name: "xx_twitter",
          url: "http://localhost:8080",
          followers: 20000,
          delta: -2,
        },
      ],
    },
    {
      id: 3,
      name: "Catizen",
      category: ["TG Mini Game"],
      cloutIndex: 88,
      channels: [
        {
          id: 123,
          title: "Catizen Publish",
          username: "abc_news",
          members: 341000,
          delta: 2200,
        },
      ],
      groups: [
        {
          id: 223,
          title: "Catizen Community",
          username: "abc_groups",
          members: 211000,
        },
      ],
      bots: [
        {
          id: 323,
          title: "Catizen",
          username: "abc_bot",
          members: 123000,
          delta: 56,
        },
      ],
      links: [
        {
          type: "twitter",
          name: "xx_twitter",
          url: "http://localhost:8080",
          followers: 20000,
          delta: 67,
        },
      ],
    },
    {
      id: 3,
      name: "Tonviewer",
      category: ["Explorer"],
      cloutIndex: 87,
      channels: [
        {
          id: 123,
          title: "Tonviewer News",
          username: "abc_news",
          members: 34100120,
        },
      ],
      groups: [],
      bots: [
        {
          id: 323,
          title: "Tonviewer ",
          username: "@theYescoin_bot",
          members: 123000,
          delta: 123,
        },
      ],
      links: [
        {
          type: "twitter",
          name: "xx_twitter",
          url: "http://localhost:8080",
          followers: 20000,
          delta: 789,
        },
      ],
    },
  ];
}

export default async function IndexPage({
  params: { lang },
}: {
  params: {
    lang: Locale;
  };
}) {
  const dict = await getDictionary(lang);

  let categories: Category[] = await prisma.category.findMany({
    orderBy: { priority: "asc" },
  });
  const data = await getData();

  return (
    <>
      <section
        className={cn(
          "w-full",
          "px-2 sm:px-4 md:px-8 lg:10 xl:px-20 2xl:px-30",
        )}
      >
        <div className="flex h-full w-full flex-col pt-8 ">
          <div>
            <h3
              className={cn(
                "mb-2 text-left text-md font-bold dark:text-zinc-100",
                "text-md sm:text-md md:text-base lg:text-lg xl:text-xl 2xl:text-2xl",
              )}
            >
              Explore Web3 Gems on Telegram
            </h3>
            <div className={"text-sm text-gray-400"}>
              Let's build the Telegram App Center together! Explore, Share,
              Earn！
            </div>
          </div>

          {/* project start*/}
          <section className="w-full pb-2 ">
            <div className="flex flex-col items-start">
              <div className="flex w-full flex-col pt-1 md:pt-2">
                <div className="space-y-1">
                  <HeadTabs />
                  <DataTable
                    columns={columns}
                    data={data}
                    routerBase="/p/project"
                  />
                </div>
              </div>
            </div>
          </section>

          {/* project end*/}
        </div>
      </section>
    </>
  );
}
