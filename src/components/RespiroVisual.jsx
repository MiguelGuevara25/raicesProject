const RespiroVisual = () => {
  return (
    <section class="bg-[#45260B] h-screen flex flex-col justify-center items-center relative font-bold text-[#FFFAF3] [&>p]:text-[#FFFAF3]/20 text-7xl [&>p]:absolute [&>p]:text-7xl [&>p]:font-extrabold">
      <div
        class="max-w-md mb-5 relative z-50"
        data-aos="zoom-in-up"
        data-aos-duration="1500"
      >
        <img
          class="photoZamponia relative z-50"
          src="/images/zampoñaFuturista.webp"
          alt="Zampoña Futurista"
        />
      </div>

      <div>
        <h3 class="text-center">
          Pasado que <br />
          <span class="text-8xl">inspira</span>
        </h3>
      </div>

      <p class="float__words__inverse__1 top-56 right-32 transition-all">
        Herencia
      </p>
      <p class="float__words__1 top-72 left-32 transition-all">Innovación</p>
      <p class="float__words right-16 bottom-48 transition-all">
        Tradicionales
      </p>
      <p class="float__words__inverse left-16 bottom-24 transition-all">
        Estilos modernos
      </p>
    </section>
  );
};

export default RespiroVisual;
