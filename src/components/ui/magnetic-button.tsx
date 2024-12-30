"use client"; // @NOTE: add in case you are using Next.js

import { useRef, useState } from "react";

import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

type ButtonMagneticProps = React.ComponentProps<"button">;


export default function ButtonMagnetic({ className, children }: ButtonMagneticProps) {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const ref = useRef<HTMLButtonElement | null>(null);

  function handleMouseMove(e: React.MouseEvent) {
    const { clientX, clientY } = e;
    if (!ref.current) return;
    const { height, width, left, top } = ref.current.getBoundingClientRect();

    const middleX = clientX - (left + width / 2);
    const middleY = clientY - (top + height / 2);

    setPosition({ x: middleX, y: middleY });
  }

  function handleMouseLeave() {
    setPosition({ x: 0, y: 0 });
  }

  const { x, y } = position;

  return (
    <motion.button
      ref={ref}
      className={cn(
        "relative bg-foreground rounded-md px-4 py-2 text-sm text-background",
        className,
      )}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      animate={{ x, y }}
      transition={{
        type: "spring",
        damping: 15,
        stiffness: 150,
        mass: 0.1,
      }}
    >
      {children}
    </motion.button>
  );
}
