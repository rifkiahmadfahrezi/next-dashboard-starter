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
  email: z.string().email({
    message: "Please enter a valid email address.",
  }),
  password: z.string().min(8, {
    message: "Password must be at least 8 characters long.",
  }),
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

export function LoginForm() {
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
        <h1 className='~text-2xl/4xl font-bold'>Sign In</h1>
        <CardDescription>Enter your credentials to access your account</CardDescription>
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
                  <div className="flex items-center justify-between">
                    <FormLabel>Password</FormLabel>

                    <a href="#" className="text-sm text-muted-foreground hover:text-foreground underline">
                      Forgot password?
                    </a>
                  </div>
                  <FormControl>
                    <InputPassword {...field}/>
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
            href="/register" 
            className="text-center text-sm text-muted-foreground hover:text-foreground underline">
            Create an account
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

