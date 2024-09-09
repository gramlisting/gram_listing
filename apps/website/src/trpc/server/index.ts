"use server";

import "server-only";

import { publicProcedure, router } from "./trpc";
import { db, LoginType } from "@gramlisting/db";
import { z } from "zod";

const appRouter = router({
  userList: publicProcedure.query(async () => {
    // Retrieve users from a datasource, this is an imaginary database
    // const users = await db.user.findMany();
    return await db.selectFrom("User").where("id", "!=", "1").execute();
  }),
  userById: publicProcedure.input(z.string()).query(async (opts) => {
    const { input } = opts;
    return await db.selectFrom("User").where("id", "=", input).execute();
  }),
  userCreate: publicProcedure
    .input(
      z.object({
        tgId: z.string(),
        tgUsername: z.string(),
        refCode: z.string(),
      }),
    )
    .mutation(async ({ input }) => {
      const { tgId, tgUsername, refCode } = input;

      return await db
        .insertInto("User")
        .values({
          loginType: LoginType.MiniApp,
          tgId: tgId,
          tgUsername: tgUsername,
          refCode: refCode,
        })
        .executeTakeFirst();
    }),
});

// Export type router type signature,
// NOT the router itself.
export type AppRouter = typeof appRouter;
