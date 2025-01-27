"use client";
import { useState, useEffect } from "react";
import Head from "next/head";
import Link from "next/link";

export default function Homepage() {
  const [displayedText, setDisplayedText] = useState("");
  const [showButton, setShowButton] = useState(false); // State untuk tombol Back to Top
  const [theme, setTheme] = useState("light");

  const fullTexts = ["Hi, I'm Muhammad Eka", "Or, you can call me Ocharu"];
  const [currentTextIndex, setCurrentTextIndex] = useState(0);
  const [isTyping, setIsTyping] = useState(true);

  const typingSpeed = 100;
  const backspacingSpeed = 50;
  const delayBeforeBackspace = 2000;
  const delayBetweenTexts = 100;

  useEffect(() => {
    let isMounted = true;
    let timeoutId;

    const typeText = () => {
      if (!isMounted) return;

      const currentText = fullTexts[currentTextIndex];

      if (isTyping) {
        if (displayedText.length < currentText.length) {
          timeoutId = setTimeout(() => {
            setDisplayedText((prev) => currentText.slice(0, prev.length + 1));
          }, typingSpeed);
        } else {
          timeoutId = setTimeout(() => {
            setIsTyping(false);
          }, delayBeforeBackspace);
        }
      } else {
        if (displayedText.length > 0) {
          timeoutId = setTimeout(() => {
            setDisplayedText((prev) => prev.slice(0, -1));
          }, backspacingSpeed);
        } else {
          timeoutId = setTimeout(() => {
            setCurrentTextIndex((prev) => (prev + 1) % fullTexts.length);
            setIsTyping(true);
          }, delayBetweenTexts);
        }
      }
    };

    typeText();

    return () => {
      isMounted = false;
      if (timeoutId) clearTimeout(timeoutId);
    };
  }, [displayedText, isTyping, currentTextIndex]);

  // Back to Top button logic
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 300) {
        setShowButton(true);
      } else {
        setShowButton(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const toggleTheme = () => {
    const newTheme = theme === "light" ? "dark" : "light";
    setTheme(newTheme);
    document.documentElement.setAttribute("data-theme", newTheme);
  };

  // Set initial theme based on system preference or default to light
  useEffect(() => {
    const systemPrefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
    const initialTheme = systemPrefersDark ? "dark" : "light";
    setTheme(initialTheme);
    document.documentElement.setAttribute("data-theme", initialTheme);
  }, []);

  const skills = [
    { name: "Web Development", level: "Advanced" },
    { name: "UI/UX Design", level: "Intermediate" },
    { name: "Backend Development", level: "Advanced" },
  ];

  return (
    <div className="font-sans">
      <Head>
        <title>My Portfolio</title>
        <meta name="description" content="Welcome to my portfolio homepage." />
        <link rel="icon" href="/images/Car.jpeg" />
      </Head>

      {/* Theme Toggle Button */}
      <button
        onClick={toggleTheme}
        className="fixed top-6 right-6 p-3 bg-primary text-white rounded-full shadow-lg hover:scale-110 transition-transform z-50"
        aria-label="Toggle Theme"
      >
        {theme === "light" ? "🌙" : "☀️"}
      </button>

      {/* Hero Section */}
      <section
        className="min-h-screen flex items-center justify-center bg-gradient-to-b from-base-200 to-base-300 py-10 px-4"
        data-aos="fade-up"
        data-aos-duration="1500"
      >
        <div className="text-center max-w-4xl mx-auto">
          {/* Foto Profil */}
          <div className="flex justify-center mb-6">
            <img
              src="/images/profile.JPG" // Ganti dengan path foto Anda
              alt="Profile Picture"
              className="w-40 h-40 rounded-full shadow-lg border-4 border-primary"
            />
          </div>

          <div className="mb-8">
            <div className="h-20 flex items-center justify-center">
              <h2 className="text-4xl md:text-6xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-primary to-accent">
                {displayedText}
                <span className="animate-blink">|</span>
              </h2>
            </div>
            <p className="text-xl text-gray-600 mt-6 leading-relaxed">
              A passionate developer creating impactful and innovative
              solutions.
            </p>
          </div>
          <div className="flex flex-wrap gap-4 justify-center mt-8">
            <Link
              href="#projects"
              className="btn btn-primary btn-lg w-full sm:w-auto hover:scale-105 transition-transform"
            >
              View My Work
            </Link>
            <Link
              href="#contact"
              className="btn btn-outline btn-lg w-full sm:w-auto hover:scale-105 transition-transform"
            >
              Get in Touch
            </Link>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-24 bg-base-100" data-aos="fade-right">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">About Me</h2>
            <div className="w-24 h-1 bg-primary mx-auto"></div>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <p className="text-lg leading-relaxed">
                I am a passionate developer with expertise in building impactful
                and innovative solutions. I specialize in web development and
                love to explore new technologies and frameworks to solve
                real-world problems. My goal is to create user-friendly
                applications that make a difference.
              </p>
              <div className="space-y-4">
                {skills.map((skill, index) => (
                  <div key={index} className="space-y-2">
                    <div className="flex justify-between">
                      <span className="font-medium">{skill.name}</span>
                      <span className="text-primary">{skill.level}</span>
                    </div>
                    <div className="w-full bg-base-200 rounded-full h-2">
                      <div
                        className="bg-primary h-2 rounded-full transition-all duration-1000"
                        style={{
                          width:
                            skill.level === "Expert"
                              ? "90%"
                              : skill.level === "Advanced"
                              ? "75%"
                              : "60%",
                        }}
                        data-aos="width"
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="relative" data-aos="fade-left">
              <div className="absolute inset-0 bg-primary/10 rounded-lg transform rotate-3"></div>
              <div className="relative bg-base-200 p-8 rounded-lg shadow-xl">
                <h3 className="text-2xl font-bold mb-4">Quick Facts</h3>
                <ul className="space-y-4">
                  <li className="flex items-center gap-3">
                    <span className="text-primary">▹</span>
                    <span>Full Stack Developer</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <span className="text-primary">▹</span>
                    <span>Based in Indonesia</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <span className="text-primary">▹</span>
                    <span>Available for Freelance</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <span className="text-primary">▹</span>
                    <span>Open to Collaborations</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-24 bg-base-200" data-aos="fade-up">
        <div className="container mx-auto px-4 max-w-4xl text-center">
          <h2 className="text-4xl font-bold mb-4">Get In Touch</h2>
          <div className="w-24 h-1 bg-primary mx-auto mb-8"></div>
          <p className="text-xl text-gray-600 mb-12 max-w-2xl mx-auto">
            Feel free to reach out for collaborations or just a friendly chat!
            I'm always open to discussing new projects and ideas.
          </p>
          <div className="flex gap-4 justify-center">
            <a
              href="mailto:your.email@example.com"
              className="btn btn-primary btn-lg group hover:scale-105 transition-transform"
            >
              Email Me
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5 ml-2 group-hover:translate-x-1 transition-transform"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M14 5l7 7m0 0l-7 7m7-7H3"
                />
              </svg>
            </a>
          </div>
        </div>
      </section>

      {/* GitHub Contributions Section */}
      <section id="github" className="py-24 bg-base-100" data-aos="fade-up">
        <div className="container mx-auto px-4 max-w-4xl text-center">
          <h2 className="text-4xl font-bold mb-4">GitHub Contributions</h2>
          <div className="w-24 h-1 bg-primary mx-auto mb-8"></div>
          <p className="text-xl text-gray-600 mb-12 max-w-2xl mx-auto">
            Check out my latest contributions on GitHub.
          </p>
          <div className="flex justify-center">
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <img
                src="https://ghchart.rshah.org/TwicePie"
                alt="GitHub Contributions"
                className="w-full max-w-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Back to Top Button */}
      {showButton && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-6 right-6 p-3 bg-primary text-white rounded-full shadow-lg hover:scale-110 transition-transform z-50"
          aria-label="Back to Top"
        >
          ↑
        </button>
      )}
    </div>
  );
}
