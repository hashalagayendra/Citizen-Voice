"use client";
import React, { useEffect, useState } from "react";
import img1 from "@/assests/image1.jpg";
import img2 from "@/assests/2image.jpg";
import img3 from "@/assests/3image.jpg";
import img5 from "@/assests/5image.jpg";
import { useSession, signOut } from "next-auth/react";
import { useRouter } from "next/navigation";

const slides = [
  {
    image: img2.src, // Replace with your image paths
    alt: "Community group 1",
  },
  {
    image: img3.src,
    alt: "Community group 2",
  },
  {
    image: img5.src,
    alt: "Community group 3",
  },
  {
    image: img1.src,
    alt: "Community group 3",
  },
];

function HeroSection({ scrole }) {
  const router = useRouter();
  const { data: session, status } = useSession();
  const [current, setCurrent] = useState(0);

  const nextSlide = () => setCurrent((prev) => (prev + 1) % slides.length);
  const prevSlide = () =>
    setCurrent((prev) => (prev - 1 + slides.length) % slides.length);

  useEffect(() => {
    const interval = setInterval(nextSlide, 4000); // Change slide every 5 seconds
    return () => clearInterval(interval); // Clear interval on component unmount
  }, []);

  return (
    <section className="z-30 relative  w-full h-full flex items-center justify-center ">
      {/* Slide Images */}
      {slides.map((slide, idx) => (
        <img
          key={idx}
          src={slide.image}
          alt={slide.alt}
          className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-700 ${
            idx === current ? "opacity-100 z-10" : "opacity-0 z-0"
          }`}
        />
      ))}
      {/* Overlay */}
      <div className="absolute w-full inset-0 bg-[#01356B]/40 z-20" />
      {/* Content */}
      <div className="relative z-30 flex flex-col items-start max-md:items-center max-w-2xl px-8  w-full max-md:text-center  max-md:w-fit md:max-w-5xl">
        <h1 className="text-4xl md:text-5xl font-bold text-white mb-4 leading-tight w-full max-sm:text-3xl">
          Report Problems.
          <br />
          Get Solutions.
        </h1>
        <p className="text-lg max-sm:text-base md:text-xl text-white mb-6 md:max-w-2xl">
          Help improve our community by submitting complaints to local
          authorities. Together, we can make our city better.
        </p>
        <button
          onClick={() => {
            if (status === "authenticated") {
              scrole();
            } else {
              router.push("/login");
            }
          }}
          className="bg-yellow-400 cursor-pointer  hover:bg-yellow-500 text-black font-semibold px-6 py-3 rounded shadow transition text-center"
        >
          <span className="inline-flex items-center gap-2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={2}
              stroke="currentColor"
              className="w-5 h-5"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M12 4v16m8-8H4"
              />
            </svg>
            File a Complaint Now
          </span>
        </button>
      </div>
      {/* Slide Controls */}
      <button
        onClick={prevSlide}
        className="absolute left-4 top-1/2 -translate-y-1/2 z-40 bg-black/40 hover:bg-black/60 text-white rounded-full p-2"
        aria-label="Previous slide"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={2}
          stroke="currentColor"
          className="w-6 h-6"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M15 19l-7-7 7-7"
          />
        </svg>
      </button>
      <button
        onClick={nextSlide}
        className="absolute right-4 top-1/2 -translate-y-1/2 z-40 bg-black/40 hover:bg-black/60 text-white rounded-full p-2"
        aria-label="Next slide"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={2}
          stroke="currentColor"
          className="w-6 h-6"
        >
          <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
        </svg>
      </button>
    </section>
  );
}

export default HeroSection;
