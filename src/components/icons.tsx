import React, { memo } from 'react'
import * as LucideIcons from 'lucide-react'
import { cn } from '@/lib/utils'
import { ShieldCheck } from 'lucide-react'


function getIconName(str: string){
   return str.split('-').map(x => x[0].toUpperCase() + x.slice(1)).join('')
 }

const Icons = ({
   iconName = 'shield-check',
   className,
   ...props
}: {
   iconName: string,
   className?: string
}) => {
   // @ts-ignore
   const Icon = LucideIcons[getIconName(iconName)]

  return (
   <>
   {!Icon ? <ShieldCheck className={cn('text-primary size-7', className)} {...props} /> : <Icon className={cn('text-primary size-7', className)} {...props} />}
   </>
  )
}

export default memo(Icons)