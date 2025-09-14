import React from 'react';
import { Code, Palette, Lightbulb, Users } from 'lucide-react';

interface SkillCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
}

const SkillCard: React.FC<SkillCardProps> = ({ icon, title, description }) => {
  return (
    <div className="bg-white rounded-xl shadow-md p-6 hover:shadow-lg transition-shadow">
      <div className="w-14 h-14 rounded-full bg-blue-100 flex items-center justify-center text-blue-600 mb-4">
        {icon}
      </div>
      <h3 className="text-xl font-bold text-gray-900 mb-2">{title}</h3>
      <p className="text-gray-600">{description}</p>
    </div>
  );
};

const About: React.FC = () => {
  return (
    <div className="flex flex-col h-full py-20">
      <div className="container mx-auto px-6 max-w-6xl">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-blue-950 mb-6">About Me</h2>
          <div className="w-24 h-1 bg-blue-600 mx-auto mb-12 rounded-full"></div>
          
          <p className="text-xl text-gray-700 max-w-3xl mx-auto leading-relaxed">
            I’m Sanath kumar, an automotive enthusiast working in one of the big American giants. Working on making the automobiles advanced, automated and safe. Acquired theoretical and experimental knowledge on different powertrains. This website showcases my journey, innovations, and the solutions I’ve built by blending engineering principles with real-world challenges.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-20">
          <SkillCard 
            icon={<Code size={28} />}
            title="Development"
            description="Proficient in modern web technologies including React, TypeScript, and Node.js."
          />
          <SkillCard 
            icon={<Palette size={28} />}
            title="Design"
            description="Creating beautiful UI/UX with a focus on usability and aesthetics."
          />
          <SkillCard 
            icon={<Lightbulb size={28} />}
            title="Problem Solving"
            description="Finding elegant solutions to complex technical challenges."
          />
          <SkillCard 
            icon={<Users size={28} />}
            title="Collaboration"
            description="Working effectively with teams to deliver exceptional results."
          />
        </div>
        
        {/* <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="order-2 md:order-1">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">My Journey</h3>
            <p className="text-gray-700 mb-6 leading-relaxed">
              I began my journey in tech with a curiosity for how digital products are built. 
              This led me to dive deep into both design and development, honing my skills in 
              creating user-centered solutions.
            </p>
            <p className="text-gray-700 mb-6 leading-relaxed">
              With experience across various projects and industries, I've developed a keen eye 
              for detail and a methodical approach to problem-solving. I'm constantly learning 
              and adapting to new technologies and design trends.
            </p>
            <div className="flex flex-wrap gap-3">
              <span className="px-4 py-2 bg-blue-100 text-blue-800 rounded-full text-sm">React</span>
              <span className="px-4 py-2 bg-blue-100 text-blue-800 rounded-full text-sm">TypeScript</span>
              <span className="px-4 py-2 bg-blue-100 text-blue-800 rounded-full text-sm">Tailwind CSS</span>
              <span className="px-4 py-2 bg-blue-100 text-blue-800 rounded-full text-sm">Node.js</span>
              <span className="px-4 py-2 bg-blue-100 text-blue-800 rounded-full text-sm">UI/UX Design</span>
              <span className="px-4 py-2 bg-blue-100 text-blue-800 rounded-full text-sm">Figma</span>
            </div>
          </div>
          
          <div className="order-1 md:order-2 relative">
            <div className="aspect-w-4 aspect-h-5 rounded-2xl overflow-hidden shadow-xl">
              <img
                src="https://images.pexels.com/photos/5691622/pexels-photo-5691622.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                alt="Professional portrait of Vedhamsh"
                className="object-cover w-full h-full"
              />
            </div>
            <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-blue-100 rounded-2xl -z-10"></div>
            <div className="absolute -top-6 -left-6 w-32 h-32 bg-blue-200 rounded-2xl -z-10"></div>
          </div>
        </div> */}
      </div>
    </div>
  );
};

export default About;