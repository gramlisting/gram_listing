import { getCurrentUser } from "@gramlisting/auth";
import {Locale} from "@/config/i18n-config";
import {getDictionary} from "@/lib/get-dictionary";
import {trpc} from "@/trpc/server";
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
  const user = await getCurrentUser();
  const dict = await getDictionary(lang);
  let subscriptionPlan;

  if (user) {
    subscriptionPlan = await trpc.stripe.userPlans.query();
  }
  return (
    <div className="flex w-full flex-col gap-16 py-8 md:py-8">
      <PricingCards
        userId={"11"}
        subscriptionPlan={subscriptionPlan}
        dict={dict.price}
        params={{ lang }}
      />
      <hr className="container" />
    </div>
  );
}
