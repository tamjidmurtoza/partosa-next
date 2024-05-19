import Spacing from "../spacing/Spacing";


export default function FooterStyle2({className, ...props}) {
  const year = new Date().getFullYear();

  return (
    <footer className={`${className ? className : ''}`} {...props}>
      <Spacing lg='35' md='35' />
      <div className="container">
        <div className="cs_copyright cs_accent_color">Copyright © {year} <a className="cs_profile_link" href="https://themeforest.net/search/laralink" target="_blank" >Laralink</a>. All rights reserved.</div>
      </div>
      <Spacing lg='35' md='35' />
    </footer>

  )
}
