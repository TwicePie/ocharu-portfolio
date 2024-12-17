"use client";

import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const AOSWrapper = ({ children }) => {
  useEffect(() => {
    AOS.init(); // Initialize AOS when component mounts
  }, []);

  return <>{children}</>;
};

export default AOSWrapper;