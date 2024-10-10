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
        {items.map((item, index) => (
          <>
            <BreadcrumbItem key={"item" + index}>
              {index < items.length - 1 ? (
                <>
                  <BreadcrumbLink href={item.href}>{item.name}</BreadcrumbLink>{" "}
                  <BreadcrumbSeparator key={"separator" + index}>
                    <SlashIcon />
                  </BreadcrumbSeparator>
                </>
              ) : (
                <BreadcrumbPage key={"page" + index}>
                  {item.name}
                </BreadcrumbPage>
              )}
            </BreadcrumbItem>
          </>
        ))}
      </BreadcrumbList>
    </Breadcrumb>
  );
}
