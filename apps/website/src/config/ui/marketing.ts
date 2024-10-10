import type { Locale } from "@/config/i18n-config";
import { getDictionary } from "@/lib/get-dictionary";
import type { MarketingConfig } from "@/types";

export const getMarketingConfig = async ({
  params: { lang },
}: {
  params: {
    lang: Locale;
  };
}): Promise<MarketingConfig> => {
  const dict = await getDictionary(lang);
  return {
    mainNav: [
      {
        // title: dict.marketing.main_nav_features,
        title: "Projects",
        href: `/home#features`,
      },
      {
        title: "Categories",
        href: `/pricing`,
      },
      {
        title: "Services",
        href: `/blog`,
      },
      {
        title: "Tools",
        href: `/docs`,
      },
      {
        title: "Newsletter",
        href: `/gems`,
      },

      // {
      //   title: dict.marketing.main_nav_documentation,
      //   href: `/newsletters`,
      // },
      // {
      //   title: dict.marketing.main_nav_documentation,
      //   href: `/services`,
      // },
      // {
      //   title: dict.marketing.main_nav_documentation,
      //   href: `/tools`,
      // },
    ],
  };
};
