import Artist from "./Artist";

const Artists = () => {
  return (
    <section
      style={{ backgroundImage: "url('/images/fondoArtists.png')" }}
      className="relative bg-cover bg-no-repeat bg-center"
    >
      <div className="flex flex-wrap justify-center items-center gap-y-12 py-20">
        <div className="flex items-center gap-8 w-full">
          <Artist client:load artist="kayfex.png" slider="card__artists" />

          <h2 className="basis-2/5 self-stretch flex items-center justify-center">
            <span className="text-3xl md:text-5xl lg:text-9xl font-bold text-[#45260B] card__artists">
              Descubre
            </span>
          </h2>

          <Artist client:load artist="arianGaitan.png" slider="card__artists" />
          <Artist
            client:load
            artist="chabucaGranda.png"
            slider="card__artists"
          />
        </div>

        <div className="flex items-center gap-8 w-full">
          <Artist artist="cruzCaiman.png" slider="card__artistsInvert" />
          <Artist artist="danielBazanJr.png" slider="card__artistsInvert" />
          <Artist artist="daskeGaitan.png" slider="card__artistsInvert" />

          <h2 className="basis-1/5 self-stretch flex items-center justify-center">
            <span className="text-3xl md:text-5xl lg:text-9xl font-bold text-[#45260B] card__artistsInvert">
              a
            </span>
          </h2>

          <Artist artist="diosdado.png" slider="card__artistsInvert" />
        </div>

        <div className="flex items-center gap-8 w-full">
          <Artist artist="milenaWarthon.png" slider="card__artists" />

          <h2 className="basis-1/5 self-stretch flex items-center justify-center">
            <span className="text-3xl md:text-5xl lg:text-9xl font-bold text-[#45260B] card__artists">
              más
            </span>
          </h2>

          <Artist artist="oscarAviles.png" slider="card__artists" />
          <Artist artist="renataFlores.png" slider="card__artists" />
          <Artist artist="susanaBaca.png" slider="card__artists" />
        </div>

        <div className="flex items-center gap-8 w-full">
          <Artist artist="tonySuccar.png" slider="card__artistsInvert" />
          <Artist artist="zamboCavero.png" slider="card__artistsInvert" />

          <h2 className="basis-2/5 self-stretch flex items-center justify-center">
            <span className="text-3xl md:text-5xl lg:text-9xl font-bold text-[#45260B] card__artistsInvert">
              artistas...
            </span>
          </h2>

          <Artist artist="kayfex.png" slider="card__artistsInvert" />
        </div>
      </div>
    </section>
  );
};

export default Artists;
