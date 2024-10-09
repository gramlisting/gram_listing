import type { Locale } from "@/config/i18n-config";
import { cn } from "@/utils/utils";
import { BreadcrumbNav } from "@/components/breadcrumb";
import VoteButton from "@/components/vote-button";
import { Prisma } from "@prisma/client";
import prisma from "@gramlisting/db";

const imageUrl = (imgJson: Prisma.JsonValue) => {
  if (typeof imgJson === "object" && imgJson !== null) {
    Object.entries(imgJson).map(([key, value]) => {
      if (key === "url") {
        return value;
      }
    });
  }
  return "";
};

interface CategoryDetailProps {
  params: {
    key: string;
    lang: Locale;
  };
}

export default async function CategoryDetailPage({
  params,
}: CategoryDetailProps) {
  // let name = params.name;
  let key: string = decodeURIComponent(params.key);
  let lang = params.lang;

  let category = await prisma.category.findUnique({ where: { key: key } });

  if (!category) {
    return "404";
  }

  const projects = await prisma.project.findMany({
    where: {
      categories: {
        some: {
          category: {
            id: category.id,
          },
        },
      },
    },
    orderBy: { priority: "asc" },
  });

  const breadcrumbItems = [
    { name: "Home", href: "/" },
    { name: "Category", href: "/p/category" },
    { name: "View", href: "/" },
  ];

  return (
    <>
      <section className={cn("w-full", "pb-2 px-2 sm:px-12 md:px-24 xl:px-40")}>
        <BreadcrumbNav items={breadcrumbItems} />
        <div
          className={cn("w-full h-full", "flex flex-col items-center", "pt-8")}
        >
          {/* project start*/}
          <section className="w-full  ">
            <div className="flex flex-col items-start">
              <div className="flex w-full flex-col pt-1 md:pt-2">
                {/*head start*/}
                <div className=" flex flex-col items-start   border-b border-gray-600">
                  <h2 className="mb-1 text-4xl font-bold">{category.name}</h2>
                  <div className={" text-gray-300"}>{category.tagline}</div>
                </div>
                {/*head end*/}

                {/*body start*/}
                <div
                  className={cn(
                    "mx-auto max-w-2xl lg:max-w-7xl",
                    "px-2 py-2 sm:px-4 sm:py-4 lg:px-4",
                  )}
                >
                  <div
                    className={cn(
                      "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2",
                      "gap-x-6 gap-y-6 xl:gap-x-8 ",
                    )}
                  >
                    {/*  card start*/}
                    {projects.map((project, index) => {
                      return (
                        <div
                          key={index}
                          className={cn(
                            "flex items-center justify-between p-1",
                            "p-4",
                            "bg-zinc-900",
                            "rounded-s",
                          )}
                        >
                          <div className="flex items-center space-x-4">
                            <img
                              src={imageUrl(project.iconImg)}
                              alt={project.name!}
                              className="h-16 w-16 rounded"
                            />
                            <div>
                              <h3 className="text-md font-bold">
                                {project.name}
                              </h3>
                              <p className="text-sm text-gray-300">
                                {project.tagline}
                              </p>
                              {/*<p className="text-xs text-gray-500">{item.tags}</p>*/}
                              <div className="flex space-x-2 text-xs text-gray-500">
                                <span>💬 {project.upvote}</span>
                                <span>👥 {project.rating}</span>
                              </div>
                            </div>
                          </div>
                          <div className="flex items-center space-x-4">
                            <VoteButton
                              type={"gem"}
                              initCount={project.upvote}
                            />
                          </div>
                        </div>
                      );
                    })}
                    {/*  card end*/}
                  </div>
                </div>
                {/*body end*/}
              </div>
            </div>
          </section>
          {/* project end*/}
        </div>
      </section>
    </>
  );
}
