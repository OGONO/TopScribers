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
            Welcome to TopScriber , your go-to destination for inspiring articles that embrace the essence of life. Dive into a world where we explore the latest trends in travel, unlock the secrets of timeless fashion, prioritize health and wellness, and  share insights on achieving a balanced lifestyle. Whether you're a wanderer seeking new horizons or a fashion enthusiast craving style tips, our carefully crafted blogs that covers all age brackets, sexual orientation and ethncity at the the very least of the list cover it all, no to brag but we also cover GenZ and millenials. Join us on this beautiful journey of discover ,also self discovery, self improvement and celebration of the vibarnt taperstry of life. Your daily dose of inspiration , understanding your alter ego and self improvement starts here. 
          </p>
          <h1 className="text-black mb-4 text-4xl sm:text-5xl lg:text-8xl lg:leading-normal font-extrabold">
       <span className=" text-black bg-clip-text bg-gradient-to-r from-primary-400 to-secondary-600">
              About Us
            </span>
            <br></br>
            <p className="text-black font-normal text-base sm:text-lg mb-6 lg:text-xl">At TopScriber, we are more than just a platform; we are a community that celebrates the multifaceted tapestry of life. As a team of passionate storytellers, trend enthusiasts, and wellness advocates, we embark on a collective journey to bring you inspiring articles that resonate with the essence of living your best life. Our mission is simple: to be your go-to destination for a diverse range of topics, spanning from the latest trends in travel to the timeless secrets of fashion. We understand that life is a mosaic of experiences, and our carefully crafted blogs are designed to cater to all age brackets, sexual orientations, and ethnicities. Not to boast, but we also make it a point to specifically address the unique perspectives of Gen Z and millennials. What sets us apart is our commitment to inclusivity and self-discovery. We believe in celebrating individuality and embracing the beauty of diversity. Whether you're a wanderer seeking new horizons, a fashion enthusiast in search of style tips, or someone on a journey of self-improvement, TopScriber is your daily dose of inspiration.Join us as we delve into the latest trends, unlock the secrets of timeless fashion, prioritize health and wellness, and share insights on achieving a balanced lifestyle. This is more than just a website; it's a platform for understanding your alter ego, celebrating life, and embracing the journey of self-discovery. Your adventure in inspiration and self-improvement starts here, at TopScriber. Let's explore, learn, and grow together.</p>
       </h1>
          </div>
          
          
      </div>    
    </section>
  );
};

export default HeroSection
