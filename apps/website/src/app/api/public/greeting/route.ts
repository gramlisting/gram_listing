import type { NextRequest } from "next/server";
import db from "@gramlisting/db";
import superjson from "superjson";
//
// export async function GET(request: NextRequest) {
//   try {
//     return Response.json({ api: "get /hello" });
//   } catch (error) {
//     console.info(error);
//     return Response.json(error);
//   }
// }

const handler = async (req: NextRequest) => {
  try {
    let prismaPromise = await db.user.findMany();
    let data = superjson.stringify(prismaPromise);
    console.info(data);
    return Response.json({
      api: "get /api/public/greeting",
      jsonData: data,
    });
  } catch (error) {
    console.info(error);
    return Response.json(error);
  }
};

export { handler as GET, handler as POST };
