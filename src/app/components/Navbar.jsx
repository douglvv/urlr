"use client"
import Image from 'next/image';
import { FcAbout } from "react-icons/fc";
import { useEffect, useState } from 'react';

export default function Navbar() {
    const [isScrolled, setIsScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 100) {
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
            <nav className="flex w-screen items-center justify-center py-2 lg:py-4">
                <div className={
                    isScrolled ?
                        "flex w-full max-w-2xl items-center justify-between p-3 m-3 rounded-3xl border border-solid backdrop-blur border-gray-300 bg-opacity-50 bg shadow-sm transition"
                        :
                        "flex w-full max-w-2xl items-center justify-between p-3 m-3 transition "
                }
                >
                    <div>
                        <a
                            className="my-1 flex items-center text-neutral-900 hover:text-neutral-900 focus:text-neutral-900 lg:mb-0 lg:mt-0"
                            href="#"
                        >
                            <Image
                                src="/logo.png"
                                width={33}
                                height={33}
                                alt="Logo"
                                title=''
                            />
                        </a>
                    </div>
                    <div className='flex items-center justify-center'>
                        <button className='text-2xl'><FcAbout /></button>
                    </div>
                </div>
            </nav>
        </header>

    );
}
