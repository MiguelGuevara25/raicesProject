import { useState } from "react";

const SamplePack = () => {
  const [isScaled, setIsScaled] = useState(false);

  const handleSoundCajon = () => {
    const audio = new Audio("/sounds/cajon.wav");
    audio.play();

    setIsScaled(true);

    setTimeout(() => {
      setIsScaled(false);
    }, 7800);
  };

  return (
    <section className="bg-[#45260B] text-[#FFFAF3] flex justify-center items-center h-screen">
      <div className="flex flex-col items-center">
        <h2 className="text-8xl w-3/5 text-center font-bold z-50">
          ¡Conecta con nuestras raíces!
        </h2>

        <div className="relative z-50">
          <img
            width="300"
            src="/images/cajon.webp"
            alt="Zampoña Futurista"
            className={`cursor-pointer hover:scale-[1.15] transition-transform duration-300 ${
              isScaled ? "scale-[1.15]" : ""
            }`}
            onClick={handleSoundCajon}
          />
          <div className="absolute w-[30rem] h-56 bg-[#93a51a] top-20 -left-24 rounded-full -z-10"></div>
        </div>

        <div className="text-3xl font-semibold flex flex-col justify-center items-center mt-6 gap-2 z-50">
          <p>Prueba y explora nuestro sample pack</p>

          <a
            href="https://www.beatstars.com/raicesmusicpe"
            className="text-[#45260B] bg-[#FFFAF3] px-7 py-1 rounded-full w-max"
            target="_blank"
          >
            +Ver más
          </a>
        </div>
      </div>
    </section>
  );
};

export default SamplePack;
