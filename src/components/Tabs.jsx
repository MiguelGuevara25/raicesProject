import { Swiper, SwiperSlide } from "swiper/react";
import { EffectCards } from "swiper/modules";
import { dataTabs } from "../data/data";

const Tabs = () => {
  return (
    <div className="h-screen flex justify-center items-center relative z-50">
      <Swiper
        effect={"cards"}
        grabCursor={true}
        initialSlide={1}
        modules={[EffectCards]}
        rewind={true}
        className="mySwiper text-[#FFFAF3]"
        data-aos="fade-up"
      >
        {dataTabs.map(({ id, bg, img, title, text }) => {
          return (
            <SwiperSlide key={id}>
              <div style={{ backgroundColor: `${bg}` }}>
                <div>
                  <img src={img} alt={title} />
                </div>

                <div className="py-6 px-10">
                  <h3 className="font-bold text-6xl mb-2.5">{title}</h3>
                  <p className="leading-6 tracking-wide text-xl">{text}</p>
                </div>
              </div>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </div>
  );
};

export default Tabs;
