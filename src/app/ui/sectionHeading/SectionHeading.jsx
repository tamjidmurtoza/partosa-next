import parser from "html-react-parser";

export default function SectionHeading({title, subTitle, varient}) {
  return (
    <div className={`cs_section_heading cs_style_1 ${varient ? varient : ''}`}>
      <p
        className={`cs_section_subtitle cs_accent_color cs_mb_16 wow ${varient === 'text-center' ? 'fadeInUp' : 'fadeInLeft'}`}
        data-wow-duration="0.8s"
        data-wow-delay="0.2s"
      >{subTitle}</p>
      <h2 className="cs_section_title cs_fs_67 mb-0">{parser(title)}</h2>
    </div>
  )
}
