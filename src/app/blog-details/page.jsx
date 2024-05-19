"use client"
import { Icon } from "@iconify/react/dist/iconify.js";
import Spacing from "../ui/spacing/Spacing";
import ContactFormStyle2 from "../ui/form/ContactFormStyle2";
import FooterStyle2 from "../ui/footer/FooterStyle2";
import Image from "next/image";
import blogDetailsImg from '../../../public/images/blog_details.jpeg';


export default function BlogDetails() {
  return (
    <>
    <Spacing lg='100' md='80' />
    <Spacing lg='120' md='80' />
    <section>
      <div className="container">
        <div className="row">
          <div className="col-lg-10 offset-lg-1 text-center">
            <h1 className="cs_fs_67 cs_mb_25">
              Mastering User Experience: Key Principles and Best Practices
            </h1>
            <p className="mb-0">Posted By Lora Gonzales / May 12, 2024</p>
          </div>
        </div>
        <div className="cs_height_95 cs_height_lg_50" />
        <Image src={blogDetailsImg} alt="" placeholder="blur" />
        <div className="cs_height_95 cs_height_lg_50" />
        <div className="row">
          <div className="col-lg-8 offset-lg-2">
            <div className="cs_post_details">
              Mastering User Experience: Key Principles and Best Practices delves
              into the core concepts and methodologies essential for creating
              exceptional user experiences (UX). In this blog post, we explore the
              foundational principles that guide effective UX design, such as
              usability, accessibility, and user-centricity. <br />
              <br />
              We begin by discussing the importance of understanding the needs,
              preferences, and behaviors of target users. By conducting thorough user
              research, including interviews, surveys, and usability testing,
              designers gain valuable insights that inform the design process.
              <br />
              <br />
              Next, we explore the significance of intuitive and user-friendly
              interfaces. Through the application of information architecture,
              interaction design, and visual hierarchy, designers can create
              interfaces that are easy to navigate and understand.
              <br />
              <br />
              Additionally, we delve into the role of consistency and coherence in UX
              design. Consistent design patterns and conventions help users feel
              familiar and confident as they interact with a product or service,
              ultimately enhancing their overall experience.
              <br />
              <br />
              Furthermore, we examine the importance of accessibility in UX design. By
              ensuring that digital experiences are inclusive and accessible to users
              of all abilities, designers can maximize the reach and impact of their
              designs.
              <br />
              <br />
              Throughout the blog post, we highlight practical examples and case
              studies that illustrate these key principles in action. By mastering
              these foundational principles and best practices, designers can create
              meaningful and impactful user experiences that delight.
            </div>
            <div className="cs_height_100 cs_height_lg_80" />
            <div className="cs_post_share">
              <div className="cs_categories_wrap">
                <div className="cs_categories">
                  <span>UI/UX</span>
                  <span>Design</span>
                  <span>User Experience</span>
                </div>
              </div>
              <div className="cs_social_share_btns_wrap">
                <div className="cs_social_share_btns">
                  <a href="#">
                    <Icon icon="fa:twitter" />
                  </a>
                  <a href="#">
                    <Icon icon="fa:facebook-f" /> 
                  </a>
                  <a href="#">
                    <Icon icon="fa:linkedin" />
                  </a>
                  <span className="cs_share_icon">
                    <svg
                      width={35}
                      height={35}
                      viewBox="0 0 35 35"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <circle cx="17.5" cy="17.5" r="17.5" fill="#CDCBD1" />
                      <g clipPath="url(#clip0_172_388)">
                        <path
                          d="M8.00003 17.4889C7.99195 19.519 9.63117 21.1713 11.6613 21.1794C12.5963 21.1831 13.4976 20.8304 14.1817 20.193L19.6596 22.6663C19.6215 22.8712 19.6007 23.0788 19.5972 23.287C19.5907 25.3312 21.2425 26.9935 23.2867 27C25.3308 27.0065 26.9931 25.3546 26.9996 23.3105C27.0061 21.2663 25.3542 19.604 23.3101 19.5975C22.0888 19.5937 20.9442 20.1925 20.2511 21.198L15.1044 18.8742C15.47 17.9914 15.4714 16.9999 15.1084 16.1162L20.2479 13.7805C21.4052 15.4543 23.7003 15.873 25.3742 14.7157C27.048 13.5583 27.4667 11.2633 26.3093 9.58944C25.152 7.9156 22.8569 7.49693 21.1831 8.65425C20.1862 9.34348 19.5921 10.4788 19.594 11.6907C19.5973 11.8993 19.6185 12.1072 19.6572 12.3122L14.1935 14.7949C12.7133 13.4049 10.3864 13.4781 8.99642 14.9584C8.3531 15.6436 7.99655 16.549 8.00003 17.4889Z"
                          fill="#111111"
                        />
                      </g>
                      <defs>
                        <clipPath id="clip0_172_388">
                          <rect
                            width={19}
                            height={19}
                            fill="white"
                            transform="translate(8 8)"
                          />
                        </clipPath>
                      </defs>
                    </svg>
                  </span>
                </div>
              </div>
            </div>
            <div className="cs_height_140 cs_height_lg_70" />
            <h2 className="cs_fs_50 cs_mb_20">Leave A Reply</h2>
            <p className="mb-0">
              Your email address will not be published. Required fields are marked *
            </p>
            <div className="cs_height_70 cs_height_lg_60" />
            <ContactFormStyle2 />
          </div>
        </div>
        <div className="cs_height_150 cs_height_lg_80" />
      </div>
    </section>
    <FooterStyle2 className="cs_footer cs_ternary_bg text-center" id="contact" />
    </>
  )
}
