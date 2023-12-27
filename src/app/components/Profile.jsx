"use client"
import Image from 'next/image';
import { motion } from 'framer-motion'

export default function Profile({ imgSrc, title, bio }) {
    return (
        <motion.div
            className="flex flex-col items-center justify-center max-w-2xl w-full mx-auto mt-0 mb-3 p-3"
            initial={{ y: '-100vh' }}
            animate={{ y: 0 }}
            transition={{type: 'spring', stiffness: 50, duration: .5}}
        >
            <Image
                src={imgSrc}
                width={96}
                height={96}
                alt="Profile Pic"
                className='rounded-full shadow-md object-contain'
            />

            <h1 className='mt-3 shadow-sm text-xl font-bold'>
                {title}
            </h1>

            <h4 className='shadow-sm text-gray-400 text-center text-sm sm:text-base'>
                {bio}
            </h4>
        </motion.div >
    )
}