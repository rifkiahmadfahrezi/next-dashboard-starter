import { RegisterForm } from "@/components/register-form"
import Image from "next/image"

import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Register"
}

export default function RegisterPage() {
  return (
    <div className="min-h-screen grid grid-cols-1 md:grid-cols-2">
      <div className="flex items-center justify-center p-8 md:p-12">
        <RegisterForm />
      </div>
      <div className="hidden md:block relative">
        <Image
          src="https://images.unsplash.com/photo-1579548122080-c35fd6820ecb"
          alt="Register"
          fill
          className="object-cover"
          priority
        />
      </div>
    </div>
  )
}
