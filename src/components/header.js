"use client";
import Link from "next/link";
import { useState } from "react";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="bg-neutral text-white">
      <div className="container mx-auto flex justify-between items-center p-3 md:p-4">
        {/* Logo/Title */}
        <h1 className="text-xl md:text-2xl font-bold">Eka Portfolio</h1>

        {/* Navbar for larger screens */}
        <nav className="hidden md:flex space-x-4">
          <Link href="#about" className="btn btn-ghost hover:text-accent text-sm md:text-base">
            About
          </Link>
          <Link href="#projects" className="btn btn-ghost hover:text-accent text-sm md:text-base">
            Projects
          </Link>
          <Link href="#contact" className="btn btn-ghost hover:text-accent text-sm md:text-base">
            Contact
          </Link>
        </nav>

        {/* Hamburger Menu for smaller screens */}
        <button
          className="md:hidden text-white focus:outline-none"
          onClick={toggleMenu}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            strokeWidth="2"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M4 6h16M4 12h16M4 18h16"
            />
          </svg>
        </button>
      </div>

      {/* Mobile Navigation Menu */}
      <div className={`md:hidden ${isMenuOpen ? "block" : "hidden"} bg-neutral py-2`}>
        <nav className="flex flex-col items-center">
          <Link href="#about" className="btn btn-ghost hover:text-accent text-sm mb-3">
            About
          </Link>
          <Link href="#projects" className="btn btn-ghost hover:text-accent text-sm mb-3">
            Projects
          </Link>
          <Link href="#contact" className="btn btn-ghost hover:text-accent text-sm mb-3">
            Contact
          </Link>
        </nav>
      </div>
    </header>
  );
};

export default Header;
