import logo from "../assets/images/logo.svg"
import instagram from "../assets/images/instagram.svg"
import facebook from "../assets/images/facebook.svg"
import youtube from "../assets/images/youtube.svg"
import x from "../assets/images/x.svg"

function Footer() {
  return (
    <footer className="bg-black text-white pt-20 pb-10">

      {/* ================= TOP SECTION ================= */}
      <div className="max-w-7xl mx-auto px-6 md:px-12 flex flex-col md:flex-row justify-between gap-14 md:gap-0">

        {/* ================= LEFT SIDE ================= */}
        <div className="space-y-7 text-center md:text-left">

          {/* logo */}
          <img
            src={logo}
            alt="logo"
            className="h-10 mx-auto md:mx-0"
          />

          {/* phone */}
          <div>
            <p className="text-zinc-400">Phone</p>
            <p className="text-lg">+91 77025 12704</p>
          </div>

          {/* email */}
          <div>
            <p className="text-zinc-400">Email</p>
            <p className="underline">avixstudio.ax@gmail.com</p>
          </div>

          {/* ================= SOCIAL ICONS ================= */}
          <div className="flex gap-5 justify-center md:justify-start">

            <a
              href="https://www.instagram.com/avix_studio"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src={instagram} className="w-5 hover:opacity-70 transition" />
            </a>

            <a
              href="https://www.facebook.com/profile.php?id=61585489895550"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src={facebook} className="w-5 hover:opacity-70 transition" />
            </a>

            <a
              href="https://www.youtube.com/@avix_studio"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src={youtube} className="w-5 hover:opacity-70 transition" />
            </a>

            <a
              href="https://x.com/avix_studio"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src={x} className="w-5 hover:opacity-70 transition" />
            </a>

          </div>
        </div>


        {/* ================= RIGHT SIDE LINKS ================= */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-y-5 gap-x-20 text-center md:text-left text-zinc-300 text-base">

          <a href="#" className="hover:text-white">Our work</a>
          <a href="#" className="hover:text-white">Free audit</a>

          <a href="#" className="hover:text-white">Services</a>
          <a href="#" className="hover:text-white">Case studies</a>

          <a href="#" className="hover:text-white">How we work</a>
          <a href="#" className="hover:text-white">Growth systems</a>

          <a href="#" className="hover:text-white">Pricing</a>
          <a href="#" className="hover:text-white">Ad creatives</a>

          <a href="#" className="hover:text-white">Contact us</a>
          <a href="#" className="hover:text-white">Web design</a>

        </div>

      </div>


      {/* ================= DIVIDER ================= */}
      <div className="border-t border-zinc-800 my-12 max-w-7xl mx-auto px-6 md:px-12"></div>


      {/* ================= BOTTOM SECTION ================= */}
      <div className="max-w-7xl mx-auto px-6 md:px-12 flex flex-col md:flex-row justify-between items-center gap-5 text-sm text-zinc-400 text-center md:text-left">

        <p>© 2025 Avix Studio. All rights reserved.</p>

        <div className="flex flex-col md:flex-row gap-5 md:gap-10 underline">
          <a href="#">Privacy policy</a>
          <a href="#">Terms of service</a>
          <a href="#">Cookies settings</a>
        </div>

      </div>

    </footer>
  )
}

export default Footer
