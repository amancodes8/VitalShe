import React, { useState, useEffect } from 'react';
import { RxCross2 } from "react-icons/rx";
import { HiBars3 } from "react-icons/hi2";
import { gsap } from 'gsap';
import { NavLink } from 'react-router-dom';

function Header() {
    const [menuBar, setMenuBar] = useState(false);

    const navItems = [
        { label: 'Home', link: '/home' },
        { label: 'Login', link: '/login' },
        { label: 'About', link: '/about' },
        { label: 'Services', link: '/services' },
    ];

    const toggleMenu = () => {
        setMenuBar(!menuBar);
    };

    useEffect(() => {
        const menu = document.querySelector(".menu");
        const menuItems = document.querySelectorAll(".menu li");

        gsap.to(menu, {
            x: menuBar ? 0 : "100%",
            duration: 0.5,
            ease: "sine.inOut"
        });

        gsap.to(menuItems, {
            opacity: menuBar ? 1 : 0,
            y: menuBar ? 0 : 30,
            stagger: 0.1,
            duration: 0.8,
            ease: "power4.inOut"
        });
    }, [menuBar]);

    return (
        <div>
            <div className='Navbar flex w-screen h-16 items-center justify-between px-0 py-1 mt-1'>
                <NavLink to="/">
                    <img className='h-12 w-12 ml-6 rounded-full' src="/images/logo.png" alt="logo" />
                </NavLink>

                {/* Desktop Menu */}
                <div className='hidden sm:flex space-x-8 mr-6'>
                    {navItems.map((item, index) => (
                        <NavLink
                            key={index}
                            to={item.link}
                            className={({ isActive }) =>
                                `p-2 font-serif text-xl items-center ${isActive ? 'text-blue-700 border-b-2 border-blue-700' : 'text-black hover:text-blue-500'}`
                            }
                        >
                            {item.label}
                        </NavLink>
                    ))}
                </div>

                {/* Mobile Menu Button */}
                <div className='ml-auto mr-6 block sm:hidden'>
                    {!menuBar ? (
                        <HiBars3 onClick={toggleMenu} size={30} className="cursor-pointer text-black" />
                    ) : null}
                </div>
            </div>

            {/* Mobile menu */}
            <div className={`z-10 fixed top-0 right-0 h-full w-screen bg-white text-black menu transform ${menuBar ? 'translate-x-0' : 'translate-x-full'} sm:hidden opacity-100`}>
                <div className="flex justify-end px-6 py-3">
                    <RxCross2 onClick={toggleMenu} size={30} className="cursor-pointer text-black" />
                </div>
                <nav className="p-4 flex justify-center">
                    <ul className='space-y-3 mt-6 text-md'>
                        {navItems.map((item, index) => (
                            <li key={index}>
                                <NavLink
                                    onClick={toggleMenu}
                                    to={item.link}
                                    className={({ isActive }) =>
                                        `p-2 border-2 w-28 rounded-ss-lg rounded-ee-lg font-serif text-xl items-center bg-gray-500 bg-opacity-100 border-black flex justify-center w-30 ${isActive ? 'bg-blue-700' : 'bg-red-400'}`
                                    }
                                >
                                    {item.label}
                                </NavLink>
                            </li>
                        ))}
                    </ul>
                </nav>
            </div>
        </div>
    );
}

export default Header;
