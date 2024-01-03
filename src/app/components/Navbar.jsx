"use client"
import Image from 'next/image';
import { AiOutlineInfoCircle } from 'react-icons/ai';
import { FaLink } from 'react-icons/fa';
import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export default function Navbar({ profile }) {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 80) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const linkIconVariants = {
    initial: { rotate: 180 },
    animate: { rotate: 0, transition: { duration: 0.75 } },
    exit: { rotate: -180, transition: { duration: 0.75 } },
  };

  const infoIconVariants = {
    initial: { opacity: 0 },
    animate: { opacity: 1, transition: { duration: 1 } },
    exit: { opacity: 0, transition: { duration: 1 } },
  };

  return (
    <header className="sticky z-50 top-0">
      <nav className="flex items-center justify-center py-2 lg:py-4">
        <div
          className={
            isScrolled
              ? 'flex w-full max-w-2xl items-center justify-between p-3 mx-3 sm:mx-auto rounded-full border border-solid backdrop-blur border-gray-600 bg-opacity-50'
              : 'flex w-full max-w-2xl items-center justify-between p-3 mx-3 sm:mx-auto'
          }
        >
          <div>
            <AnimatePresence mode='wait'>
                <motion.div
                  key="link-icon"
                  variants={linkIconVariants}
                  initial="initial"
                  animate="animate"
                  exit="exit"
                >
                  <a
                    className="flex items-center lg:mb-0 lg:mt-0 px-3 text-3xl text-[#CED4DA] hover:text-[#F8F9FA] hover:rotate-180 focus:rotate-180 transition duration-500 transform"
                    href="/"
                    title="Início"
                  >
                    <FaLink />
                  </a>
                </motion.div>
            </AnimatePresence>
          </div>

          {isScrolled && (
            <div className="flex items-center justify-center">
              <Image
                src={profile.imgSrc}
                width={50}
                height={50}
                alt={profile.title}
                className="rounded-full shadow-md"
              />
            </div>
          )}

          <div className="flex items-center justify-center">
            <AnimatePresence mode='wait'>              
                <motion.a
                  key="info-icon"
                  variants={infoIconVariants}
                  initial="initial"
                  animate="animate"
                  exit="exit"
                  className="text-3xl px-3 text-[#CED4DA] hover:text-[#F8F9FA] focus:text-[#F8F9FA] transition duration-300"
                  title="Sobre"
                  href='/about'
                >
                  <AiOutlineInfoCircle />
                </motion.a>
            </AnimatePresence>
          </div>
        </div>
      </nav>
    </header>
  );
}
