import ContactForm from "../form/ContactForm";
import Spacing from "../spacing/Spacing";

export default function Footer({className, ...props}) {

  const year = new Date().getFullYear();

  return (
    <footer className={className ? className : ''} {...props}>
      <Spacing lg="142" md="75" />
      <div className="container">
        <div className="row cs_reverse_col_lg cs_gap_y_50">
          <div
            className="col-lg-6 wow fadeInLeft"
            data-wow-duration="0.8s"
            data-wow-delay="0.2s"
          >
            <div className="cs_contact_info_wrap">
              <div>
                <h2 className="cs_fs_67 mb-0">let’s do something awesome</h2>
                <div className="cs_height_84 cs_height_lg_50" />
                <ul className="cs_contact_info_list cs_mp_0">
                  <li>
                    <span className="cs_contact_icon">
                      <img src="/images/icons/map.svg" alt="" />
                    </span>
                    <div className="cs_contact_info_right">
                      <h3 className="cs_fs_28 cs_mb_14">Address</h3>
                      <p className="mb-0">
                        177 Menamoi Street, 30th Floor <br />
                        New York, NY 10017
                      </p>
                    </div>
                  </li>
                  <li>
                    <span className="cs_contact_icon">
                      <img src="/images/icons/phone-email.svg" alt="" />
                    </span>
                    <div className="cs_contact_info_right">
                      <h3 className="cs_fs_28 cs_mb_14">Phone &amp; Email</h3>
                      <p className="mb-0">
                        <a href="tel:(+44)374-3544">(+44) 374-3544</a>
                        <br />
                        <a href="mainto:loramendiz@gmail.com">
                          loramendiz@gmail.com
                        </a>
                      </p>
                    </div>
                  </li>
                </ul>
              </div>
              <div className="cs_copyright cs_accent_color"> Copyright © {year} <a className="cs_profile_link" href="https://themeforest.net/search/laralink" target="_blank" >Laralink</a>. All <br /> rights reserved. </div>
            </div>
          </div>
          <div
            className="col-lg-6 wow fadeIn"
            data-wow-duration="0.8s"
            data-wow-delay="0.2s"
          >
            <div className="cs_pl_100">
              <h3 className="cs_fs_28 mb-0 cs_secondary_color">
                Hey, how about we catch up over coffee and have a chat?
              </h3>
              <div className="cs_height_56 cs_height_lg_40" />
              <ContactForm />
            </div>
          </div>
        </div>
      </div>
      <Spacing lg="126" md="80" />
    </footer>
  )
}
