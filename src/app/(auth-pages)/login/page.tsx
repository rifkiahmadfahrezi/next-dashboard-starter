import { LoginForm } from "@/components/login-form"
import Image from "next/image"

import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Login"
}

export default function LoginPage() {
  return (
    <div className="min-h-screen grid grid-cols-1 md:grid-cols-2">
      <div className="flex items-center justify-center p-8 md:p-12">
        <LoginForm />
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
