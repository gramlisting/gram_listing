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
  const breadcrumbItems = [
    { name: "Home", href: "/" },
    { name: "Project", href: "/" },
    { name: "New", href: "/" },
  ];
  return (
    <>
      <section className={cn("w-full", "pb-2 px-2 sm:px-12 md:px-24 xl:px-40")}>
        <BreadcrumbNav items={breadcrumbItems} />
        <div
          className={cn("w-full h-full", "flex flex-col items-center", "pt-8")}
        >
          {/* from start*/}
          <section className="w-full ">
            <div className="flex flex-col items-start">
              <div>1</div>
              <div>2</div>
            </div>
          </section>
          {/* from end*/}
        </div>
      </section>
    </>
  );
}
