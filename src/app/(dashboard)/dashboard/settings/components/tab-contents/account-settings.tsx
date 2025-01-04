'use client'

import { lazy, Suspense } from 'react'
import { AccountForm } from '../forms/account-form'
import { Button } from '@/components/ui/button'
import { Collapsible, CollapsibleTrigger, CollapsibleContent } from '@/components/ui/collapsible'  
import { cn } from '@/lib/utils'

const PasswordForm = lazy(() => import('../forms/password-form'))

const AccountSettings = () => {
  return (
   <>
   <AccountForm />

   <Collapsible className='my-6' >
      <CollapsibleTrigger asChild>
         <Button variant={'outline'}>
            Change password
         </Button>
      </CollapsibleTrigger>
      <CollapsibleContent className={cn("text-popover-foreground outline-none data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2 py-3 px-2")}>
         <Suspense fallback={'Loading...'}>
            <PasswordForm />
         </Suspense>
      </CollapsibleContent>
   </Collapsible>
   </>
  )
}


export default AccountSettings