"use client"

import * as React from "react"
import {
  Code,
} from "lucide-react"
import {
  Sidebar,
  SidebarContent,
  SidebarHeader,
  SidebarRail,
} from "@/components/ui/sidebar"
import { SidebarMenus } from "./sidebar-menu"
import { dashboardMenu } from "@/components/sidebar/dashboard-menu"

export function AppSidebar({ ...props }: React.ComponentProps<typeof Sidebar>) {
  return (
    <Sidebar collapsible="icon" {...props}>
      <SidebarHeader>
      <div className="flex items-center gap-3">
        <div className="flex aspect-square size-8 items-center justify-center rounded-lg bg-primary text-primary-foreground">
          <Code className="size-4" />
        </div>
        <div className="grid flex-1 text-left p-1">
          <span className="truncate text-lg font-semibold">
            Company
          </span>
        </div>
      </div>
      </SidebarHeader>
      <SidebarContent>
        <SidebarMenus dashboardMenu={dashboardMenu} />
      </SidebarContent>
      <SidebarRail />
    </Sidebar>
  )
}
