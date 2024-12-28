"use client"
import React from "react";
import { 
   Breadcrumb, 
   BreadcrumbItem, 
   BreadcrumbLink, 
   BreadcrumbSeparator, 
   BreadcrumbList,
   BreadcrumbPage
} from "../ui/breadcrumb";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";

export const DynamicBreadcrumb = ({ 
   className, 
   ...props 
} : {
   className ?: string;
}) => {
  const pathname = usePathname();
  const pathItems = pathname.split("/").filter(path => !Number(path) && path);
  
  const buildPath = (index : number) => {
    return "/" + pathItems.slice(0, index + 1).join("/");
  };

  return (
    <Breadcrumb className={cn(className)} {...props}>
      <BreadcrumbList>
        <BreadcrumbItem>
          <BreadcrumbLink href="/">Home</BreadcrumbLink>
        </BreadcrumbItem>
        {pathItems.map((item, i) => {
          const fullPath = buildPath(i);
          const isLast = i === pathItems.length - 1;
          return (
            <React.Fragment key={i}>
              <BreadcrumbSeparator />
              <BreadcrumbItem>
               {!isLast 
                  ?(
                  <BreadcrumbLink
                     href={fullPath}
                     className={cn(`font-normal capitalize ${isLast && "font-bold"}`)}
                  >
                     {item}
                  </BreadcrumbLink>
                  )
                  : <BreadcrumbPage className="capitalize">
                    {item.replaceAll('-', ' ')}
                  </BreadcrumbPage>

               }
              </BreadcrumbItem>
            </React.Fragment>
          );
        })}
      </BreadcrumbList>
    </Breadcrumb>
  );
};