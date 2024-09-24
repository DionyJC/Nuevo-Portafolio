import { TypeAnimation } from "react-type-animation";
import imgPerfil from '../assets/image.png'

const Hero = () => {
  return (
    <section id='inicio' className='sm:flex justify-center items-center h-screen py-4 px-10 mt-28 sm:mt-0 sm:px-20 gap-24'>
      <div className="space-y-6"> {/* Espacio entre el título y el contenido */}
        <h1 className="text-3xl sm:text-5xl lg:text-5xl font-extrabold text-gray-600 font-concert">
          <span className="text-[#ED7D31]">Hola</span>, soy <br />
          <TypeAnimation
            sequence={[
              "Dionisio Caro",
              1000,
              "Programador de software",
              1000,
              "Amante de la tecnología",
              1000,
            ]}
            wrapper="span"
            speed={40}
            repeat={Infinity}
          />
        </h1>
        <p className="text-gray-600 text-lg lg:text-2xl sm:text-lg font-bold">
          Programando el futuro,{" "}
          <span className="text-[#ED7D31] font-bold">un código a la vez</span>
        </p>
      </div>

      <div className="col-span-5 place-self-center mt-4 lg:mt-0">
        <div className="rounded-full w-[250px] h-[250px] lg:w-[400px] lg:h-[400px] relative">
          <img
            src={imgPerfil}
            alt="Dionisio Caro"
            width={450}
            height={450}
            className="absolute transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"
          />
        </div>
      </div>
    </section>
  );
}

export default Hero;
