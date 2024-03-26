'use client'
import Link from 'next/link'
import LogOut from '../logOut/LogOut';
import { usePathname } from "next/navigation";

export default function Nav() {
  const pathname = usePathname();

    return (
      <nav className="flex flex-col items-center gap-10 h-full w-full text-xl text-blue-700">        
        
            <Link className={`hover:text-red-500 ${pathname === "/" ? "active" : ""}`}  href="/">
              Accueil
            </Link>
          
            <Link className={`hover:text-red-500 ${pathname === "/board" ? "active" : ""}`}  href="/board">
              Tableau de bord
            </Link>
        
            <Link className={`hover:text-red-500 ${pathname === "/board/projet" ? "active" : ""}`} href="/board/projet">
             Nouveau projet
            </Link>
        
            <Link className={`hover:text-red-500 ${pathname === "/board/travelmap" ? "active" : ""}`}  href="/board/travelmap">
              Carte des voyages
            </Link>
          
            <LogOut />
        
      </nav>
    );
  }