import React from 'react'
import Footer from '@/components/footer'
import { Navbar } from '@/components/navbar/navbar'
import { cn } from "@/lib/utils";
import AnimatedGridPattern from "@/components/ui/animated-grid-pattern";

const Layout = ({
   children
}: {
   children: React.ReactNode
}) => {
  return (
   <>
   <AnimatedGridPattern
      numSquares={30}
      maxOpacity={0.1}
      duration={3}
      // repeatDelay={1}
      className={cn(
         "[mask-image:radial-gradient(500px_circle_at_center,white,transparent)]",
         "inset-x-0 inset-y-[-100%] h-[200%]",
      )}/>
   <Navbar />
   <main className="min-h-svh relative">
      {children}
   </main>
   <Footer />
   </>
  )
}

export default Layout