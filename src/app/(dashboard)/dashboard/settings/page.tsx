import React, { Suspense } from 'react'
import { SettingsContent } from './components/settings-content'

import type { Metadata } from 'next'


export const metadata : Metadata = {
   title: 'Settings'
}

const SettingsPage = () => {
  return (
    <Suspense>
      <SettingsContent />
    </Suspense>
  )
}

export default SettingsPage