import imgOficina from '../assets/oficina.jpeg'

const About = () => {
  return (
    <section className="bg-slate-100 py-10" id="about">
      <div className="md:grid md:grid-cols-2 gap-8 items-center py-8 px-4 xl:gap-16 sm:py-16 xl:px-16">
        <img src={imgOficina} alt="" width={400} height={400} className=" rounded-full"/>
        
        <div className="mt-4 md:mt-0 text-left flex flex-col h-full">
          <h2 className="text-2xl md:text-4xl font-bold mb-4 text-center text-[#ED7D31]">Sobre Mí</h2>
          <p className="text-base text-gray-600 font-bold lg:text-lg">
          Soy un apasionado programador y desarrollador de software en busca de
          oportunidades para desarrollar mis habilidades y enfrentar desafíos en
          el emocionante campo de la programación. Aunque soy relativamente
          nuevo en la industria, estoy comprometido con el aprendizaje constante
          y la mejora de mis habilidades. Mi entusiasmo y dedicación me impulsan
          a superar obstáculos y alcanzar mis metas profesionales. Estoy
          emocionado por las oportunidades que el mundo de la programación tiene
          para ofrecer y estoy listo para enfrentar los desafíos que se
          presenten en mi camino hacia una exitosa carrera en este campo.
          </p>
         
          
        </div>
      </div>
    </section>
  )
}

export default About