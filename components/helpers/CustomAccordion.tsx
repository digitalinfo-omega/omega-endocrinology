"use client";

import { useState } from "react";
import { Plus, Minus } from "lucide-react";

interface Item {
  id: string | number;
  question: string;
  answer: string;
}

interface AccordionProps {
  items: Item[];
}

export default function CustomAccordion({ items }: AccordionProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <div className="divide-y border-t">
      {items.map((item, index) => {
        const isOpen = openIndex === index;

        return (
          <div key={item.id} className="py-5">
            {/* Header */}
            <button
              onClick={() => setOpenIndex(isOpen ? null : index)}
              className="flex w-full items-center justify-between text-left"
            >
              <span className="text-[18px] font-medium">
                {index + 1}. {item.question}
              </span>

              <span className="text-accent text-xl font-light">
                {isOpen ? <Minus /> : <Plus />}
              </span>
            </button>

            {/* Content */}
            <div
              className={`
                grid transition-[grid-template-rows] duration-300 ease-out
                ${isOpen ? "grid-rows-[1fr]" : "grid-rows-[0fr]"}
              `}
            >
              <div className="overflow-hidden">
                <p className="pt-4 text-[18px] text-gray-600 leading-relaxed">
                  {item.answer}
                </p>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
