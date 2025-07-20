"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const content: string[] = [
  "We are an open-source organization developing a smart, flexible, and open home system designed to truly put the user at the center. Our goal is to create a home ecosystem capable of connecting devices from different manufacturers, while maintaining a high level of customization.",
  "We believe a smart home shouldn't be locked into closed platforms or constrained by brand limitations. Instead, it should be open, interoperable, and fully configurable. That's why we chose open source: to give everyone—developers, makers, installers, or tech enthusiasts—the ability to build, modify, and enhance their connected environment.",
  "Our vision is clear: we want a future where home technology genuinely serves people. A system where every component can be freely selected and integrated, where automation is 100% customizable, and where control always remains in the hands of the user.",
  "We're building a platform that not only connects devices, but also unleashes creativity, enabling the development of tailor-made solutions—without compromise.",
];

export default function Vision() {
  const videoRef = useRef(null);

  useEffect(() => {
    const video = videoRef.current;

    if (!video) return;

    // Scroll-trigger rotation
    gsap.to(video, {
      rotation: 360,
      scrollTrigger: {
        trigger: video,
        start: "top bottom",
        end: "bottom top",
        scrub: 1,
      },
    });

    // Mouse movement parallax
    const handleMouseMove = (e: MouseEvent) => {
      const { innerWidth, innerHeight } = window;
      const offsetX = (e.clientX / innerWidth - 0.5) * 30;
      const offsetY = (e.clientY / innerHeight - 0.5) * 30;

      gsap.to(video, {
        x: offsetX,
        y: offsetY,
        duration: 0.5,
        ease: "power2.out",
      });
    };

    window.addEventListener("mousemove", handleMouseMove);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  return (
    <>
      <div className="relative overflow-hidden pt-20">
        <div className="absolute left-0 top-40 w-full text-center z-10">
          <h1 className="text-6xl font-medium">Vision</h1>
        </div>
        <video
          ref={videoRef}
          muted
          autoPlay
          loop
          preload="none"
          style={{ width: "100%", display: "block" }}
        >
          <source src="/vision-video.mp4" type="video/mp4" />
        </video>
      </div>

      <div className="max-w-4xl mx-auto px-6 mb-20 text-black/60 leading-6">
        {content.map((p, index) => (
          <p key={index} className="mb-4">
            {p}
          </p>
        ))}

        <div className="italic text-center mt-8">
          The smart home shouldn't adapt to the software. The software should
          adapt to your home.
        </div>
      </div>
    </>
  );
}
