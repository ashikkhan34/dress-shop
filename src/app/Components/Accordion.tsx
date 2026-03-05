"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";

type AccordionItem = {
  id: number;
  title: string;
  content: string;
};

const accordionData: AccordionItem[] = [
  {
    id: 1,
    title: "What types of dresses do you offer?",
    content:
      "We offer casual, formal, party, and seasonal dresses designed with premium fabrics and modern styles.",
  },
  {
    id: 2,
    title: "Do you provide international shipping?",
    content:
      "Yes, we provide worldwide shipping with secure packaging and fast delivery options.",
  },
  {
    id: 3,
    title: "What is your return policy?",
    content:
      "You can return unused items within 7 days of delivery with original packaging intact.",
  },
];

const Accordion = () => {
  const [activeId, setActiveId] = useState<number | null>(null);

  const toggleAccordion = (id: number) => {
    setActiveId(activeId === id ? null : id);
  };

  return (
    <section className="max-w-4xl mx-auto px-6 py-16">
      <h2 className="text-3xl font-bold text-center mb-10">
        Frequently Asked Questions
      </h2>

      <div className="space-y-4">
        {accordionData.map((item) => {
          const isOpen = activeId === item.id;

          return (
            <div
              key={item.id}
              className="border border-blue-700 rounded-2xl shadow-sm bg-white overflow-hidden"
            >
              {/* Header */}
              <button
                onClick={() => toggleAccordion(item.id)}
                className="w-full flex justify-between items-center px-6 py-4 text-left font-medium text-lg"
              >
                {item.title}

                <ChevronDown
                  className={`transition-transform duration-300 ${
                    isOpen ? "rotate-180" : ""
                  }`}
                />
              </button>

              {/* Content */}
              <div
                className={`px-6 transition-all duration-300 ease-in-out ${
                  isOpen
                    ? "max-h-40 py-4 opacity-100"
                    : "max-h-0 overflow-hidden opacity-0"
                }`}
              >
                <p className="text-gray-600 leading-relaxed">{item.content}</p>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default Accordion;
