import Link from "next/link";
import Spacing from "./ui/spacing/Spacing";

export const metadata = {
  title: "404 - Page not Found..!",
};

export default function PageNotFound() {
  return (
    <div className="cs_error cs_center text-center cs_gray_bg_1">
      <div className="container">
        <h2 className="cs_section_title cs_fs_150 mb-0">404</h2>
        <p className={`cs_section_subtitle cs_accent_color cs_mb_16 wow text-center`}>Page not found.</p>
        <Spacing lg="30" md="30" />
        <Link className="cs_btn cs_style_1 cs_radius_15" href="/" >Back to Home</Link>
      </div>
    </div>
  )
}