import Navbar from "../components/Navbar"
import Footer from "../components/Footer"

function MainLayout({ children }) {
  return (
    <>
      <Navbar />

      {/* padding for fixed navbar */}
      <main className="pt-24">
        {children}
      </main>

      <Footer />
    </>
  )
}

export default MainLayout
