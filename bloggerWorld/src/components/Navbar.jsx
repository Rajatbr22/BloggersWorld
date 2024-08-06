import { NavLink } from 'react-router-dom';
import { FaFacebook, FaDribbble, FaBars, FaTimes } from 'react-icons/fa';
import { FaXTwitter } from "react-icons/fa6";
import { useState } from 'react';
import Modal from './Modal';

export default function Navbar() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [isModalOpen, setIsModalOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    const openModal = () => { 
        setIsModalOpen(true);
    };

    const closeModal = () => {
        setIsModalOpen(false);
    };

    const navItems = [
        { path: '/', link: 'Home' },
        { path: '/services', link: 'Services' },
        { path: '/about', link: 'About' },
        { path: '/blogs', link: 'Blogs' },
        { path: '/contact', link: 'Contact' },
    ];

    return (
        <header className="bg-black text-white top-0 left-0 right-0">
            <nav className="px-4 py-4 max-w-7xl mx-auto flex justify-between items-center">
                <a href="/" className="text-3xl font-bold text-indigo-50">
                    Bloggers<span className="text-indigo-500">World</span>
                </a>

                {/* Navigation links for large devices */}
                <ul className="md:flex gap-12 text-lg hidden">
                    {navItems.map(({ path, link }) => (
                        <li className="text-white" key={path}>
                            <NavLink
                                className={({ isActive, isPending }) =>
                                    isActive ? 'active' : isPending ? 'pending' : ''
                                }
                                to={path}
                            >
                                {link}
                            </NavLink>
                        </li>
                    ))}
                </ul>

                {/* Menu icons */}
                <div className="text-white lg:flex items-center gap-4 hidden">
                    <a href="/" className="hover:text-blue-600">
                        <FaFacebook />
                    </a>
                    <a href="/" className="hover:text-gray-500">
                        <FaXTwitter />
                    </a>
                    <a href="/" className="hover:text-pink-200">
                        <FaDribbble />
                    </a>
                    <button
                        onClick={openModal}
                        className="bg-indigo-500 py-2 px-6 font-medium rounded hover:bg-white hover:text-black transition-all duration-200 ease-in"
                    >
                        Login
                    </button>
                </div>

                {/* Modal component */}
                <Modal isOpen={isModalOpen} onClose={closeModal} />

                {/* Mobile menu button */}
                <div className="md:hidden">
                    <button
                        onClick={toggleMenu}
                        className="cursor-pointer transition duration-300"
                    >
                        {isMenuOpen ? (
                            <FaTimes className="w-5 h-5" />
                        ) : (
                            <FaBars className="w-5 h-5" />
                        )}
                    </button>
                </div>
            </nav>

            {/* Mobile menu items */}
            <div>
                <ul
                    className={`${
                        isMenuOpen
                            ? 'block'
                            : 'hidden'
                    } md:hidden gap-12 text-lg space-y-4 px-4 py-6 mt-14 bg-black transition-all ease-out duration-200`}
                >
                    {navItems.map(({ path, link }) => (
                        <li className="text-white" key={path}>
                            <NavLink
                                onClick={toggleMenu}
                                to={path}
                                className="block"
                            >
                                {link}
                            </NavLink>
                        </li>
                    ))}
                    <li>
                        <button
                            onClick={() => {
                                toggleMenu();
                                openModal();
                            }}
                            className="block bg-indigo-500 py-2 px-6 font-medium rounded hover:bg-white hover:text-black transition-all duration-200 ease-in"
                        >
                            Login
                        </button>
                    </li>
                </ul>
            </div>
        </header>
    );
}
