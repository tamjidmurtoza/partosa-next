export default function ContactForm() {
  return (
    <form action="#">
      <div className="cs_mb_18">
        <label>Full Name*</label>
        <input type="text" className="cs_form_field" />
      </div>
      <div className="cs_mb_18">
        <label>Email*</label>
        <input type="email" className="cs_form_field" />
      </div>
      <div className="cs_mb_18">
        <label>Mobile*</label>
        <input type="text" className="cs_form_field" />
      </div>
      <div className="cs_mb_25">
        <label>Write Project Details*</label>
        <textarea
          cols={30}
          rows={5}
          className="cs_form_field"
          defaultValue={""}
        />
      </div>
      <button className="cs_btn cs_style_1 cs_type_2 cs_radius_15">
        Send Message
      </button>
    </form>
  )
}
