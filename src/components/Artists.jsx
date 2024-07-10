import Artist from "./Artist";

const Artists = () => {
  const caca = () => {
    console.log("caca");
  };

  return (
    <section class="bg-[#FFFAF3] relative">
      <div class="flex flex-wrap justify-center items-center gap-y-12 py-20">
        <div class="flex items-center gap-8 w-full">
          <Artist client:load artist="kayfex.png" />

          <h2 class="basis-2/5 self-stretch flex items-center justify-center">
            <span class="text-9xl font-bold">Descubre</span>
          </h2>

          <Artist client:load artist="arianGaitan.png" onClick={caca} />
          <Artist client:load artist="chabucaGranda.png" />
        </div>

        <div class="flex items-center gap-8 w-full">
          <Artist artist="cruzCaiman.png" />
          <Artist artist="danielBazanJr.png" />
          <Artist artist="daskeGaitan.png" />

          <h2 class="basis-1/5 self-stretch flex items-center justify-center">
            <span class="text-9xl font-bold">a</span>
          </h2>

          <Artist artist="diosdado.png" />
        </div>

        <div class="flex items-center gap-8 w-full">
          <Artist artist="milenaWarthon.png" />

          <h2 class="basis-1/5 self-stretch flex items-center justify-center">
            <span class="text-9xl font-bold">más</span>
          </h2>

          <Artist artist="oscarAviles.png" />
          <Artist artist="renataFlores.png" />
          <Artist artist="susanaBaca.png" />
        </div>

        <div class="flex items-center gap-8 w-full">
          <Artist artist="tonySuccar.png" />
          <Artist artist="zamboCavero.png" />

          <h2 class="basis-2/5 self-stretch flex items-center justify-center">
            <span class="text-9xl font-bold">artistas...</span>
          </h2>

          <Artist artist="kayfex.png" />
        </div>
      </div>
    </section>
  );
};

export default Artists;
