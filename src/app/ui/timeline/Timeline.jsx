
export default function Timeline({title, data}) {
  return (
    <>
      <h3 className="cs_fs_37 cs_mb_66 cs_mb_lg_35">{title}</h3>
      <ul className="cs_list cs_style_1 cs_mp_0">
        {data?.map((item, index) => (
          <li key={index}>
            <p className="cs_mb_30 cs_mb_lg_15">{item.time}</p>
            <h3 className="cs_fs_28 cs_mb_11">{item.title}</h3>
            <p className="mb-0">{item.subTitle}</p>
          </li>
        ))}
      </ul>
    </>
  )
}
