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
    <div id='technologies' className='py-24 dark:bg-gray-900 transition-colors duration-300'>
        <h1 className='my-20 text-center text-5xl text-gray-600 dark:text-gray-300 font-bold mt-10'>Tecnologías</h1>
        <div className='flex flex-wrap items-center justify-center gap-4 mb-28'>
            

            <motion.div 
             variants={iconVariants(2.5)}
             initial='initial'
             animate='animate'
            className='rounded-2xl border-4 border-gray-700 dark:border-gray-500 p-4 cursor-pointer bg-white dark:bg-gray-800'>
            <FaReact className=' text-5xl sm:text-7xl text-blue-600'/>          
            </motion.div>

            <motion.div
            variants={iconVariants(3)}
            initial='initial'
            animate='animate'
             className='rounded-2xl border-4 border-gray-700 dark:border-gray-500 p-4 cursor-pointer bg-white dark:bg-gray-800'>
                <FaNodeJs className='text-5xl sm:text-7xl text-green-600'/>
            </motion.div>

            <motion.div 
            variants={iconVariants(4)}
            initial='initial'
            animate='animate'
            className='rounded-2xl border-4 border-gray-700 dark:border-gray-500 p-4 cursor-pointer bg-white dark:bg-gray-800'>
                <FaGithub className='text-5xl sm:text-7xl text-black dark:text-white'/>
            </motion.div>

            <motion.div 
            variants={iconVariants(6)}
            initial='initial'
            animate='animate'
            className='rounded-2xl border-4 border-gray-700 dark:border-gray-500 p-4 cursor-pointer bg-white dark:bg-gray-800'>
                <FaHtml5 className='text-5xl sm:text-7xl text-red-600'/>
            </motion.div>

            <motion.div 
            variants={iconVariants(3)}
            initial='initial'
            animate='animate'className='rounded-2xl border-4 border-gray-700 dark:border-gray-500 p-4 bg-white dark:bg-gray-800'>
                <FaCss3  className='text-5xl sm:text-7xl text-blue-600'/>
            </motion.div>

            <motion.div 
            variants={iconVariants(2.5)}
            initial='initial'
            animate='animate'
            className='rounded-2xl border-4 border-gray-700 dark:border-gray-500 p-4 cursor-pointer bg-white dark:bg-gray-800'>
                <FaJava  className='text-5xl sm:text-7xl text-black dark:text-white'/>
            </motion.div>

            <motion.div 
            variants={iconVariants(4)}
            initial='initial'
            animate='animate'
            className='rounded-2xl border-4 border-gray-700 dark:border-gray-500 p-4 cursor-pointer bg-white dark:bg-gray-800'>
            <SiMysql className='text-5xl sm:text-7xl text-black dark:text-white'/>  
            </motion.div>
        </div>
    </div>
  )
}

export default Technologies