"use client";
import React from 'react'
import { TypeAnimation } from "react-type-animation";

const HeroSection = () => {
  return (
    <section id='about'>
    <title>TopScriber</title>
     <div className='grid grid-cols-1 sm:grid-cols-12'>
      <div className='col-span-7 place-self-center text-center sm:text-left'>
       <h1 className="text-black mb-4 text-4xl sm:text-5xl lg:text-8xl lg:leading-normal font-extrabold">
       <span className=" text-black bg-clip-text bg-gradient-to-r from-primary-400 to-secondary-600">
              Bonjour, Lets Talk About &apos;{" "}
            </span>
            <br></br>
            <TypeAnimation
              sequence={[
                "Fashion",
                1000,
                "Culture",
                1000,
                "LifeStyle",
                1000,
                "Self Improvement",
                1000,
                "Health and Wellness",
                1000,
                "Travel",
                1000,
                "LGBTQ",
                1000,
              ]}
              wrapper="span"
              speed={50}
              repeat={Infinity}
            />
       </h1>
        <p className="text-black text-base sm:text-lg mb-6 lg:text-xl">
          Welcome to TopScriber, your premier destination for curated content that transcends boundaries and explores the richness of life. Immerse yourself in a world where we delve into the latest trends in travel, unveil the secrets of timeless fashion, prioritize holistic health and wellness, and share profound insights on achieving a harmonious and balanced lifestyle. Our carefully crafted blogs cater to a diverse audience, spanning across all age brackets, professional backgrounds, and ethnicities. Whether you are a curious wanderer seeking new horizons or a fashion aficionado in search of style tips, TopScriber has you covered. Embark on this beautiful journey of discovery, self-improvement, and celebration of the vibrant tapestry of life. We go beyond the ordinary, providing you with a daily dose of inspiration to nurture your personal growth and understanding of your unique self. Your pathway to self-discovery and professional excellence begins right here at TopScriber. Welcome to a world where every article is a step towards a more enriched and fulfilling life.
          </p>
          <h1 className="text-black mb-4 text-4xl sm:text-5xl lg:text-8xl lg:leading-normal font-extrabold">
       <span className=" text-black bg-clip-text bg-gradient-to-r from-primary-400 to-secondary-600">
              About Us
            </span>
            <br></br>
            <p className="text-black font-normal text-base sm:text-lg mb-6 lg:text-xl">At TopScriber, we are more than just a platform; we are a community that celebrates the multifaceted tapestry of life. As a team of passionate storytellers, trend enthusiasts, and wellness advocates, we embark on a collective journey to bring you inspiring articles that resonate with the essence of living your best life. Our mission is simple: to be your go-to destination for a diverse range of topics, spanning from the latest trends in travel to the timeless secrets of fashion. We understand that life is a mosaic of experiences, and our carefully crafted blogs are designed to cater to all age brackets, sexual orientations, and ethnicities.  What sets us apart is our commitment to inclusivity and self-discovery. We believe in celebrating individuality and embracing the beauty of diversity. Whether you're a wanderer seeking new horizons, a fashion enthusiast in search of style tips, or someone on a journey of self-improvement, TopScriber is your daily dose of inspiration.Join us as we delve into the latest trends, unlock the secrets of timeless fashion, prioritize health and wellness, and share insights on achieving a balanced lifestyle. This is more than just a website; it's a platform for understanding your alter ego, celebrating life, and embracing the journey of self-discovery. Your adventure in inspiration and self-improvement starts here, at TopScriber. Let's explore, learn, and grow together.</p>
       </h1>
          </div>
          
          
      </div>    
    </section>
  );
};

export default HeroSection
