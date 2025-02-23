// export default function Footer() {
//   return (
//     <footer className="bg-[#FAF8F6] py-12 px-6 md:px-16 text-gray-800">
//       <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-8">
//         {/* Better Company Description */}
//         <div>
//           <h2 className="text-2xl font-bold text-green-700">Better</h2>
//           <p className="mt-2 text-sm text-gray-600">
//             Better is a family of companies serving all your homeownership
//             needs.
//           </p>
//           <div className="mt-4 space-y-3 text-sm">
//             <p>
//               <span className="font-semibold text-green-700">Better</span>{" "}
//               Mortgage
//             </p>
//             <p>
//               <span className="font-semibold text-green-700">Better</span> Real
//               Estate
//             </p>
//             <p>
//               <span className="font-semibold text-green-700">Better</span> Cover
//             </p>
//             <p>
//               <span className="font-semibold text-green-700">Better</span>{" "}
//               Inspect
//             </p>
//             <p>
//               <span className="font-semibold text-green-700">Better</span>{" "}
//               Settlement Services
//             </p>
//           </div>
//         </div>

//         {/* Resources */}
//         <div>
//           <h3 className="text-lg font-semibold">Resources</h3>
//           <ul className="mt-2 space-y-2 text-sm text-gray-600">
//             <li>Home affordability calculator</li>
//             <li>Mortgage calculator</li>
//             <li>Free mortgage calculator</li>
//             <li>Rent vs buy calculator</li>
//             <li>HELOC payment calculator</li>
//             <li>Buy a home</li>
//             <li>Sell a home</li>
//             <li>Get home inspection</li>
//           </ul>
//         </div>

//         {/* Company */}
//         <div>
//           <h3 className="text-lg font-semibold">Company</h3>
//           <ul className="mt-2 space-y-2 text-sm text-gray-600">
//             <li>About Us</li>
//             <li>Careers</li>
//             <li>Media</li>
//             <li>Partner With Us</li>
//             <li>Learning Center</li>
//             <li>FAQs</li>
//             <li>Investor Relations</li>
//           </ul>
//         </div>

//         {/* Contact & Legal */}
//         <div>
//           <h3 className="text-lg font-semibold">Contact Us</h3>
//           <p className="mt-2 text-sm text-gray-600">hello@better.com</p>
//           <p className="text-sm text-gray-600">415-523-8837</p>
//           <div className="mt-4">
//             <h3 className="text-lg font-semibold">Legal</h3>
//             <ul className="mt-2 space-y-2 text-sm text-gray-600">
//               <li>NMLS Consumer Access</li>
//               <li>Privacy Policy</li>
//               <li>Terms of Use</li>
//               <li>Disclosures & Licensing</li>
//               <li>Affiliated Business</li>
//               <li>Browser Disclaimer</li>
//             </ul>
//           </div>
//         </div>
//       </div>

//       {/* Footer Bottom */}
//       <div className="mt-8 flex flex-col md:flex-row items-center justify-between text-sm text-gray-500 border-t pt-6">
//         <p>© {new Date().getFullYear()} Better. All rights reserved.</p>
//         <div className="flex items-center gap-4">
//           <img
//             src="https://via.placeholder.com/30"
//             alt="Equal Housing Lender"
//             className="h-6"
//           />
//           <img
//             src="https://via.placeholder.com/30"
//             alt="Equal Housing Opportunity"
//             className="h-6"
//           />
//         </div>
//       </div>
//     </footer>
//   );
// }

export default function Footer() {
  return (
    <footer className="bg-[#FAF8F6] py-8 px-4 sm:px-6 md:px-16 text-gray-800">
      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
        {/* Better Company Description */}
        <div>
          <h2 className="text-2xl font-bold text-green-700">Better</h2>
          <p className="mt-2 text-sm text-gray-600">
            Better is a family of companies serving all your homeownership
            needs.
          </p>
          <div className="mt-4 space-y-2 text-sm">
            {[
              "Mortgage",
              "Real Estate",
              "Cover",
              "Inspect",
              "Settlement Services",
            ].map((service) => (
              <p key={service}>
                <span className="font-semibold text-green-700">Better</span>{" "}
                {service}
              </p>
            ))}
          </div>
        </div>

        {/* Resources */}
        <div>
          <h3 className="text-lg font-semibold">Resources</h3>
          <ul className="mt-2 space-y-2 text-sm text-gray-600">
            {[
              "Home affordability calculator",
              "Mortgage calculator",
              "Free mortgage calculator",
              "Rent vs buy calculator",
              "HELOC payment calculator",
              "Buy a home",
              "Sell a home",
              "Get home inspection",
            ].map((resource) => (
              <li key={resource}>{resource}</li>
            ))}
          </ul>
        </div>

        {/* Company */}
        <div>
          <h3 className="text-lg font-semibold">Company</h3>
          <ul className="mt-2 space-y-2 text-sm text-gray-600">
            {[
              "About Us",
              "Careers",
              "Media",
              "Partner With Us",
              "Learning Center",
              "FAQs",
              "Investor Relations",
            ].map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </div>

        {/* Contact & Legal */}
        <div>
          <h3 className="text-lg font-semibold">Contact Us</h3>
          <p className="mt-2 text-sm text-gray-600">hello@better.com</p>
          <p className="text-sm text-gray-600">415-523-8837</p>
          <div className="mt-4">
            <h3 className="text-lg font-semibold">Legal</h3>
            <ul className="mt-2 space-y-2 text-sm text-gray-600">
              {[
                "NMLS Consumer Access",
                "Privacy Policy",
                "Terms of Use",
                "Disclosures & Licensing",
                "Affiliated Business",
                "Browser Disclaimer",
              ].map((legal) => (
                <li key={legal}>{legal}</li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* Footer Bottom */}
      <div className="mt-8 flex flex-col sm:flex-row items-center justify-between text-sm text-gray-500 border-t pt-6">
        <p>© {new Date().getFullYear()} Better. All rights reserved.</p>
        <div className="flex items-center gap-4 mt-4 sm:mt-0">
          {[
            "https://via.placeholder.com/30",
            "https://via.placeholder.com/30",
          ].map((src, index) => (
            <img key={index} src={src} alt="Equal Housing" className="h-6" />
          ))}
        </div>
      </div>
    </footer>
  );
}
