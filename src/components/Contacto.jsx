import { FaFacebookF, FaInstagram, FaTiktok, FaYoutube } from "react-icons/fa6";

const Contacto = () => {
  return (
    <footer className="bg-[#647115] text-[#FFFAF3]">
      <div className="flex justify-around items-center py-20">
        <div className="text-lg max-w-xl space-y-3">
          <h2 className="text-8xl font-extrabold">Sé parte de Raíces</h2>
          <p>
            Nos apasiona la música fusión peruana y estamos emocionados de
            compartir este viaje contigo. ¡Gracias por tu interés y apoyo!
          </p>
          <input
            className="rounded-full px-4 py-1 outline-none bg-[#FFFAF3]/30 placeholder:text-[#FFFAF3] w-full"
            placeholder="*Correo electrónico"
            type="email"
          />
        </div>

        <div>
          <img
            width="300"
            src="zampoñaFuturista.webp"
            alt="Zampoña Futurista"
          />
        </div>
      </div>

      <div className="bg-[#FFFAF3] text-[#45260B] flex justify-center items-center gap-10 text-2xl py-5">
        <p className="font-bold">Síguenos en nuestras redes sociales</p>

        <div className="flex gap-4 [&>div]:size-9 text-[#FFFAF3] [&>div]:bg-[#45260B] [&>div]:rounded-full [&>div]:flex [&>div]:justify-center [&>div]:items-center [&>div]:hover:cursor-pointer">
          <div>
            <a href="" target="_blank">
              <FaFacebookF />
            </a>
          </div>

          <div>
            <a href="https://www.instagram.com/raices_music" target="_blank">
              <FaInstagram />
            </a>
          </div>

          <div>
            <a href="www.youtube.com/@Raices_music" target="_blank">
              <FaYoutube />
            </a>
          </div>

          <div>
            <a href="https://www.tiktok.com/@raices_music" target="_blank">
              <FaTiktok />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Contacto;
