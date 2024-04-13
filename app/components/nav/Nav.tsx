'use client'
import Link from 'next/link'
import LogOut from '../logOut/LogOut';
import { usePathname } from "next/navigation";

export default function Nav() {
  const pathname = usePathname();

    return (
      <nav className="flex flex-col items-center gap-10 h-full w-full font-bold text-xl text-blue-100">        
        
            <Link className={`hover:text-blue-800 ${pathname === "/" ? "active" : ""}`}  href="/">
              Accueil
            </Link>
          
            <Link className={`hover:text-blue-800 ${pathname === "/board" ? "active" : ""}`}  href="/board">
              Tableau de bord
            </Link>
        
            <Link className={`hover:text-blue-800 ${pathname === "/board/projet" ? "active" : ""}`} href="/board/projet">
             Nouveau projet
            </Link>
        
            <Link className={`hover:text-blue-800 ${pathname === "/board/travelmap" ? "active" : ""}`}  href="/board/travelmap">
              Carte des voyages
            </Link>
          
            <LogOut />
        
      </nav>
    );
  }