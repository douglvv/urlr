"use client"
import Image from 'next/image';
import { AiOutlineInfoCircle } from "react-icons/ai";
import { FaLink } from "react-icons/fa";
import { useEffect, useState } from 'react';


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


    return (
        <header className='sticky z-50 top-0'>
            <nav className="flex items-center justify-center py-2 lg:py-4">
                <div className={
                    isScrolled ?
                        "flex w-full max-w-2xl items-center justify-between p-3 mx-3 sm:mx-auto rounded-full border border-solid backdrop-blur border-gray-600 bg-opacity-50"
                        :
                        "flex w-full max-w-2xl items-center justify-between p-3 mx-3 sm:mx-auto"
                }>
                    <div>
                        <a
                            className="flex items-center lg:mb-0 lg:mt-0 px-3 text-3xl text-[#CED4DA] hover:text-[#F8F9FA] hover:rotate-180 focus:rotate-180 transition duration-500 transform"
                            href="/"
                            title='Home'
                        >
                            <FaLink />
                        </a>
                    </div>

                    {isScrolled && (
                        <div className='flex items-center justify-center'>
                            <Image
                                src={profile.imgSrc}
                                width={50}
                                height={50}
                                alt={profile.title}
                                className='rounded-full shadow-md'
                            />
                        </div>
                    )}

                    <div className='flex items-center justify-center'>
                        <button className='text-3xl px-3 text-[#CED4DA] hover:text-[#F8F9FA] focus:text-[#F8F9FA] transition duration-300' title='Sobre'><AiOutlineInfoCircle /></button>
                    </div>
                </div>
            </nav>
        </header>

    );
}
