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
            className={`fixed top-0 right-0 w-[90%] h-full bg-white z-50 transition-all duration-500 ease-in-out animate__animated ${
              isClosing ? "animate__slideOutRight" : "animate__slideInRight"
            }`}
          >
            <div
              className="absolute top-10 left-0 p-1 text-4xl font-bold text-black bg-[#DEC499] cursor-pointer"
              onClick={handleCloseBioArtist}
            >
              <IoCloseOutline />
            </div>

            <div className="p-8">
              <h2 className="text-2xl font-bold mb-4">Biography of {artist}</h2>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Phasellus imperdiet, nulla et dictum interdum, nisi lorem
                egestas odio, vitae scelerisque enim ligula venenatis dolor.
                Maecenas nisl est, ultrices nec congue eget, auctor vitae massa.
              </p>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Artist;
