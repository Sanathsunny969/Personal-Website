import React from 'react';
import myphoto from '../assets/pp.png';
import { ChevronDown } from 'lucide-react';

const Home: React.FC = () => {
  return (
    <div className="flex h-full relative">
      {/* Background gradients */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-100 via-white to-blue-50"></div>
        <div className="absolute top-0 left-0 right-0 h-24 bg-gradient-to-b from-blue-200/20 to-transparent"></div>
        <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-blue-200/20 to-transparent"></div>
      </div>

      {/* Left side - Photo */}
      <div className="w-1/2 flex items-center justify-center p-12">
        <div className="relative">
          <div className="aspect-w-4 aspect-h-5 rounded-2xl overflow-hidden shadow-xl w-[400px]">
            <img
              src={myphoto}
              alt="Professional portrait of Vedhamsh Bode"
              className="object-cover w-full h-full"
            />
          </div>
          <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-blue-100 rounded-2xl -z-10"></div>
          <div className="absolute -top-6 -left-6 w-32 h-32 bg-blue-200 rounded-2xl -z-10"></div>
        </div>
      </div>

      {/* Right side - Content */}
      <div className="w-1/2 flex flex-col justify-center pr-12">
        <h1 className="text-5xl sm:text-6xl md:text-12xl font-bold text-blue-950 mb-6 animate-[fadeIn_1s_ease-in]">
          Sanath kumar Bode
        </h1>
        
        <p className="text-2xl text-blue-800 font-medium mb-4">
          Automotive Engineer | Hybrid powertrain specialist | Innovator
        </p>
        
        <div className="overflow-hidden h-24 mb-12">
          <div className="animate-[slideUp_8s_linear_infinite]">
            <p className="text-3xl sm:text-4xl text-blue-600 font-light h-24 flex items-center">Automotive Engineer</p>
            <p className="text-3xl sm:text-4xl text-blue-600 font-light h-24 flex items-center">Embedded Developer</p>
            <p className="text-3xl sm:text-4xl text-blue-600 font-light h-24 flex items-center">Machine Learning Expert</p>
            <p className="text-3xl sm:text-4xl text-blue-600 font-light h-24 flex items-center">Problem Solver</p>
          </div>
        </div>
        
        <p className="text-xl text-gray-600 max-w-2xl mb-12 leading-relaxed">
          Specializing in electrical systems development, Test automation, and powertrain solutions. Passionate about creating innovative powertrains and electronic communication systems for Automotive applications.
        </p>
        
        {/* <div className="flex gap-6">
          <a 
            href="#projects" 
            className="px-8 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors font-medium"
          >
            View My Work
          </a>
          <a 
            href="#about" 
            className="px-8 py-3 bg-transparent text-blue-600 border border-blue-600 rounded-lg hover:bg-blue-50 transition-colors font-medium"
          >
            About Me
          </a>
        </div> */}
      </div>
      
      {/* <div className="absolute bottom-12 left-1/2 -translate-x-1/2 animate-bounce">
        <a href="#about" className="flex flex-col items-center text-blue-500 hover:text-blue-700">
          <span className="text-sm mb-2">Scroll Down</span>
          <ChevronDown size={24} />
        </a>
      </div> */}
    </div>
  );
};

export default Home;