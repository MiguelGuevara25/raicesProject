const RespiroVisual = () => {
  return (
    <section className="bg-[#45260B] h-screen flex flex-col justify-center items-center relative font-bold text-[#FFFAF3] [&>p]:text-[#FFFAF3]/20 md:text-7xl text-5xl [&>p]:absolute [&>p]:text-7xl [&>p]:font-extrabold">
      <div
        className="md:max-w-md max-w-60 lg:mb-5 mb-10 relative z-50"
        data-aos="zoom-in-up"
        data-aos-duration="1500"
      >
        <img
          className="photoZamponia relative z-50"
          src="/images/zampoñaFuturista.webp"
          alt="Zampoña Futurista"
        />
      </div>

      <div>
        <h3 className="text-center">
          Pasado que <br />
          <span className="md:text-8xl text-6xl">inspira</span>
        </h3>
      </div>

      <p className="float__words__inverse__1 top-56 right-32 transition-all">
        Herencia
      </p>
      <p className="float__words__1 top-72 left-32 transition-all">
        Innovación
      </p>
      <p className="float__words right-16 bottom-48 transition-all">
        Tradicionales
      </p>
      <p className="float__words__inverse left-16 bottom-24 transition-all">
        Estilos modernos
      </p>
    </section>
  );
};

export default RespiroVisual;
