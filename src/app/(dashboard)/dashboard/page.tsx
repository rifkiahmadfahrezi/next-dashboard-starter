import React from 'react'
import type { Metadata } from "next"

import OverviewCards from './components/overview-cards'
import { ChartArea } from '@/components/charts/chart-area'
import { ChartBar } from '@/components/charts/chart-bar'
import { ChartLine } from '@/components/charts/chart-line'
import { ChartPie } from '@/components/charts/chart-pie'

export const metadata: Metadata = {
  title: "Dashboard"
}

const DashboardPage = () => {
  return (
   <>
      <OverviewCards />
      <div className="my-6">
        <h1 className='text-xl md:text-2xl font-bold'>Charts example</h1>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 2xl:grid-cols-3 gap-4">
        <ChartLine />
        <ChartBar />
        <ChartArea />
        <ChartPie />
      </div>
   </>
  )
}

export default DashboardPage