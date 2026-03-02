import { ChevronRight } from "lucide-react";
import React from "react";

const offers = [
  {
    id: 1,
    title: "Summer Sale",
    description: "Get up to 50% off on summer collection!",
  },
  {
    id: 2,
    title: "Buy One Get One Free",
    description: "Buy one item and get another one for free!",
  },
  {
    id: 3,
    title: "Free Shipping",
    description: "Enjoy free shipping on orders over $50!",
  },
];

const Offer = () => {
  return (
    <div className="bg-[#4E699C] py-8 px-4 ">
      <div className="container mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 relative">
        {offers.map((offer, index) => (
          <div
            key={offer.id}
            className="rounded p-4 relative flex flex-col justify-between"
          >
            <h3 className="font-bold">{offer.title}</h3>
            <p className="text-sm text-gray-200">{offer.description}</p>
            <button className="flex items-center text-white font-semibold cursor-pointer mt-2">
              Shop Now <ChevronRight className="ml-1" />
            </button>

            {/* Vertical line except last item */}
            {index !== offers.length - 1 && (
              <div className=" hidden md:block absolute top-0 right-0 h-full w-[1px] bg-gray-400"></div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Offer;
