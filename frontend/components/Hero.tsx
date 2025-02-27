import React from "react";
import Image from "next/image";
import Link from "next/link";

const Hero = () => {
  return (
    <section id="hero" className="py-8">
      <div className="container flex flex-col-reverse mx-auto p-4 lg:flex-row">
        <div className="flex flex-col space-y-6 mb-16 lg:mb-0 lg:w-1/2">
          <h1 className="text-4xl font-bold text-center lg:text-5xl lg:text-left">
            Financial data with no news.
          </h1>
          <p className="text-lg text-center text-gray-400 lg:text-left">
            Search relevant financial documents without fear mongering and fake
            news.
          </p>
          <div className="mx-auto lg:mx-0">
            <Link
              href="/searchpage"
              className="py-3 px-6 text-lg font-bold text-dark bg-lightGreen rounded hover:opacity-70"
            >
              Get Started
            </Link>
          </div>
        </div>
        <div className="flex justify-center lg:w-1/2">
          <Image src="/hero.png" alt="Hero Image" width={400} height={400} />
        </div>
      </div>
    </section>
  );
};

export default Hero;
