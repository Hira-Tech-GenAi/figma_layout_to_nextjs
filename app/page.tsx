
import Blogs from "@/components/Blogs";
import Work from "@/components/Work";
import Image from "next/image";
import React from "react";

const Home = () => {
  return (
    <>
      {/* Hero Section */}
      <section className="flex flex-col-reverse md:flex-row justify-center items-center text-center md:text-left py-10 md:py-20 bg-lightBlue">
        <div className="md:w-1/2 p-4 text-black">
          <h1 className="text-3xl md:text-5xl font-bold text-rose">
            Hi, I am Hira Khalid
          </h1>
          <h2 className="text-xl md:text-3xl text-peach mt-2">
            Creative Technology
          </h2>
          <p className="mt-4 text-lg">
            I specialize in building digital experiences with creativity and
            technology.
          </p>
          <button className="mt-6 bg-red-400 text-black px-6 py-2 rounded shadow-lg hover:bg-red-500">
            Download Resume
          </button>
        </div>
        <div className="mb-6 md:mb-0 md:w-1/2 flex justify-center">
          <div className="rounded-full bg-lightYellow w-40 h-40 md:w-56 md:h-56 overflow-hidden shadow-lg border-4 border-gray-500">
            <Image
              src="/profile.jpg"
              alt="Hero Image"
              width={400}
              height={400}
              className="object-cover"
            />
          </div>
        </div>
      </section>
      <Blogs/>
      <Work/>
    </>
  );
};

export default Home;
