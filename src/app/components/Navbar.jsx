"use client"
import Image from 'next/image';
import { FcAbout } from "react-icons/fc";
import { useEffect, useState } from 'react';

export default function Navbar() {
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
                        "flex w-full max-w-2xl items-center justify-between p-3 m-3 rounded-3xl border border-solid backdrop-blur border-gray-600 bg-opacity-50 bg shadow-sm"
                        :
                        "flex w-full max-w-2xl items-center justify-between p-3 m-3"
                }
                >
                    <div>
                        <a
                            className="my-1 flex items-center text-neutral-900 hover:text-neutral-900 focus:text-neutral-900 lg:mb-0 lg:mt-0"
                            href="/"
                            title='Home'
                        >
                            <Image
                                src="/logo.png"
                                width={33}
                                height={33}
                                alt="Logo"
                            />
                        </a>
                    </div>

                    {isScrolled && (
                        <div className='flex items-center justify-center'>
                            <Image
                                src="/spider.png"
                                width={50}
                                height={50}
                                alt="Profile Pic"
                                className='rounded-full shadow-md'
                            />
                        </div>
                    )}

                    <div className='flex items-center justify-center'>
                        <button className='text-2xl' title='Sobre'><FcAbout /></button>
                    </div>
                </div>
            </nav>
        </header>

    );
}
