import { SignInDto } from "@/api/auth";

declare module "next-auth" {
  interface Session {
    user: SignInDto;
  }
}
