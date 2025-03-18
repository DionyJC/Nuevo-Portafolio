import imgUno from "../assets/1.png";
import imgDos from "../assets/2.jpg";
import imgTres from "../assets/3.jpg";
import imgCuatro from "../assets/4.jpg";
import imgCinco from "../assets/5.png";
import imgSeis from "../assets/6.png";
import { motion } from "framer-motion";
import { useState } from "react";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";

const Projects = () => {
  const projects = [
    {
      id: 1,
      title: "Menú de alimentos",
      image: imgUno,
      description: "Aplicación web para descubrir y explorar diferentes recetas de alimentos",
      tech: ["Tailwind CSS", "Next.js", "The Meal DB API", "Framer Motion"],
      url: "https://next-menu-mocha.vercel.app/",
      github: "#",
    },
    {
      id: 2,
      title: "Control Gastos",
      image: imgDos,
      description: "Aplicación web para gestionar y controlar los gastos personales",
      tech: ["React", "Tailwind CSS"],
      url: "https://control-gastos-red.vercel.app/",
      github: "#",
    },
    {
      id: 3,
      title: "Crud - MERN",
      image: imgTres,
      description: "Aplicación web completa con operaciones CRUD utilizando el stack MERN",
      tech: ["MongoDB", "Express", "React", "Node.js", "Tailwind CSS"],
      url: "https://mern-crud-frontend-sigma.vercel.app/",
      github: "#",
    },
    {
      id: 4,
      title: "Administrador de Libros",
      image: imgCuatro,
      description: "Aplicación de escritorio para administrar una biblioteca de libros",
      tech: ["JavaFX", "MySQL"],
      url: "https://www.youtube.com/watch?v=kcMOSFavAcY&list=LL&index=29&t=206s",
      github: "#",
    },
    {
      id: 5,
      title: "Landing Page - Easybank",
      image: imgCinco,
      description: "Página de aterrizaje para un banco digital con diseño moderno",
      tech: ["HTML5", "CSS3"],
      url: "https://easybank-web-red.vercel.app/",
      github: "#",
    },
    {
      id: 6,
      title: "CatsStyles",
      image: imgSeis,
      description: "Sitio web con animaciones y diseño moderno sobre gatos",
      tech: ["HTML5", "CSS3", "Javascript", "Gsap"],
      url: "https://cats-styles-6jkakiv9o-diony-caros-projects.vercel.app/",
      github: "#",
    },
  ];

  const [hoveredId, setHoveredId] = useState(null);

  // Variantes para la animación de aparición
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const cardVariants = {
    hidden: { y: 50, opacity: 0 },
    visible: { 
      y: 0, 
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 12
      }
    }
  };

  return (
    <section
      id="projects"
      className="flex flex-col mx-auto pb-10 py-4 px-6 sm:px-20 dark:bg-gray-900 transition-colors duration-300"
    >
      <h1 className="text-4xl sm:text-5xl text-gray-600 dark:text-gray-300 font-bold text-center mb-4">
        Proyectos
      </h1>
      <p className="text-center text-gray-600 dark:text-gray-400 mb-12 max-w-3xl mx-auto">
        Una selección de proyectos que he desarrollado usando diferentes tecnologías y enfoques.
        Cada proyecto representa un desafío único y una oportunidad para aprender algo nuevo.
      </p>

      <motion.div 
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 my-10 max-w-6xl mx-auto"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.1 }}
      >
        {projects.map((project) => (
          <motion.div
            key={project.id}
            className="relative rounded-xl overflow-hidden shadow-lg bg-white dark:bg-gray-800 h-[320px] cursor-pointer group"
            variants={cardVariants}
            onMouseEnter={() => setHoveredId(project.id)}
            onMouseLeave={() => setHoveredId(null)}
            onClick={() => window.open(project.url, '_blank', 'noopener,noreferrer')}
          >
            <motion.div 
              className="absolute inset-0 bg-gradient-to-b from-transparent to-black/80 z-10"
              initial={{ opacity: 0 }}
              animate={{ 
                opacity: hoveredId === project.id ? 1 : 0.5
              }}
              transition={{ duration: 0.3 }}
            />
            
            <motion.div className="h-[180px] overflow-hidden">
              <motion.img
                src={project.image}
                alt={project.title}
                className="w-full h-full object-cover"
                initial={{ scale: 1 }}
                animate={{ 
                  scale: hoveredId === project.id ? 1.1 : 1
                }}
                transition={{ duration: 0.5 }}
              />
            </motion.div>
            
            <motion.div 
              className="p-4 z-20 text-gray-800 dark:text-white relative"
            >
              <h2 className="text-xl font-bold mb-1 group-hover:text-[#ED7D31] transition-colors">{project.title}</h2>
              <p className="text-xs text-gray-600 dark:text-gray-300 mb-2 line-clamp-2">{project.description}</p>
              
              <div className="flex flex-wrap gap-1 mb-2">
                {project.tech.slice(0, 3).map((tech, index) => (
                  <span 
                    key={index} 
                    className="text-[10px] px-2 py-1 bg-[#ED7D31]/80 rounded-full text-white"
                  >
                    {tech}
                  </span>
                ))}
                {project.tech.length > 3 && (
                  <span className="text-[10px] px-2 py-1 bg-gray-500/80 rounded-full text-white">
                    +{project.tech.length - 3}
                  </span>
                )}
              </div>
              
              <motion.div 
                className="flex gap-2 absolute bottom-4 right-4"
                initial={{ opacity: 0.7 }}
                animate={{ 
                  opacity: hoveredId === project.id ? 1 : 0.7,
                  scale: hoveredId === project.id ? 1.1 : 1
                }}
                transition={{ duration: 0.2 }}
              >
                <a 
                  href={project.github} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="p-1.5 bg-gray-800 rounded-full hover:bg-gray-700 transition-colors text-white z-30"
                  onClick={(e) => e.stopPropagation()}
                >
                  <FaGithub className="text-sm" />
                </a>
                <a 
                  href={project.url} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="p-1.5 bg-[#ED7D31] rounded-full hover:bg-[#ED7D31]/80 transition-colors text-white z-30"
                  onClick={(e) => e.stopPropagation()}
                >
                  <FaExternalLinkAlt className="text-sm" />
                </a>
              </motion.div>
            </motion.div>
            
            {/* Efecto de hover */}
            <div className="absolute inset-0 bg-black/5 dark:bg-white/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
};

export default Projects;
