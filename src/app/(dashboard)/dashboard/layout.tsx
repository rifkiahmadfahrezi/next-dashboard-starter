import { AppSidebar } from "@/components/sidebar/app-sidebar"
import {
  SidebarInset,
  SidebarProvider,
} from "@/components/ui/sidebar"
import { TopMenu } from "@/components/sidebar/top-menu"


export default function DashboardLayout({
   children
}: {
   children: React.ReactNode
}) {
  return (
    <SidebarProvider>
      <AppSidebar />
      <SidebarInset>
      <TopMenu />
        <main className="p-3">
          {children}
        </main>
      </SidebarInset>
    </SidebarProvider>
  )
}
