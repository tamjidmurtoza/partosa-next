

export default function MovingText({data}) {
  return (
    <div className="cs_moving_text_wrap cs_style_1 cs_fs_150 cs_bold">
      <div className="cs_moving_text_in">
        {data?.map((item, index) => (
          <div className="cs_moving_text" key={index}>{item}</div>
        ))}
      </div>
    </div>
  )
}
