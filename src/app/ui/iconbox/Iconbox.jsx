
export default function Iconbox({imgUrl, title, subTitle}) {
  return (
    <div className="cs_iconbox cs_style_1 cs_radius_15">
      <div className="cs_iconbox_icon">
        <img src={imgUrl} alt="" />
      </div>
      <div className="cs_iconbox_right">
        <h3 className="cs_iconbox_title cs_mb_27 cs_fs_37 cs_mb_lg_17">{title}</h3>
        <p className="mb-0">{subTitle}</p>
      </div>
    </div>
  )
}
