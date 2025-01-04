import React from 'react'
import Image from 'next/image'
import { ForgotPasswordForm } from '@/components/forms/forgot-password-form'

import type { Metadata } from 'next'

export const metadata: Metadata = {
   title: 'Forgot Password',
}

const ForgotPasswordPage = () => {
  return (
    <div className="min-h-screen grid grid-cols-1 md:grid-cols-2">
      <div className="flex items-center justify-center p-8 md:p-12">
         <ForgotPasswordForm />
      </div>
      <div className="hidden md:block relative">
      <Image
         src="https://images.unsplash.com/photo-1497704628914-8772bb97f450"
         alt="Sign In"
         fill
         className="object-cover"
         priority
      />
      </div>
   </div>
  )
}

export default ForgotPasswordPage