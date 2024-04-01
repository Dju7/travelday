'use client'
import UserBar from "../components/userBar/UserBar";
import { SessionProvider } from "next-auth/react";


export default function boardLayout({
    children,
  }: Readonly<{
    children: React.ReactNode;
  }>) {
    return (
     
        <main > 
          <SessionProvider>
            <div className="p-4 w-full h-full flex justify-center items-center gap-4">  
            <UserBar />    
            {children}
            </div> 
            </SessionProvider>
        </main>
   
    );
  }