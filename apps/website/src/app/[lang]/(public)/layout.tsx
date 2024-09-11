import { Locale } from "@/config/i18n-config";
import { getDictionary } from "@/lib/get-dictionary";
import { authOptions } from "@gramlisting/auth";
import { getServerSession } from "next-auth";
import { Suspense } from "react";
import { NavBar } from "@/components/navbar";
import { getMarketingConfig } from "@/config/ui/marketing";
import { ModalProvider } from "@/components/modal-provider";
import { SiteFooter } from "@/components/site-footer";
import { env } from "@/env.mjs";

export default async function MarketingLayout({
  children,
  params: { lang },
}: {
  children: React.ReactNode;
  params: {
    lang: Locale;
  };
}) {
  const dict = await getDictionary(lang);
  const session = await getServerSession(authOptions);
  // const user = await getCurrentUser();
  const user = session?.user;
  return (
    <div className="flex min-h-screen flex-col">
      <Suspense fallback={<div>...</div>}>
        <NavBar
          items={
            (await getMarketingConfig({ params: { lang: `${lang}` } })).mainNav
          }
          params={{ lang: `${lang}` }}
          scroll={true}
          user={user}
          botUsername={`${env.BOT_USERNAME}`}
          marketing={dict.marketing}
          dropdown={dict.dropdown}
        />
      </Suspense>
      <ModalProvider dict={dict.login} />
      <main className="flex-1">{children}</main>
      <SiteFooter
        className="border-t border-border"
        params={{ lang: `${lang}` }}
        dict={dict.common}
      />
    </div>
  );
}
