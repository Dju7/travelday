import {Navbar, NavbarContent, NavbarItem, Link, Button} from "@nextui-org/react";

export default function Nav() {
    return (
      <Navbar>        
        <NavbarContent className=" text-xl flex flex-col gap-10 text-blue-800 h-[450px] w-[400px] " justify="center">
        <NavbarItem>
            <Link color="foreground" href="/">
              Accueil
            </Link>
          </NavbarItem>
          <NavbarItem>
            <Link color="foreground" href="/board">
              Tableau de bord
            </Link>
          </NavbarItem>
          <NavbarItem isActive>
            <Link href="/board/projet" aria-current="page">
             Nouveau projet
            </Link>
          </NavbarItem>
          <NavbarItem>
            <Link color="foreground" href="/board/infos">
              Infos nécéssaires
            </Link>
          </NavbarItem>
          <NavbarItem>
            <Link color="foreground" href="#">
              Deconnexion
            </Link>
          </NavbarItem>
        </NavbarContent>
      </Navbar>
    );
  }