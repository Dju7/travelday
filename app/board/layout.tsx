import UserBar from "../components/userBar/UserBar";

export default function boardLayout({
    children,
  }: Readonly<{
    children: React.ReactNode;
  }>) {
    return (
     
        <main > 
            <div className="p-4 w-full h-full flex justify-center items-center gap-4">  
            <UserBar />    
            {children}
            </div> 
        </main>
   
    );
  }