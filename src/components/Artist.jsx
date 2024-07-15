import { useEffect, useState } from "react";
import ModalBiography from "./ModalBiography";

const Artist = ({ artist, slider }) => {
  const [bioArtist, setBioArtist] = useState(false);
  const [isClosing, setIsClosing] = useState(false);

  useEffect(() => {
    if (bioArtist) {
      document.body.classList.add("no-scroll");
    } else {
      document.body.classList.remove("no-scroll");
    }

    return () => {
      document.body.classList.remove("no-scroll");
    };
  }, [bioArtist]);

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
      <div
        className={`bg-[#DEC499] flex justify-center items-end rounded-3xl h-32 basis-1/5 z-50 ${slider}`}
      >
        <img
          className="h-40 hover:scale-125 hover:-translate-y-5 transition-all duration-300 ease-in-out cursor-pointer"
          src={`/images/artists/sliders/${artist}`}
          alt={`${artist}`}
          onClick={handleBioArtist}
        />
      </div>

      {bioArtist && (
        <ModalBiography
          isClosing={isClosing}
          handleCloseBioArtist={handleCloseBioArtist}
          artist={artist}
        />
      )}
    </>
  );
};

export default Artist;
