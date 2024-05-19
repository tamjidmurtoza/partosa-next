import { Icon } from "@iconify/react/dist/iconify.js";

export default function SocialBtns() {
  return (
    <div className="cs_hero_social_btns wow fadeIn" data-wow-duration="1.3s" data-wow-delay="0.2s" >
      <a href="#" className="cs_center cs_radius_7">
        <Icon icon="fa:dribbble" />
      </a>
      <a href="#" className="cs_center cs_radius_7">
        <Icon icon="fa:pinterest-p" />
      </a>
      <a href="#" className="cs_center cs_radius_7">
        <Icon icon="fa:behance" />
      </a>
      <a href="#" className="cs_center cs_radius_7">
        <Icon icon="fa:instagram" />  
      </a>
    </div>
  )
}
