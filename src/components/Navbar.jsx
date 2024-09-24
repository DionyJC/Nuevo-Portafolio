import { IoMenuSharp, IoClose } from "react-icons/io5";
import { useState } from "react";
import logo from "../assets/compu.png";
import { Link } from "react-scroll"; // Importa Link de react-scroll

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

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
    <nav className=" fixed top-0 left-0 right-0 z-50 bg-white mx-auto py-4 px-10 sm:px-20 flex justify-between items-center font-concert">
      {/* Logo */}
      <div className="flex items-center">
        <img src={logo} alt="logotipo" className="w-14 h-14" />
        <h1 className="text-4xl text-orange-400 font-bold">Dev</h1>
      </div>

      {/* Desktop Menu */}
      <ul className="hidden sm:flex justify-end items-center gap-6">
        {nav.map((item, index) => (
          <Link
            key={index}
            to={item.link}
            spy={true}
            smooth={true}
            offset={-70}
            duration={500}
            className="text-2xl font-medium text-gray-600 hover:text-orange-400 cursor-pointer"
          >
            {item.name}
          </Link>
        ))}
      </ul>

      {/* Mobile Menu Icon */}
      <div
        className="sm:hidden flex text-4xl text-gray-600 cursor-pointer"
        onClick={() => setIsMenuOpen(!isMenuOpen)}
      >
        {isMenuOpen ? <IoClose /> : <IoMenuSharp />}
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
  <ul className="sm:hidden bg-white absolute  top-20 left-0 w-full h-[220px] py-8 px-20 flex flex-col gap-4    items-center justify-center transition-transform duration-150">
    {nav.map((item, index) => (
      <Link
        key={index}
        to={item.link}
        spy={true}
        smooth={true}
        offset={-70}
        duration={500}
        className="text-2xl font-medium text-gray-600 hover:text-orange-400 cursor-pointer text-center flex"
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
