'use client'

import React, { useState } from 'react'
 import {
   toast
 } from "sonner"
 import {
   useForm
 } from "react-hook-form"
 import {
   zodResolver
 } from "@hookform/resolvers/zod"
 import * as z from "zod"
 import {
   Button
 } from "@/components/ui/button"
 import {
   Form,
   FormControl,
   FormField,
   FormItem,
   FormLabel,
   FormMessage,
 } from "@/components/ui/form"
 import {
   Input
 } from "@/components/ui/input"
 

const formSchema = z.object({
  username: z.string(),
  email: z.string()
});

export function AccountForm() {
  const [editMode, seteditMode] = useState<boolean>(false)
  const form = useForm < z.infer < typeof formSchema >> ({
    resolver: zodResolver(formSchema),
      defaultValues: {
         username: "jhon123",
         email: 'jhon@example.com'
      }
  })

  function onSubmit(values: z.infer < typeof formSchema > ) {
    try {
      console.log(values);
      toast(
        <pre className="mt-2 w-[340px] rounded-md bg-slate-950 p-4">
          <code className="text-white">{JSON.stringify(values, null, 2)}</code>
        </pre>
      );
    } catch (error) {
      console.error("Form submission error", error);
      toast.error("Failed to submit the form. Please try again.");
    }
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-3 max-w-3xl">
        <FormField
          control={form.control}
          name="username"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Username</FormLabel>
              <FormControl>
                <Input 
                  disabled={!editMode}
                  placeholder="shadcn"
                  
                {...field} />
              </FormControl>
              
              <FormMessage />
            </FormItem>
          )}
        />
            
        <FormField
          control={form.control}
          name="email"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Email</FormLabel>
              <FormControl>
                <Input 
                  disabled={!editMode}
                  placeholder="jhon@example.com"
                  type="email"
                {...field} />
              </FormControl>
              
              <FormMessage />
            </FormItem>
          )}
        />
        <div className="flex gap-2 items-center">
         {editMode && <Button type="submit">Save</Button>}
         <Button 
            type='button'
            onClick={() => seteditMode(!editMode)}
            variant={'secondary'}>
            {editMode ? 'Cancel' : 'Edit'}
         </Button>
        </div>
      </form>
    </Form>
        
  )
}

AccountForm.displayName = 'AccountForm'