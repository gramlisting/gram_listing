"use client";

import { LoginButton } from "@telegram-auth/react";
import { type User } from "next-auth";
import { signIn, signOut } from "next-auth/react";

import {Button} from "@/components/ui/button";

import { LocaleChange } from "@/components/locale-change";
import useScroll from "@/hooks/use-scroll";
import { useSigninModal } from "@/hooks/use-signin-modal";
import type { MainNavItem } from "@/types";
import { MainNav } from "./main-nav";

type Dictionary = Record<string, string>;

interface NavBarProps {
  botUsername: string;
  user: Pick<User, "name" | "image" | "email"> | undefined;
  items?: MainNavItem[];
  children?: React.ReactNode;
  rightElements?: React.ReactNode;
  scroll?: boolean;
  params: {
    lang: string;
  };
  marketing: Dictionary;
  dropdown: Record<string, string>;
}

export function NavBar({
  botUsername,
  user,
  items,
  children,
  rightElements,
  scroll = false,
  params: { lang },
  marketing,
  dropdown,
}: NavBarProps) {
  const scrolled = useScroll(50);
  const signInModal = useSigninModal();
  return (
    <header
      className={`sticky top-0 z-40 flex w-full justify-center border-border bg-background/60 backdrop-blur-xl transition-all ${
        scroll ? (scrolled ? "border-b" : "bg-background/0") : "border-b"
      }`}
    >
      <div className="container flex h-16 items-center justify-between py-4">
        <MainNav items={items} params={{ lang: `${lang}` }}>
          {children}
        </MainNav>

        <div className="flex items-center space-x-3">
          {rightElements}
          <LocaleChange url={"/"} />
          {!user ? (
            <LoginButton
              botUsername={botUsername}
              onAuthCallback={async (data) => {
                await signIn(
                  "telegram-login",
                  { callbackUrl: "/" },
                  data as any,
                );
              }}
            />
          ) : null}
          {user ? (
            <div>
              <Button
                onClick={async () => {
                  await signOut();
                }}
              >
                {user.name}
              </Button>
            </div>
          ) : (
            <div></div>
          )}
        </div>
      </div>
    </header>
  );
}
