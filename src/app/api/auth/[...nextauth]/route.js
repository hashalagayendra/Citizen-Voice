import Providers from "@/app/Providers";
import CredentialsProvider from "next-auth/providers/credentials";
import NextAuth from "next-auth";
import GoogleProvider from "next-auth/providers/google";
import { PrismaClient } from "@/generated/prisma";
import bcrypt from "bcrypt";

import { database } from "@/lib/firebaseConfig";

import { ref, set, push } from "firebase/database";

const prisma = new PrismaClient();

const authOptions = {
  providers: [
    CredentialsProvider({
      async authorize(credentials) {
        console.log(credentials.email, credentials.password);

        const user = await prisma.user.findUnique({
          where: { emailAddress: credentials.email },
        });
        console.log(user);

        // If user not found
        if (!user) throw new Error("No user found");

        // Check if password matches
        const isMatch = await bcrypt.compare(
          credentials.password,
          user.password
        );

        // If password doesn't match
        if (!isMatch) throw new Error("Invalid password");

        return {
          email: user.emailAddress,
        };
      },
    }),

    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
    }),
  ],

  pages: {
    signIn: "/login", // your custom sign-in page
    error: "/login", // show error on same page
  },

  callbacks: {
    async signIn({ user, account, profile, email, credentials }) {
      if (account.provider === "google") {
        const finded_user = await prisma.user.findMany({
          where: { emailAddress: user.email },
        });

        if (!finded_user[0]) {
          const newuser = await prisma.user.create({
            data: {
              emailAddress: user.email,
              role: "user",
            },
          });

          // Save user data in Firebase

          const saveDatainFirebase = async (email) => {
            try {
              console.log("Saving data to Firebase email :", email);
              const newUserRef = push(ref(database, "users"));

              await set(newUserRef, {
                email: email,
              });

              console.log("Data saved successfully under ID:", newUserRef.key);
            } catch (error) {
              console.error("Error saving data:", error);
            }
          };

          saveDatainFirebase(newuser.emailAddress);
        }
      }

      return true;
    },

    async jwt({ token, user, account, profile }) {
      const user_role = await prisma.user.findUnique({
        where: { emailAddress: token.email },
        select: { role: true },
      });

      console.log("role", user_role);

      if (user) {
        token.email = user.email;

        token.pic = profile?.picture;
        token.role = user_role.role;

        console.log(user);
      }
      return token;
    },
    async session({ session, token }) {
      session.email = token.email;
      session.user.role = token.role;

      session.pic = token.pic;
      console.log(session);

      return session;
    },
  },

  secret: process.env.NEXTAUTH_SECRET,
};

const handler = NextAuth(authOptions);
export { handler as GET, handler as POST };
export { authOptions };
