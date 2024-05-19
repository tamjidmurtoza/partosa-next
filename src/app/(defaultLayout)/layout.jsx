"use client"
import Footer from "../ui/footer/Footer";

export default function Layout({children}) {
  return (
    <>
      {children}
      <Footer className="cs_footer" id="contact" />
    </>
  )
}
