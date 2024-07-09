import { Swiper, SwiperSlide } from "swiper/react";
import { EffectCards } from "swiper/modules";
import { dataTabs } from "../data/data";

// import "../css/style.css";

const Tabs = () => {
  return (
    <div className="h-screen flex justify-center items-center">
      <Swiper
        effect={"cards"}
        grabCursor={true}
        initialSlide={1}
        modules={[EffectCards]}
        rewind={true}
        className="mySwiper text-[#FFFAF3]"
      >
        {dataTabs.map((tab) => (
          <SwiperSlide key={tab.id}>
            <div className={`bg-[${tab.bg}]`}>
              <div>
                <img src={tab.img} alt="" />
              </div>
              <div className="py-6 px-10">
                <h3 className="font-bold text-6xl mb-2.5">{tab.title}</h3>
                <p className="leading-6 tracking-wide text-xl">{tab.text}</p>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Tabs;
