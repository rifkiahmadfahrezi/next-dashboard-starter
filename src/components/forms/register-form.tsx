'use client'

import { useState } from 'react'
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import * as z from "zod"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent, CardDescription, CardFooter, CardHeader } from "@/components/ui/card"
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form"
import { InputPassword } from '../ui/input-password'
import { 
  GitHubLogoIcon,
  DiscordLogoIcon,
  LinkedInLogoIcon
} from '@radix-ui/react-icons'
import { Separator } from '../ui/separator'


const formSchema = z.object({
  name: z.string().min(2, {
    message: "Name must be at least 2 characters long.",
  }),
  email: z.string().email({
    message: "Please enter a valid email address.",
  }),
  password: z.string().min(8, {
    message: "Password must be at least 8 characters long.",
  }),
  confirmPassword: z.string(),
}).refine((data) => data.password === data.confirmPassword, {
  message: "Passwords don't match",
  path: ["confirmPassword"],
})

const providers = [
  {
    name: 'Github',
    icon: GitHubLogoIcon
  },
  {
    name: 'Discord',
    icon: DiscordLogoIcon
  },
  {
    name: 'LinkedIn',
    icon: LinkedInLogoIcon
  },
]

export function RegisterForm() {
  const [isLoading, setIsLoading] = useState(false)

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: "",
      password: "",
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
        <h1 className='~text-2xl/4xl font-bold'>Create an account</h1>
        <CardDescription>Enter your details to register</CardDescription>
      </CardHeader>
      <CardContent>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} 
          className="space-y-8 mb-6">
            <FormField
              control={form.control}
              name="email"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Email</FormLabel>
                  <FormControl>
                    <Input placeholder="m@example.com" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="password"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Password</FormLabel>
                  <FormControl>
                    <InputPassword {...field}/>
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="confirmPassword"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Confirm Password</FormLabel>
                  <FormControl>
                    <InputPassword placeholder='Confirm password' {...field}/>
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <Button type="submit" className="w-full" disabled={isLoading}>
              {isLoading ? "Signing in..." : "Sign In"}
            </Button>
          </form>
        </Form>
        
        <div className="text-center">
          <a 
            href="/login" 
            className="text-center text-sm text-muted-foreground hover:text-foreground underline">
            Already have an account? Login
          </a>
        </div>

      </CardContent>
      <Separator className='mb-5' />
      <CardFooter>
        <ul className="grid grid-cols-1 gap-2 w-full">
          {providers.map(item => (
            <li 
              className='w-full'
              key={item.name}>
              <Button 
                variant={'outline'}
                className='w-full'>
                {item.icon && <item.icon/>}
                <span>{item.name}</span>
              </Button>
            </li>
          ))}
        </ul>
      </CardFooter>
    </Card>
  )
}

