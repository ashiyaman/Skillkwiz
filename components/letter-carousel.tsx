"use client";

import { useCallback, useEffect, useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import Image from "next/image";

interface CarouselSlide {
  letters: string[];
  title: string;
  description: string;
  backgroundImage: string;
}

const slides: CarouselSlide[] = [
  {
    letters: ["S", "K", "I", "L", "L"],
    title: "Candidate Authentication Eliminating Fraud",
    description:
      "Verify candidate identity and eliminate fraudulent assessments with secure skill evaluation.",
    backgroundImage:
      "/images/homepage/Carousel/Drivers License.jpg",
  },
  {
    letters: ["Q", "U", "I", "Z"],
    title: "Say Goodbye to Technical Interviews!",
    description:
      "Evaluate candidate knowledge through interactive assessments designed to measure real skills.",
    backgroundImage:
      "/images/homepage/Carousel/Pick - Laptop.jpg",
  },
  {
    letters: ["L", "E", "A", "R", "N"],
    title: "Assessments in Secure Centers",
    description:
      "Conduct secure and reliable assessments in controlled examination environments.",
    backgroundImage:
      "/images/homepage/Carousel/Secure Center.jpg",
  },
  {
    letters: ["H", "I", "R", "E"],
    title: "The World's Largest Skill Assessment Library",
    description:
      "Discover a wide range of skill assessments and connect verified skills with better opportunities.",
    backgroundImage:
      "/images/homepage/Carousel/Skill Library.jpg",
  },
];

export default function LetterCarousel() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  const goToSlide = useCallback((index: number) => {
    setCurrentSlide(index);
  }, []);

  const nextSlide = useCallback(() => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  }, []);

  const prevSlide = useCallback(() => {
    setCurrentSlide((prev) =>
      prev === 0 ? slides.length - 1 : prev - 1
    );
  }, []);

  /*
   * Automatic carousel.
   *
   * The interval is created only once and uses the functional
   * state update, so it does not restart every time the slide changes.
   */
  useEffect(() => {
    if (isPaused) {
      return;
    }

    const interval = window.setInterval(() => {
      nextSlide();
    }, 5000);

    return () => {
      window.clearInterval(interval);
    };
  }, [isPaused, nextSlide]);

  /*
   * Keyboard navigation.
   */
  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "ArrowLeft") {
        prevSlide();
      }

      if (event.key === "ArrowRight") {
        nextSlide();
      }
    };

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [nextSlide, prevSlide]);

  return (
    <section
      className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"
      aria-label="SkillKwiz features"
    >
      <div
        className="relative overflow-hidden rounded-2xl bg-white shadow-xl border border-gray-100"
        onMouseEnter={() => setIsPaused(true)}
        onMouseLeave={() => setIsPaused(false)}
        onFocus={() => setIsPaused(true)}
        onBlur={() => setIsPaused(false)}
      >
        {/* Slides */}
        <div className="relative h-[430px] sm:h-[450px] md:h-[470px] lg:h-[500px]">
          {slides.map((slide, index) => {
            const isActive = index === currentSlide;

            return (
              <div
                key={slide.title}
                className={`absolute inset-0 transition-all duration-700 ease-in-out ${
                  isActive
                    ? "opacity-100 translate-x-0 z-10"
                    : "opacity-0 translate-x-8 pointer-events-none z-0"
                }`}
                aria-hidden={!isActive}
              >
                {/* Background */}
                <div className="absolute inset-0 bg-white">
                  <Image
                    src={slide.backgroundImage}
                    alt={slide.title}
                    fill
                    priority={index === 0}
                    sizes="(max-width: 768px) 100vw, 1200px"
                    className="object-cover"
                  />
                </div>

                {/* Soft readability layer */}
                <div className="absolute inset-0 bg-gradient-to-r from-white/95 via-white/75 to-white/10" />

                {/* Content */}
                <div className="relative z-10 h-full flex items-center">
                  <div className="w-full lg:w-[58%] px-6 sm:px-8 md:px-12 lg:px-16 py-10">
                    {/* Letters */}
                    <div className="flex flex-wrap items-center gap-2 sm:gap-3 mb-6">
                      {slide.letters.map((letter, letterIndex) => (
                        <div
                          key={`${slide.title}-${letterIndex}`}
                          className="w-10 h-10 sm:w-12 sm:h-12 md:w-14 md:h-14 flex items-center justify-center rounded-lg bg-[#00418d] text-white text-xl sm:text-2xl md:text-3xl font-bold shadow-md transition-transform duration-300 hover:scale-105"
                        >
                          {letter}
                        </div>
                      ))}
                    </div>

                    {/* Title */}
                    <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold leading-tight text-[#00418d] max-w-2xl mb-4">
                      {slide.title}
                    </h2>

                    {/* Description */}
                    <p className="text-sm sm:text-base md:text-lg leading-relaxed text-gray-700 max-w-xl">
                      {slide.description}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Previous Button */}
        <button
          type="button"
          onClick={prevSlide}
          className="absolute left-3 sm:left-5 top-1/2 -translate-y-1/2 z-30 w-10 h-10 sm:w-12 sm:h-12 flex items-center justify-center rounded-full bg-white/90 text-[#00418d] shadow-lg hover:bg-white hover:scale-105 transition-all duration-200"
          aria-label="Previous slide"
        >
          <ChevronLeft className="w-5 h-5 sm:w-6 sm:h-6" />
        </button>

        {/* Next Button */}
        <button
          type="button"
          onClick={nextSlide}
          className="absolute right-3 sm:right-5 top-1/2 -translate-y-1/2 z-30 w-10 h-10 sm:w-12 sm:h-12 flex items-center justify-center rounded-full bg-white/90 text-[#00418d] shadow-lg hover:bg-white hover:scale-105 transition-all duration-200"
          aria-label="Next slide"
        >
          <ChevronRight className="w-5 h-5 sm:w-6 sm:h-6" />
        </button>

        {/* Indicators */}
        <div className="absolute bottom-5 left-0 right-0 z-30 flex justify-center items-center gap-2">
          {slides.map((slide, index) => (
            <button
              key={slide.title}
              type="button"
              onClick={() => goToSlide(index)}
              aria-label={`Go to slide ${index + 1}`}
              aria-current={index === currentSlide ? "true" : "false"}
              className={`h-2.5 rounded-full transition-all duration-300 ${
                index === currentSlide
                  ? "w-8 bg-[#f73c5c]"
                  : "w-2.5 bg-[#00418d]/40 hover:bg-[#00418d]/70"
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}