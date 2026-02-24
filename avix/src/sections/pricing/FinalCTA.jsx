import { motion } from "framer-motion"
import { useNavigate } from "react-router-dom"

export default function FinalCTA() {

  const navigate = useNavigate()

  return (
    <section className="w-full bg-[#f4f4f4] py-28 md:py-36">

      <div className="max-w-4xl mx-auto px-6 text-center">

        {/* ================= HEADING ================= */}
        <motion.h2
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-4xl md:text-6xl font-bold leading-tight mb-6"
        >
          Ready to elevate your <br /> brand?
        </motion.h2>

        {/* ================= DESCRIPTION ================= */}
        <motion.p
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
          className="text-gray-600 text-lg mb-10"
        >
          Let's create content that actually converts. Schedule a call with us today.
        </motion.p>

        {/* ================= BUTTON ================= */}
        <motion.button
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
          onClick={() => navigate("/contact")}
          className="bg-black text-white px-8 py-3 rounded-lg hover:bg-gray-800 transition"
        >
          Schedule
        </motion.button>

      </div>

    </section>
  )
}
