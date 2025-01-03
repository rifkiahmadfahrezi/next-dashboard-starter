"use client"
import {
   useRef,
  useState
} from "react"
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
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form"
import {
  Input
} from "@/components/ui/input"
import {
  Textarea
} from "@/components/ui/textarea"
import { cn } from "@/lib/utils"
import ButtonMagnetic from "@/components/ui/magnetic-button"
import { ArrowUpRight } from "lucide-react"


const formSchema = z.object({
  name: z.string().min(1, { message: 'Please input your full name'}),
  email: z.string().email({ message: 'Email format not valid'}),
  subject: z.string().min(1, { message: 'Please input your subject'}),
  message: z.string().min(1, { message: 'Please input your message'})
});

export default function ContacForm({
   className
}: {
   className ?: string;
}) {
   const [isPending] = useState<boolean>(false)
   const formRef = useRef<null | HTMLFormElement>(null)
  const form = useForm < z.infer < typeof formSchema >> ({
    resolver: zodResolver(formSchema),
  })

  const sendMessage = async () => {
   console.log('ok')
  }

  async function onSubmit() {
    toast.promise(() => sendMessage(), {
      success: 'Your email sent succesfully!',
      error: 'Your email sent succesfully!',
      loading: 'Sending your email...'
    })
  }

  return (
   <>
   <div className={cn(className)}>
      <Form {...form}>
         <form 
            ref={formRef}
            onSubmit={form.handleSubmit(onSubmit)} 
            className="space-y-3 mx-auto">
         
         <FormField
            control={form.control}
            name="name"
            render={({ field }) => (
               <FormItem>
               <FormLabel>Full name</FormLabel>
               <FormControl>
                  <Input 
                  placeholder="Jhon doe"
                  
                  type="text"
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
                  placeholder=" jhon@example.com"
                  
                  type="email"
                  {...field} />
               </FormControl>
               <FormDescription>E.g jhon@example.com</FormDescription>
               <FormMessage />
               </FormItem>
            )}
         />
         
         <FormField
            control={form.control}
            name="subject"
            render={({ field }) => (
               <FormItem>
               <FormLabel>Subject</FormLabel>
               <FormControl>
                  <Input 
                  placeholder="Invitation..."
                  
                  type="text"
                  {...field} />
               </FormControl>
               
               <FormMessage />
               </FormItem>
            )}
         />
         
         <FormField
            control={form.control}
            name="message"
            render={({ field }) => (
               <FormItem>
               <FormLabel>Message</FormLabel>
               <FormControl>
                  <Textarea
                     placeholder="Hello..."
                     className="resize-y min-h-36"
                     {...field}
                  />
               </FormControl>
               
               <FormMessage />
               </FormItem>
            )}
         />
         <ButtonMagnetic 
            className="group">
            <button 
               className="flex items-center gap-2"
               disabled={isPending}
               type="submit">{isPending ? 'Sending...' : 'Send Message'} <ArrowUpRight className="size-4 group-hover:rotate-45 transition duration-200 ease-in-out" /> </button>
         </ButtonMagnetic>
         </form>
      </Form>
   </div>
         
   </>
  )
}