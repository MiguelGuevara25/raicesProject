import Artist from "./Artist";

const Artists = () => {
  return (
    <section
      style={{ backgroundImage: "url('/images/fondoArtists.png')" }}
      className="relative bg-cover bg-no-repeat bg-center"
    >
      <div className="flex flex-wrap justify-center items-center gap-y-12 py-20 z-50">
        <div className="flex items-center gap-8 w-full z-30">
          <Artist client:load artist="kayfex.png" />

          <h2 className="basis-2/5 self-stretch flex items-center justify-center">
            <span className="text-9xl font-bold text-[#45260B] z-30">Descubre</span>
          </h2>

          <Artist client:load artist="arianGaitan.png" />
          <Artist client:load artist="chabucaGranda.png" />
        </div>

        <div className="flex items-center gap-8 w-full">
          <Artist artist="cruzCaiman.png" />
          <Artist artist="danielBazanJr.png" />
          <Artist artist="daskeGaitan.png" />

          <h2 className="basis-1/5 self-stretch flex items-center justify-center">
            <span className="text-9xl font-bold text-[#45260B]">a</span>
          </h2>

          <Artist artist="diosdado.png" />
        </div>

        <div className="flex items-center gap-8 w-full">
          <Artist artist="milenaWarthon.png" />

          <h2 className="basis-1/5 self-stretch flex items-center justify-center">
            <span className="text-9xl font-bold text-[#45260B]">más</span>
          </h2>

          <Artist artist="oscarAviles.png" />
          <Artist artist="renataFlores.png" />
          <Artist artist="susanaBaca.png" />
        </div>

        <div className="flex items-center gap-8 w-full">
          <Artist artist="tonySuccar.png" />
          <Artist artist="zamboCavero.png" />

          <h2 className="basis-2/5 self-stretch flex items-center justify-center">
            <span className="text-9xl font-bold text-[#45260B]">
              artistas...
            </span>
          </h2>

          <Artist artist="kayfex.png" />
        </div>
      </div>
    </section>
  );
};

export default Artists;
