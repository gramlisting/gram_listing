"use client";

import * as React from "react";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";

import { Button } from "@gramlisting/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@gramlisting/ui/card";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@gramlisting/ui/form";
import * as Icons from "@gramlisting/ui/icons";
import { Input } from "@gramlisting/ui/input";
import { Label } from "@gramlisting/ui/label";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@gramlisting/ui/select";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@gramlisting/ui/tabs";
import { toast } from "@gramlisting/ui/use-toast";
import {Cluster} from "@/types/k8s";

// import type { Cluster } from "@/types/k8s";

interface ClusterProps {
  cluster: Pick<Cluster, "id" | "name" | "location">;
  params: {
    lang: string;
  };
}

const FormSchema = z.object({
  name: z
    .string()
    .min(2, {
      message: "name must be at least 2 characters.",
    })
    .max(32, { message: "name must be at most 32 characters." }),
  location: z.enum(["China", "Hong Kong", "Singapore", "Tokyo", "US-West"]),
});
const isValidLocation = (
  location: string,
): location is "China" | "Hong Kong" | "Singapore" | "Tokyo" | "US-West" => {
  return ["China", "Hong Kong", "Singapore", "Tokyo", "US-West"].includes(
    location,
  );
};

