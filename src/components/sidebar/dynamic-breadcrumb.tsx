'use client'

import React, { useCallback } from 'react'
import {
   Breadcrumb,
   BreadcrumbItem,
   BreadcrumbLink,
   BreadcrumbList,
   BreadcrumbPage,
   BreadcrumbSeparator,
} from "@/components/ui/breadcrumb"   
import { cn } from '@/lib/utils'
import { usePathname } from 'next/navigation'

type BreadCrumbLink = {
   link: `/${string}`;
   label: string;
   active: boolean;
}

const isMenuActive = (
   current : string, 
   link : string
) : boolean => {
   return current !== '/dashboard' && link === '/dashboard'
      ? false
      : current.startsWith(link)
}

export const DynamicBreadcrumb = ({
   className,
   ...props
}: {
   className ?: string
}) => {
   const pathname = usePathname()

   const getLinks  = useCallback(() : BreadCrumbLink[] => {
      return pathname.split('/').slice(1).map((item) => {
         return {
            link: `/${item}`,
            label: item.replaceAll('-', ' '),
            active: isMenuActive(pathname, `/${item}`)
         }
      })
   }, [pathname])

  return (
   <Breadcrumb className={cn(className)} {...props}>
      <BreadcrumbList>
      {getLinks().map(item => {
         return (
            <>
               <React.Fragment key={item.link}>
                  {item.active 
                     ? 
                     (
                        <BreadcrumbItem>
                           <BreadcrumbPage className="capitalize" >{item.label}</BreadcrumbPage>
                        </BreadcrumbItem>
                     )
                     : (
                        <>
                        <BreadcrumbSeparator />
                        <BreadcrumbItem>
                           <BreadcrumbLink className="capitalize" href={item.link}>{item.label}</BreadcrumbLink>
                        </BreadcrumbItem>
                        </>
                     )
                  }
               </React.Fragment>
            </>
         )
      })}
      </BreadcrumbList>
   </Breadcrumb>
  )
}
