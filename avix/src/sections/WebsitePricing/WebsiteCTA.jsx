import { Link } from "react-router-dom"

export default function WebsiteCTA() {
  return (
    <section className="w-full bg-[#f4f4f4] py-24 md:py-32">

      <div className="max-w-6xl mx-auto px-6">

        <div className="bg-white border border-gray-200 rounded-2xl py-16 px-8 md:px-20 text-center">

          {/* Heading */}
          <h2 className="text-3xl md:text-5xl font-bold mb-6 leading-tight">
            Ready to build and <br className="hidden md:block" />
            rank?
          </h2>

          {/* Description */}
          <p className="text-gray-600 max-w-2xl mx-auto mb-10">
            Let's create a website that performs and an SEO strategy that scales.
          </p>

          {/* Button */}
          <Link to="/contact">
            <button className="bg-black text-white px-8 py-3 rounded-lg hover:bg-gray-800 transition">
              Schedule
            </button>
          </Link>

        </div>

      </div>

    </section>
  )
}
