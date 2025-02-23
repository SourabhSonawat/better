import { useState } from "react";
import { motion } from "framer-motion";
import { ChevronRight, Phone, Menu } from "lucide-react";

function Header() {
  const [openDropdown, setOpenDropdown] = useState(null);
  const [hoveredItem, setHoveredItem] = useState(null);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const menuItems = [
    {
      name: "Buy",
      items: [
        "Apply Now",
        "Purchase Rates",
        "Affordability Calculator",
        "Mortgage Calculator",
        "Rent vs Buy Calculator",
        "Find an Agent",
      ],
    },
    {
      name: "Refinance",
      items: [
        "Apply Now",
        "Refinance Rates",
        "Cash-Out Refinance Calculator",
        "Learning Center",
      ],
    },
    {
      name: "HELOC",
      items: [
        "Apply Now",
        "Calculate Your Cash",
        "HELOC vs Cash-Out Refinance",
        "Learning Center",
      ],
    },
    {
      name: "Rates",
      items: [
        "Purchase Mortgage Rates",
        "Refinance Rates",
        "Cash-Out Refinance",
      ],
    },
    {
      name: "Better+",
      items: ["Get Insurance", "Title And Closing", "Better Agent Match"],
    },
  ];

  return (
    <header className="sticky top-0 z-50 h-[88px] bg-[#004733] px-6 shadow-md">
      <nav
        className="flex justify-between items-center h-full max-w-7xl mx-auto"
        aria-label="Main Navigation"
      >
        <div className="ml-4 md:ml-16 flex items-center">
          <li className="cursor-pointer list-none text-2xl text-white font-serif font-bold">
            Better
          </li>
          <button
            className="text-white ml-6 md:hidden"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            <Menu size={28} />
          </button>
        </div>

        {/* Desktop Menu */}
        <ul className="hidden md:flex gap-12 items-center text-white font-medium relative">
          {menuItems.map((menu) => (
            <div
              key={menu.name}
              className="relative"
              onMouseEnter={() => setOpenDropdown(menu.name)}
              onMouseLeave={() => setOpenDropdown(null)}
            >
              <li
                className={`text-sm cursor-pointer px-4 py-2 rounded-full transition-all ${
                  openDropdown === menu.name
                    ? "bg-white text-[#004733] shadow-md"
                    : ""
                }`}
              >
                {menu.name}
              </li>

              {openDropdown === menu.name && (
                <motion.div
                  className="absolute left-0 top-14 w-80 bg-white text-black shadow-lg rounded-xl p-4"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 10 }}
                  onMouseEnter={() => setOpenDropdown(menu.name)}
                  onMouseLeave={() => setOpenDropdown(null)}
                >
                  <ul className="space-y-2 font-medium">
                    {menu.items.map((item, index) => (
                      <li
                        key={index}
                        className={`flex justify-between items-center p-3 rounded-md cursor-pointer transition-all ${
                          hoveredItem === item ? "bg-gray-100" : ""
                        }`}
                        onMouseEnter={() => setHoveredItem(item)}
                        onMouseLeave={() => setHoveredItem(null)}
                      >
                        {item}
                        {hoveredItem === item && (
                          <ChevronRight size={20} className="text-gray-500" />
                        )}
                      </li>
                    ))}
                  </ul>
                </motion.div>
              )}
            </div>
          ))}
        </ul>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <motion.div
            className="fixed inset-0 bg-white text-green-700 z-50 p-6"
            initial={{ x: -300 }}
            animate={{ x: 0 }}
            exit={{ x: -300 }}
          >
            <button
              className="text-green-700 text-xl"
              onClick={() => setMobileMenuOpen(false)}
            >
              Close
            </button>

            <ul className="mt-8 space-y-4">
              {menuItems.map((menu) => (
                <li
                  key={menu.name}
                  className="text-lg cursor-pointer"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {menu.name}
                </li>
              ))}
            </ul>
          </motion.div>
        )}

        <div className="mr-4 md:mr-14 flex items-center gap-4 md:gap-6">
          <button
            className="flex items-center justify-center w-8 h-8 md:w-10 md:h-10 bg-white text-[#004733] rounded-full shadow-md hover:bg-gray-200"
            aria-label="Call us"
          >
            <Phone size={20} />
          </button>

          <button className="bg-[#1EE07F] text-black px-4 py-2 md:px-5 md:py-3 rounded-full font-semibold hover:bg-[#004733] hover:text-white">
            Continue
          </button>
        </div>
      </nav>
    </header>
  );
}

export default Header;
