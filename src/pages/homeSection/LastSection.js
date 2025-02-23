// import React from "react";
// import firstHome from "../../assest/lastSection/first-home.webp";
// import oneDay from "../../assest/lastSection/one-day-mortgage.webp";
// import better from "../../assest/lastSection/better-heloc.webp";
// import insurance from "../../assest/lastSection/insurance.webp";

// const cards = [
//   {
//     title: "Buying your first home with Better",
//     description: "",
//     image: firstHome,
//   },
//   {
//     title: "One Day Mortgage",
//     description:
//       "Kick your home loan into hyperdrive. Going from locked rate to Commitment Letter takes weeks for traditional lenders. We do it in a single day.",
//     image: oneDay,
//   },
//   {
//     title: "Better HELOC",
//     description:
//       "Introducing One Day HELOC—your express lane to getting cash from your home with our Home Equity Line of Credit. Access up to 90% of your home equity as cash in as little as 7 days.",
//     image: better,
//   },
//   {
//     title: "Insurance",
//     description: "",
//     image: insurance,
//   },
// ];

// export default function LastSection() {
//   return (
//     <section className="bg-[#FAF8F6] w-[70%] mx-auto py-16 px-6">
//       {/* Section Heading */}
//       <div className="text-center mb-8">
//         <h2 className="text-4xl font-bold text-gray-900">
//           Got questions? <br /> We've got answers
//         </h2>
//       </div>

//       {/* Cards Layout */}
//       <div className="grid grid-cols-10 gap-6 mt-12">
//         {cards.map((card, index) => (
//           <div
//             key={index}
//             className={`
//               ${index % 2 === 0 ? "col-span-3" : "col-span-7"}
//               ${index >= 2 ? "md:col-span-7 md:order-last" : ""}
//               bg-[#EAF4EE] p-6 rounded-xl flex flex-col md:flex-row gap-4 items-center relative group
//             `}
//           >
//             <div className="flex-1">
//               <h3 className="text-xl font-semibold text-gray-900">
//                 {card.title}
//               </h3>
//               {card.description && (
//                 <p className="text-gray-700 mt-2 text-sm">{card.description}</p>
//               )}
//             </div>
//             {card.image && (
//               <img
//                 src={card.image}
//                 alt={card.title}
//                 className="rounded-lg w-full md:w-40 h-28 object-cover"
//               />
//             )}
//             {/* Arrow Button */}
//             <button
//               aria-label={`Read more about ${card.title}`}
//               className="absolute top-6 right-6 text-green-700 text-xl opacity-70 group-hover:opacity-100 transition-opacity"
//             >
//               →
//             </button>
//           </div>
//         ))}
//       </div>
//     </section>
//   );
// }
import React from "react";
import firstHome from "../../assest/lastSection/first-home.webp";
import oneDay from "../../assest/lastSection/one-day-mortgage.webp";
import better from "../../assest/lastSection/better-heloc.webp";
import insurance from "../../assest/lastSection/insurance.webp";

const cards = [
  {
    title: "Buying your first home with Better",
    description: "",
    image: firstHome,
  },
  {
    title: "One Day Mortgage",
    description:
      "Kick your home loan into hyperdrive. Going from locked rate to Commitment Letter takes weeks for traditional lenders. We do it in a single day.",
    image: oneDay,
  },
  {
    title: "Insurance",
    description: "",
    image: insurance,
  },
  {
    title: "Better HELOC",
    description:
      "Introducing One Day HELOC—your express lane to getting cash from your home with our Home Equity Line of Credit. Access up to 90% of your home equity as cash in as little as 7 days.",
    image: better,
  },
];

export default function LastSection() {
  return (
    <section className="bg-[#FAF8F6] w-[90%] lg:w-[70%] mx-auto py-16 px-4 sm:px-6">
      {/* Section Heading */}
      <div className="text-center mb-8">
        <h2 className="text-3xl sm:text-4xl font-bold text-gray-900">
          Got questions? <br /> We've got answers
        </h2>
      </div>

      {/* Cards Layout */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-10 gap-6 mt-12">
        {cards.map((card, index) => (
          <div
            key={index}
            className={`
              ${index % 2 === 0 ? "lg:col-span-3" : "lg:col-span-7"}
              ${index >= 2 ? "lg:order-last" : ""}
              bg-[#EAF4EE] p-6 rounded-xl flex flex-col lg:flex-row gap-4 items-center relative group
            `}
          >
            <div className="flex-1 text-center lg:text-left">
              <h3 className="text-xl font-semibold text-gray-900">
                {card.title}
              </h3>
              {card.description && (
                <p className="text-gray-700 mt-2 text-sm">{card.description}</p>
              )}
            </div>
            {card.image && (
              <img
                src={card.image}
                alt={card.title}
                className="rounded-lg w-full sm:w-40 h-28 object-cover"
              />
            )}
            {/* Arrow Button */}
            <button
              aria-label={`Read more about ${card.title}`}
              className="absolute top-4 right-4 lg:top-6 lg:right-6 text-green-700 text-xl opacity-70 group-hover:opacity-100 transition-opacity"
            >
              →
            </button>
          </div>
        ))}
      </div>
    </section>
  );
}
