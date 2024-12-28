'use client'
import React, { lazy, useEffect, useState } from 'react'
import { keepPreviousData, useQuery } from '@tanstack/react-query'
import {   
   flexRender,
   getCoreRowModel,
   useReactTable,
   getSortedRowModel,
   type SortingState,
   type ColumnFiltersState,
   type ColumnDef
} from '@tanstack/react-table'
import { Input } from '@/components/ui/input'
import { toast } from 'sonner'
import { useDebounce } from '@/hooks/use-debounce'
import { Checkbox } from '@/components/ui/checkbox'

import {
   Table,
   TableBody,
   TableCell,
   TableHead,
   TableHeader,
   TableRow,
 } from "@/components/ui/table"

import { ArrowUpDownIcon, Search } from 'lucide-react'
import { Button } from "@/components/ui/button"
import { TableSkeleton } from '@/components/skeletons/table-skeleton'

const DeleteDialog = lazy(() => import('./delete-dialog'))
const UpdateModal = lazy(() => import('./update-modal'))
const AddModal = lazy(() => import('./add-dialog'))


export const getProducts = async (
   limit: number = 10,
   skip: number = 0,
   search: string = ''
 ): Promise<ProductsResponse> => {
   const response = await fetch(
    `https://dummyjson.com/products/search?q=${search}&limit=${limit}&skip=${skip}&select=id,title,price,stock`
   );
   return await response.json() as ProductsResponse;
 };


export type Product = {
   id: string
   title: string
   price: number
   stock: number
}

export type ProductsResponse = {
   products: Array<Product>;
   total: number;
   skip: number;
   limit: number;
}


const columns : ColumnDef<Product>[] = [
  {
    id: "select",
    header: ({ table }) => (
      <Checkbox
        checked={
          table.getIsAllPageRowsSelected() ||
          (table.getIsSomePageRowsSelected() && "indeterminate")
        }
        onCheckedChange={(value) => table.toggleAllPageRowsSelected(!!value)}
        aria-label="Select all"
      />
    ),
    cell: ({ row }) => (
      <Checkbox
        checked={row.getIsSelected()}
        onCheckedChange={(value) => row.toggleSelected(!!value)}
        aria-label="Select row"
      />
    ),
  },
   {
      accessorKey: 'title',
      header: ({ column }) => {
         return (
            <Button
              variant="ghost"
              onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
            >
              Title
              <ArrowUpDownIcon className="h-4 w-4 ml-2" />
            </Button>
          )
      },
   },
   {
      accessorKey: 'stock',
      header: ({ column }) => {
         return (
            <Button
              variant="ghost"
              onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
            >
              Stock
              <ArrowUpDownIcon className="h-4 w-4 ml-2" />
            </Button>
          )
      },
   },
   {
      header: ({ column }) => {
         return (
            <Button
              variant="ghost"
              onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
            >
              Price (USD)
              <ArrowUpDownIcon className="h-4 w-4 ml-2" />
            </Button>
          )
      },
      accessorKey: 'price',
      cell: ({ row }) => {
         const amount = parseFloat(row.original.price.toString())
         const formatted = new Intl.NumberFormat("en-US", {
         style: "currency",
         currency: "USD",
         }).format(amount)
   
         return <div>{formatted}</div>
      } 
   },
   {  
      header: 'Actions',
      id: 'actions',
      cell: ({ row }) => {
         const product = row.original

         const handleDelete = (id: string ) => {
            if(!id){
               toast.error('Product ID is not found')
               return
            }

            toast.promise(fetch(`https://dummyjson.com/products/${id}`, {
               method: 'DELETE',
             }), {
               error: `Failed to delete product (${id})`,
               success: `Product deleted successfully (${id})`,
               loading: `Deleting product (${id})`
             })
         }

         return (
          <>
            <div className="flex flex-wrap gap-1 items-center">
              <DeleteDialog deleteFn={() => handleDelete(product.id)} />
              <UpdateModal product={product} />
            </div>
          </>
         )
      }
   }
] 


function DataTable() {
   const [sorting, setSorting] = useState<SortingState>([])
   const [columnFilters, setColumnFilters] = useState<ColumnFiltersState>([])
   const [pagination, setPagination] = useState({ pageIndex: 0, pageSize: 10 })
   const [rowSelection, setRowSelection] = useState({})
   const [globalFilter, setGlobalFilter] = useState('')
   const debouncedGlobalFilter = useDebounce(globalFilter, 300)

   const { data, isLoading, error } = useQuery({
      queryKey: ['products', pagination.pageIndex, pagination.pageSize, debouncedGlobalFilter],
      queryFn: () => getProducts(pagination.pageSize, pagination.pageIndex * pagination.pageSize, debouncedGlobalFilter),
      placeholderData: keepPreviousData
   })

   useEffect(() => {
    if(debouncedGlobalFilter){
      setPagination({ pageIndex: 0, pageSize: 10 })
    }
   }, [debouncedGlobalFilter])
   
   const table = useReactTable({
      data: data?.products ?? [],
      columns,
      getCoreRowModel: getCoreRowModel(),
      getSortedRowModel: getSortedRowModel(),
      onSortingChange: setSorting,
      onColumnFiltersChange: setColumnFilters,
      onPaginationChange: setPagination,
      onGlobalFilterChange: setGlobalFilter,
      onRowSelectionChange: setRowSelection,
      state: {
        sorting,
        columnFilters,
        pagination,
        globalFilter,
        rowSelection  
      },
      pageCount: data ? Math.ceil(data.total / pagination.pageSize) : -1,
      manualPagination: true,
   })
   
   if (isLoading) return <TableSkeleton />
   if (error) return <div className="text-red-500 text-center">Error fetching products</div>
   
  return (
   <div className="space-y-4">
      <div className="flex items-center justify-between flex-wrap">
        <div>
          <h1 className="text-2xl font-bold">Product list</h1>
        </div>

      <div className="flex flex-wrap gap-2 items-center">
        <div className="space-y-2">
          <div className="relative">
            <Input 
              placeholder="Search products..."
              value={globalFilter}
              onChange={(event) => setGlobalFilter(event.target.value)}
              id="input-26" 
              className="peer ps-9" 
              type="search" />
            <div className="pointer-events-none absolute inset-y-0 start-0 flex items-center justify-center ps-3 text-muted-foreground/80 peer-disabled:opacity-50">
              <Search size={16} strokeWidth={2} />
            </div>
          </div>
        </div>
        <AddModal />
      </div>

      </div>
      {debouncedGlobalFilter && (
        <p className="text-sm text-muted-foreground">
          Showing results for &quot;{debouncedGlobalFilter}&ldquot; (Total: {data?.total || 0})
        </p>
      )}
      <div className="rounded-md border">
        <Table>
          <TableHeader>
            {table.getHeaderGroups().map((headerGroup) => (
              <TableRow key={headerGroup.id}>
                {headerGroup.headers.map((header) => (
                  <TableHead key={header.id}>
                    {header.isPlaceholder ? null : flexRender(
                      header.column.columnDef.header,
                      header.getContext()
                    )}
                  </TableHead>
                ))}
              </TableRow>
            ))}
          </TableHeader>
          <TableBody>
            {table.getRowModel().rows?.length ? (
              table.getRowModel().rows.map((row) => (
                <TableRow
                  key={row.id}
                  data-state={row.getIsSelected() && "selected"}
                >
                  {row.getVisibleCells().map((cell) => (
                    <TableCell key={cell.id}>
                      {flexRender(cell.column.columnDef.cell, cell.getContext())}
                    </TableCell>
                  ))}
                </TableRow>
              ))
            ) : (
              <TableRow>
                <TableCell colSpan={columns.length} className="h-24 text-center">
                  No results.
                </TableCell>
              </TableRow>
            )}
          </TableBody>
        </Table>
      </div>
      <div className="flex items-center justify-between">
         <p className="text-sm text-muted-foreground">
            Showing {data?.products.length} of {data?.total} item(s)
         </p>
         <div className="flex items-center space-x-2 py-4">
           <Button
             variant="outline"
             size="sm"
             onClick={() => table.previousPage()}
             disabled={!table.getCanPreviousPage()}
           >
             Previous
           </Button>
           <Button
             variant="outline"
             size="sm"
             onClick={() => table.nextPage()}
             disabled={!table.getCanNextPage()}
           >
             Next
           </Button>
         </div>
      </div>   
    </div>
  )
}

export default DataTable
