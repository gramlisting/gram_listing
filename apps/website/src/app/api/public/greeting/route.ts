import type { NextRequest } from "next/server";
import superjson from "superjson";
import prisma from "@gramlisting/db";
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
    let prismaPromise = await prisma.user.findMany();
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
