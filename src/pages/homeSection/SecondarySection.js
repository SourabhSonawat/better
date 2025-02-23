// import { useState } from "react";
// import { Star } from "lucide-react";
// import { image } from "framer-motion/client";
// import photo1 from "../../assest/secondary/photo1.jpg";
// import photo2 from "../../assest/secondary/photo2.jpg";
// import photo3 from "../../assest/secondary/photo3.jpg";

// export default function SecondarySection() {
//   const testimonials = [
//     {
//       name: "Sourabh ",
//       text: "Better made my mortgage process so smooth and stress-free. The team was amazing!",
//       image: photo1,
//     },
//     {
//       name: "Vikas",
//       text: "I refinanced my home with Better, and it was the easiest process ever. Highly recommend!",
//       image: photo2,
//     },
//     {
//       name: "Priti",
//       text: "I used Better three years ago for my primary residence and just now for my vacation home. Very simple process. Each time it took about two weeks to close.",
//       image: photo3,
//     },
//   ];

//   const [selectedTestimonial, setSelectedTestimonial] = useState(
//     testimonials[0]
//   );

//   return (
//     <div className="flex flex-col md:flex-row items-center justify-evenly pl-40  pt-16 gap-10 px-6 py-16 bg-[#FAF8F6]">
//       <div className="flex flex-col relative w-full md:w-1/3">
//         <img
//           src={selectedTestimonial.image}
//           alt="Customer Testimonial"
//           className=" rounded-2xl w-[341px] h-[506px]"
//         />
//         <div className="absolute bottom-0 left-0 w-[341px] bg-black bg-opacity-60 text-white p-4 rounded-b-2xl">
//           <p className="text-lg font-light">"{selectedTestimonial.text}"</p>
//           <p className="mt-2 text-sm opacity-80">
//             — {selectedTestimonial.name}, Better Mortgage customer
//           </p>
//         </div>
//         <div className="absolute -bottom-14 left-0 mt-6 flex space-x-4">
//           {testimonials.map((person) => (
//             <button
//               key={person.name}
//               onClick={() => setSelectedTestimonial(person)}
//               className={`px-4 py-2 rounded-full border ${
//                 selectedTestimonial.name === person.name
//                   ? "text-green-700 font-bold border-2 border-green-700"
//                   : "border-gray-400 font-bold border-2 text-gray-700 hover:bg-gray-200"
//               } transition-all`}
//             >
//               {person.name}
//             </button>
//           ))}
//         </div>
//       </div>

//       <div className="text-center ml-40 md:text-left md:w-1/2">
//         <h2 className="text-6xl font-semiboldt- text-gray-900">
//           Find out why
//           <br />
//           we’re better.
//         </h2>

//         <button className="mt-6 bg-[#003C2F] text-white px-6 py-3 rounded-full text-lg font-semibold hover:bg-[#002a1c] transition-all">
//           See all our stories
//         </button>

//         <div className="flex items-center gap-2 mt-4 text-gray-700">
//           <Star
//             className="text-green-600"
//             fill="currentColor"
//             strokeWidth={0}
//           />
//           <span className="text-sm font-semibold">Trustpilot</span>
//           <span className="text-sm">Excellent</span>
//           <span className="text-sm opacity-80">4.4 out of 5</span>
//         </div>
//       </div>
//     </div>
//   );
// }

import { useState } from "react";
import { Star } from "lucide-react";
import photo1 from "../../assest/secondary/photo1.jpg";
import photo2 from "../../assest/secondary/photo2.jpg";
import photo3 from "../../assest/secondary/photo3.jpg";

export default function SecondarySection() {
  const testimonials = [
    {
      name: "Sourabh",
      text: "Better made my mortgage process so smooth and stress-free. The team was amazing!",
      image: photo1,
    },
    {
      name: "Vikas",
      text: "I refinanced my home with Better, and it was the easiest process ever. Highly recommend!",
      image: photo2,
    },
    {
      name: "Priti",
      text: "I used Better three years ago for my primary residence and just now for my vacation home. Very simple process. Each time it took about two weeks to close.",
      image: photo3,
    },
  ];

  const [selectedTestimonial, setSelectedTestimonial] = useState(
    testimonials[0]
  );

  return (
    <div className="flex flex-col md:flex-row items-center justify-evenly px-6 py-16 bg-[#FAF8F6] gap-10">
      <div className="flex flex-col relative w-full md:w-1/3">
        <img
          src={selectedTestimonial.image}
          alt="Customer Testimonial"
          className="rounded-2xl w-full max-w-[341px] h-auto md:h-[506px]"
        />
        <div className="absolute bottom-0 left-0 w-full max-w-[341px] bg-black bg-opacity-60 text-white p-4 rounded-b-2xl">
          <p className="text-lg font-light">"{selectedTestimonial.text}"</p>
          <p className="mt-2 text-sm opacity-80">
            — {selectedTestimonial.name}, Better Mortgage customer
          </p>
        </div>
        <div className="absolute -bottom-14  left-7 mt-6 flex space-x-4">
          {testimonials.map((person) => (
            <button
              key={person.name}
              onClick={() => setSelectedTestimonial(person)}
              className={`px-4 py-2 rounded-full border ${
                selectedTestimonial.name === person.name
                  ? "text-green-700 font-bold border-2 border-green-700"
                  : "border-gray-400 font-bold border-2 text-gray-700 hover:bg-gray-200"
              } transition-all`}
            >
              {person.name}
            </button>
          ))}
        </div>
      </div>

      <div className="text-center md:text-left w-full md:w-1/2">
        <h2 className="text-4xl md:text-6xl pt-4 font-semibold text-gray-900">
          Find out why
          <br />
          we’re better.
        </h2>

        <button className="mt-6 bg-[#003C2F] text-white px-6 py-3 rounded-full text-lg font-semibold hover:bg-[#002a1c] transition-all">
          See all our stories
        </button>

        <div className="flex items-center justify-center md:justify-start gap-2 mt-4 text-gray-700">
          <Star
            className="text-green-600"
            fill="currentColor"
            strokeWidth={0}
          />
          <span className="text-sm font-semibold">Trustpilot</span>
          <span className="text-sm">Excellent</span>
          <span className="text-sm opacity-80">4.4 out of 5</span>
        </div>
      </div>
    </div>
  );
}
