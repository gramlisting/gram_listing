import type { Locale } from "@/config/i18n-config";
import { cn } from "@/lib/utils";
import { BreadcrumbNav } from "@/components/breadcrumb";
import { db } from "@gramlisting/db";

interface CategoryDetailProps {
  params: {
    name: string;
    lang: Locale;
  };
}

export default async function CategoryDetailPage({
  params,
}: CategoryDetailProps) {
  // let name = params.name;
  let name: string = decodeURIComponent(params.name);
  let lang = params.lang;

  let category = await db.category.findUnique({ where: { name: name } });

  if (!category) {
    return "404";
  }

  await db.categoriesOnProjects.findMany({
    where: { categoryId: category.id },
  });

  const projects = await db.project.findMany({
    where: {
      categories: {
        some: {
          category: {
            id: category.id,
          },
        },
      },
    },
  });

  return (
    <>
      <section className={cn("w-full", "pb-2 px-2 sm:px-12 md:px-24 xl:px-40")}>
        <BreadcrumbNav />
        <div
          className={cn("w-full h-full", "flex flex-col items-center", "pt-8")}
        >
          {/* project start*/}
          <section className="w-full  ">
            <div className="flex flex-col items-start">
              <div className="flex w-full flex-col pt-1 md:pt-2">
                {/*head start*/}
                <div className="space-y-1">
                  <div className=" flex items-center  justify-between border-b border-gray-600">
                    <h2 className="mb-1 text-4xl font-bold">{category.name}</h2>
                    <div className={"text-primary"}>{category.tagline}</div>
                  </div>
                  {/*head end*/}

                  {/*body start*/}
                  <div className="mx-auto max-w-2xl px-2 py-2 sm:px-6 sm:py-6 lg:max-w-7xl lg:px-8">
                    <div className=" grid grid-cols-1 gap-x-6 gap-y-6 sm:grid-cols-2 lg:grid-cols-3 xl:gap-x-8 ">
                      {/*  card start*/}
                      {projects.map((project, index) => {
                        return (
                          <div key={index}>
                            {project.name}
                            <img src={project.iconImg!} alt="" />
                          </div>
                        );
                      })}
                      {/*  card end*/}
                    </div>
                  </div>
                  {/*body end*/}
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
