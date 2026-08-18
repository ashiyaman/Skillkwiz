"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";

import AuthenticateSkillsSection from "@/components/authenticate-skills-section";
import WhyChooseSection from "@/components/why-choose-section";
import LoginSection from "@/components/login-section";
import TestimonialsSection from "@/components/testimonials-section";
import LetterCarousel from "@/components/letter-carousel";

export default function HomePage() {
  const [scrollStage, setScrollStage] = useState(0);
  const [isCallCenterVisible, setIsCallCenterVisible] = useState(false);

  const globeRef = useRef<HTMLDivElement>(null);
  const callCenterRef = useRef<HTMLDivElement>(null);
  const heroRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;

      if (scrollY < 100) {
        setScrollStage(0);
      } else if (scrollY < 400) {
        setScrollStage(1);
      } else {
        setScrollStage(2);
      }
    };

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.target === callCenterRef.current) {
            setIsCallCenterVisible(entry.isIntersecting);
          }
        });
      },
      {
        threshold: 0.15,
        rootMargin: "0px 0px -80px 0px",
      }
    );

    if (callCenterRef.current) {
      observer.observe(callCenterRef.current);
    }

    window.addEventListener("scroll", handleScroll);

    return () => {
      observer.disconnect();
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className="min-h-screen bg-white">
      {/* Main Content */}
      <div className="relative">
        {/* Hero Section */}
        <section
          ref={heroRef}
          className="
            relative
            w-full
            h-[80vh]
            min-h-[520px]
            md:h-[80vh]
            text-white
            overflow-hidden
          "
          style={{ zIndex: 1 }}
        >
          {/* Background Video */}
          <video
            className="absolute inset-0 w-full h-full object-cover"
            autoPlay
            muted
            loop
            playsInline
            preload="auto"
            poster="/images/homepage/banner_video_poster.jpg"
          >
            <source
              src="/images/homepage/banner_video.mp4"
              type="video/mp4"
            />

            Your browser does not support the video tag.
          </video>

          {/* Slight overlay for text readability */}
          <div className="absolute inset-0 bg-black/10" />

          {/* Hero Content */}
          <div
            className="
              max-w-7xl
              mx-auto
              px-5
              sm:px-6
              md:px-8
              pt-24
              md:pt-8
              relative
              z-10
              h-full
            "
          >
            <div
              className="
                grid
                grid-cols-1
                lg:grid-cols-2
                gap-8
                items-center
                h-full
              "
            >
              {/* Hero Text */}
              <div className="mt-0 md:mt-20">
                <h1
                  className="
                    text-4xl
                    sm:text-4xl
                    md:text-5xl
                    font-bold
                    leading-tight
                    mb-6
                  "
                >
                  Assessments in Secure Centers
                </h1>

                <Link
                  href="/services"
                  className="
                    inline-flex
                    items-center
                    justify-center
                    bg-[#f73e5d]
                    text-white
                    px-8
                    py-3
                    rounded-full
                    font-medium
                    shadow-lg
                    hover:bg-[#e82f50]
                    hover:scale-105
                    transition-all
                    duration-300
                  "
                >
                  Get Started
                </Link>
              </div>

              {/* Animated Globe GIF */}
              <div
                ref={globeRef}
                className="
                  flex
                  justify-center
                  items-center
                  mt-4
                  md:mt-0
                "
              >
                <Image
                  src="/images/homepage/home_globe.gif"
                  alt="SkillKwiz assessment platform"
                  width={600}
                  height={400}
                  priority
                  className="
                    w-full
                    max-w-[320px]
                    sm:max-w-[400px]
                    md:max-w-md
                    h-auto
                  "
                />
              </div>
            </div>
          </div>
        </section>

        {/* Call Center Section */}
        <div
          ref={callCenterRef}
          className={`
            relative
            md:absolute
            md:top-[50vh]
            left-0
            w-full
            md:h-[60vh]
            transition-all
            duration-1000
            ease-out
            ${
              isCallCenterVisible
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-12"
            }
          `}
          style={{ zIndex: 2 }}
        >
          <Image
            src="/images/homepage/call-center.png"
            alt="Call center agents with headsets"
            width={1920}
            height={980}
            priority
            className="
              block
              w-full
              h-auto
              md:w-[100vw]
              md:h-auto
              object-contain
            "
          />
        </div>

        {/* Rest of the page */}
        <div
          className="
            relative
            mt-0
            md:mt-[45vh]
          "
          style={{ zIndex: 3 }}
        >
          {/* SkillKwiz Tag */}
          <div
            className="
              bg-[#f6c648]
              text-[#00418d]
              py-4
              px-6
              inline-block
              transform
              skew-x-12
              -ml-4
            "
          >
            <div className="transform -skew-x-12">
              <h2 className="text-lg sm:text-xl font-bold">
                SkillKwiz – Verified Skills, Simplified Hiring
              </h2>
            </div>
          </div>

          {/* Letter Carousel */}
          <div className="mt-8 mb-12">
            <LetterCarousel />
          </div>
        </div>
      </div>

      {/* Rest of the page */}
      <div
        className="bg-white relative"
        style={{ zIndex: 3 }}      >
        <AuthenticateSkillsSection />

        <WhyChooseSection />

        <TestimonialsSection />

        <LoginSection />
      </div>
    </div>
  );
}