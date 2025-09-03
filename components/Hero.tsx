"use client";

import { useEffect, useState } from "react";
import { PixelButton } from "./PixelComponents";
import { ChevronDown } from "lucide-react";
import { motion } from "framer-motion";

export function Hero() {
  const [typedText, setTypedText] = useState("");
  const fullText = "Full Stack Developer | Crafting Code with Precision";
  const typingSpeed = 100; // milliseconds per character

  useEffect(() => {
    if (typedText.length < fullText.length) {
      const timeout = setTimeout(() => {
        setTypedText(fullText.slice(0, typedText.length + 1));
      }, typingSpeed);
      
      return () => clearTimeout(timeout);
    }
  }, [typedText]);

  return (
    <section className="relative flex flex-col items-center justify-center min-h-[calc(100vh-4rem)] py-12 overflow-hidden pixel-dots">
      <div className="absolute inset-0 z-0">
        <div className="h-full w-full bg-[radial-gradient(circle_at_center,rgba(var(--pixel-primary),0.15),transparent_60%)]"></div>
      </div>
      
      <motion.div 
        className="max-w-7xl mx-auto px-4 relative z-10 flex flex-col items-center text-center space-y-8 md:space-y-12"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        
        <div className="space-y-4">
          <h1 className="pixel-text text-xl sm:text-2xl md:text-3xl font-bold tracking-wider text-primary">
            HELLO, I AM SANTOSH RAI.
          </h1>
          <h2 className="pixel-text text-sm sm:text-base md:text-lg">
            <span className="text-[hsl(var(--pixel-primary))]">&gt;</span> {typedText}
            <span className="animate-pulse">_</span>
          </h2>
        </div>
        
        <p className="max-w-[42rem] text-muted-foreground sm:text-lg">
          I build modern web applications with clean code and pixel-perfect design.
          Specializing in React, Next.js, and full-stack development.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4">
          <PixelButton
            onClick={() => window.open("/resume_fullstack_santosh.pdf", "_blank")}
          >
            VIEW RÉSUMÉ
          </PixelButton>
          {/* <PixelButton 
            variant="outline"
            onClick={() => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })}
          >
            CONTACT ME
          </PixelButton> */}
        </div>

      </motion.div>

      <motion.div 
        className="absolute bottom-8 w-full flex justify-center"
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1, duration: 0.5 }}
      >
        <ChevronDown 
          className="h-8 w-8 text-muted-foreground animate-bounce cursor-pointer"
          onClick={() => document.getElementById("projects")?.scrollIntoView({ behavior: "smooth" })}
        />
      </motion.div>
            
    </section>
  );
}