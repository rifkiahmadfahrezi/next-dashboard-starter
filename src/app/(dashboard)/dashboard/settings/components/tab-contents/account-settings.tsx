'use client'

import { lazy, Suspense } from 'react'
import { AccountForm } from '../forms/account-form'
import { Button } from '@/components/ui/button'
import { Collapsible, CollapsibleTrigger, CollapsibleContent } from '@/components/ui/collapsible'  

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
      <CollapsibleContent className='py-5 px-2'>
         <Suspense fallback={'Loading...'}>
            <PasswordForm />
         </Suspense>
      </CollapsibleContent>
   </Collapsible>
   </>
  )
}


export default AccountSettings