import type { NextRequest, NextResponse } from "next/server";
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
    return Response.json({ api: "get /hello" });
  } catch (error) {
    console.info(error);
    return Response.json(error);
  }
};

export { handler as GET, handler as POST };
