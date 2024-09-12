import { Meteor } from "@/types/meteors";
import { Locale } from "@/config/i18n-config";
import { getDictionary } from "@/lib/get-dictionary";
import VoteButton from "@/components/vote-button";
import { MeteorsCard } from "@/components/meteors-card";
import { FeaturesCard } from "@/components/features-card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { db } from "@gramlisting/db";
import { cn } from "@/lib/utils";
import Link from "next/link";

const meteors_data: Meteor = {
  name: "Submit your project",
  description:
    "Shout out your project to millions of new users and earn $GEMS points!",
  button_content: "Submit",
  url: "https://t.me/andrew_tonx",
};

const gemsData = [
  {
    title: "DuckChain Giveaway",
    description: "$800 USDT for 50 winners",
    image: "/images/gems/duckchain.png", // Replace with actual image
    stats: { comments: 108, participants: 128 },
    tags: "#Blockchain > TON L2",
    votes: 659,
    isFeatured: true,
    isActive: true,
  },
  {
    title: "CharacterX Discount",
    description: "NFT Pass discount 20% off",
    image: "/images/gems/characterx.png", // Replace with actual image
    stats: { comments: 32, participants: 121 },
    tags: "#AI > Companion",
    votes: 612,
    isFeatured: false,
    isActive: true,
  },
  {
    title: "Memeclub Competition",
    description: "campaign, AIGC to win 1,000 TON",
    image: "/images/gems/memeclub.png",
    stats: { comments: 13, participants: 78 },
    tags: "#Memecoin",
    votes: 532,
    isFeatured: false,
    isActive: false,
  },
  {
    title: "DuckChain Giveaway",
    description: "$800 USDT for 50 winners",
    image: "/images/gems/duckchain.png", // Replace with actual image
    stats: { comments: 108, participants: 128 },
    tags: "#Blockchain > TON L2",
    votes: 659,
    isFeatured: true,
    isActive: true,
  },
  {
    title: "CharacterX Discount",
    description: "NFT Pass discount 20% off",
    image: "/images/gems/characterx.png", // Replace with actual image
    stats: { comments: 32, participants: 121 },
    tags: "#AI > Companion",
    votes: 612,
    isFeatured: false,
    isActive: true,
  },
  {
    title: "Memeclub Competition",
    description: "campaign, AIGC to win 1,000 TON",
    image: "/images/gems/memeclub.png",
    stats: { comments: 13, participants: 78 },
    tags: "#Memecoin",
    votes: 532,
    isFeatured: false,
    isActive: false,
  },
  // Add other items similarly
];
export default async function IndexPage({
  params: { lang },
}: {
  params: {
    lang: Locale;
  };
}) {
  const dict = await getDictionary(lang);

  let categories = await db.category.findMany({
    where: { ecosystem: "TON" },
    orderBy: { priority: "asc" },
  });

  return (
    <>
      <section className="w-full">
        <div className="flex h-full w-full flex-col items-center pt-8 ">
          <div>
            <h1 className="mb-2 text-center text-3xl font-bold dark:text-zinc-100 md:text-5xl">
              Explore Web3 Gems on Telegram
            </h1>
            <div className={"flex gap-2 pb-2"}>
              <Button variant={"default"}>default</Button>
              <Button variant={"destructive"}>destructive</Button>
              <Button variant={"outline"}>outline</Button>
              <Button variant={"secondary"}>secondary</Button>
              <Button variant={"ghost"}>ghost</Button>
              <Button variant={"link"}>link</Button>
            </div>
          </div>
          <div className="mb-6 w-full text-xl dark:text-zinc-100  md:text-xl ">
            <Input
              src={""}
              className={
                "w-9/10 mx-auto border border-gray-600 md:w-4/5 lg:w-2/3"
              }
            />
          </div>

          {/* gems start   xl:h-[100vh]*/}
          <section className="w-full px-2 sm:px-12 md:px-24 xl:px-40">
            <div className="grid grid-cols-1 gap-10 pb-6 md:pb-8 lg:grid-cols-3">
              <div className="col-span-2 flex flex-col items-start">
                <div className="flex w-full flex-col pt-4 md:pt-8">
                  {/*  gems start*/}
                  <div className="space-y-1">
                    <div className=" flex items-center  justify-between border-b border-gray-600">
                      <h2 className="mb-1 text-xl font-bold">
                        Top Gems to Mine Today
                      </h2>
                      <div className="flex space-x-2">
                        <button className="font-semibold ">Featured</button>
                        <button className="text-gray-400">All</button>
                      </div>
                    </div>
                    {gemsData.map((item, index) => (
                      <div
                        key={index}
                        className="flex items-center justify-between  p-1"
                      >
                        <div className="flex items-center space-x-4">
                          <img
                            src={item.image}
                            alt={item.title}
                            className="h-16 w-16 rounded"
                          />
                          <div>
                            <h3 className="text-md font-bold">{item.title}</h3>
                            <p className="text-sm text-gray-300">
                              {item.description}
                            </p>
                            {/*<p className="text-xs text-gray-500">{item.tags}</p>*/}
                            <div className="flex space-x-2 text-xs text-gray-500">
                              <span>💬 {item.stats.comments}</span>
                              <span>👥 {item.stats.participants}</span>
                            </div>
                          </div>
                        </div>
                        <div className="flex items-center space-x-4">
                          <VoteButton />
                          <button
                            className={`text-lg ${item.isFeatured ? "text-red-600" : "text-gray-400"}`}
                          ></button>
                        </div>
                      </div>
                    ))}
                  </div>
                  {/*  gems end*/}
                </div>
              </div>
              <div className="md:pt-19 col-span-1 hidden h-full w-full border-l border-gray-800 pt-14 md:block ">
                <div className="ml-10 flex flex-col">
                  <MeteorsCard meteor={meteors_data} />
                  <div className="mt-4 flex w-full">
                    <div className="">
                      <FeaturesCard />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
          {/* gems end*/}

          {/* project start*/}
          <section className="w-full pb-2 px-2 sm:px-12 md:px-24 xl:px-40 ">
            <div className="flex flex-col items-start">
              <div className="flex w-full flex-col pt-1 md:pt-2">
                <div className="space-y-1">
                  <div className=" flex items-center  justify-between border-b border-gray-600">
                    <h2 className="mb-1 text-xl font-bold">
                      Explore all products
                    </h2>
                    <div className="flex space-x-2">
                      <button className="font-semibold text-gray-400">
                        TON Ecosystem
                      </button>
                      {/*<button className="text-gray-400">#Categories</button>*/}
                    </div>
                  </div>
                  <div className="mx-auto max-w-2xl px-2 py-2 sm:px-6 sm:py-6 lg:max-w-7xl lg:px-8">
                    <div className=" grid grid-cols-1 gap-x-6 gap-y-6 sm:grid-cols-2 lg:grid-cols-3 xl:gap-x-8 ">
                      {categories.map((item, index) => (
                        <Link
                          href={`/${lang}/p/category/${item.key}`}
                          key={index}
                          className={cn(
                            //   basic logic
                            "cursor-pointer group relative rounded-lg border bg-background p-4 shadow-lg dark:border-[#443c3c]",
                            // animation styles
                            "overflow-hidden transform transition-all duration-200 ease-in-out hover:scale-[103%]",
                            // light styles
                            "bg-white [box-shadow:0_0_0_1px_rgba(0,0,0,.03),0_2px_4px_rgba(0,0,0,.05),0_12px_24px_rgba(0,0,0,.05)]",
                            // dark styles
                            "transform-gpu dark:bg-transparent dark:backdrop-blur-md dark:[border:1px_solid_rgba(255,255,255,.1)] dark:[box-shadow:0_-20px_80px_-20px_#ffffff1f_inset]",
                          )}
                        >
                          <div className="mb-1 text-xl">{item.name}</div>
                          <div className="mb-3 text-gray-500">
                            {item.tagline}
                          </div>
                          <div className="flex items-center gap-1">
                            <img
                              src="/images/gems/1.png"
                              alt=""
                              className={"h-12 w-12"}
                            />
                            <img
                              src="/images/gems/1.png"
                              alt=""
                              className={"h-12 w-12"}
                            />
                            <img
                              src="/images/gems/1.png"
                              alt=""
                              className={"h-12 w-12"}
                            />{" "}
                            <div className="text-gray-500">
                              +{item.appsCount}
                            </div>
                          </div>
                        </Link>
                      ))}
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
