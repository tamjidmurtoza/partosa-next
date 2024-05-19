
export default function AboutInfo({text, funfact, email, phone, location}) {
  return (
    <div className="cs_about_info">
      <p className="cs_mb_38">{text}</p>
      <ul className="cs_list cs_style_2 cs_mp_0">
        {funfact.map((item, index) => (
          <li key={index}>
            <h2 className="cs_fs_67">{item.title}+</h2>
            <p className="mb-0">{item.subTitle}</p>
          </li>
        ))}
      </ul>
      <div className="cs_height_37 cs_height_lg_30" />
      <div className="cs_gradient_seperator" />
      <div className="cs_height_33 cs_height_lg_30" />
      <ul className="cs_list cs_style_3 cs_mp_0">
        <li> Email : <a href={`mainto: ${email}`}>{email}</a></li>
        <li> Phone : <a href={`tel:${phone}`}>{phone}</a></li>
        <li> Location : {location}</li>
      </ul>
    </div>
  )
}
