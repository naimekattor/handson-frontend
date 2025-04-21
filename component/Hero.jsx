import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

const Hero = () => {
  return (
    <div className="hero bg-base-200 min-h-screen">
      <div className="hero-content flex-col lg:flex-row-reverse">
        <div className='flex-1'>
          <Image
            src="/hero.png"
            width={400}
            height={400}
            alt='hero image'
            className="max-w-sm rounded-lg shadow-2xl " />
        </div>

        <div className='flex-1'>
          <h1 className="text-5xl font-bold">Make an Impact in Your Community!</h1>
          <p className="py-6">
            Join HandsOn to discover volunteer opportunities, create community help requests, and track your social impact journey.
          </p>
          <div className='flex gap-2'>
            <button className="btn bg-black text-white">Get Started</button>
            <button className="btn bg-black text-white"><Link href='/events'>Browse Events</Link></button>
          </div>

        </div>
      </div>
    </div>
  );
};

export default Hero;