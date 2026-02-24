import codeIcon from "../../assets/images/code.svg"
import architectureIcon from "../../assets/images/architecture.svg"
import strategyIcon from "../../assets/images/strategy.svg"

export default function WebsiteWhy() {
  return (
    <section className="w-full bg-black text-white py-24 md:py-32">

      <div className="max-w-7xl mx-auto px-6">

        {/* ================= HEADER ================= */}
        <div className="text-center mb-20">

          <p className="text-sm text-gray-400 mb-4">
            Why
          </p>

          <h2 className="text-3xl md:text-5xl font-bold mb-6">
            We build what works
          </h2>

          <p className="text-gray-400 max-w-xl mx-auto">
            Clean code. Measurable results. No shortcuts.
          </p>

        </div>

        {/* ================= CARDS ================= */}
        <div className="grid md:grid-cols-3 gap-8">

          {/* Card 1 */}
          <div className="border border-white/10 rounded-2xl p-10 hover:border-white/40 transition duration-300">

            <img src={codeIcon} alt="Code" className="w-8 h-8 mb-8 opacity-80" />

            <h3 className="text-2xl font-bold mb-6 leading-snug">
              Performance-focused development
            </h3>

            <p className="text-gray-400">
              Every line of code serves a purpose.
            </p>

          </div>

          {/* Card 2 */}
          <div className="border border-white/10 rounded-2xl p-10 hover:border-white/40 transition duration-300">

            <img src={architectureIcon} alt="Architecture" className="w-8 h-8 mb-8 opacity-80" />

            <h3 className="text-2xl font-bold mb-6 leading-snug">
              Scalable architecture built for growth
            </h3>

            <p className="text-gray-400">
              Your site grows with your business.
            </p>

          </div>

          {/* Card 3 */}
          <div className="border border-white/10 rounded-2xl p-10 hover:border-white/40 transition duration-300">

            <img src={strategyIcon} alt="Strategy" className="w-8 h-8 mb-8 opacity-80" />

            <h3 className="text-2xl font-bold mb-6 leading-snug">
              Data-driven SEO that ranks
            </h3>

            <p className="text-gray-400">
              Strategy backed by numbers, not guesses.
            </p>

          </div>

        </div>

      </div>
    </section>
  )
}
