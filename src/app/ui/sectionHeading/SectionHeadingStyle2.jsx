import parser from "html-react-parser";

export default function SectionHeadingStyle2({title, subTitle, downloadBtn, downloadFile}) {
  return (
    <div className="cs_section_heading cs_style_2">
      <div className="cs_section_heading_left">
        <p
          className="cs_section_subtitle cs_accent_color cs_mb_16 wow fadeInLeft"
          data-wow-duration="0.8s"
          data-wow-delay="0.2s"
        >{subTitle}</p>
        <h2 className="cs_section_title cs_fs_67 mb-0">{parser(title)}</h2>
      </div>
      {downloadBtn && 
        <div className="cs_section_heading_right">
          <a href={downloadFile} className="cs_btn cs_style_1 cs_radius_15" download>
            Download Resume
          </a>
        </div>
      }
    </div>
  )
}
