import { FaReact, FaNodeJs, FaGithub, FaHtml5, FaCss3, FaJava  } from "react-icons/fa";
import { SiMysql } from "react-icons/si";

import { animate, motion } from "framer-motion";

const iconVariants = (duration) => ({
    initial:{y: -10},
    animate:{
        y:[10, -10],
        transition:{
            duration: duration,
            ease: 'linear',
            repeat: Infinity,
            repeatType: 'reverse'
        }
    }
})

const Technologies = () => {
  return (
    <div id='technologies' className='py-24 '>
        <h1 className='my-20 text-center text-5xl text-gray-600 font-bold mt-10'>Tecnologías</h1>
        <div className='flex flex-wrap  items-center justify-center gap-4 mb-28'>
            

            <motion.div 
             variants={iconVariants(2.5)}
             initial='initial'
             animate='animate'
            className='rounded-2xl border-4 border-gray-700 p-4 cursor-pointer'>
            <FaReact className=' text-5xl sm:text-7xl text-blue-600'/>          
            </motion.div>

            <motion.div
            variants={iconVariants(3)}
            initial='initial'
            animate='animate'
             className='rounded-2xl border-4 border-gray-700 p-4 cursor-pointer'>
                <FaNodeJs className='text-5xl sm:text-7xl text-green-600'/>
            </motion.div>

            <motion.div 
            variants={iconVariants(4)}
            initial='initial'
            animate='animate'
            className='rounded-2xl border-4 border-gray-700 p-4 cursor-pointer'>
                <FaGithub className='text-5xl sm:text-7xl text-black'/>
            </motion.div>

            <motion.div 
            variants={iconVariants(6)}
            initial='initial'
            animate='animate'
            className='rounded-2xl border-4 border-gray-700 p-4 cursor-pointer'>
                <FaHtml5 className='text-5xl sm:text-7xl text-red-600'/>
            </motion.div>

            <motion.div 
            variants={iconVariants(3)}
            initial='initial'
            animate='animate'className='rounded-2xl border-4 border-gray-700 p-4'>
                <FaCss3  className='text-5xl sm:text-7xl text-blue-600'/>
            </motion.div>

            <motion.div 
            variants={iconVariants(2.5)}
            initial='initial'
            animate='animate'
            className='rounded-2xl border-4 border-gray-700 p-4 cursor-pointer'>
                <FaJava  className='text-5xl sm:text-7xl text-black'/>
            </motion.div>

            <motion.div 
            variants={iconVariants(4)}
            initial='initial'
            animate='animate'
            className='rounded-2xl border-4 border-gray-700 p-4 cursor-pointer'>
            <SiMysql className='text-5xl sm:text-7xl text-black'/>  
            </motion.div>
        </div>
    </div>
  )
}

export default Technologies