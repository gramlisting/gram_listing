// page.tsx (server component) is where we'll fetch data and render our table.

import { Locale } from "@/config/i18n-config";
import { getDictionary } from "@/lib/get-dictionary";
import { db } from "@gramlisting/db";
import { cn } from "@/lib/utils";
import { Category } from "@prisma/client";
import { columns, Project } from "@/app/[lang]/(public)/components/columns";
import { DataTable } from "@/app/[lang]/(public)/components/data-table";

async function getData(): Promise<Project[]> {
  // Fetch data from your API here.
  return [
    {
      id: 1,
      name: "Dogs",
      category: ["Community", "TG Mini Game"],
      cloutIndex: 100,
      channels: [
        { id: 123, name: "abc_news", members: 341000, delta: 123 },
        { id: 123, name: "abc_news", members: 341000, delta: 123 },
        { id: 123, name: "abc_news", members: 341000, delta: 123 },
      ],
      groups: [{ id: 223, name: "abc_groups", members: 211000, delta: 231 }],
      bots: [{ id: 323, name: "abc_bot", members: 123000, delta: 55 }],
      socialMedias: [
        { id: 323, type: "twitter", name: "xx_twitter", followers: 20000 },
      ],
    },
    {
      id: 1,
      name: "Dogs",
      category: ["TG Mini Game", "Community", "Mini Game"],
      cloutIndex: 100,
      channels: [{ id: 123, name: "abc_news", members: 341000, delta: 123 }],
      groups: [{ id: 223, name: "abc_groups", members: 211000 }],
      bots: [{ id: 323, name: "abc_bot", members: 123000 }],
      socialMedias: [
        { id: 323, type: "twitter", name: "xx_twitter", followers: 20000 },
      ],
    },
    {
      id: 2,
      name: "Notcoin",
      category: ["Wallet", "Community", "TG Mini Game"],
      cloutIndex: 100,
      channels: [{ id: 123, name: "abc_news", members: 341000 }],
      groups: [{ id: 223, name: "abc_groups", members: 211000, delta: 123 }],
      bots: [{ id: 323, name: "abc_bot", members: 123000 }],
      socialMedias: [
        { id: 323, type: "twitter", name: "xx_twitter", followers: 20000 },
      ],
    },
    {
      id: 3,
      name: "Memeclub",
      category: ["Wallet", "Community", "TG Mini Game"],
      cloutIndex: 100,
      channels: [{ id: 123, name: "abc_news", members: 341000 }],
      groups: [{ id: 223, name: "abc_groups", members: 211000 }],
      bots: [{ id: 323, name: "abc_bot", members: 123000, delta: 123 }],
      socialMedias: [
        { id: 323, type: "twitter", name: "xx_twitter", followers: 20000 },
      ],
    },
    {
      id: 3,
      name: "Memeclub",
      category: ["Wallet", "Community", "TG Mini Game"],
      cloutIndex: 100,
      channels: [{ id: 123, name: "abc_news", members: 341000 }],
      groups: [{ id: 223, name: "abc_groups", members: 211000 }],
      bots: [{ id: 323, name: "abc_bot", members: 123000, delta: 123 }],
      socialMedias: [
        { id: 323, type: "twitter", name: "xx_twitter", followers: 20000 },
      ],
    },
    {
      id: 3,
      name: "Memeclub",
      category: ["Wallet", "Community", "TG Mini Game"],
      cloutIndex: 100,
      channels: [{ id: 123, name: "abc_news", members: 341000 }],
      groups: [{ id: 223, name: "abc_groups", members: 211000 }],
      bots: [{ id: 323, name: "abc_bot", members: 123000, delta: 123 }],
      socialMedias: [
        { id: 323, type: "twitter", name: "xx_twitter", followers: 20000 },
      ],
    },
    {
      id: 3,
      name: "Memeclub",
      category: ["Wallet", "Community", "TG Mini Game"],
      cloutIndex: 100,
      channels: [{ id: 123, name: "abc_news", members: 341000 }],
      groups: [{ id: 223, name: "abc_groups", members: 211000 }],
      bots: [{ id: 323, name: "abc_bot", members: 123000, delta: 123 }],
      socialMedias: [
        { id: 323, type: "twitter", name: "xx_twitter", followers: 20000 },
      ],
    },
    {
      id: 3,
      name: "Memeclub",
      category: ["Wallet", "Community", "TG Mini Game"],
      cloutIndex: 100,
      channels: [{ id: 123, name: "abc_news", members: 341000 }],
      groups: [{ id: 223, name: "abc_groups", members: 211000 }],
      bots: [{ id: 323, name: "abc_bot", members: 123000, delta: 123 }],
      socialMedias: [
        { id: 323, type: "twitter", name: "xx_twitter", followers: 20000 },
      ],
    },
    {
      id: 3,
      name: "Memeclub",
      category: ["Wallet", "Community", "TG Mini Game"],
      cloutIndex: 100,
      channels: [{ id: 123, name: "abc_news", members: 341000 }],
      groups: [{ id: 223, name: "abc_groups", members: 211000 }],
      bots: [{ id: 323, name: "abc_bot", members: 123000, delta: 123 }],
      socialMedias: [
        { id: 323, type: "twitter", name: "xx_twitter", followers: 20000 },
      ],
    },
    {
      id: 3,
      name: "Memeclub",
      category: ["XXX", "Community", "TG Mini Game"],
      cloutIndex: 100,
      channels: [{ id: 123, name: "abc_news", members: 341000 }],
      groups: [{ id: 223, name: "abc_groups", members: 211000 }],
      bots: [{ id: 323, name: "abc_bot", members: 123000, delta: 123 }],
      socialMedias: [
        { id: 323, type: "twitter", name: "xx_twitter", followers: 20000 },
      ],
    },
    {
      id: 3,
      name: "Memeclub",
      category: ["Wallet2", "Community", "TG Mini Game"],
      cloutIndex: 100,
      channels: [{ id: 123, name: "abc_news", members: 341000 }],
      groups: [{ id: 223, name: "abc_groups", members: 211000 }],
      bots: [{ id: 323, name: "abc_bot", members: 123000, delta: 123 }],
      socialMedias: [
        { id: 323, type: "twitter", name: "xx_twitter", followers: 20000 },
      ],
    },
    {
      id: 3,
      name: "Memeclub",
      category: ["Community22", "TG Mini Game"],
      cloutIndex: 100,
      channels: [{ id: 123, name: "abc_news", members: 341000 }],
      groups: [{ id: 223, name: "abc_groups", members: 211000 }],
      bots: [{ id: 323, name: "abc_bot", members: 123000, delta: 123 }],
      socialMedias: [
        { id: 323, type: "twitter", name: "xx_twitter", followers: 20000 },
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

  let categories: Category[] = await db.category.findMany({
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
                  <div className=" flex items-center  justify-between ">
                    tabs
                  </div>
                  <DataTable columns={columns} data={data} />
                  {/*<div className="mx-auto max-w-2xl px-2 py-2 sm:px-6 sm:py-6 lg:max-w-7xl lg:px-8">*/}
                  {/*  <div className=" grid grid-cols-1 gap-x-6 gap-y-6 sm:grid-cols-2 lg:grid-cols-3 xl:gap-x-8 ">*/}
                  {/*    <DataTable columns={columns} data={data} />*/}
                  {/*  </div>*/}
                  {/*</div>*/}
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
