import checkIcon from "../../assets/images/check_white.svg"

export default function ThreeDCompare() {
  return (
    <section className="w-full bg-black text-white py-24 md:py-32">

      <div className="max-w-7xl mx-auto px-6">

        {/* HEADER */}
        <div className="text-center mb-20">
          <p className="text-sm text-gray-400 mb-3">Packages</p>
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Compare all three packages
          </h2>
          <p className="text-gray-400">
            Find the right scope for your budget and timeline
          </p>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full border-collapse">

            {/* TABLE HEAD */}
            <thead>
              <tr className="border-b border-white/10">
                <th className="py-6 text-left text-gray-300">
                  Characteristics
                </th>

                <th className="py-6 text-center">
                  <div className="font-semibold text-lg">Basic</div>
                  <div className="text-sm text-gray-400 mt-1">
                    ₹18,000–₹25,000
                  </div>
                </th>

                <th className="py-6 text-center">
                  <div className="font-semibold text-lg">Standard</div>
                  <div className="text-sm text-gray-400 mt-1">
                    ₹35,000–₹50,000
                  </div>
                </th>

                <th className="py-6 text-center">
                  <div className="font-semibold text-lg">Premium</div>
                  <div className="text-sm text-gray-400 mt-1">
                    ₹60,000–₹1,50,000
                  </div>
                </th>
              </tr>
            </thead>

            <tbody>

              {/* Animation Length */}
              <tr className="border-b border-white/10">
                <td className="py-6 text-gray-300">
                  Animation length and scope
                </td>
                <td className="py-6 text-center font-medium">
                  10–60 seconds
                </td>
                <td className="py-6 text-center font-medium">
                  60–90 seconds
                </td>
                <td className="py-6 text-center font-medium">
                  90–120 seconds
                </td>
              </tr>

              {/* Environment */}
              <tr className="border-b border-white/10">
                <td className="py-6 text-gray-300">
                  Environment modeling and detail
                </td>
                <td className="py-6 text-center">
                  <img src={checkIcon} className="mx-auto w-4 h-4" />
                </td>
                <td className="py-6 text-center">
                  <img src={checkIcon} className="mx-auto w-4 h-4" />
                </td>
                <td className="py-6 text-center">
                  <img src={checkIcon} className="mx-auto w-4 h-4" />
                </td>
              </tr>

              {/* Lighting */}
              <tr className="border-b border-white/10">
                <td className="py-6 text-gray-300">
                  Lighting, camera and transitions
                </td>
                <td className="py-6 text-center">
                  <img src={checkIcon} className="mx-auto w-4 h-4" />
                </td>
                <td className="py-6 text-center">
                  <img src={checkIcon} className="mx-auto w-4 h-4" />
                </td>
                <td className="py-6 text-center">
                  <img src={checkIcon} className="mx-auto w-4 h-4" />
                </td>
              </tr>

              {/* Revisions */}
              <tr className="border-b border-white/10">
                <td className="py-6 text-gray-300">
                  Revisions and support included
                </td>
                <td className="py-6 text-center"></td>
                <td className="py-6 text-center">
                  <img src={checkIcon} className="mx-auto w-4 h-4" />
                </td>
                <td className="py-6 text-center">
                  <img src={checkIcon} className="mx-auto w-4 h-4" />
                </td>
              </tr>

              {/* Sound */}
              <tr className="border-b border-white/10">
                <td className="py-6 text-gray-300">
                  Sound design and music
                </td>
                <td className="py-6 text-center"></td>
                <td className="py-6 text-center"></td>
                <td className="py-6 text-center">
                  <img src={checkIcon} className="mx-auto w-4 h-4" />
                </td>
              </tr>

              {/* FPS */}
              <tr>
                <td className="py-6 text-gray-300">
                  Fps in video
                </td>
                <td className="py-6 text-center font-medium">
                  Basic (20–24fps)
                </td>
                <td className="py-6 text-center font-medium">
                  Normal (25–30fps)
                </td>
                <td className="py-6 text-center font-medium">
                  High (30–45fps)
                </td>
              </tr>

            </tbody>

          </table>
        </div>

      </div>
    </section>
  )
}
