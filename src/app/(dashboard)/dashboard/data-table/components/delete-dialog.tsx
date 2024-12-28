'use cliend'

import React from 'react'
import {
   AlertDialog,
   AlertDialogAction,
   AlertDialogCancel,
   AlertDialogContent,
   AlertDialogDescription,
   AlertDialogFooter,
   AlertDialogHeader,
   AlertDialogTitle,
   AlertDialogTrigger,
 } from "@/components/ui/alert-dialog"
 import { Button } from '@/components/ui/button'
import { Trash2Icon } from 'lucide-react'
 

export default function DeleteDialog({
   deleteFn
}: {
   deleteFn: () => void
}) {
  return (
   <AlertDialog>
      <AlertDialogTrigger asChild>
         <Button
            size={'icon'}
            variant={'ghost'}
            >
            <Trash2Icon className="size-4" />
            <span className='sr-only'>Delete</span>
         </Button>
      </AlertDialogTrigger>
   <AlertDialogContent>
      <AlertDialogHeader>
         <AlertDialogTitle>Are you absolutely sure?</AlertDialogTitle>
         <AlertDialogDescription>
            This action cannot be undone. This will permanently delete your account
            and remove your data from our servers.
         </AlertDialogDescription>
      </AlertDialogHeader>
      <AlertDialogFooter>
         <AlertDialogCancel>Cancel</AlertDialogCancel>
         <AlertDialogAction asChild>
            <Button 
               onClick={deleteFn}
               variant={'destructive'}
               >
               Delete
            </Button>
         </AlertDialogAction>
      </AlertDialogFooter>
   </AlertDialogContent>
   </AlertDialog>

  )
}
