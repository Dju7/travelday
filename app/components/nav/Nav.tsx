'use client'
import Link from 'next/link'
import LogOut from '../logOut/LogOut';
import { usePathname } from "next/navigation";
import { LuGlobe2 } from "react-icons/lu";
import { BsBrowserSafari } from "react-icons/bs";
import { FaLightbulb } from "react-icons/fa";


export default function Nav() {
  const pathname = usePathname();

    return (
      <nav className="flex lg:flex-col items-center lg:mt-10 h-10 w-[80%] lg:h-full lg:w-full font-bold text-xl text-yellow-300">        
        <div className=' h-[80%] w-[90%] lg:w-full flex lg:flex-col justify-center items-center gap-6 sm:gap-10'>
           
            <Link className={`hover:text-red-400 ${pathname === "/board" ? "active" : ""}`}  href="/board">
              <BsBrowserSafari className='text-3xl lg:text-5xl'/>
            </Link>
        
            <Link className={`hover:text-red-400 ${pathname === "/board/projet" ? "active" : ""}`} href="/board/projet">
             <FaLightbulb className='text-xl lg:text-5xl'/>
            </Link>
        
            <Link className={`hover:text-red-400 ${pathname === "/board/travelmap" ? "active" : ""}`}  href="/board/travelmap">
            <LuGlobe2 className='text-3xl lg:text-5xl'/>
            </Link>
        </div>
        <div>
            <LogOut />
        </div>
        
      </nav>
    );
  }