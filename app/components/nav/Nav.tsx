import Link from 'next/link'
import LogOut from '../logOut/LogOut';

export default function Nav() {
    return (
      <nav className="flex flex-col items-center gap-10 h-full w-full text-xl text-blue-700">        
        
            <Link className='hover:text-red-500'  href="/">
              Accueil
            </Link>
          
            <Link className='hover:text-red-500'  href="/board">
              Tableau de bord
            </Link>
        
            <Link className='hover:text-red-500' href="/board/projet">
             Nouveau projet
            </Link>
        
            <Link className='hover:text-red-500'  href="/board/travelmap">
              Carte des voyages
            </Link>
          
            <LogOut />
        
      </nav>
    );
  }