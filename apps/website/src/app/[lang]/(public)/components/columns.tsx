"use client";
// columns.tsx (client component) will contain our column definitions.

import { ColumnDef } from "@tanstack/react-table";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Button } from "@/components/ui/button";
import {
  ArrowUpDown,
  BadgeCheck,
  Bot,
  Globe,
  Megaphone,
  MoreHorizontal,
  Users,
} from "lucide-react";
import { JsonObject } from "@prisma/client/runtime/library";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { cn, formatUserNumber } from "@/utils/utils";
import { Twitter } from "@/components/icons";

// This type is used to define the shape of our data.
interface TgEntity extends JsonObject {
  id: number;
  username: string;
  title?: string;
  langCode?: string;
  members?: number;
  delta?: number;
}

interface Link extends JsonObject {
  type: "website" | "twitter";
  url: string;
  username?: string;
  visitors?: number;
  followers?: number;
  delta?: number;
}

type GenericArray<T extends JsonObject> = T[];

// You can use a Zod schema here if you want.
export type Project = {
  id: number;
  name: string;
  category: string[];
  cloutIndex: number;
  channels: GenericArray<TgEntity>;
  groups: GenericArray<TgEntity>;
  bots: GenericArray<TgEntity>;
  links: GenericArray<Link>;
};

export const columns: ColumnDef<Project>[] = [
  {
    header: "#",
    cell: (info) => {
      const pageIndex = info.table.getState().pagination.pageIndex;
      const pageSize = info.table.getState().pagination.pageSize;
      const rowIndex = info.row.index;
      return pageIndex * pageSize + rowIndex + 1;
    },
  },
  {
    accessorKey: "name",
    header: ({ column }) => {
      return (
        <Button
          variant={"ghost"}
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
        >
          Name
          <ArrowUpDown className="ml-2 h-4 w-4" />
        </Button>
      );
    },
  },

  {
    header: "Category",
    cell: ({ row }) => {
      let projectRow = row.original;
      let categoryArray = projectRow.category;

      return (
        <Select defaultValue={categoryArray[0]}>
          <SelectTrigger className="w-[180px]">
            <SelectValue placeholder="Categories" />
          </SelectTrigger>
          <SelectContent>
            <SelectGroup>
              <SelectLabel>All Categories</SelectLabel>
              {categoryArray.map((category, index) => (
                <SelectItem key={index} value={category}>
                  {category}
                </SelectItem>
              ))}
            </SelectGroup>
          </SelectContent>
        </Select>
      );
    },
  },
  {
    accessorKey: "cloutIndex",
    header: "Clout Index",
  },
  {
    header: "Channel",
    cell: ({ row }) => {
      let channels = row.original.channels;
      return channels.map((channel, index) => (
        <div key={index} className="flex items-center whitespace-nowrap">
          <span>{channel.username}&nbsp;</span>
          <Megaphone size={16} strokeWidth={1} />
          <span className="font-thin">{formatUserNumber(channel.members)}</span>
          <span
            className={cn(
              channel.delta && channel.delta > 0
                ? "text-green-400"
                : "text-red-400",
            )}
          >
            {formatUserNumber(channel.delta, true)}
          </span>
        </div>
      ));
    },
  },
  {
    accessorKey: "groups",
    cell: ({ row }) => {
      let groups = row.original.groups;
      return groups.map((group, index) => (
        <div key={index} className="flex items-center whitespace-nowrap">
          <div>{group.title}&nbsp;</div>
          <Users size={16} strokeWidth={1} />
          <div className="font-thin">{formatUserNumber(group.members)}</div>
          <span
            className={cn(
              group.delta && group.delta > 0
                ? "text-green-400 "
                : "text-red-400",
            )}
          >
            {formatUserNumber(group.delta, true)}
          </span>
        </div>
      ));
    },
  },
  {
    header: "Bot",
    cell: ({ row }) => {
      let bots = row.original.bots;
      return bots.map((bot, index) => (
        <div key={index} className="flex items-center whitespace-nowrap">
          <div>{bot.username}&nbsp;</div>
          <Bot size={16} strokeWidth={1} />
          <div className="font-thin">{formatUserNumber(bot.members)}</div>
          <span
            className={cn(
              bot.delta && bot.delta > 0 ? "text-green-400 " : "text-red-400",
            )}
          >
            {formatUserNumber(bot.delta, true)}
          </span>
        </div>
      ));
    },
  },
  {
    header: "Links",
    cell: ({ row }) => {
      let links = row.original.links;
      if (!links || links.length < 1) {
        return <></>;
      }
      return (
        <div className="flex items-center whitespace-nowrap">
          {links.map((link, index) => (
            <div key={index} className="flex items-center whitespace-nowrap">
              {link.type === "twitter" && <Twitter className=" h-4 w-4" />}
              {link.type === "website" && <Globe className=" h-4 w-4" />}
              <span
                className={cn(
                  "mr-2",
                  link.delta && link.delta > 0
                    ? "text-green-400"
                    : "text-red-400",
                )}
              >
                {link.delta}
              </span>
            </div>
          ))}
        </div>
      );
    },
  },
  // {
  //   accessorKey: "amount",
  //   header: () => <div className="text-right">Amount</div>,
  //   cell: ({ row }) => {
  //     let amount = parseFloat(row.getValue("amount"));
  //     const formatted = new Intl.NumberFormat("en-US", {
  //       style: "currency",
  //       currency: "USD",
  //     }).format(amount);
  //
  //     return <div className={"text-right font-medium"}>{formatted}</div>;
  //   },
  // },
  {
    id: "actions",
    cell: ({ row }) => {
      let payment = row.original;
      return (
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="ghost" className="h-8 w-8 p-0">
              <span className="sr-only">Open menu</span>
              <MoreHorizontal className="h-4 w-4" />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end">
            <DropdownMenuLabel>Actions</DropdownMenuLabel>
            <DropdownMenuSeparator />
            <DropdownMenuItem
              onClick={() => navigator.clipboard.writeText(payment.name)}
            >
              Suggest a Category
            </DropdownMenuItem>

            <DropdownMenuItem>Update</DropdownMenuItem>
            <DropdownMenuItem>
              Get Verified&nbsp;
              <BadgeCheck size={20} strokeWidth={1.5} absoluteStrokeWidth />
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      );
    },
  },
];
