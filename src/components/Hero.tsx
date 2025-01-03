import Image from 'next/image';
import React from 'react';

const Hero = () => {
  return (
    <section className="mt-16 flex flex-col items-center gap-8 px-4">
      {/* Hero Content */}
      <div className="flex flex-col lg:flex-row gap-5 items-center lg:items-start">
        {/* Image */}
        <Image
          src="/hero.png"
          alt="Hero"
          height={500}
          width={500}
          className="h-[300px] w-[90%] md:h-[400px] md:w-[400px] lg:h-[500px] lg:w-[450px] rounded-e-xl object-cover"
        />

        {/* Text Section */}
        <div className="flex flex-col bg-[#E2EDF2] p-8 md:p-12 rounded-2xl text-center lg:text-left">
          <h1 className="text-[40px] md:text-[60px] lg:text-[80px] leading-tight text-blue-950">
            Life is an <br />
            Adventure
          </h1>
          <p className="font-mono text-[18px] md:text-[24px] lg:text-[30px] text-blue-400 mt-4">
            Travel the world
          </p>
        </div>
      </div>

      {/* Advertisement Section */}
      <div className="flex flex-col bg-zinc-200 w-full rounded-lg p-6 md:p-8">
        <p className="text-center text-[16px] md:text-[20px] text-zinc-400">
          Advertisement
        </p>
        <p className="text-center text-[16px] md:text-[20px] text-zinc-600 mt-2">
          You can place ads
        </p>
        <p className="text-center text-[16px] md:text-[20px] text-zinc-400 mt-2">
          750 & 100
        </p>
      </div>
    </section>
  );
};

export default Hero;
