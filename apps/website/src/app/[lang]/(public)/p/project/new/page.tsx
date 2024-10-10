"use client";

import { cn } from "@/utils/utils";
import { BreadcrumbNav } from "@/components/breadcrumb";
import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";

export default async function NewProjectForm() {
  const breadcrumbItems = [
    { name: "Home", href: "/" },
    { name: "Project", href: "/" },
    { name: "New", href: "/" },
  ];

  const formSchema = z.object({
    projectName: z
      .string()
      .min(2, {
        message: "Project Name must be at least 2 characters.",
      })
      .max(50),
    categories: z.array(z.number()),
    channels: z.array(z.string()),
    groups: z.array(z.string()),
    bots: z.array(z.string()),
    website: z.string(),
    twitter: z.string(),
  });

  // 1. Define your form.
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      projectName: "",
      categories: [],
      channels: [],
      groups: [],
      bots: [],
      website: "",
      twitter: "",
    },
  });

  // 2. Define a submit handler.
  function onSubmit(values: z.infer<typeof formSchema>) {
    // Do something with the form values.
    console.log(values);
    alert(values);
    return;
  }

  return (
    <>
      <section className={cn("w-full", "pb-2 px-2 sm:px-12 md:px-24 xl:px-40")}>
        <BreadcrumbNav items={breadcrumbItems} />
        <div
          className={cn("w-full h-full", "flex flex-col items-center", "pt-8")}
        >
          {/* from start*/}
          <section className="w-full ">
            {/*<div className="flex flex-col items-start">*/}
            {/*  <div>1</div>*/}
            {/*  <div>2</div>*/}
            {/*</div>*/}
            <Form {...form}>
              <form
                onSubmit={form.handleSubmit(onSubmit)}
                className="space-y-8"
              >
                <FormField
                  control={form.control}
                  name="projectName"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Username</FormLabel>
                      <FormControl>
                        <Input placeholder="shadcn" {...field} />
                      </FormControl>
                      <FormDescription>
                        This is your public display name.
                      </FormDescription>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <Button type="submit">Submit</Button>
              </form>
            </Form>
          </section>
          {/* from end*/}
        </div>
      </section>
    </>
  );
}
