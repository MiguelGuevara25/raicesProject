import SoundLock from "./SoundLock";
import Swal from "sweetalert2";

const NuestrasCapsulas = () => {
  const handleSoundLock = () => {
    const sound = new Audio("/sounds/lock.mp3");
    sound.play();
  };

  const handleModalVideo = () => {
    Swal.fire({
      html: `<iframe width="590" height="315" src="https://www.youtube.com/embed/BwfyplRZBxI?si=Aan52lwzHIydO4h_" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>`,
      width: 650,
      confirmButtonText: "Ok",
    });
  };

  return (
    <section>
      <div className="relative z-50">
        <h2
          className="absolute bottom-[15%] left-[20%] md:text-4xl lg:text-8xl xl:text-7xl 2xl:text-8xl font-extrabold text-[#45260B] w-20 md:w-48"
          data-aos="fade-right"
          data-aos-duration="1500"
        >
          <span className="2xl:text-[110px]">Nuestras</span> cápsulas
        </h2>
        <img src="/images/mapaSin.png" alt="Mapa" />
        <img
          className="absolute bottom-[17%] right-[28%] photoZamponia lg:w-auto w-[8%]"
          data-aos="zoom-out"
          data-aos-duration="1500"
          src="/images/charango.png"
          onClick={handleModalVideo}
        />
        <SoundLock x="top-[16%]" y="right-[36.7%]" handle={handleSoundLock} />
        <SoundLock x="top-[19%]" y="right-[1.5%]" handle={handleSoundLock} />
        <SoundLock x="top-[31%]" y="left-[45.3%]" handle={handleSoundLock} />
        <SoundLock x="top-[48.5%]" y="right-[12.2%]" handle={handleSoundLock} />
        <SoundLock x="bottom-[5%]" y="right-[14.5%]" handle={handleSoundLock} />
        <div
          className={`absolute bottom-[20%] right-[43%] w-24 h-32 cursor-pointer`}
          onClick={handleSoundLock}
        ></div>
      </div>
    </section>
  );
};

export default NuestrasCapsulas;
