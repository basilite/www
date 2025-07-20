"use client";

import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

interface ScrollFadeTextProps {
  text: string;
  className?: string;
  start?: string;
  end?: string;
  height?: string;
}

const ScrollFadeText: React.FC<ScrollFadeTextProps> = ({
  text,
  className,
  start = "top 60%",
  end = "bottom 40%",
  height,
}) => {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const wordRefs = useRef<(HTMLSpanElement | null)[]>([]);

  const wordsArray = text.split(" ").filter((word) => word.trim().length > 0);

  // Reset refs array on each render
  wordRefs.current = [];

  useEffect(() => {
    const words = wordRefs.current.filter(Boolean) as HTMLSpanElement[];

    gsap.set(words, { opacity: 0.2 });

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: containerRef.current,
        start,
        end,
        scrub: window.innerWidth < 768 ? 0.5 : true,
        markers: false,
      },
    });

    words.forEach((word, i) => {
      tl.to(word, { opacity: 1, duration: 0.1 }, i * 0.05);
    });

    ScrollTrigger.refresh();

    return () => {
      tl.kill();
      ScrollTrigger.getAll().forEach((t) => t.kill());
    };
  }, [text, start, end]);

  return (
    <div
      ref={containerRef}
      className="relative"
      style={{ height: height }}
    >
      <div
        className={`${className ?? ""} sticky top-0 left-0 flex justify-center items-center`}
        style={{ height: height ? "100vh" : "auto" }}
      >
        <div>
          {wordsArray.map((word, index) => (
            <span
              key={index}
              className="word"
              ref={(el) => {
                if (el) wordRefs.current[index] = el;
              }}
              style={{
                display: "inline-block",
                marginRight: "0.3em",
                opacity: 0.2,
              }}
            >
              {word}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ScrollFadeText;
