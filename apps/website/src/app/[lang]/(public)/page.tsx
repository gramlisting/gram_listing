// page.tsx (server component) is where we'll fetch data and render our table.

import { Locale } from "@/config/i18n-config";
import { getDictionary } from "@/lib/get-dictionary";
import { db } from "@gramlisting/db";
import { cn } from "@/lib/utils";
import { Category } from "@prisma/client";
import { columns, Payment } from "@/app/[lang]/(public)/components/columns";
import { DataTable } from "@/app/[lang]/(public)/components/data-table";

async function getData(): Promise<Payment[]> {
  // Fetch data from your API here.
  return [
    {
      id: "728ed52f",
      amount: 11100,
      status: "pending",
      email: "m@example.com",
    },
    {
      id: "728ed52f",
      amount: 132200,
      status: "pending",
      email: "m2@example.com",
    },
    {
      id: "728ed52f",
      amount: 112100,
      status: "pending",
      email: "m3@example.com",
    },
    {
      id: "728ed52f",
      amount: 13432100,
      status: "pending",
      email: "m4@example.com",
    },
    {
      id: "728ed52f",
      amount: 54657100,
      status: "pending",
      email: "m@example.com",
    },
    {
      id: "728ed52f",
      amount: 6756100,
      status: "pending",
      email: "m@example.com",
    },
    {
      id: "728ed52f",
      amount: 1675600,
      status: "pending",
      email: "m@example.com",
    },
    {
      id: "728ed52f",
      amount: 167600,
      status: "pending",
      email: "m222@example.com",
    },
    {
      id: "728ed52f",
      amount: 576745100,
      status: "pending",
      email: "m@example.com",
    },
    {
      id: "728ed52f",
      amount: 43543100,
      status: "pending",
      email: "m@333example.com",
    },
    {
      id: "728ed52f",
      amount: 1223344445,
      status: "pending",
      email: "m@TRC-40444example.com",
    },
    {
      id: "728ed52f",
      amount: 3454100,
      status: "pending",
      email: "m@e5555xample.com",
    },
    {
      id: "728ed52f",
      amount: 100,
      status: "pending",
      email: "m@e66666xample.com",
    },
    {
      id: "728ed52f",
      amount: 100,
      status: "pending",
      email: "m@example.com",
    },
    {
      id: "728ed52f",
      amount: 4534100,
      status: "pending",
      email: "m@example.com",
    },
    {
      id: "728ed52f",
      amount: 154300,
      status: "pending",
      email: "m@example.com",
    },
    {
      id: "728ed52f",
      amount: 100,
      status: "pending",
      email: "m@example.com",
    },
    {
      id: "728ed52f",
      amount: 100,
      status: "pending",
      email: "m@example.com",
    },
    {
      id: "728ed52f",
      amount: 1454300,
      status: "pending",
      email: "m@example.com",
    },
    {
      id: "728ed52f",
      amount: 104540,
      status: "pending",
      email: "m@example.com",
    },
    // ...
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
                    {/*<h2 className="mb-1 text-xl font-bold">*/}
                    {/*  Explore all products*/}
                    {/*</h2>*/}
                    {/*<div className="flex space-x-2">*/}
                    {/*  <button className="font-semibold text-gray-400">*/}
                    {/*    TON Ecosystem*/}
                    {/*  </button>*/}
                    {/*  /!*<button className="text-gray-400">#Categories</button>*!/*/}
                    {/*</div>*/}
                    tabs
                  </div>
                  <div className="mx-auto max-w-2xl px-2 py-2 sm:px-6 sm:py-6 lg:max-w-7xl lg:px-8">
                    <div className=" grid grid-cols-1 gap-x-6 gap-y-6 sm:grid-cols-2 lg:grid-cols-3 xl:gap-x-8 ">
                      <DataTable columns={columns} data={data} />
                    </div>
                  </div>
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
