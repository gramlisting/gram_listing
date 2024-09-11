import type { Locale } from "@/config/i18n-config";

interface CategoryDetailProps {
  params: {
    lang: Locale;
  };
}

export default async function CategoryDetailPage({
  params,
}: CategoryDetailProps) {
  let lang = params.lang;

  return <div>- {lang}</div>;
}
