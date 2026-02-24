import { motion } from "framer-motion"
import { useNavigate } from "react-router-dom"

export default function PricingPlans() {

  const navigate = useNavigate()

  const plans = [
    {
      name: "Basic",
      price: "₹10,000",
      features: [
        "10 posts monthly",
        "3 reels included",
        "Caption and hashtags"
      ]
    },
    {
      name: "Standard",
      price: "₹14,500",
      features: [
        "13 posts monthly",
        "5 reels included",
        "Caption and hashtags",
        "Baseline content creation"
      ]
    },
    {
      name: "Professional",
      price: "₹20,000",
      features: [
        "16 posts monthly",
        "8 reels included",
        "Caption and hashtags",
        "Optimal content creation",
        "Increased engagement focus"
      ]
    }
  ]

  return (
    <section className="w-full bg-[#f4f4f4] py-24 md:py-32">

      {/* ================= HEADER ================= */}
      <div className="text-center max-w-3xl mx-auto px-6 mb-20">

        <p className="text-sm text-gray-500 mb-3">
          Packages
        </p>

        <h2 className="text-4xl md:text-6xl font-bold mb-6">
          Choose your plan
        </h2>

        <p className="text-gray-600">
          Pick the package that fits your brand's needs in Social Media Marketing
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
              bg-white
              rounded-2xl
              border border-gray-200
              p-10
              flex flex-col
              shadow-sm
              hover:shadow-lg
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
              <p className="text-gray-500 mt-2">
                Per month
              </p>
            </div>

            {/* FEATURES */}
            <ul className="space-y-4 mb-10 text-gray-700 flex-1">
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
              className="bg-black text-white py-3 rounded-lg hover:bg-gray-800 transition"
            >
              Start growing
            </button>

          </motion.div>
        ))}

      </div>

    </section>
  )
}
