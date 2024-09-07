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
        title: dict.marketing.main_nav_features,
        href: `/home#features`,
      },
      {
        title: dict.marketing.main_nav_pricing,
        href: `/pricing`,
      },
      {
        title: dict.marketing.main_nav_blog,
        href: `/blog`,
      },
      {
        title: dict.marketing.main_nav_documentation,
        href: `/docs`,
      },
      {
        title: dict.marketing.main_nav_features,
        href: `/gems`,
      },
      {
        title: dict.marketing.main_nav_pricing,
        href: `/projects`,
      },
      {
        title: dict.marketing.main_nav_blog,
        href: `/match`,
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
