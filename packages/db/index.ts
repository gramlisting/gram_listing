import { Category, PrismaClient } from "@prisma/client";

class Db {
  static instance: PrismaClient | undefined;

  static getInstance(): PrismaClient {
    if (!Db.instance) {
      Db.instance = new PrismaClient();
    }
    return Db.instance;
  }

  static async close(): Promise<void> {
    if (Db.instance) {
      await Db.instance.$disconnect();
      Db.instance = undefined;
    }
  }
}
//
// // 在进程退出时调用关闭方法
// process.on("SIGINT", async () => {
//   await Db.close();
//   console.info("========================");
//   console.info("== DB close at SIGINT =");
//   console.info("========================");
//   process.exit(0);
// });
//
// process.on("SIGTERM", async () => {
//   await Db.close();
//   console.info("#########################");
//   console.info("## DB close at SIGTERM #");
//   console.info("#########################");
//   process.exit(0);
// });

let a: Category[] = [];

const db = Db.getInstance();
export default db;
