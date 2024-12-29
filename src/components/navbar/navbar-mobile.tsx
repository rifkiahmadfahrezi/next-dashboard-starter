'use client'

import Link from "next/link";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Separator } from "../ui/separator";
import { MenuIcon } from "lucide-react";
import { Button } from "@/components/ui/button";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import { routes, activeLink } from "./navbar-menu";

export default function NavbarMobile({
   className
} : {
   className?: string
}) {
   const pathname = usePathname()

  return (
   <div className={cn("flex items-center md:hidden", className)}>
   {/* sidebar menu */}
   <Sheet>
      <SheetTrigger asChild>
         <Button variant="ghost" className="ml-3">
         <MenuIcon />
         </Button>
      </SheetTrigger>
      <SheetContent>
         <ul className="flex flex-col justify-center items-center text-center gap-2 my-20 w-full">
         {routes.map((item) => (
             <li 
               className="w-full"
               key={item.link}>
               <Button
                  variant={activeLink(item.link, pathname) ? 'secondary' : 'ghost'}
                  asChild
                  >
                  <Link
                  className="w-full"
                  href={item.link}
                  >
                  {item.label}
                  </Link>
             </Button>
           </li>
         ))}
         

         <Separator className="my-7" />
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
      </SheetContent>
   </Sheet>
   </div>
  )
}
