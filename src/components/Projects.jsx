import imgUno from "../assets/1.png";
import imgDos from "../assets/2.jpg";
import imgTres from "../assets/3.jpg";
import imgCuatro from "../assets/4.jpg";
import imgCinco from "../assets/5.png";

const Projects = () => {
  return (
    <section
      id="projects"
      className="flex flex-col mx-auto pb-10  py-4 px-6 sm:px-20"
    >
      <h1 className="text-4xl sm:text-5xl text-gray-600 font-bold text-center">
        Proyectos
      </h1>

      <div className="flex flex-col sm:flex-row justify-center items-center my-10 gap-10 sm:gap-20">
        {/* Imagen del proyecto con enlace */}
        <a href="https://next-menu-mocha.vercel.app/" target="_blank" rel="noopener noreferrer">
          <div className="w-[320px] sm:w-[400px] h-[200px] sm:h-[250px] rounded-md overflow-hidden shadow-lg transform transition-transform duration-300 hover:scale-105 cursor-pointer">
            <img
              src={imgUno}
              alt="Proyecto de Menú de Alimentos"
              className="object-cover w-full h-full"
            />
          </div>
        </a>

        {/* Tarjeta de información */}
        <div className="bg-white w-[320px] sm:w-[450px] h-auto sm:h-[250px] p-6 rounded-md shadow-2xl transform transition-transform duration-300 hover:scale-105 cursor-pointer">
          <h2 className="text-center text-2xl text-gray-600 font-bold mb-4">
            Menú de alimentos
          </h2>
          <h4 className="text-center text-gray-500">
            Tecnologías usadas:
            <ul className="list-disc list-inside mt-2">
              <li>Tailwind CSS, Next.js</li>
              <li>Consumo de API: The Meal DB API</li>
              <li>Animaciones: Framer Motion</li>
            </ul>
          </h4>
        </div>
      </div>

     
      <div className="flex flex-col sm:flex-row justify-center items-center my-10 gap-10 sm:gap-20">
        <a href="https://control-gastos-red.vercel.app/" target="_blank" rel="noopener noreferrer">
          <div className="w-[320px] sm:w-[400px] h-[200px] sm:h-[250px] rounded-md overflow-hidden shadow-lg transform transition-transform duration-300 hover:scale-105 cursor-pointer">
            <img
              src={imgDos}
              alt="Control Gastos"
              className="object-cover w-full h-full"
            />
          </div>
        </a>

        <div className="bg-white w-[320px] sm:w-[450px] h-auto sm:h-[250px] p-6 rounded-md shadow-2xl transform transition-transform duration-300 hover:scale-105 cursor-pointer">
          <h2 className="text-center text-2xl text-gray-600 font-bold mb-4">
            Control Gastos
          </h2>
          <h4 className="text-center text-gray-500">
            Tecnologías usadas:
            <ul className="list-disc list-inside mt-2">
              <li>React</li>
              <li>Tailwind CSS</li>
            </ul>
          </h4>
        </div>
      </div>

      {/* Continúa para los demás proyectos */}
      <div className="flex flex-col sm:flex-row justify-center items-center my-10 gap-10 sm:gap-20">
        <a href="https://mern-crud-frontend-sigma.vercel.app/" target="_blank" rel="noopener noreferrer">
          <div className="w-[320px] sm:w-[400px] h-[200px] sm:h-[250px] rounded-md overflow-hidden shadow-lg transform transition-transform duration-300 hover:scale-105 cursor-pointer">
            <img
              src={imgTres}
              alt="Crud - MERN"
              className="object-cover w-full h-full"
            />
          </div>
        </a>

        <div className="bg-white w-[320px] sm:w-[450px] h-auto sm:h-[250px] p-6 rounded-md shadow-2xl transform transition-transform duration-300 hover:scale-105 cursor-pointer">
          <h2 className="text-center text-2xl text-gray-600 font-bold mb-4">
            Crud - MERN
          </h2>
          <h4 className="text-center text-gray-500">
            Tecnologías usadas:
            <ul className="list-disc list-inside mt-2">
              <li>MongoDB</li>
              <li>Express</li>
              <li>React</li>
              <li>Node.js</li>
              <li>Tailwind CSS</li>
            </ul>
          </h4>
        </div>
      </div>

      {/* Repite para otros proyectos */}
      <div className="flex flex-col sm:flex-row justify-center items-center my-10 gap-10 sm:gap-20">
        <a href="https://www.youtube.com/watch?v=kcMOSFavAcY&list=LL&index=29&t=206s" target="_blank" rel="noopener noreferrer">
          <div className="w-[320px] sm:w-[400px] h-[200px] sm:h-[250px] rounded-md overflow-hidden shadow-lg transform transition-transform duration-300 hover:scale-105 cursor-pointer">
            <img
              src={imgCuatro}
              alt="Administrador de Libros"
              className="object-cover w-full h-full"
            />
          </div>
        </a>

        <div className="bg-white w-[320px] sm:w-[450px] h-auto sm:h-[250px] p-6 rounded-md shadow-2xl transform transition-transform duration-300 hover:scale-105 cursor-pointer">
          <h2 className="text-center text-2xl text-gray-600 font-bold mb-4">
            Administrador de Libros
          </h2>
          <h4 className="text-center text-gray-500">
            Tecnologías usadas:
            <ul className="list-disc list-inside mt-2">
              <li>JavaFX</li>
              <li>MySQL</li>
            </ul>
          </h4>
        </div>
      </div>

      <div className="flex flex-col sm:flex-row justify-center items-center my-10 gap-10 sm:gap-20">
        <a href="https://easybank-web-red.vercel.app/" target="_blank" rel="noopener noreferrer">
          <div className="w-[320px] sm:w-[400px] h-[200px] sm:h-[250px] rounded-md overflow-hidden shadow-lg transform transition-transform duration-300 hover:scale-105 cursor-pointer">
            <img
              src={imgCinco}
              alt="Landing Page - Easybank"
              className="object-cover w-full h-full"
            />
          </div>
        </a>

        <div className="bg-white w-[320px] sm:w-[450px] h-auto sm:h-[250px] p-6 rounded-md shadow-2xl transform transition-transform duration-300 hover:scale-105 cursor-pointer">
          <h2 className="text-center text-2xl text-gray-600 font-bold mb-4">
            Landing Page - Easybank
          </h2>
          <h4 className="text-center text-gray-500">
            Tecnologías usadas:
            <ul className="list-disc list-inside mt-2">
              <li>HTML5</li>
              <li>CSS3</li>
            </ul>
          </h4>
        </div>
      </div>
    </section>
  );
};

export default Projects;
