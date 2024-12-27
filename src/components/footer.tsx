'use client'
import Link from "next/link"
import { 
   FacebookIcon,
   InstagramIcon,
   TwitterIcon,
} from "lucide-react"
import { Separator } from "./ui/separator"

const footerMenus = [
   {
      title: 'Quick Links',
      items: [
         {
            label: 'Landing',
            link: '/'
         },
         {
            label: 'Dashboard',
            link: '/dashboard'
         },
      ]
   },
   {
      title: 'Get in touch',
      items: [
         {
            label: 'Facebook',
            link: '#'
         },
         {
            label: 'Instagram',
            link: '#'
         },
         {
            label: 'Tiktok',
            link: '#'
         },
         {
            label: 'LinkedIn',
            link: '#'
         },
      ]
   },
]

export default function Footer() {
  return (
    <footer className="bg-background border-t pt-12 pb-5 md:py-16 lg:pt-20 mt-20">
      <div className="container mx-auto px-4 md:px-6 lg:px-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-12">
        <div className="space-y-4">
          <div className="flex items-center space-x-2">
            <h1 className="text-2xl font-bold capitalize">Logo</h1>
          </div>
          <p className="text-sm md:text-base text-muted-foreground">
           Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam fugit asperiores distinctio obcaecati.
          </p>
        </div>
        <div className="flex items-start flex-wrap gap-12 w-full">
         {footerMenus.map(menu => (
            <div 
               key={menu.title}
               className="space-y-2 flex-grow">
               <h4 className="text-lg font-semibold">{menu.title}</h4>
            <nav className="space-y-1 flex flex-col">
               {menu.items.map(item => (
               <Link
                     key={item.link}
                     className="text-muted-foreground hover:text-foreground" 
                     href={item.link}>
                  {item.label}
               </Link>
               ))}
            </nav>
          </div>
         ))}
        </div>
      </div>
      <Separator className="container mt-8 mb-4 mx-auto px-4" />
      <div className="mt-8 md:mt-12 text-center text-gray-400 text-sm">© {new Date().getFullYear()} Company. All rights reserved.</div>
    </footer>
  )
}
