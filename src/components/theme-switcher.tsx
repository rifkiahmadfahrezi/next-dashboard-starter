'use client'

import React from 'react'
import Icons from './icons'
import { Button } from './ui/button'
import { cn } from '@/lib/utils'
import { useTheme } from 'next-themes'

const themes = [
   {
      name: 'light',
      icon: 'sun'
   },
   {
      name: 'dark',
      icon: 'moon'
   },
   {
      name: 'system',
      icon: 'monitor'
   },
]

export const ThemeSwitcher = ({
   className,
   ...props
}: {
   className?: string
}) => {
   const { theme, setTheme } = useTheme()

  return (
   <div className={cn("flex items-center gap-0.5 py-1 px-2 rounded-full border flex-wrap", className)} {...props}>
      {themes.map(item => (
         <Button
            key={item.name}
            variant={theme === item.name ? 'secondary' : 'ghost'}
            size={'icon'}
            className={cn('rounded-full', theme === item.name && 'border' )}
            onClick={() => setTheme(item.name)}
            >
            <Icons iconName={item.icon} />
            <span className="sr-only">Swicth theme to {item.name}</span>
         </Button>
      ))}
   </div>
  )
}
