"use client"
import Link from "next/link";
import { useState, useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";  // Pastikan AOS ter-import

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Handle AOS initialization
  useEffect(() => {
    AOS.init();
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
    if (!isMenuOpen) {
      // Trigger the fade-down animation when the menu opens
      AOS.refresh(); // Refresh AOS to trigger animation
    }
  };

  return (
    <header className="bg-neutral text-white" data-aos="fade-down">
      <div className="container mx-auto flex justify-between items-center p-6">
        {/* Logo/Title */}
        <h1 className="text-3xl font-bold">My Portfolio</h1>

        {/* Navbar for larger screens */}
        <nav className="hidden md:flex space-x-6">
          <Link href="#about" className="btn btn-ghost hover:text-accent">
            About
          </Link>
          <Link href="#projects" className="btn btn-ghost hover:text-accent">
            Projects
          </Link>
          <Link href="#contact" className="btn btn-ghost hover:text-accent">
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
            className="h-6 w-6"
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
      <div
        className={`md:hidden ${isMenuOpen ? "block" : "hidden"} bg-neutral py-4`}
        data-aos="fade-down" // Add AOS fade-down animation to mobile menu
        data-aos-duration="500" // Set animation duration
        data-aos-easing="ease-in-out" // Set easing for smooth transition
      >
        <nav className="flex flex-col items-center">
          <Link href="#about" className="btn btn-ghost hover:text-accent mb-4">
            About
          </Link>
          <Link href="#projects" className="btn btn-ghost hover:text-accent mb-4">
            Projects
          </Link>
          <Link href="#contact" className="btn btn-ghost hover:text-accent mb-4">
            Contact
          </Link>
        </nav>
      </div>
    </header>
  );
};

export default Header;
