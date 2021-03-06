import React from "react"

const ShiverAnimation = () => {
  return (
      <div>
        <svg xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" viewBox="0 0 1000 1000" class="world">
            <defs>
                <linearGradient id="beam-mask-gradient" x1="170" y1="503.73" x2="170" y2="2.29" gradientUnits="userSpaceOnUse">
                    <stop offset="0"/>
                    <stop offset="1" stop-color="#fff"/>
                </linearGradient>
                <mask id="beam-mask" x="-50" y="-0.27" width="440" height="508" maskUnits="userSpaceOnUse">
                    <rect fill="url(#beam-mask-gradient)" x="-50" width="440" height="508"/>
                </mask>
                <linearGradient id="beam-gradient" x1="123.73" y1="240.19" x2="187.2" y2="267.39" gradientUnits="userSpaceOnUse">
                    <stop offset="0" class="beam-gradient" stop-opacity="0.5"/>
                    <stop offset="1" class="beam-gradient" stop-opacity="0.1"/>
                </linearGradient>
                <symbol id="beam" data-name="beam" viewBox="0 0 306 505">
                    <polygon mask="url(#beam-mask)" fill="url(#beam-gradient)" points="79 505 0 505 227 0 306 0 79 505"/>
                </symbol>
                <linearGradient id="sky-gradient" x1="500" y1="123.81" x2="500" y2="410.73" gradientUnits="userSpaceOnUse">
                    <stop offset="0" class="sky-dark"/>
                    <stop offset="1" class="sky-bright" />
                </linearGradient>
                <linearGradient id="ocean-gradient" x1="499.5" y1="999.5" x2="499.5" y2="499.5" gradientUnits="userSpaceOnUse">
                    <stop offset="0" class="ocean-deep" stop-color="#306b98"/>
                    <stop offset="0.85" class="ocean-shallow" stop-color="#9fc2ca"/>
                </linearGradient>
                <clipPath id="world">
                    <circle id="clipPath" cx="500" cy="500" r="450"/>
                </clipPath>
                <clipPath id="waves">
                    <path class="wave" d="M1502,950H-500V632c115-3,147-58,250-58s145,58,250,58,147-58,250-58,145,58,250,58,147-58,250-58,145,58,250,58,147-58,250-58,145,58,250,58C1500,780,1502,950,1502,950Z"/>
                </clipPath>
                <clipPath id="icebergClip">
                    <path class="wave reverse" class="cls-2" d="M-399,0H1603V504c-115,3-147,58-250,58s-145-58-250-58-147,58-250,58-145-58-250-58-147,58-250,58-145-58-250-58-147,58-250,58-145-58-250-58C-397,356-399,0-399,0Z"/>
                </clipPath>
            </defs>
            <g clip-path="url(#world)">
                <rect fill="url(#sky-gradient)" width="1000" height="500"/>
                <rect class="ocean-surface" x="-1" y="445" width="1000" height="554"/>
                <g clip-path="url(#icebergClip)">
                    <g id="iceBerg" class="ice-berg">
                    <path class="ice" d="M514 504L387 837l-5 14-66-110-25 3-100-282-2-4 2-2 2-3 114-203 18 50 26 17 47-73 47 84 23 83 41 55h5v38z"/>
                    <path class="ice-shade" d="M372 803c-5-37-10-72-6-109s-17-59-28-87c-3-8 2-19-2-25-13-21-33-29-50-46-1-2-6 0-8-1-14-11-20-26-36-36s-3-13-4-21-4-4-8-7-2-4-3-4-23-9-34-14l-2 3-2 3v4l102 281 25-3 66 110 5-14c-3-12-13-22-15-34z"/>
                    <path class="ice-dark" d="M399 244l-47 66 8 35 39-101zm-90 6l-28 82-27 12 55-94zm-17 495L189 463l4-10 99 292zm92 106l-92-149 46 44 46 105z"/>
                    </g>
                </g>
                <g clip-path="url(#waves)">
                    <rect fill="url(#ocean-gradient)" x="-1" y="500" width="1000" height="500"/>
                    <use xlinkHref="#iceBerg" opacity="0.1" />
                    <use class="beam" width="306" height="505.47" transform="translate(217 485)" xlinkHref="#beam"/>
                    <use class="beam" width="306" height="505.47" transform="translate(329 515) scale(0.74)" xlinkHref="#beam"/>
                    <use class="beam" width="306" height="505.47" transform="translate(410 515) scale(0.58)" xlinkHref="#beam"/>
                    <use class="beam" width="306" height="505.47" transform="translate(489 477) scale(0.74)" xlinkHref="#beam"/>
                    <use class="beam" width="306" height="505.47" transform="translate(641 515) scale(0.74)" xlinkHref="#beam"/>
                    <use class="beam" width="306" height="505.47" transform="translate(542 485) scale(0.93)" xlinkHref="#beam"/>
                    <use class="beam" width="306" height="505.47" transform="translate(478 485) scale(0.93)" xlinkHref="#beam"/>
                    <use class="beam" width="306" height="505.47" transform="translate(74 485) scale(0.93)" xlinkHref="#beam"/>
                    <use class="beam" width="306" height="505.47" transform="translate(299 525) scale(0.46)" xlinkHref="#beam"/>
                    <use class="beam" width="306" height="505.47" transform="translate(777 525) scale(0.46)" xlinkHref="#beam"/>
                    <use class="beam" width="306" height="505.47" transform="translate(-50 485) scale(0.84)" xlinkHref="#beam"/>
                    <use class="beam" width="306" height="505.47" transform="translate(93 500) scale(0.57)" xlinkHref="#beam"/>
                </g>
            </g>
        </svg>
    </div>
  )
}

export default ShiverAnimation
