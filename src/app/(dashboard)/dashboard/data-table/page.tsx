import React from 'react'
import type { Metadata } from 'next'
import DataTable from './components/data-table'

export const metadata : Metadata = {
   title: 'Data table'
}

const DataTablePage = () => {
  return (
   <>
      <DataTable />
   </>
  )
}

export default DataTablePage