import { motion } from "framer-motion";

export default function AboutTestimonials() {
  const testimonials = [
    {
      name: "Sarah Mitchell",
      role: "Founder, TechVenture",
      text: `"Avix Studio didn't just build our website. They understood our market and created something that actually converts."`
    },
    {
      name: "James Chen",
      role: "CEO, Growth Labs",
      text: `"The team's approach to strategy was refreshing. They asked the right questions before touching a single design file."`
    },
    {
      name: "Elena Rodriguez",
      role: "Marketing Director, Brand Co",
      text: `"Working with Avix Studio felt like having a partner, not a vendor. They genuinely cared about our success."`
    }
  ];

  return (
    <section className="w-full bg-[#f3f3f3] py-24 lg:py-32">
      <div className="max-w-7xl mx-auto px-6">

        {/* ================= TITLE ================= */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            What clients say
          </h2>

          <p className="text-gray-600">
            Trusted by brands that know the difference between good and great.
          </p>
        </motion.div>


        {/* ================= TESTIMONIALS ================= */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-12">

          {testimonials.map((t, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.15 }}
              viewport={{ once: true }}
              className="text-center space-y-6"
            >

              {/* Avatar circle */}
              <div className="w-14 h-14 mx-auto rounded-full bg-gray-300 flex items-center justify-center text-gray-600 font-semibold">
                {t.name[0]}
              </div>

              {/* Name */}
              <div>
                <h4 className="font-semibold">{t.name}</h4>
                <p className="text-sm text-gray-500">{t.role}</p>
              </div>

              {/* Quote */}
              <p className="text-gray-700 leading-relaxed text-sm md:text-base">
                {t.text}
              </p>
            </motion.div>
          ))}

        </div>
      </div>
    </section>
  );
}
