import { NextAuthOptions } from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import { db } from "./db";
import { compare } from "bcrypt";

export const authOptions: NextAuthOptions = {
    
  providers: [
    CredentialsProvider({
     
      name: "Credentials",
      credentials: {
        username: { label: "username", type: "username"},
        password: { label: "password", type: "password" }
      },
      async authorize(credentials) {
        if (!credentials?.username || !credentials?.password) {
          throw new Error('Please enter an email and password')
        }
      
        const existingUser = await db.user.findFirst ({
          where: {username: credentials?.username},
        });
        if (!existingUser) {
          throw new Error('No user found')
        }
  
        const passwordMatch = await compare (credentials.password, existingUser.password);
  
        if (!passwordMatch) {
          throw new Error('Incorrect password')
        }
  
        return {
          id:  `${existingUser.id}`,
          email: existingUser.email,
          username: existingUser.username,
        }
      }
    })
  ],

  session: {
    strategy: "jwt",
  },
  callbacks: {
    async jwt ({token, user}) {
      if (user) {
        return {
          ...token,
          username: user.username,
        };
      }
      return token
    },
    async session ({ session, token}) {
      return {
        ...session,
        user: {
          ...session.user,
          username: token.username,
        }
      };
    },
  }

}

