"use client"
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
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form"
import { InputPassword } from "@/components/ui/input-password"

const formSchema = z.object({
  currentPassword: z.string(),
  newPassword: z.string()
});

export default function PasswordForm() {

  const form = useForm < z.infer < typeof formSchema >> ({
    resolver: zodResolver(formSchema),

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
          name="currentPassword"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Current Password</FormLabel>
              <FormControl>
                <InputPassword placeholder="" {...field} />
              </FormControl>
              <FormDescription>Enter your current password.</FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />
        
        
        <FormField
          control={form.control}
          name="newPassword"
          render={({ field }) => (
            <FormItem>
              <FormLabel>New Password</FormLabel>
              <FormControl>
                <InputPassword placeholder="" {...field} />
              </FormControl>
              <FormDescription>Enter your new password.</FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />
        
        <Button type="submit">Change password</Button>
      </form>
    </Form>
  )
}