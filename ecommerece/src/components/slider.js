import React from "react";
import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/pagination";
import { EffectCreative, Autoplay, EffectCards } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

function Slider() {
  return (
    <>
      <Swiper
        // effect={"creative"}
        modules={[EffectCreative, Autoplay]}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false
        }}
        className="h-[85vh]">
        <SwiperSlide>
          <div className="relative h-[85vh]">
            <img
              className="object-cover w-full h-full"
              src="https://fashion-slider.uiinitiative.com/images/puma.jpg"
              alt=""
            />
            <div className="absolute top-0 left-0 w-full h-full text-black text-8xl ">
              <span className="flex items-center justify-center w-full h-full font-sans font-bold text-white">
                Puma
              </span>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="relative h-[85vh]">
            <img
              className="object-cover w-full h-full"
              src="https://fashion-slider.uiinitiative.com/images/yeeze.jpg"
              alt=""
            />
            <div className="absolute top-0 left-0 w-full h-full text-black text-8xl ">
              <span className="flex items-center justify-center w-full h-full font-sans font-bold text-white">
                Nike
              </span>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </>
    // <div>
    //   <div className="fashion-slider">
    //     <div
    //       className="swiper swiper-initialized swiper-horizontal swiper-watch-progress swiper-backface-hidden"
    //       style={{ backgroundColor: "rgb(159, 160, 81)" }}>
    //       {/* right/next navigation button */}
    //       <div className="fashion-slider-button-prev fashion-slider-button fashion-slider-button-disabled">
    //         <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 350 160 90">
    //           <g className="fashion-slider-svg-wrap">
    //             <g className="fashion-slider-svg-circle-wrap">
    //               <circle cx={42} cy={42} r={40} />
    //             </g>
    //             <path
    //               className="fashion-slider-svg-arrow"
    //               d="M.983,6.929,4.447,3.464.983,0,0,.983,2.482,3.464,0,5.946Z"></path>
    //             <path className="fashion-slider-svg-line" d="M80,0H0" />
    //           </g>
    //         </svg>
    //       </div>
    //       {/* left/previous navigation button */}
    //       <div className="fashion-slider-button-next fashion-slider-button">
    //         <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 350 160 90">
    //           <g className="fashion-slider-svg-wrap">
    //             <g className="fashion-slider-svg-circle-wrap">
    //               <circle cx={42} cy={42} r={40} />
    //             </g>
    //             <path
    //               className="fashion-slider-svg-arrow"
    //               d="M.983,6.929,4.447,3.464.983,0,0,.983,2.482,3.464,0,5.946Z"></path>
    //             <path className="fashion-slider-svg-line" d="M80,0H0" />
    //           </g>
    //         </svg>
    //       </div>
    //     </div>
    //   </div>
    // </div>
  );
}

export default Slider;