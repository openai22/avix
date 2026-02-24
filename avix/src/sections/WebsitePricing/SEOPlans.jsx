import { Link } from "react-router-dom"
import checkIcon from "../../assets/images/check_white.svg"

export default function SEOPlans() {
  return (
    <section className="w-full bg-black text-white py-24 md:py-32">

      <div className="max-w-7xl mx-auto px-6">

        {/* ================= HEADER ================= */}
        <div className="text-center mb-20">

          <p className="text-sm text-gray-400 mb-4">
            SEO
          </p>

          <h2 className="text-3xl md:text-5xl font-bold mb-6">
            SEO management
          </h2>

          <p className="text-gray-400 max-w-2xl mx-auto">
            Strategic SEO campaigns designed to improve rankings, traffic, and long-term visibility.
          </p>

        </div>

        {/* ================= CARDS ================= */}
        <div className="grid md:grid-cols-3 gap-8">

          {/* ================= Foundation ================= */}
          <div className="bg-[#111111] border border-white/10 rounded-2xl p-10 flex flex-col justify-between">

            <div>
              <h3 className="text-xl font-semibold mb-6">
                Foundation
              </h3>

              <h4 className="text-4xl md:text-5xl font-bold leading-tight tracking-tight mb-2">
                ₹15,000 –<br />₹25,000
              </h4>

              <p className="text-gray-400 mb-8">
                billed monthly
              </p>

              <ul className="space-y-4 text-gray-300">

                <li className="flex items-start gap-3">
                  <img src={checkIcon} alt="check" className="w-4 h-4 mt-1" />
                  <span>SEO audit included</span>
                </li>

                <li className="flex items-start gap-3">
                  <img src={checkIcon} alt="check" className="w-4 h-4 mt-1" />
                  <span>8–12 target keywords</span>
                </li>

                <li className="flex items-start gap-3">
                  <img src={checkIcon} alt="check" className="w-4 h-4 mt-1" />
                  <span>On-page optimization</span>
                </li>

              </ul>
            </div>

            <Link to="/contact">
              <button className="mt-10 bg-white text-black py-3 rounded-lg hover:bg-gray-200 transition w-full">
                Get started
              </button>
            </Link>

          </div>


          {/* ================= Growth ================= */}
          <div className="bg-[#111111] border border-white/10 rounded-2xl p-10 flex flex-col justify-between">

            <div>
              <h3 className="text-xl font-semibold mb-6">
                Growth
              </h3>

              <h4 className="text-4xl md:text-5xl font-bold leading-tight tracking-tight mb-2">
                ₹30,000 –<br />₹55,000
              </h4>

              <p className="text-gray-400 mb-8">
                billed monthly
              </p>

              <ul className="space-y-4 text-gray-300">

                <li className="flex items-start gap-3">
                  <img src={checkIcon} alt="check" className="w-4 h-4 mt-1" />
                  <span>15–25 keywords</span>
                </li>

                <li className="flex items-start gap-3">
                  <img src={checkIcon} alt="check" className="w-4 h-4 mt-1" />
                  <span>Blog content outlines</span>
                </li>

                <li className="flex items-start gap-3">
                  <img src={checkIcon} alt="check" className="w-4 h-4 mt-1" />
                  <span>Competitor analysis</span>
                </li>

                <li className="flex items-start gap-3">
                  <img src={checkIcon} alt="check" className="w-4 h-4 mt-1" />
                  <span>Monthly strategy call</span>
                </li>

              </ul>
            </div>

            <Link to="/contact">
              <button className="mt-10 bg-white text-black py-3 rounded-lg hover:bg-gray-200 transition w-full">
                Get started
              </button>
            </Link>

          </div>


          {/* ================= Authority ================= */}
          <div className="bg-[#111111] border border-white/10 rounded-2xl p-10 flex flex-col justify-between">

            <div>
              <h3 className="text-xl font-semibold mb-6">
                Authority
              </h3>

              <h4 className="text-4xl md:text-5xl font-bold leading-tight tracking-tight mb-2">
                ₹60,000 –<br />₹90,000+
              </h4>

              <p className="text-gray-400 mb-8">
                billed monthly
              </p>

              <ul className="space-y-4 text-gray-300">

                <li className="flex items-start gap-3">
                  <img src={checkIcon} alt="check" className="w-4 h-4 mt-1" />
                  <span>30+ keywords</span>
                </li>

                <li className="flex items-start gap-3">
                  <img src={checkIcon} alt="check" className="w-4 h-4 mt-1" />
                  <span>Advanced technical SEO</span>
                </li>

                <li className="flex items-start gap-3">
                  <img src={checkIcon} alt="check" className="w-4 h-4 mt-1" />
                  <span>Backlink strategy</span>
                </li>

                <li className="flex items-start gap-3">
                  <img src={checkIcon} alt="check" className="w-4 h-4 mt-1" />
                  <span>Quarterly strategy revision</span>
                </li>

                <li className="flex items-start gap-3">
                  <img src={checkIcon} alt="check" className="w-4 h-4 mt-1" />
                  <span>Dominate search</span>
                </li>

              </ul>
            </div>

            <Link to="/contact">
              <button className="mt-10 bg-white text-black py-3 rounded-lg hover:bg-gray-200 transition w-full">
                Get started
              </button>
            </Link>

          </div>

        </div>

      </div>
    </section>
  )
}
