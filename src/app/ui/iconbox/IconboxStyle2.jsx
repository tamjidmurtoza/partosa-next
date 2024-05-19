
export default function IconboxStyle2({imgUrl, title, progress}) {
  return (
    <div className="cs_iconbox cs_style_2 text-center">
      <div className="cs_iconbox_in cs_ternary_bg cs_mb_23">
        <img
          className="cs_iconbox_icon cs_mb_21"
          src={imgUrl}
          alt="Figma"
        />
        <h2 className="cs_iconbox_number cs_fs_37 mb-0">{progress}</h2>
      </div>
      <h3 className="cs_iconbox_title mb-0 cs_fs_21 cs_secondary_color">{title}</h3>
    </div>
  )
}
