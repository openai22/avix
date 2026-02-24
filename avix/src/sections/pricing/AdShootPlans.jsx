import { motion } from "framer-motion"
import { useNavigate } from "react-router-dom"

export default function AdShootPlans() {

  const navigate = useNavigate()

  const plans = [
    {
      name: "Basic",
      price: "₹8,000",
      features: [
        "45-60 sec video length",
        "1 revision",
        "Background music"
      ]
    },
    {
      name: "Standard",
      price: "₹14,000",
      features: [
        "60-120 sec video length",
        "2 revisions",
        "Images/footage",
        "Music and sound effects"
      ]
    },
    {
      name: "Professional",
      price: "₹22,000",
      features: [
        "120-180 sec video length",
        "4 revisions",
        "Images/footage",
        "On-site shoot",
        "Music and sound effects",
        "Visual effects"
      ]
    }
  ]

  return (
    <section className="w-full bg-[#14110f] text-white py-24 md:py-32">

      {/* ================= HEADER ================= */}
      <div className="text-center max-w-3xl mx-auto px-6 mb-20">

        <p className="text-sm text-gray-400 mb-3">
          Packages
        </p>

        <h2 className="text-4xl md:text-6xl font-bold mb-6">
          Choose your plan
        </h2>

        <p className="text-gray-400">
          Pick the package that fits your brand's needs in Ad shoot
        </p>

      </div>

      {/* ================= CARDS ================= */}
      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-3 gap-10">

        {plans.map((plan, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: index * 0.1 }}
            viewport={{ once: true }}
            className="
              border border-white/10
              rounded-2xl
              p-10
              flex flex-col
              hover:border-white/30
              transition
            "
          >

            {/* PLAN NAME */}
            <h3 className="text-2xl font-semibold mb-6 text-center">
              {plan.name}
            </h3>

            {/* PRICE */}
            <div className="text-center mb-8">
              <div className="text-4xl md:text-5xl font-bold">
                {plan.price}
              </div>
              <p className="text-gray-400 mt-2">
                Per video
              </p>
            </div>

            {/* FEATURES */}
            <ul className="space-y-4 mb-10 text-gray-300 flex-1">
              {plan.features.map((feature, i) => (
                <li key={i} className="flex items-start gap-3">
                  <span className="mt-1">✓</span>
                  <span>{feature}</span>
                </li>
              ))}
            </ul>

            {/* BUTTON */}
            <button
              onClick={() => navigate("/contact")}
              className="bg-white text-black py-3 rounded-lg hover:bg-gray-200 transition"
            >
              Start growing
            </button>

          </motion.div>
        ))}

      </div>

    </section>
  )
}
