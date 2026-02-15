import { useEffect, useMemo, useState } from "react";

import { motion } from "framer-motion";

import { MoveRight, PhoneCall } from "lucide-react";

import { Button } from "@/components/ui/button";
import { QuotePopup } from "@/components/ui/quote-popup";

interface HeroProps {
  onQuoteClick?: () => void;
}

function Hero({ onQuoteClick }: HeroProps) {
  const [titleNumber, setTitleNumber] = useState(0);

  const titles = useMemo(
    () => ["Technology", "Solutions", "Future"],
    []
  );

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      if (titleNumber === titles.length - 1) {
        setTitleNumber(0);
      } else {
        setTitleNumber(titleNumber + 1);
      }
    }, 2000);
    return () => clearTimeout(timeoutId);
  }, [titleNumber, titles]);

  return (
    <div className="space-y-8">
      <div className="flex gap-4 flex-col">
        <div className="text-left">
          <h1 className="text-3xl md:text-7xl max-w-4xl tracking-tighter font-semibold">
            <span className="text-white">Let's Build Tomorrow's</span>
          </h1>
          <div className="relative h-20 mt-4 flex overflow-hidden">
            {titles.map((title, index) => (
              <motion.div
                key={index}
                className="absolute font-black text-3xl md:text-7xl text-white"
                initial={{ opacity: 0, y: 50 }}
                transition={{ type: "spring", stiffness: 50 }}
                animate={
                  titleNumber === index
                    ? {
                      y: 0,
                      opacity: 1,
                    }
                    : {
                      y: titleNumber > index ? -80 : 80,
                      opacity: 0,
                    }
                }
              >
                {title}
              </motion.div>
            ))}
          </div>
        </div>

        <p className="text-lg md:text-xl leading-relaxed tracking-tight text-white max-w-2xl text-left">
          We deliver cutting-edge solutions tailored to your business, combining innovation, efficiency, and reliability
        </p>
      </div>

      <div className="grid grid-cols-2 sm:flex sm:flex-row gap-4">
        <button className="px-6 sm:px-8 py-3 sm:py-4 bg-white text-black rounded-lg font-semibold text-sm sm:text-lg hover:bg-gray-200 transition-colors">
          Our Services
        </button>

        <button
          onClick={onQuoteClick}
          className="px-6 sm:px-8 py-3 sm:py-4 border-2 border-white text-white rounded-lg font-semibold text-sm sm:text-lg hover:bg-blue-50 hover:text-black transition-colors"
        >
          Contact Us
        </button>
      </div>

    </div>
  );
}

export { Hero };
