"use client";

import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const About = () => {
  const videoInnerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const inner = videoInnerRef.current;
    if (!inner) return;

    gsap.set(inner, {
      clipPath: "inset(0% round 0px)",
      transform: "matrix(1, 0, 0, 1, 0, 0)",
    });

    gsap.to(inner, {
      clipPath: "inset(10% round 50px)",
      transform: "matrix(0.9, 0, 0, 0.9, 0, 0)",
      ease: "power2.out",
      scrollTrigger: {
        trigger: inner,
        start: "top top",
        end: "bottom+=500 top",
        scrub: true,
      },
    });
  }, []);

  return (
    <div className="w-full h-[200vh] bg-gray-100 flex items-start justify-center pt-20">
      <div className="relative w-full h-screen overflow-hidden">
        <div ref={videoInnerRef} className="relative h-full w-full overflow-hidden">
          <video
            className="fixed top-0 left-0 w-full h-full object-cover pointer-events-none z-[-1]"
            src="/about-video.mp4"
            autoPlay
            muted
            loop
            playsInline
          />
        </div>
      </div>
    </div>
  );
};

export default About;
