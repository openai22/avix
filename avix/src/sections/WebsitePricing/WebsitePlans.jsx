import { Link } from "react-router-dom"
import checkIcon from "../../assets/images/check_black.svg"

export default function WebsitePlans() {
  return (
    <section className="w-full bg-[#f4f4f4] py-24 md:py-32">

      <div className="max-w-7xl mx-auto px-6">

        {/* ================= HEADER ================= */}
        <div className="text-center mb-20">

          <p className="text-sm text-gray-500 mb-3">
            Websites
          </p>

          <h2 className="text-3xl md:text-5xl font-bold mb-6">
            Website development
          </h2>

          <p className="text-gray-600 max-w-2xl mx-auto">
            Conversion-focused, scalable websites built for performance and growth.
          </p>

        </div>

        {/* ================= CARDS ================= */}
        <div className="grid md:grid-cols-3 gap-8">

          {/* ================= Starter Package ================= */}
          <div className="bg-white rounded-2xl border border-gray-200 p-10 flex flex-col justify-between">

            <div>
              <h3 className="text-xl font-semibold mb-6">
                Starter package
              </h3>

              <div className="mb-4">
                <h4 className="text-5xl md:text-6xl font-bold leading-tight tracking-tight">
                  ₹22,000 –<br />₹40,000
                </h4>
              </div>

              <p className="text-gray-500 mb-8">
                Perfect for launching online
              </p>

              <ul className="space-y-4 text-gray-700">
                <li className="flex items-start gap-3">
                  <img src={checkIcon} alt="check" className="w-4 h-4 mt-1" />
                  <span>4–6 page responsive website</span>
                </li>
                <li className="flex items-start gap-3">
                  <img src={checkIcon} alt="check" className="w-4 h-4 mt-1" />
                  <span>Modern UI design</span>
                </li>
                <li className="flex items-start gap-3">
                  <img src={checkIcon} alt="check" className="w-4 h-4 mt-1" />
                  <span>Contact form and WhatsApp integration</span>
                </li>
              </ul>
            </div>

            <Link to="/contact">
              <button className="mt-10 bg-black text-white py-3 rounded-lg hover:bg-gray-800 transition w-full">
                Start building
              </button>
            </Link>

          </div>


          {/* ================= Growth Package ================= */}
          <div className="bg-white rounded-2xl border border-gray-200 p-10 flex flex-col justify-between">

            <div>
              <h3 className="text-xl font-semibold mb-6">
                Growth package
              </h3>

              <div className="mb-4">
                <h4 className="text-5xl md:text-6xl font-bold leading-tight tracking-tight">
                  ₹55,000 –<br />₹95,000
                </h4>
              </div>

              <p className="text-gray-500 mb-8">
                Everything in Starter, plus more
              </p>

              <ul className="space-y-4 text-gray-700">
                <li className="flex items-start gap-3">
                  <img src={checkIcon} alt="check" className="w-4 h-4 mt-1" />
                  <span>Custom Number Page Responsive Website</span>
                </li>
                <li className="flex items-start gap-3">
                  <img src={checkIcon} alt="check" className="w-4 h-4 mt-1" />
                  <span>Custom UI/UX design</span>
                </li>
                <li className="flex items-start gap-3">
                  <img src={checkIcon} alt="check" className="w-4 h-4 mt-1" />
                  <span>Backend admin panel</span>
                </li>
                <li className="flex items-start gap-3">
                  <img src={checkIcon} alt="check" className="w-4 h-4 mt-1" />
                  <span>Basic SEO setup</span>
                </li>
                <li className="flex items-start gap-3">
                  <img src={checkIcon} alt="check" className="w-4 h-4 mt-1" />
                  <span>Dynamic content updates</span>
                </li>
                <li className="flex items-start gap-3">
                  <img src={checkIcon} alt="check" className="w-4 h-4 mt-1" />
                  <span>2 revisions included</span>
                </li>
              </ul>
            </div>

            <Link to="/contact">
              <button className="mt-10 bg-black text-white py-3 rounded-lg hover:bg-gray-800 transition w-full">
                Scale my site
              </button>
            </Link>

          </div>


          {/* ================= Authority Package ================= */}
          <div className="bg-white rounded-2xl border border-gray-200 p-10 flex flex-col justify-between">

            <div>
              <h3 className="text-xl font-semibold mb-6">
                Authority package
              </h3>

              <div className="mb-4">
                <h4 className="text-5xl md:text-6xl font-bold leading-tight tracking-tight">
                  ₹1,10,000 –<br />₹2,00,000+
                </h4>
              </div>

              <p className="text-gray-500 mb-8">
                Most popular for scaling businesses
              </p>

              <ul className="space-y-4 text-gray-700">
                <li className="flex items-start gap-3">
                  <img src={checkIcon} alt="check" className="w-4 h-4 mt-1" />
                  <span>Custom Number Page Responsive Website</span>
                </li>
                <li className="flex items-start gap-3">
                  <img src={checkIcon} alt="check" className="w-4 h-4 mt-1" />
                  <span>Advanced backend development</span>
                </li>
                <li className="flex items-start gap-3">
                  <img src={checkIcon} alt="check" className="w-4 h-4 mt-1" />
                  <span>CRM integration</span>
                </li>
                <li className="flex items-start gap-3">
                  <img src={checkIcon} alt="check" className="w-4 h-4 mt-1" />
                  <span>Sales funnel system</span>
                </li>
                <li className="flex items-start gap-3">
                  <img src={checkIcon} alt="check" className="w-4 h-4 mt-1" />
                  <span>3 revisions included</span>
                </li>
                <li className="flex items-start gap-3">
                  <img src={checkIcon} alt="check" className="w-4 h-4 mt-1" />
                  <span>Optimal SEO setup</span>
                </li>
              </ul>
            </div>

            <Link to="/contact">
              <button className="mt-10 bg-black text-white py-3 rounded-lg hover:bg-gray-800 transition w-full">
                Build authority
              </button>
            </Link>

          </div>

        </div>

      </div>
    </section>
  )
}
