'use client'

import type { DashboardMenu, DashboardMenuItem } from "@/config/dashboard-menu"
import { Fragment } from "react"
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
 
export function SidebarMenus({
   dashboardMenu
} : {
   dashboardMenu: DashboardMenu[]
} ) {
   return (
      <>
         {dashboardMenu.map(menu => (
            <Fragment>
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
   return (
      <>
      <SidebarMenuItem key={menuItem.label}>
         <SidebarMenuButton 
            asChild>
            <Link 
               className="w-full"
               href={menuItem.link}>
               <Icons iconName={menuItem.icon} />
               <span className="capitalize">{menuItem.label}</span>
            </Link>
         </SidebarMenuButton>
      </SidebarMenuItem>
      </>
   )
})

 const CollapsibleMenu = memo(({
   menuItem,
   className,
   ...props
 }: {
   menuItem: DashboardMenuItem;
   className ?: string;
}) => {
   return (
      <>
      <Collapsible
         asChild
         className={cn("group/collapsible", className)}
         {...props}
         >
         <SidebarMenuItem>
         <CollapsibleTrigger asChild>
            <SidebarMenuButton tooltip={menuItem.label}>
               {menuItem.icon && <Icons iconName={menuItem.icon} />}
               <span>{menuItem.label}</span>
               <ChevronRight className="ml-auto transition-transform duration-200 group-data-[state=open]/collapsible:rotate-90" />
            </SidebarMenuButton>
         </CollapsibleTrigger>
         <CollapsibleContent>
            <SidebarMenuSub>
               {menuItem.subItems?.map((subItem) => (
               <SidebarMenuSubItem key={subItem.label}>
                  <SidebarMenuSubButton asChild>
                     <Link 
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