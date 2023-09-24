import { NextAuthOptions } from "next-auth";
import NextAuth from "next-auth/next";
import CredentialsProvider from "next-auth/providers/credentials";
import { apiSignIn, SignInDto, SignInPayload } from "@/api/auth";
export const authOptions: NextAuthOptions = {
  providers: [
    CredentialsProvider({
      name: "Credentials",
      credentials: {},
      async authorize(credentials, req) {
        return await apiSignIn(credentials as SignInPayload);
      },
    }),
  ],
  callbacks: {
    async jwt({ token, user, account }) {
      return { ...token, ...user };
    },
    async session({ session, token }) {
      session.user = token as SignInDto;

      return session;
    },
  },
  secret: process.env.NEXTAUTH_SECRET,
  pages: {
    signIn: "/auth/sign-in",
  },
};

const handler = NextAuth(authOptions);

export { handler as GET, handler as POST };
