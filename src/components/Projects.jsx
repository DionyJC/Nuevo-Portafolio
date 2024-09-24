import imgUno from "../assets/1.png";
import imgDos from "../assets/2.jpg";
import imgTres from "../assets/3.jpg";
import imgCuatro from "../assets/4.jpg";
import imgCinco from "../assets/5.png";

const Projects = () => {
  return (
    <section
      id="projects"
      className="flex flex-col mx-auto pb-10 py-4 px-6 sm:px-20"
    >
      <h1 className="text-4xl sm:text-5xl text-gray-600 font-bold text-center">
        Proyectos
      </h1>

      {/* Grid responsivo para las cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 my-10">
        {/* Card de cada proyecto */}
        <div className="group bg-gray-900 rounded-md shadow-lg overflow-hidden transform transition-transform duration-300 hover:scale-105">
          <a
            href="https://next-menu-mocha.vercel.app/"
            target="_blank"
            rel="noopener noreferrer"
            className="block"
          >
            <img
              src={imgUno}
              alt="Proyecto de Menú de Alimentos"
              className="w-full h-48 sm:h-56 object-cover"
            />
            <div className="p-6">
              <h2 className="text-xl font-bold text-white text-center mb-4">
                Menú de alimentos
              </h2>
              <p className="text-white text-center">
                Tecnologías usadas:
                <ul className="list-disc list-inside mt-2">
                  <li>Tailwind CSS, Next.js</li>
                  <li>Consumo de API: The Meal DB API</li>
                  <li>Animaciones: Framer Motion</li>
                </ul>
              </p>
            </div>
          </a>
        </div>

        <div className="group bg-gray-900 rounded-md shadow-lg overflow-hidden transform transition-transform duration-300 hover:scale-105">
          <a
            href="https://control-gastos-red.vercel.app/"
            target="_blank"
            rel="noopener noreferrer"
            className="block"
          >
            <img
              src={imgDos}
              alt="Control Gastos"
              className="w-full h-48 sm:h-56 object-cover"
            />
            <div className="p-6">
              <h2 className="text-xl font-bold text-white text-center mb-4">
                Control Gastos
              </h2>
              <p className="text-white text-center">
                Tecnologías usadas:
                <ul className="list-disc list-inside mt-2">
                  <li>React</li>
                  <li>Tailwind CSS</li>
                </ul>
              </p>
            </div>
          </a>
        </div>

        <div className="group bg-gray-900 rounded-md shadow-lg overflow-hidden transform transition-transform duration-300 hover:scale-105 ">
          <a
            href="https://mern-crud-frontend-sigma.vercel.app/"
            target="_blank"
            rel="noopener noreferrer"
            className="block"
          >
            <img
              src={imgTres}
              alt="Crud - MERN"
              className="w-full h-48 sm:h-56 object-cover"
            />
            <div className="p-6">
              <h2 className="text-xl font-bold text-white text-center mb-4">
                Crud - MERN
              </h2>
              <p className="text-white text-center">
                Tecnologías usadas:
                <ul className="list-disc list-inside mt-2">
                  <li>MongoDB</li>
                  <li>Express</li>
                  <li>React</li>
                  <li>Node.js</li>
                  <li>Tailwind CSS</li>
                </ul>
              </p>
            </div>
          </a>
        </div>

        <div className="group bg-gray-900 rounded-md shadow-lg overflow-hidden transform transition-transform duration-300 hover:scale-105">
          <a
            href="https://www.youtube.com/watch?v=kcMOSFavAcY&list=LL&index=29&t=206s"
            target="_blank"
            rel="noopener noreferrer"
            className="block"
          >
            <img
              src={imgCuatro}
              alt="Administrador de Libros"
              className="w-full h-48 sm:h-56 object-cover"
            />
            <div className="p-6">
              <h2 className="text-xl font-bold text-white text-center mb-4">
                Administrador de Libros
              </h2>
              <p className="text-white text-center">
                Tecnologías usadas:
                <ul className="list-disc list-inside mt-2">
                  <li>JavaFX</li>
                  <li>MySQL</li>
                </ul>
              </p>
            </div>
          </a>
        </div>

        <div className="group bg-gray-900 rounded-md shadow-lg overflow-hidden transform transition-transform duration-300 hover:scale-105">
          <a
            href="https://easybank-web-red.vercel.app/"
            target="_blank"
            rel="noopener noreferrer"
            className="block"
          >
            <img
              src={imgCinco}
              alt="Landing Page - Easybank"
              className="w-full h-48 sm:h-56 object-cover"
            />
            <div className="p-6">
              <h2 className="text-xl font-bold text-white text-center mb-4">
                Landing Page - Easybank
              </h2>
              <p className="text-white text-center">
                Tecnologías usadas:
                <ul className="list-disc list-inside mt-2">
                  <li>HTML5</li>
                  <li>CSS3</li>
                </ul>
              </p>
            </div>
          </a>
        </div>
      </div>
    </section>
  );
};

export default Projects;
