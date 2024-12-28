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
import { Pencil } from "lucide-react"

import type { Product } from "./data-table"

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

export default function UpdateDialog({
   product
}: {
   product: Product
}) {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button 
            size={'icon'}
            variant="ghost">
            <Pencil className="size-4" />
            <span className="sr-only">Update data</span>
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Edit product</DialogTitle>
        </DialogHeader>
        <div className="py-4">
         <UpdateForm product={product}/>
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

export  function UpdateForm({
   product
}: {
   product : Product
}) {

  const form = useForm < z.infer < typeof formSchema >> ({
    resolver: zodResolver(formSchema),
   defaultValues: product
  })

  const handleUpdate = (product: Product) => {
   if(!product.id){
      toast.error('Product is not found')
      return
   }

   toast.promise(fetch(`https://dummyjson.com/products/${product.id}`, {
      method: 'PUT',
      body: JSON.stringify(product)
   }), {
      error: `Failed to update product (${product.id})`,
      success: `Product updated successfully (${product.id})`,
      loading: `Updating product (${product.id})`
   })
}

  function onSubmit(values: z.infer < typeof formSchema > ) {
    handleUpdate({ 
      id: product.id,
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
        <Button type="submit">Update</Button>
      </form>
    </Form>
  )
}