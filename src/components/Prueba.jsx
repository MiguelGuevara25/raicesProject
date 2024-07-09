import React, { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { EffectCards } from "swiper/modules";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-cards";

import "../css/style.css";

const Prueba = () => {
  return (
    <>
      <Swiper
        effect={"cards"}
        grabCursor={true}
        initialSlide={1}
        modules={[EffectCards]}
        className="mySwiper text-[#FFFAF3]"
      >
        <SwiperSlide>
          <div className="bg-[#870002]">
            <div>
              <img src="/images/tab1.webp" alt="" />
            </div>
            <div className="py-6 px-10">
              <h3 className="font-bold text-6xl mb-2.5">Diversidad Cultural</h3>
              <p className="leading-6 tracking-wide text-xl">
                La música fusión peruana refleja la rica diversidad cultural del
                país, uniendo tradiciones ancestrales con sonidos
                contemporáneos. Combina influencias andinas, afroperuanas,
                amazónicas y criollas, destacándose por su innovación y
                popularidad tanto a nivel nacional como internacional.
              </p>
            </div>
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <div className="bg-[#647115]">
            <div>
              <img src="/images/tab2.webp" alt="" />
            </div>
            <div className="py-6 px-10">
              <h3 className="font-bold text-6xl mb-2.5">
                Influencias Modernas
              </h3>
              <p className="leading-6 tracking-wide text-xl">
                La fusión peruana mezcla sonidos tradicionales con géneros
                modernos como rock, jazz, hip-hop, electrónica y cumbia,
                incorporando instrumentos tradicionales como la quena o el
                charango junto con procesos y sonidos actuales, creando una
                combinación única que resuena con audiencias globales.
              </p>
            </div>
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <div className="bg-[#6A2B11]">
            <div>
              <img src="/images/tab3.webp" alt="" />
            </div>
            <div className="py-6 px-10">
              <h3 className="font-bold text-6xl mb-2.5">Innovación y Futuro</h3>
              <p className="leading-6 tracking-wide text-xl">
                Más que una simple mezcla de géneros, la música fusión peruana
                es un testimonio de la capacidad del país para reinventarse.
                Celebrando su patrimonio cultural, ofrece una nueva perspectiva
                sobre cómo las tradiciones pueden evolucionar y mantenerse
                relevantes, asegurando que la música peruana continue
                sorprendiendo al mundo.
              </p>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </>
  );
};

export default Prueba;
