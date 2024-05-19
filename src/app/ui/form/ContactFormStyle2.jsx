
export default function ContactFormStyle2() {
  return (
    <form action="#" className="row">
      <div className="col-lg-6">
        <div className="cs_mb_18">
          <label>Full Name*</label>
          <input type="text" className="cs_form_field" />
        </div>
      </div>
      <div className="col-lg-6">
        <div className="cs_mb_18">
          <label>Email*</label>
          <input type="text" className="cs_form_field" />
        </div>
      </div>
      <div className="col-lg-12">
        <div className="cs_mb_25">
          <label>Comments*</label>
          <textarea
            cols={30}
            rows={5}
            className="cs_form_field"
            defaultValue={""}
          />
        </div>
        <button className="cs_btn cs_style_1 cs_type_2 cs_radius_15">
          Post Comment
        </button>
      </div>
    </form>
  )
}
