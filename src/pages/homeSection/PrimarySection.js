import { Star } from "lucide-react";
import { motion } from "framer-motion";

function PrimarySection() {
  const img =
    "https://media.better.com/better-com/homepage/hero-variant-c.webp";

  return (
    <div className="relative w-full h-auto bg-[#004733] flex flex-col justify-center items-center text-center text-white px-6">
      <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mt-20 text-green-400 z-20">
        Mortgages <br className="md:hidden" />
        <br />
        made simple
      </h1>

      <div className="flex flex-col md:flex-row items-center justify-center w-full max-w-4xl gap-8 mt-10">
        <div className="text-center md:text-left">
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-green-400 text-black px-6 py-3 rounded-full text-lg font-semibold hover:bg-green-500 transition-all"
          >
            Start my approval
          </motion.button>
          <p className="mt-2 text-sm flex items-center justify-center md:justify-start gap-2 opacity-80">
            ⏳ 3 min | No credit impact
          </p>
        </div>

        <motion.img
          src={img}
          alt="Mortgage Approval"
          className="w-48 sm:w-64 md:w-72 lg:w-96 -mt-10"
          initial={{ y: 30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
        />

        <div className="text-sm text-center md:text-left">
          <div className="flex items-center gap-1 text-yellow-400 justify-center md:justify-start">
            {[...Array(4)].map((_, i) => (
              <Star key={i} fill="currentColor" strokeWidth={0} />
            ))}
            <Star fill="currentColor" strokeWidth={0} className="opacity-50" />
          </div>
          <span className="ml-2 block md:inline">
            4.6 Stars | 3177 Google reviews
          </span>
        </div>
      </div>
    </div>
  );
}

export default PrimarySection;
