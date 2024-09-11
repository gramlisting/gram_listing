import type { Locale } from "@/config/i18n-config";

interface CategoryDetailProps {
  params: {
    name: number;
    lang: Locale;
  };
}

export default async function CategoryDetailPage({
  params,
}: CategoryDetailProps) {
  let name = params.name;
  let lang = params.lang;

  return (
    <div>
      {name} - {lang}
    </div>
  );
}
