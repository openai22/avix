import { motion } from "framer-motion";

import icon1 from "../../assets/images/first_page.svg";
import icon2 from "../../assets/images/communication.svg";
import icon3 from "../../assets/images/today.svg";

export default function AboutWhy() {
  return (
    <section className="w-full bg-[#f3f3f3] py-24 lg:py-32">
      <div className="max-w-7xl mx-auto px-6">

        {/* ================= TITLE ================= */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="text-center max-w-3xl mx-auto mb-20"
        >
          <p className="text-sm text-gray-500 mb-3">Why us</p>

          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 leading-tight">
            Built for results,
            <br />
            designed for growth
          </h2>

          <p className="text-gray-600">
            We work with brands that demand more than templates. Avix Studio
            combines strategy, craft, and technology to create digital solutions
            that perform.
          </p>
        </motion.div>


        {/* ================= FEATURES ================= */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-12 text-center">

          {/* Feature 1 */}
          <motion.div
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            viewport={{ once: true }}
            className="space-y-5"
          >
            <img src={icon1} alt="" className="w-10 mx-auto" />

            <h3 className="text-xl font-semibold">
              Proven track record
            </h3>

            <p className="text-gray-600 text-sm">
              Our clients see measurable growth within the first quarter of
              engagement.
            </p>
          </motion.div>


          {/* Feature 2 */}
          <motion.div
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            viewport={{ once: true }}
            className="space-y-5"
          >
            <img src={icon2} alt="" className="w-10 mx-auto" />

            <h3 className="text-xl font-semibold">
              Premium collaboration
            </h3>

            <p className="text-gray-600 text-sm">
              Direct access to leadership and transparent communication
              throughout every project phase.
            </p>
          </motion.div>


          {/* Feature 3 */}
          <motion.div
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            viewport={{ once: true }}
            className="space-y-5"
          >
            <img src={icon3} alt="" className="w-10 mx-auto" />

            <h3 className="text-xl font-semibold">
              Future-ready solutions
            </h3>

            <p className="text-gray-600 text-sm">
              We build with tomorrow's technology today, ensuring your digital
              presence stays ahead.
            </p>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
