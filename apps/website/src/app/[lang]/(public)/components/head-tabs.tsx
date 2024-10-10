"use client";

import { ReactNode } from "react";
import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";

interface HeadTabsProps {
  text?: string;
  children?: ReactNode;
}

export function HeadTabs({ text, children }: HeadTabsProps) {
  const router = useRouter();
  return (
    <div className="flex items-center justify-between">
      <div>
        <Button
          variant={"outline"}
          className="rounded-lg"
          onClick={() => {
            router.push("/p/project/new");
          }}
        >
          All
        </Button>
        <Button
          variant={"outline"}
          className="rounded-lg"
          onClick={() => {
            router.push("/p/project/new");
          }}
        >
          Category
        </Button>
      </div>
      <div>
        <Button
          variant={"outline"}
          className="rounded-3xl"
          onClick={() => {
            router.push("/p/project/new");
          }}
        >
          Submit Project
        </Button>
      </div>
    </div>
  );
}
