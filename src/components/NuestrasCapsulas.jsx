import SoundLock from "./SoundLock";

const NuestrasCapsulas = () => {
  const handleSoundLock = () => {
    const sound = new Audio("/sounds/lock.mp3");
    sound.play();
  };

  return (
    <section>
      <div className="relative">
        <h2 className="absolute bottom-40 left-96 text-8xl font-extrabold text-[#45260B] w-48">
          <span className="text-[110px]">Nuestras</span> cápsulas
        </h2>
        <img src="/images/mapa.png" alt="Mapa" />
        <SoundLock x="top-[16%]" y="right-[36.7%]" handle={handleSoundLock} />
        <SoundLock x="top-[19%]" y="right-[1.5%]" handle={handleSoundLock} />
        <SoundLock x="top-[31%]" y="left-[45.3%]" handle={handleSoundLock} />
        <SoundLock x="top-[48.5%]" y="right-[12.2%]" handle={handleSoundLock} />
        <SoundLock x="bottom-[5%]" y="right-[14.5%]" handle={handleSoundLock} />
      </div>
    </section>
  );
};

export default NuestrasCapsulas;
