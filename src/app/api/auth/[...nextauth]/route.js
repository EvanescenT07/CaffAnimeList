import NextAuth from "next-auth/next";
import githubAuth from "next-auth/providers/github";
import googleAuth from "next-auth/providers/google";

export const authOptions = {
  providers: [
    githubAuth({
      clientId: process.env.GITHUB_CLIENT_ID,
      clientSecret: process.env.GITHUB_CLIENT_SECRET,
    }),
    googleAuth({
      clientId: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
    }),
  ],
  secret: process.env.NEXTAUTH_SECRET,
};

const handler = NextAuth(authOptions);

export { handler as GET, handler as POST };
