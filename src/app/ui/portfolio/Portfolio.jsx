import Image from "next/image";

export default function Portfolio({title, imgUrl}) {
  return (
    <div className="cs_portfolio cs_style_1 cs_lightbox_item cs_radius_15 overflow-hidden d-block position-relative" >
      <Image src={imgUrl} alt="" height={900} width={900}/>
      <span className="cs_portfolio_btn cs_fs_28 cs_semibold">
        <span>{title}</span>
        <svg
          width={21}
          height={21}
          viewBox="0 0 21 21"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M20.5 2C20.5 1.17157 19.8284 0.5 19 0.5L5.5 0.499999C4.67157 0.499999 4 1.17157 4 2C4 2.82843 4.67157 3.5 5.5 3.5H17.5V15.5C17.5 16.3284 18.1716 17 19 17C19.8284 17 20.5 16.3284 20.5 15.5L20.5 2ZM3.06066 20.0607L20.0607 3.06066L17.9393 0.939339L0.93934 17.9393L3.06066 20.0607Z"
            fill="currentColor"
          />
        </svg>
      </span>
    </div>
  )
}
