import { NextAuthOptions } from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import { db } from "./db";
import { compare } from "bcrypt";

export const authOptions: NextAuthOptions = {
    pages: {
     signIn : '/'
    },
  providers: [
    CredentialsProvider({
     
      name: "Credentials",
      credentials: {
        email: { label: "email", type: "email"},
        password: { label: "Password", type: "password" }
      },
      async authorize(credentials) {
        if (!credentials?.email || !credentials?.password) {
          throw new Error('Please enter an email and password')
        }
      
        const existingUser = await db.user.findFirst ({
          where: {email: credentials?.email},
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
        }
      }
    })
  ],

}

