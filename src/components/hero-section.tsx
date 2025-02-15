import { motion, useAnimate } from "framer-motion";
import { useEffect } from "react";
import HeroBackground from "./hero-background";

export default function HeroSection() {
  const [scope, animate] = useAnimate();

  useEffect(() => {
    const animateText = async () => {
      // Reset animations first
      await animate("h1 span", { opacity: 0, y: 20 }, { duration: 0 });
      await animate("h2", { opacity: 0, y: 20 }, { duration: 0 });
      await animate("p", { opacity: 0, y: 20 }, { duration: 0 });

      // Start animations
      await animate(
        "h1 span",
        { opacity: 1, y: 0 },
        { duration: 0.05, delay: (i: number) => i * 0.05 }
      );
      await animate("h2", { opacity: 1, y: 0 }, { duration: 0.3, delay: 0.1 });
      await animate("p", { opacity: 1, y: 0 }, { duration: 0.3, delay: 0.1 });
    };

    animateText();
  }, [animate]);

  const text = "Hello, I'm Arnav Singh";
  const nameStart = text.indexOf("Arnav Singh");

  return (
    <section id="about" className="min-h-screen relative overflow-visible">
      <HeroBackground />

      {/* Content */}
      <div className="container mx-auto px-4 flex items-center justify-center min-h-screen">
        <div className="text-center space-y-8" ref={scope}>
          <h1 className="text-5xl md:text-7xl font-bold tracking-tight leading-snug">
            <span className="inline-block">
              {text
                .slice(0, nameStart)
                .split("")
                .map((char, i) => (
                  <motion.span
                    key={i}
                    initial={{ opacity: 0, y: 20 }}
                    className="inline-block"
                  >
                    {char === " " ? "\u00A0" : char}
                  </motion.span>
                ))}

              <span className="relative inline-block bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 bg-clip-text text-transparent whitespace-nowrap pb-1">
                {text
                  .slice(nameStart)
                  .split("")
                  .map((char, i) => (
                    <motion.span
                      key={i}
                      initial={{ opacity: 0, y: 20 }}
                      className="inline-block"
                    >
                      {char === " " ? "\u00A0" : char}
                    </motion.span>
                  ))}
              </span>
            </span>
          </h1>

          <motion.h2
            className="text-2xl md:text-3xl text-muted-foreground font-light"
            initial={{ opacity: 0, y: 20 }}
          >
            Software Engineer
          </motion.h2>

          <motion.p
            className="text-lg text-muted-foreground max-w-xl mx-auto font-light"
            initial={{ opacity: 0, y: 20 }}
          >
            Based in Calgary, AB with over 5 years of experience building
            scalable web applications and distributed systems.
          </motion.p>
        </div>
      </div>
    </section>
  );
}
