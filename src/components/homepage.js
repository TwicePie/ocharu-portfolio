'use client'
import { useState, useEffect } from "react";
import Head from "next/head";
import Link from "next/link";

export default function Homepage() {
  const [displayedText, setDisplayedText] = useState("");
  const fullTexts = ["Hi, I'm Muhammad Eka", "Or, you can call me Ocharu"];
  const [currentTextIndex, setCurrentTextIndex] = useState(0);
  const [isTyping, setIsTyping] = useState(true);
  
  const typingSpeed = 100;  // Speed of typing (ms)
  const backspacingSpeed = 50;  // Speed of backspacing (ms)
  const delayBeforeBackspace = 2000;  // Delay before starting to backspace
  const delayBetweenTexts = 100;  // Delay between texts

  useEffect(() => {
    let isMounted = true;
    let timeoutId;

    const typeText = () => {
      if (!isMounted) return;

      const currentText = fullTexts[currentTextIndex];
      
      // If we're typing
      if (isTyping) {
        if (displayedText.length < currentText.length) {
          timeoutId = setTimeout(() => {
            setDisplayedText(prev => currentText.slice(0, prev.length + 1));
          }, typingSpeed);
        } else {
          // Finished typing, prepare to backspace
          timeoutId = setTimeout(() => {
            setIsTyping(false);
          }, delayBeforeBackspace);
        }
      } 
      // If we're backspacing
      else {
        if (displayedText.length > 0) {
          timeoutId = setTimeout(() => {
            setDisplayedText(prev => prev.slice(0, -1));
          }, backspacingSpeed);
        } else {
          // Finished backspacing, switch to next text after a short delay
          timeoutId = setTimeout(() => {
            setCurrentTextIndex(prev => (prev + 1) % fullTexts.length);
            setIsTyping(true);
          }, delayBetweenTexts);
        }
      }
    };

    // Start the typing effect
    typeText();

    // Cleanup function
    return () => {
      isMounted = false;
      if (timeoutId) clearTimeout(timeoutId);
    };
  }, [displayedText, isTyping, currentTextIndex]);

  return (
    <div className="font-sans">
      <Head>
        <title>My Portfolio</title>
        <meta name="description" content="Welcome to my portfolio homepage." />
        <link rel="icon" href="/images/Car.jpeg" />
      </Head>

      <section
        className="hero bg-base-200 text-center py-20"
        data-aos="fade-up"
        data-aos-duration="1500"
      >
        <div className="hero-content flex-col">
          <div className="h-16 flex items-center justify-center">
            <h2 className="text-5xl font-bold mb-4">
              {displayedText}
            </h2>
          </div>
          <p className="text-lg text-gray-700 mb-8">
            A passionate developer creating impactful and innovative solutions.
          </p>
          <Link href="#projects" className="btn btn-primary">
            View My Work
          </Link>
        </div>
      </section>

      {/* Rest of the sections remain the same */}
      <section
        id="about"
        className="py-20 container mx-auto px-6"
        data-aos="fade-right"
      >
        <h2 className="text-3xl font-bold mb-6">About Me</h2>
        <p className="text-lg leading-relaxed">
          I am a passionate developer with expertise in building impactful and
          innovative solutions. I specialize in web development and love to
          explore new technologies and frameworks to solve real-world problems.
          My goal is to create user-friendly applications that make a difference.
        </p>
      </section>

      <section
        id="contact"
        className="py-20 container mx-auto px-6"
        data-aos="fade-up"
      >
        <h2 className="text-3xl font-bold mb-6 text-center">Contact Me</h2>
        <p className="text-center text-lg mb-6">
          Feel free to reach out for collaborations or just a friendly chat!
        </p>
        <div className="text-center">
          <a href="mailto:your.email@example.com" className="btn btn-primary">
            Email Me
          </a>
        </div>
      </section>
    </div>
  );
}