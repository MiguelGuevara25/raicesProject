import { useState } from "react";
import { IoCloseOutline } from "react-icons/io5";

const Artist = ({ artist }) => {
  const [bioArtist, setBioArtist] = useState(false);
  const [isClosing, setIsClosing] = useState(false);

  const handleBioArtist = () => {
    setBioArtist(true);
    setIsClosing(false);
  };

  const handleCloseBioArtist = () => {
    setIsClosing(true);
    setTimeout(() => {
      setBioArtist(false);
    }, 500);
  };

  return (
    <>
      <div className="bg-[#DEC499] flex justify-center items-end rounded-3xl h-32 basis-1/5">
        <img
          className="h-40 hover:scale-125 hover:-translate-y-5 transition-all duration-300 ease-in-out cursor-pointer"
          src={`/images/artists/sliders/${artist}`}
          alt={`${artist}`}
          onClick={handleBioArtist}
        />
      </div>

      {bioArtist && (
        <div
          className={`fixed inset-0 bg-black/40 z-50 animate__animated ${
            isClosing ? "animate__fadeOut" : "animate__fadeIn"
          }`}
        >
          <div
            className={`fixed top-0 right-0 w-[90%] h-full bg-[#FFFAF3] z-50 transition-all duration-500 ease-in-out animate__animated ${
              isClosing ? "animate__slideOutRight" : "animate__slideInRight"
            }`}
          >
            <div
              className="absolute top-10 left-0 p-1 text-4xl rounded-e-lg text-[#45260B] bg-[#DEC499] cursor-pointer"
              onClick={handleCloseBioArtist}
            >
              <IoCloseOutline className="font-extrabold" />
            </div>

            <div
              className="h-64 bg-center bg-cover bg-no-repeat flex justify-center items-center bg-gradient-to-tr from-black to-[#FFFAF3]"
              style={{ backgroundImage: "url('images/raicesFusion.webp')" }}
            >
              <h2 className="text-[#FFFAF3] font-extrabold text-6xl">
                Arturo Cavero Velásquez
              </h2>
            </div>

            <div className="bg-white flex gap-20 justify-center items-center py-14 text-[#45260B]">
              <div className="bg-[#45260B] rounded-full">
                <img
                  className="rounded-full"
                  width="220"
                  src="/images/artists/sliders/kayfex.png"
                  alt=""
                />
              </div>

              <p className="text-lg w-1/4">
                Nacido en Lima el 29 de noviembre de 1940, es reconocido entre
                sus seguidores como El Zambo Cavero. Este cantor de la música
                criolla peruana ha conquistado los corazones de muchos con su
                arte.
              </p>
            </div>

            <div>
              
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Artist;
