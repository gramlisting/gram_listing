import type { User } from "next-auth";

// type UserId = string;
//
// declare module "next-auth/jwt" {
//   interface JWT {
//     id: UserId;
//   }
// }
//
// declare module "next-auth" {
//   interface Session {
//     user: User & {
//       id: UserId;
//     };
//   }
// }

export interface TgUser {
  id: string;
  name: string;
  image: string;
}

declare module "next-auth" {
  interface Session {
    user: User & TgUser;
  }
}
