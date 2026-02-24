import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";

export default function ServicesFAQ() {

  const navigate = useNavigate();

  const faqs = [
    {
      q: "How long does a project take?",
      a: "Most websites take four to eight weeks from start to launch. Marketing campaigns can begin in two to three weeks. The exact timeline depends on scope and how quickly you provide feedback."
    },
    {
      q: "Do you offer ongoing support?",
      a: "Yes. We provide post-launch support for all projects. Maintenance packages, campaign management, and content updates are available based on your needs."
    },
    {
      q: "What marketing budget should I plan?",
      a: "It depends on your goals and industry. We recommend starting with a budget that lets you test and learn. We'll help you allocate it where it matters most."
    },
    {
      q: "Can you work with my existing website?",
      a: "Absolutely. We can audit, redesign, or optimize what you already have. Sometimes a refresh is all you need to see real improvement."
    },
    {
      q: "How do you measure success?",
      a: "We track metrics that matter to your business. Conversions, traffic, leads, sales, and engagement are all part of how we report results."
    }
  ];

  return (
    <section className="w-full bg-[#f3f3f3] py-24 lg:py-32">

      <div className="max-w-4xl mx-auto px-6">

        {/* TITLE */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            FAQ
          </h2>

          <p className="text-gray-600">
            Questions about timelines, support, and what to expect.
          </p>
        </motion.div>

        {/* FAQ LIST */}
        <div className="space-y-10">
          {faqs.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.08 }}
              viewport={{ once: true }}
              className="space-y-3"
            >
              <h3 className="font-semibold text-lg">
                {item.q}
              </h3>

              <p className="text-gray-600 leading-relaxed">
                {item.a}
              </p>
            </motion.div>
          ))}
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
          viewport={{ once: true }}
          className="text-center mt-20"
        >
          <h3 className="text-2xl font-semibold mb-3">
            Ready to talk?
          </h3>

          <p className="text-gray-600 mb-6">
            Reach out and let's discuss your project.
          </p>

          <button
            onClick={() => navigate("/contact")}
            className="bg-black text-white px-6 py-3 rounded-lg hover:bg-gray-800 transition"
          >
            Contact
          </button>
        </motion.div>

      </div>
    </section>
  );
}
