import Hero from "../sections/contact/Hero"
import ConnectOptions from "../sections/contact/ConnectOptions"
import ContactForm from "../sections/contact/ContactForm"
import WhyContact from "../sections/contact/WhyContact"
import Process from "../sections/contact/Process"

function Contact() {
  return (
    <>
      <Hero />
      <ConnectOptions />
      <ContactForm />
      <WhyContact />
      <Process />   {/* 👈 add this */}
    </>
  )
}

export default Contact
