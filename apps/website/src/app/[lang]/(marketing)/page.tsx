import {Meteor} from "@/types/meteors";
import {Locale} from "@/config/i18n-config";
import {getDictionary} from "@/lib/get-dictionary";
import VoteButton from "@/components/vote-button";
import {MeteorsCard} from "@/components/meteors-card";
import {FeaturesCard} from "@/components/features-card";
import {Button} from "@/components/ui/button";
import {Input} from "@/components/ui/input";


const meteors_data: Meteor = {
  name: "Submit your project",
  description:
    "Shout out your project to millions of new users and earn $GEMS points!",
  button_content: "Submit",
  url: "https://t.me/andrew_tonx",
};
const projectData = [
  {
    title: "Wallets",
    description: "Store and manage your crypto assets",
    topList: [
      {
        image: "",
      },
      {
        image: "",
      },
    ],
    count: 11,
  },
  {
    title: "DEX Exchanges",
    description: "Buy, sell and swap TON or wTON",
    topList: [
      {
        image: "",
      },
      {
        image: "",
      },
    ],
    count: 12,
  },
  {
    title: "Explorers",
    description: "Browse transactions on The Open Network",
    topList: [
      {
        image: "",
      },
      {
        image: "",
      },
    ],
    count: 13,
  },
  {
    title: "Gambling",
    description: "Discover gambling apps on TON",
    topList: [
      {
        image: "",
      },
      {
        image: "",
      },
    ],
    count: 14,
  },
  {
    title: "Launchpads",
    description:
      "Discover Launchpads on TON – the gateway to exciting new projects. Explore opportunities to participate in token launches, investments, and early-stage blockchain ventures.",
    topList: [
      {
        image: "",
      },
      {
        image: "",
      },
    ],
    count: 15,
  },
];
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

  return (
    <>
      <section className="w-full px-8 pt-10 sm:px-0 sm:pt-0 md:px-0 md:pt-0 xl:px-0 xl:pt-0">
        <div className="flex h-full w-full flex-col items-center pb-[100px] pt-10">
          <div>
            <h1 className="mb-6 text-center text-3xl font-bold dark:text-zinc-100 md:text-5xl">
              Explore Web3 Gems on Telegram
            </h1>
            <Button variant={"default"}>ABC</Button>
          </div>
          <div className="mb-6 w-full text-xl dark:text-zinc-100  md:text-xl ">
            <Input
              src={""}
              className={
                "w-9/10 mx-auto border border-gray-600 md:w-4/5 lg:w-2/3"
              }
            />
          </div>

          {/* gems start*/}
          <section className="w-full px-2 sm:px-12 md:px-24 xl:h-[100vh] xl:px-40 ">
            <div className="grid grid-cols-1 gap-10 pb-10 md:pb-40 lg:grid-cols-3">
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
          <section className="w-full px-2 sm:px-12 md:px-24 xl:h-[100vh] xl:px-40 ">
            <div className="flex flex-col items-start">
              <div className="flex w-full flex-col pt-4 md:pt-8">
                <div className="space-y-1">
                  <div className=" flex items-center  justify-between border-b border-gray-600">
                    <h2 className="mb-1 text-xl font-bold">
                      Explore all products
                    </h2>
                    <div className="flex space-x-2">
                      <button className="font-semibold ">TON Ecosystem</button>
                      <button className="text-gray-400">#Categories</button>
                    </div>
                  </div>
                  <div className="mx-auto max-w-2xl px-2 py-2 sm:px-6 sm:py-6 lg:max-w-7xl lg:px-8">
                    <div className=" grid grid-cols-1 gap-x-6 gap-y-6 sm:grid-cols-2 lg:grid-cols-3 xl:gap-x-8 ">
                      {projectData.map((item, index) => (
                        <div
                          key={index}
                          className="bg group relative rounded-lg border bg-background p-4 shadow-lg dark:border-[#443c3c]"
                        >
                          <div className="mb-1 text-xl">{item.title}</div>
                          <div className="mb-3 text-gray-500">
                            {item.description}
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
                            <div className="text-gray-500">+{item.count}</div>
                          </div>
                        </div>
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
