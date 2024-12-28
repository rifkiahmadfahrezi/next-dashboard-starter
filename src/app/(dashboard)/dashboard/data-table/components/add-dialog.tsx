'use client'

import { Button } from "@/components/ui/button"
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { Input } from "@/components/ui/input"
import { Plus } from "lucide-react"

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
   FormField,
   FormItem,
   FormLabel,
   FormMessage,
 } from "@/components/ui/form"

export default function AddDialog() {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button >
            <Plus className="size-4" />
            Add
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Add product</DialogTitle>
        </DialogHeader>
        <div className="py-4">
         <AddForm />
        </div>
      </DialogContent>
    </Dialog>
  )
}

const formSchema = z.object({
  title: z.string().min(1),
  stock: z.coerce.number().min(1).max(9999),
  price: z.coerce.number().min(1)
});

export  function AddForm() {

  const form = useForm < z.infer < typeof formSchema >> ({
    resolver: zodResolver(formSchema),
  })

  const handleAdd = (
   product: {
      title: string
      price: number
      stock: number
   }) => {
   toast.promise(fetch(`https://dummyjson.com/products/add`, {
      method: 'POST',
      body: JSON.stringify(product)
   }), {
      error: `Failed to add product`,
      success: `Product added successfully`,
      loading: `Adding product ...`
   })
}

  function onSubmit(values: z.infer < typeof formSchema > ) {
    handleAdd({ 
      title: values.title,
      stock: values.stock,
      price: values.price,
    })
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-3 mx-auto">
        
        <FormField
          control={form.control}
          name="title"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Title</FormLabel>
              <FormControl>
                <Input 
                placeholder=""
                
                type="text"
                {...field} />
              </FormControl>
              
              <FormMessage />
            </FormItem>
          )}
        />
        
        <FormField
          control={form.control}
          name="stock"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Stock</FormLabel>
              <FormControl>
                <Input 
                placeholder=""
                
                type="number"
                {...field} />
              </FormControl>
              
              <FormMessage />
            </FormItem>
          )}
        />
        
        <FormField
          control={form.control}
          name="price"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Price</FormLabel>
              <FormControl>
                <Input 
                placeholder=""
                
                type="number"
                {...field} />
              </FormControl>
              
              <FormMessage />
            </FormItem>
          )}
        />
        <Button type="submit">Add</Button>
      </form>
    </Form>
  )
}