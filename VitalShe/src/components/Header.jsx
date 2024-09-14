import React, { useState, useEffect } from 'react';
import { RxCross2 } from "react-icons/rx";
import { HiBars3 } from "react-icons/hi2";
import { gsap } from 'gsap';

function Header() {
    const [menuBar, setMenuBar] = useState(false);

    const navItems = [
        { label: 'Try VitalShe', link: '/about' },
        { label: 'Products', link: '/products' },
        { label: 'Calendar', link: '/calendar' },
        { label: 'Track Cycle', link: '/cycle' }
    ];

    const toggleMenu = () => {
        setMenuBar(!menuBar);
    };

    useEffect(() => {
        const menu = document.querySelector(".menu");
        const menuItems = document.querySelectorAll(".menu li");

        // Animate menu
        gsap.to(menu, {
            x: menuBar ? 0 : "100%",
            duration: .5,
            ease: "sine.inOut"
        });

        // Animate menu items
        gsap.to(menuItems, {
            opacity: menuBar ? 1 : 0,
            y: menuBar ? 0 : 30,
            stagger: 0.1,
            duration: .8,
            ease: "power4.inOut"
        });
    }, [menuBar]);

    return (
        <div>
            {/* Navbar */}
            <div className='Navbar flex w-full h-12 items-center justify-between px-0 py-1 mt-1'>
                <a href="App.jsx">
                    <img className=' h-12 w-12 ml-6 rounded-full' src="/images/logo.png" alt="logo" />
                </a>
                <div className='ml-auto mr-6'>
                    {!menuBar ? (
                        <HiBars3 onClick={toggleMenu} size={30} className="cursor-pointer text-white sm:hidden" />
                    ) : null}
                </div>
            </div>

            {/* Menu section */}
            <div className={`z-10 fixed top-0 right-0 h-full w-screen bg-white  text-black menu transform ${menuBar ? 'translate-x-0' : 'translate-x-full'} sm:hidden opacity-80`}>
                <div className="flex justify-end px-6 py-3">
                    <RxCross2 onClick={toggleMenu} size={30} className="cursor-pointer text-black" />
                </div>

                {/* NavItems */}

                <nav className="p-4 flex justify-center">
                    <ul className='space-y-3 mt-6 text-md'>
                        {navItems.map((item, index) => (
                            <li key={index}>
                                <a href={item.link} className=" p-2 rounded-xl  border-2 items-center bg-gray-500 bg-opacity-50  border-black flex justify-center w-40">{item.label}</a>
                            </li>
                        ))}
                    </ul>
                </nav>
            </div>
        </div>
    );
}

export default Header;
