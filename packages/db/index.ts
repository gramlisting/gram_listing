import { PrismaClient } from "@prisma/client";

class Db {
  static instance: PrismaClient;

  static getInstance(): PrismaClient {
    if (!Db.instance) {
      return new PrismaClient();
    }
    return Db.instance;
  }
}

const db = Db.getInstance();
export { db };

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
