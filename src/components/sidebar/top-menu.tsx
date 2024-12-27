import React from 'react'
import { SidebarTrigger } from '../ui/sidebar'
import { DynamicBreadcrumb } from './dynamic-breadcrumb'
import { Separator } from '../ui/separator'
import { NavUser } from './nav-user'

export const TopMenu = () => {
  return (
   <>
      <header className="flex justify-between px-2 h-16 shrink-0 items-center gap-2 transition-[width,height] ease-linear group-has-[[data-collapsible=icon]]/sidebar-wrapper:h-12">
         <div className="flex items-center gap-2 px-4">
            <SidebarTrigger className="-ml-1" />
            <Separator orientation="vertical" className="mr-2 h-4" />
            <DynamicBreadcrumb />
         </div>
         <div className="">
            <NavUser user={{
               name: 'Rifki',
               email: 'rifkiaf589@gmail.com',
               avatar: 'https://github.com/rifkiahmadfahrezi.png'
            }} />
         </div>
      </header>
   </>
  )
}
