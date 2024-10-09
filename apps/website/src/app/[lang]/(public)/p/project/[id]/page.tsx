import type { Locale } from "@/config/i18n-config";
import { cn } from "@/utils/utils";
import { BreadcrumbNav } from "@/components/breadcrumb";

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
                <div className=" flex flex-col items-start   border-b border-gray-600"></div>
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
