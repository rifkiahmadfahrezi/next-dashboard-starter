"use client";
import Link from "next/link";
import { Button } from "../ui/button";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import { routes, activeLink } from "./navbar-menu";
import NavbarMobile from "./navbar-mobile";


export const Navbar = () => {
  const pathname = usePathname();

  return (
    <nav className="bg-background w-full sticky top-0 z-50">
      <div className="max-w-screen-2xl mx-auto px-5">
        <div className="flex justify-between items-center py-5">
          <Button 
            variant='ghost'
            asChild >
            <Link 
              href={"/"}>
            Logo
            </Link>
          </Button>

          <ul className="hidden md:flex items-center gap-4">
            {routes.map((item) => (
              <li key={item.link}>
                <Button
                  variant={activeLink(item.link, pathname) ? 'secondary' : 'ghost'}
                  asChild
                  >
                  <Link
                    href={item.link}
                  >
                    {item.label}
                  </Link>
                </Button>
              </li>
            ))}
             <li 
               className="w-full">
               <Button
                  asChild
                  >
                  <Link
                  className="w-full"
                  href={'/login'}
                  >
                  Login
                  </Link>
             </Button>
           </li>
          </ul>
          

          {/* mobile */}
          <NavbarMobile />
        </div>
      </div>
    </nav>
  );
};