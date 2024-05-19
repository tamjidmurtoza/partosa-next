"use client"
import { useEffect, useState } from "react";
import Link from "next/link";


export default function Header({logoUrl}) {
  const [mobileToggle, setMobileToggle] = useState(false);
  const [isSticky, setIsSticky] = useState();
  const [prevScrollPos, setPrevScrollPos] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollPos = window.scrollY;
      if (currentScrollPos > prevScrollPos) {
        setIsSticky('cs_gescout_sticky'); // Scrolling down
      } else if (currentScrollPos !== 0) {
        setIsSticky('cs_gescout_show cs_gescout_sticky'); // Scrolling up
      } else {
        setIsSticky();
      }
      setPrevScrollPos(currentScrollPos); // Update previous scroll position
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll); // Cleanup the event listener
    };
  }, [prevScrollPos]);

  return (
    <header className={`cs_site_header cs_style_1 cs_transparent_header cs_primary_color cs_sticky_header ${isSticky ? isSticky : ''}`}>
      <div className="cs_main_header">
        <div className="container">
          <div className="cs_main_header_in">
            <div className="cs_main_header_left">
              <Link className="cs_site_branding" href='/'>
                <img src={logoUrl} alt="Logo" />
              </Link >
            </div>
            <div className="cs_main_header_right">
              <nav className="cs_nav cs_semibold">
                <ul className={`cs_nav_list ${mobileToggle ? 'cs_active' : ''}`}>
                  <li>
                    <a href="#home" >Home</a>
                  </li>
                  <li>
                    <a href="#portfolio" >PORTFOLIO</a>
                  </li>
                  <li>
                    <a href="#about" >ABOUT</a>
                  </li>
                  <li>
                    <a href="#resume" >RESUME</a>
                  </li>
                  <li>
                    <a href="#testimonial" >Testimonial</a>
                  </li>
                  <li>
                    <a href="#contact" >CONTACT</a>
                  </li>
                </ul>
                <span
                  className={
                    mobileToggle
                      ? 'cs_menu_toggle cs_toggle_active'
                      : 'cs_menu_toggle'
                  }
                  onClick={() => setMobileToggle(!mobileToggle)}
                >
                  <span></span>
                </span>
              </nav>
            </div>
          </div>
        </div>
      </div>
    </header>
  )
}
