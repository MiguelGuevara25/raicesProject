const Tabs = () => {
  return (
    <div className="flex gap-5 justify-center [&>div]:rounded-3xl [&>div]:text-[#FFFAF3] [&>div]:basis-1/4 [&>div]:overflow-hidden [&>div>div>h3]:font-bold [&>div>div>h3]:text-6xl [&>div>div>h3]:mb-2.5 [&>div>div>p]:text-xl">
      <div className="bg-[#870002]">
        <div>
          <img src="raicesFusion.webp" alt="" />
        </div>

        <div className="py-6 px-10">
          <h3>Diversidad Cultural</h3>
          <p>
            La música fusión peruana refleja la rica diversidad cultural del
            país, uniendo tradiciones ancestrales con sonidos contemporáneos.
            Combina influencias andinas, afroperuanas, amazónicas y criollas,
            destacándose por su innovación y popularidad tanto a nivel nacional
            como internacional.
          </p>
        </div>
      </div>

      <div className="bg-[#647115]">
        <div>
          <img src="raicesFusion.webp" alt="" />
        </div>

        <div className="py-6 px-10">
          <h3>Influencias Modernas</h3>
          <p>
            La fusión peruana mezcla sonidos tradicionales con géneros modernos
            como rock, jazz, hip-hop, electrónica y cumbia, incorporando
            instrumentos tradicionales como la quena o el charango junto con
            procesos y sonidos actuales, creando una combinación única que
            resuena con audiencias globales.
          </p>
        </div>
      </div>

      <div className="bg-[#6A2B11]">
        <div>
          <img src="raicesFusion.webp" alt="" />
        </div>

        <div className="py-6 px-10">
          <h3>Innovación y Futuro</h3>
          <p>
            Más que una simple mezcla de géneros, la música fusión peruana es un
            testimonio de la capacidad del país para reinventarse. Celebrando su
            patrimonio cultural, ofrece una nueva perspectiva sobre cómo las
            tradiciones pueden evolucionar y mantenerse relevantes, asegurando
            que la música peruana continue sorprendiendo al mundo.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Tabs;
