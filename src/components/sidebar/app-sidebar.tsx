"use client"

import * as React from "react"
import {
  Code,
} from "lucide-react"
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
  SidebarRail,
} from "@/components/ui/sidebar"
import { SidebarMenus } from "./sidebar-menu"
import { dashboardMenu } from "@/components/sidebar/dashboard-menu"
import { ThemeSwitcher } from "../theme-switcher"
import Link from "next/link"

export function AppSidebar({ ...props }: React.ComponentProps<typeof Sidebar>) {
  return (
    <Sidebar collapsible="icon" {...props}>
      <SidebarHeader>
      <div className="flex items-center gap-3">
        <Link
          href={'/dashboard'}
          className="flex items-center gap-3 w-full p-3 hover:bg-secondary rounded"
          >
          <div className="flex aspect-square size-8 items-center justify-center rounded-lg bg-sidebar-primary text-sidebar-primary-foreground">
            <Code className="size-4" />
          </div>
          <div className="grid flex-1 text-left text-sm leading-tight">
            <span className="truncate font-semibold">
              Company
            </span>
            <span className="truncate text-xs text-muted-foreground">Lorem, ipsum dolor.</span>
          </div>
        </Link>
      </div>
      </SidebarHeader>
      <SidebarContent>
        <SidebarMenus dashboardMenu={dashboardMenu} />
      </SidebarContent>
      <SidebarFooter>
        <ThemeSwitcher className="w-fit" />
      </SidebarFooter>
      <SidebarRail />
    </Sidebar>
  )
}
