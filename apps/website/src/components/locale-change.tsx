"use client";

import * as React from "react";
import { useRouter } from "next/navigation";

import * as Icons from "@/components/icons";

import { i18n, localeMap } from "@/config/i18n-config";
import {DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger} from "@/components/ui/dropdown-menu";
import {Button} from "@/components/ui/button";

export function LocaleChange({ url }: { url: string }) {
  const router = useRouter();

  function onClick(locale: string) {
    // console.log(url);
    router.push(`/${locale}/` + url);
  }

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="ghost" size="sm" className="h-8 w-8 px-0">
          <Icons.Languages />
          <span className="sr-only"></span>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end">
        <div>
          {i18n.locales.map((locale) => {
            return (
              // <Link href={redirectedPathName(locale)}>{locale}</Link>
              <DropdownMenuItem key={locale} onClick={() => onClick(locale)}>
                <span>{localeMap[locale]}</span>
              </DropdownMenuItem>
            );
          })}
        </div>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
