import React from 'react'
import type { Metadata } from "next"

import OverviewCards from './components/overview-cards'

export const metadata: Metadata = {
  title: "Overview"
}

const DashboardPage = () => {
  return (
   <>
      <OverviewCards />
   </>
  )
}

export default DashboardPage