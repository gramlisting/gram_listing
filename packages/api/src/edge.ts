import { authRouter } from "./router/auth";
import { customerRouter } from "./router/customer";
import { helloRouter } from "./router/health_check";
import { createTRPCRouter } from "./trpc";

export const edgeRouter = createTRPCRouter({
  hello: helloRouter,
  auth: authRouter,
  customer: customerRouter,
});
