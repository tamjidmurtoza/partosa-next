import Image from "next/image"
import Link from "next/link"

export default function Blog({imgUrl, date, title, linkUrl}) {
  return (
    <div className="cs_post cs_style_1">
      <Link
        href={linkUrl}
        className="cs_post_thumb cs_radius_15 cs_mb_30"
      >
        <Image src={`${imgUrl}`} alt="Thumb" height={501} width={624} />
      </Link>
      <div className="cs_post_info">
        <p className="cs_posted_by cs_accent_color cs_mb_15">{date}</p>
        <h2 className="cs_post_title cs_fs_28 cs_mb_26">
          <Link href={linkUrl}>{title}</Link>
        </h2>
        <Link href={linkUrl} className="cs_text_btn cs_semibold">
          Read More
        </Link>
      </div>
    </div>
  )
}
