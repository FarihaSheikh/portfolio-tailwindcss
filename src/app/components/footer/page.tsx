import React from 'react';
import { FaFacebook, FaInstagram, FaLinkedin, FaGithub } from 'react-icons/fa6';

function Footer() {
  return (
    <div>
      <hr className="border-gray-300" />
      <footer className="py-5 bg-rose-300 text-white">
        <div className="max-w-screen-2xl container mx-auto px-5 md:px-10">
          <div className="flex flex-col items-center justify-center space-y-6">
            
      
            <div className="flex space-x-6">
              <FaFacebook size={24} className="hover:text-blue-500 transition duration-300" />
              <FaInstagram size={24} className="hover:text-pink-500 transition duration-300" />
              <FaLinkedin size={24} className="hover:text-blue-700 transition duration-300" />
              <FaGithub size={24} className="hover:text-gray-800 transition duration-300" />
            </div>
           
            <div className="mt-8 border-t border-gray-500 pt-6 flex flex-col items-center space-y-2">
              <p className="text-sm text-center">&copy; 2024 Fariha Sheikh. All rights reserved.</p>
              <p className="text-sm text-center">Supportive Partner ❤️ Fariha</p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default Footer;
