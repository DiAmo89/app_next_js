import { db } from "@/db";
import { users } from "@/db/schema";
import type { NextAuthOptions } from "next-auth";
import { Account, Profile, Session } from "next-auth";
import { JWT } from "next-auth/jwt";
import GoogleProvider from "next-auth/providers/google";

export const authOptions: NextAuthOptions = {
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID || "",
      clientSecret: process.env.GOOGLE_CLIENT_SECRET || "",
      allowDangerousEmailAccountLinking: true,
    }),
  ],
  secret: process.env.NEXTAUTH_SECRET,
  session: {
    strategy: "jwt",
    maxAge: 30 * 24 * 60 * 60, // 30 days
  },
  pages: {
    signIn: "/login",
    error: "/login",
  },
  callbacks: {
    async jwt({
      token,
      account,
      profile,
    }: {
      token: JWT;
      account?: Account | null;
      profile?: Profile | null;
    }) {
      // Initial sign in
      if (account && profile) {
        token.sub = profile.sub;
        token.email = profile.email || "";
        token.name = profile.name || "";
        
        try {
          const existing = await db.query.users.findFirst({
            where: (u, { eq }) => eq(u.email, profile.email!),
          });
          if (existing) {
            token.role = existing.role;
            token.userId = existing.id;
          }
        } catch (error) {
          console.warn("⚠️ Database query failed in JWT:", error);
        }
      }
      return token;
    },
    async session({ session, token }: { session: Session; token: JWT }) {
      if (session.user) {
        session.user.email = token.email;
        session.user.name = token.name;
        // @ts-ignore - extend session with custom fields
        session.user.id = token.userId;
        // @ts-ignore
        session.user.role = token.role || "customer";
      }
      return session;
    },
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    async signIn({ user, account }: { user: any; account: any }) {
      if (!user?.email) {
        return "/login?error=no_email";
      }

      try {
        const existing = await db.query.users.findFirst({
          where: (u, { eq }) => eq(u.email, user.email),
        });

        if (!existing) {
          await db.insert(users).values({
            email: user.email,
            name: user.name || "User",
            image: user.image || null,
            role: "customer",
          });
        }
      } catch (error) {
        console.error("❌ SignIn error:", error);
        // Allow sign-in even if database fails
      }

      return true;
    },
  },
};
