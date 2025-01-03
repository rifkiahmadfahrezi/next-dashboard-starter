"use client"

import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { z } from "zod"

import { toast } from "sonner"
import { Button } from "@/components/ui/button"
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { useTheme } from "next-themes"
import { Check, Minus } from "lucide-react";
import Image from "next/image";

const FormSchema = z.object({
  type: z.enum(["dark", "light", "system"], {
    required_error: "You need to theme.",
  }),
})

const items = [
  { id: "radio-light", value: "light", label: "light", image: "/ui-light.webp" },
  { id: "radio-dark", value: "dark", label: "dark", image: "/ui-dark.webp" },
  { id: "radio-system", value: "system", label: "system", image: "/ui-system.webp" },
];

export default function PreferencesSettings() {
  const { setTheme, theme } = useTheme()
  const form = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema),
    defaultValues: {
      type: "system",
    }
  })

  function onSubmit(values: z.infer<typeof FormSchema>) {
    try {
      setTheme(values.type)
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
      <form onSubmit={form.handleSubmit(onSubmit)} className="w-2/3 space-y-6">
        <FormField
          control={form.control}
          name="type"
          render={({ field }) => (
            <FormItem className="space-y-3">
              <FormLabel>Choose a theme</FormLabel>
              <FormControl>
                <RadioGroup
                  onValueChange={field.onChange}
                  defaultValue={field.value}
                  className="flex flex-wrap gap-3"
                >
                  {items.map((item) => (
                    <FormItem 
                      key={item.id}
                      className="flex items-center space-x-3 space-y-0">
                      <FormControl>
                        <RadioGroupItem 
                          className="peer sr-only after:absolute after:inset-0 peer-checked:border"
                          value={item.value} />
                      </FormControl>
                      <FormLabel className="font-normal">
                      <Image
                        src={item.image}
                        alt={item.label}
                        width={88}
                        height={70}
                        className="relative cursor-pointer overflow-hidden rounded-lg border border-input shadow-sm shadow-black/5 outline-offset-2 transition-colors peer-[:focus-visible]:outline peer-[:focus-visible]:outline-2 peer-[:focus-visible]:outline-ring/70 peer-data-[disabled]:cursor-not-allowed peer-data-[state=checked]:border-ring peer-data-[state=checked]:bg-accent peer-data-[disabled]:opacity-50"
                      />
                      <span className="group mt-2 flex items-center gap-1 peer-data-[state=unchecked]:text-muted-foreground/70">
                        {theme === item.value ? (
                          <Check
                            size={16}
                            strokeWidth={2}
                            className="peer-data-[state=unchecked]:group-[]:hidden"
                            aria-hidden="true"
                          />
                          )
                          : (
                            <Minus
                              size={16}
                              strokeWidth={2}
                              className="peer-data-[state=checked]:group-[]:hidden"
                              aria-hidden="true"
                            />
                          )
                      }
                        <span className="text-xs font-medium">{item.label}</span>
                      </span>
                      </FormLabel>
                    </FormItem>
                  ))}
                </RadioGroup>
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <Button type="submit">Save</Button>
      </form>
    </Form>
  )
}
