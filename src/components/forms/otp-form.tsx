'use client'

import { useState } from 'react'
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import * as z from "zod"
import { Button } from "@/components/ui/button"
import {
   InputOTP,
   InputOTPGroup,
   InputOTPSlot,
} from "@/components/ui/input-otp"
import { Card, CardContent, CardDescription, CardHeader } from "@/components/ui/card"
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form"


const formSchema = z.object({
  otp: z.string()
   .min(6, { message: "OTP must be at least 6 characters long." })
   .max(6, { message: "OTP must be at most 6 characters long." }),
})

export function OTPForm() {
  const [isLoading, setIsLoading] = useState(false)

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      otp: "",
    },
  })

  function onSubmit(values: z.infer<typeof formSchema>) {
    setIsLoading(true)
    // Simulate API call
    setTimeout(() => {
      console.log(values)
      setIsLoading(false)
    }, 1000)
  }

  return (
    <Card className="w-full max-w-md">
      <CardHeader>
        <h1 className='~text-2xl/4xl font-bold'>Confirm OTP</h1>
        <CardDescription>Enter OTP code to reset your password</CardDescription>
      </CardHeader>
      <CardContent>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} 
          className="space-y-8 mb-6">
            <FormField
              control={form.control}
              name="otp"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>OTP Code</FormLabel>
                  <FormControl>
                  <InputOTP 
                     className="w-full mx-auto"
                     maxLength={6} {...field}>
                     <InputOTPGroup>
                     {Array(6).fill(0).map((_, index) => (
                        <InputOTPSlot 
                           key={index}   
                           className='size-10'
                           index={index} />
                     ))}
                     </InputOTPGroup>
                  </InputOTP>
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <Button 
               type="submit" className="w-full" disabled={isLoading}>
              {isLoading ? "Submitting..." : "Confirm"}
            </Button>
          </form>
        </Form>

      </CardContent>
    </Card>
  )
}

