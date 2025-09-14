import React, { useState } from 'react';
import { Home, User, Briefcase, Mail, ChevronRight } from 'lucide-react';

interface NavItemProps {
  icon: React.ReactNode;
  text: string;
  href: string;
  isExpanded: boolean;
}

const NavItem: React.FC<NavItemProps> = ({ icon, text, href, isExpanded }) => {
  return (
    <a 
      href={href}
      className="flex items-center gap-4 text-gray-300 hover:text-white hover:bg-blue-900/50 px-4 py-3 rounded-lg transition-all duration-300"
    >
      <div className="text-gray-300">{icon}</div>
      <span className={`nav-item ${isExpanded ? 'opacity-100' : 'opacity-0'}`}>
        {text}
      </span>
    </a>
  );
};

const Sidebar: React.FC = () => {
  const [isExpanded, setIsExpanded] = useState(false);
  
  return (
    <div 
      className={`sidebar fixed top-0 left-0 h-screen bg-gradient-to-b from-blue-950 to-blue-900 text-white z-50 flex flex-col ${
        isExpanded ? 'w-64' : 'w-20'
      }`}
      onMouseEnter={() => setIsExpanded(true)}
      onMouseLeave={() => setIsExpanded(false)}
    >
      <div className="py-8 flex justify-center items-center">
        <div className="relative w-12 h-12 rounded-full bg-blue-700 flex items-center justify-center text-xl font-bold">
          SB
        </div>
        <h1 className={`text-xl font-bold ml-3 nav-item ${isExpanded ? 'opacity-100' : 'opacity-0'}`}>
          Sanath kumar Bode
        </h1>
      </div>
      
      <div className="flex-1 py-4">
        <NavItem icon={<Home size={24} />} text="Home" href="#home" isExpanded={isExpanded} />
        <NavItem icon={<User size={24} />} text="About Me" href="#about" isExpanded={isExpanded} />
        <NavItem icon={<Briefcase size={24} />} text="Projects" href="#projects" isExpanded={isExpanded} />
      </div>
      
      <div className="pb-8">
        <NavItem icon={<Mail size={24} />} text="Contact" href="#contact" isExpanded={isExpanded} />
      </div>
      
      <div className={`absolute top-1/2 -right-4 transform -translate-y-1/2 bg-blue-900 p-1 rounded-full cursor-pointer transition-opacity duration-300 ${isExpanded ? 'opacity-0' : 'opacity-100'}`}>
        <ChevronRight size={16} className="text-white" />
      </div>
    </div>
  );
};

export default Sidebar;