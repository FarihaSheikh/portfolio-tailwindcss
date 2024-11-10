"use client"
import React from "react";
import Image from "next/image";
import { FaSquareFacebook } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa";
import { FaInstagramSquare } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { SiNextdotjs } from "react-icons/si";
import { FaHtml5 } from "react-icons/fa";
import { FaReact } from "react-icons/fa";
import { RiTailwindCssFill } from "react-icons/ri";
import { ReactTyped } from "react-typed";

function HeroSection() {
  return (
    <>
      <div
        
        className="max-w-screen-2xl container mx-auto px-5 md:px-20 my-20"
      >
        <div className="flex flex-col md:flex-row">
          <div className="md:w-1/2 mt-12 md:mt-24 space-y-2 order-2 md:order-1">
            <span className="text-xl">Welcome In My Feed</span>
            <div className="flex space-x-1 text-xl md:text-2xl">
              <h1>Hello, I am </h1>
              <ReactTyped
                className="text-pink-400 font-bold px-2"
                strings={["Fariha Sheikh", "Programmer","Developer", "Coder"]}
                typeSpeed={40}
                backSpeed={50}
                loop={true}
              />
            </div>
            <br />
            <p className="text-sm md:text-md text-justify">
            I am a passionate frontend developer with a focus on building innovative and user-friendly websites using TypeScript, Next.js, React, and Tailwind CSS. As a quick learner, I am always eager to deepen my expertise and explore new technologies to create visually compelling and functional digital experiences. Driven by creativity and problem-solving, I am excited to enhance my career by bringing fresh, impactful ideas to life on the web
            </p>
            <br />
            {/* social media icons */}
            <div className="flex flex-col items-center md:flex-row justify-between space-y-6 md:space-y-0">
              <div className="  space-y-2">
                <h1 className="font-bold text-center ">Available on</h1>
                <ul className="flex space-x-5">
                  <li>
                    <a href="https://www.facebook.com/" target="_blank">
                      <FaSquareFacebook className="text-2xl cursor-pointer" />
                    </a>
                  </li>
                  <li>
                    <a href="https://www.linkedin.com/" target="_blank">
                      <FaLinkedin className="text-2xl cursor-pointer" />
                    </a>
                  </li>
                  <li>
                    <a href="https://www.instagram.com/" target="_blank">
                      <FaInstagramSquare  className="text-2xl cursor-pointer" />
                    </a>
                  </li>
                  <li>
                    <a href="https://www.github.com/" target="_blank">
                      <FaGithub className="text-2xl cursor-pointer" />
                    </a>
                  </li>
                </ul>
              </div>
              <div className=" space-y-2">
                <h1 className="font-bold text-center">Currently working on</h1>
                <div className="flex space-x-5">
                  <SiNextdotjs className="text-2xl md:text-3xl hover:scale-110 duration-200 rounded-full border-[2px] cursor-pointer" />
                  <FaHtml5 className="text-2xl md:text-3xl hover:scale-110 duration-200 rounded-full border-[2px] cursor-pointer" />
                  <FaReact className="text-2xl md:text-3xl hover:scale-110 duration-200 rounded-full border-[2px] cursor-pointer" />
                  <RiTailwindCssFill className="text-2xl md:text-3xl hover:scale-110 duration-200 rounded-full border-[2px] cursor-pointer" />
                </div>
              </div>
            </div>
          </div>
          <div className="md-w-1/2 md:ml-48 md:mt-20 bg-pink-200 border-[3px] border-b-gray-100 pt-8  order-1">
            <Image
              src="/images/heroImage.png"
              width={400}
              height={430}
              alt="hero image"
            />
          </div>
        </div>
      </div>

      <hr />
    </>
  );
}

export default HeroSection;