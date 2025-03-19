import { IoMenuSharp, IoClose } from "react-icons/io5";
import { useState, useEffect, useContext } from "react";
import logo from "../assets/compu.png";
import { Link } from "react-scroll"; // Importa Link de react-scroll
import ThemeToggle from "./ThemeToggle"; // Importamos el toggle de tema
import { ThemeContext } from "../context/ThemeContext"; // Importamos el contexto del tema

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { theme } = useContext(ThemeContext); // Obtenemos el tema actual

  // Efecto para detectar el scroll
  useEffect(() => {
    const handleScroll = () => {
      // Cambiar estado cuando se desplaza más de 50px
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    // Añadir evento de scroll
    window.addEventListener('scroll', handleScroll);

    // Limpiar el evento cuando el componente se desmonte
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const nav = [
    {
      name: "Inicio",
      link: "inicio", // Nombre del elemento en App.js
    },
    {
      name: "Sobre Mí",
      link: "about", // Nombre del elemento en App.js
    },
    {
      name: "Tecnologias",
      link: "technologies", // Nombre del elemento en App.js
    },
    {
      name: "Proyectos",
      link: "projects", // Nombre del elemento en App.js
    },
    
  ];

  return (
    <nav 
      className={`fixed top-0 left-0 right-0 z-50 mx-auto py-4 px-10 sm:px-20 flex justify-between items-center font-concert transition-all duration-300 ease-in-out ${
        scrolled 
          ? theme === 'dark'
            ? 'bg-gray-900/95 shadow-md backdrop-blur-sm'
            : 'bg-white/95 shadow-md backdrop-blur-sm'
          : theme === 'dark'
            ? 'bg-gray-900/80'
            : 'bg-transparent'
      }`}
    >
      {/* Logo */}
      <div className="flex items-center">
        <img src={logo} alt="logotipo" className="w-14 h-14" />
        <h1 className="text-4xl font-bold text-orange-400">Dev</h1>
      </div>

      {/* Desktop Menu */}
      <div className="hidden sm:flex justify-end items-center gap-6">
        <ul className="flex justify-end items-center gap-6">
          {nav.map((item, index) => (
            <Link
              key={index}
              to={item.link}
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
              className={`text-2xl font-medium cursor-pointer transition-colors duration-300 ${
                theme === 'dark'
                  ? 'text-gray-200 hover:text-orange-400'
                  : scrolled
                    ? 'text-gray-700 hover:text-orange-500'
                    : 'text-gray-800 hover:text-orange-400'
              }`}
            >
              {item.name}
            </Link>
          ))}
        </ul>
        
        {/* Theme Toggle Button - Desktop */}
        <ThemeToggle />
      </div>

      {/* Mobile Menu Icon and Theme Toggle */}
      <div className="sm:hidden flex items-center gap-4">
        {/* Theme Toggle Button - Mobile */}
        <ThemeToggle />
        
        {/* Menu Toggle Button */}
        <div
          className={`text-4xl cursor-pointer transition-colors duration-300 ${
            theme === 'dark'
              ? 'text-gray-200 hover:text-orange-400'
              : 'text-gray-700 hover:text-orange-500'
          }`}
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? <IoClose /> : <IoMenuSharp />}
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <ul className={`sm:hidden absolute top-20 left-0 w-full h-[220px] py-8 px-20 flex flex-col gap-4 items-center justify-center transition-transform duration-150 ${
          theme === 'dark'
            ? 'bg-gray-900/95 backdrop-blur-sm shadow-md'
            : 'bg-white/95 backdrop-blur-sm shadow-md'
        }`}>
          {nav.map((item, index) => (
            <Link
              key={index}
              to={item.link}
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
              className={`text-2xl font-medium cursor-pointer text-center flex transition-colors duration-300 ${
                theme === 'dark'
                  ? 'text-gray-200 hover:text-orange-400'
                  : 'text-gray-700 hover:text-orange-500'
              }`}
            >
              {item.name}
            </Link>
          ))}
        </ul>
      )}
    </nav>
  );
};

export default Navbar;
