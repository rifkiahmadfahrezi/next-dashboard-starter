'use client'

import type { DashboardMenu, DashboardMenuItem } from "@/components/sidebar/dashboard-menu"
import { Fragment, useCallback } from "react"
import Icons from "../icons"
import {
   Collapsible,
   CollapsibleContent,
   CollapsibleTrigger,
 } from "@/components/ui/collapsible"
 import {
   SidebarGroup,
   SidebarGroupLabel,
   SidebarMenu,
   SidebarMenuButton,
   SidebarMenuItem,
   SidebarMenuSub,
   SidebarMenuSubButton,
   SidebarMenuSubItem,
 } from "@/components/ui/sidebar"
import { memo } from "react"
import { cn } from "@/lib/utils"
import { ChevronRight } from "lucide-react"
import Link from "next/link"
import { usePathname } from "next/navigation"
 
export function SidebarMenus({
   dashboardMenu
} : {
   dashboardMenu: DashboardMenu[]
} ) {

   return (
      <>
         {dashboardMenu.map(menu => (
            <Fragment key={menu.title}>
               <SidebarGroup>
                  <SidebarGroupLabel>{menu.title}</SidebarGroupLabel>
                  <SidebarMenu>
                     {menu.items.map((item) => {
                        return (
                        <Fragment key={item.link}>
                           {
                              !item.subItems 
                              ? (
                                 <Menu menuItem={item} />
                              )
                              : (
                                 <CollapsibleMenu  menuItem={item} />
                              )
                           }
                        </Fragment>
                        )
                     })}
                  </SidebarMenu>
               </SidebarGroup>
            </Fragment>
         ))}
      </>
   )
 }

const Menu = memo(({
   menuItem,
   className,
   ...props
 }: {
   menuItem: DashboardMenuItem;
   className ?: string;
}) => {

   const pathname = usePathname()

   const activeLink = useCallback((link: string, pathname: string) => {
      return link === "/dashboard" && pathname !== "/dashboard"
        ? false
        : pathname.startsWith(link);
    }, [])

   return (
      <>
      <SidebarMenuItem className={cn(className)} {...props}>
         <SidebarMenuButton 
            tooltip={menuItem.label}
            isActive={activeLink(menuItem.link, pathname)}
            className="p-5"
            asChild>
            <Link 
               className="w-full group"
               target={menuItem.newTab ? "_blank" : "_self"}
               href={menuItem.link}>
               <Icons iconName={menuItem.icon} />
               <span className="capitalize">{menuItem.label}</span>
            </Link>
         </SidebarMenuButton>
      </SidebarMenuItem>
      </>
   )
})

Menu.displayName = "Menu"

 const CollapsibleMenu = memo(({
   menuItem,
   className,
   ...props
 }: {
   menuItem: DashboardMenuItem;
   className ?: string;
}) => {

   const pathname = usePathname()

   const activeLink = useCallback((link: string, pathname: string) => {
      return link === "/dashboard" && pathname !== "/dashboard"
        ? false
        : pathname.startsWith(link);
    }, [])

   return (
      <>
      <Collapsible
         asChild
         className={cn("group/collapsible", className)}
         {...props}
         >
         <SidebarMenuItem>
         <CollapsibleTrigger asChild>
            <SidebarMenuButton 
               className="p-5"
               isActive={activeLink(menuItem.link, pathname)}
               tooltip={menuItem.label}>
               {menuItem.icon && <Icons iconName={menuItem.icon} />}
               <span>{menuItem.label}</span>
               <ChevronRight className="ml-auto transition-transform duration-200 group-data-[state=open]/collapsible:rotate-90" />
            </SidebarMenuButton>
         </CollapsibleTrigger>
         <CollapsibleContent>
            <SidebarMenuSub>
               {menuItem.subItems?.map((subItem) => (
               <SidebarMenuSubItem key={subItem.label}>
                  <SidebarMenuSubButton 
                     className="p-5"
                     asChild>
                     <Link 
                        target={subItem.newTab ? "_blank" : "_self"}
                        href={subItem.link}>
                        <span>{subItem.label}</span>
                     </Link>
                  </SidebarMenuSubButton>
               </SidebarMenuSubItem>
               ))}
            </SidebarMenuSub>
         </CollapsibleContent>
         </SidebarMenuItem>
      </Collapsible>
      </>
   )
 })

 CollapsibleMenu.displayName = "CollapsibleMenu"