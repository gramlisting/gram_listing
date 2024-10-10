"use client";

import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import { SlashIcon } from "@radix-ui/react-icons";

type BreadcrumbItem = {
  name: string;
  href: string;
};

type BreadcrumbProps = {
  items: BreadcrumbItem[];
};

export function BreadcrumbNav({ items }: BreadcrumbProps) {
  return (
    <Breadcrumb>
      <BreadcrumbList>
        <BreadcrumbItem key={"item0"}>
          <BreadcrumbLink href={items[0]!.href}>
            {items[0]!.name}
          </BreadcrumbLink>
        </BreadcrumbItem>
        <BreadcrumbSeparator key={"separator-0"}>
          <SlashIcon />
        </BreadcrumbSeparator>
        <BreadcrumbItem key={"item1"}>
          <BreadcrumbLink href={items[1]!.href}>
            {items[1]!.name}
          </BreadcrumbLink>
        </BreadcrumbItem>
        <BreadcrumbSeparator key={"separator-1"}>
          <SlashIcon />
        </BreadcrumbSeparator>
        <BreadcrumbItem key={"item2"}>
          <BreadcrumbPage>{items[2]!.name}</BreadcrumbPage>
        </BreadcrumbItem>
      </BreadcrumbList>
    </Breadcrumb>
  );
}
