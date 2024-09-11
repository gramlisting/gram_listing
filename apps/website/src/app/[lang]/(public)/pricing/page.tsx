import { getCurrentUser } from "@gramlisting/auth";
import {Locale} from "@/config/i18n-config";
import {getDictionary} from "@/lib/get-dictionary";
import {PricingCards} from "@/components/price/pricing-cards";


export const metadata = {
  title: "Pricing",
};

export default async function PricingPage({
  params: { lang },
}: {
  params: {
    lang: Locale;
  };
}) {
  const dict = await getDictionary(lang);
  let subscriptionPlan;


  return (
    <div className="flex w-full flex-col gap-16 py-8 md:py-8">

      <hr className="container" />
    </div>
  );
}
