import React, { useState } from 'react';
import { X, ExternalLink, Github } from 'lucide-react';

interface ProjectProps {
  title: string;
  description: string;
  image: string;
  tags: string[];
  liveUrl?: string;
  githubUrl?: string;
}

const ProjectCard: React.FC<ProjectProps> = ({
  title,
  description,
  image,
  tags,
  liveUrl,
  githubUrl
}) => {
  const [isExpanded, setIsExpanded] = useState(false);
  const [isHovered, setIsHovered] = useState(false);

  const handleClick = () => {
    setIsExpanded(!isExpanded);
    if (!isExpanded) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }
  };

  return (
    <>
      <div 
        className={`project-card bg-white rounded-xl shadow-lg overflow-hidden ${
          isHovered && !isExpanded ? 'transform scale-105' : ''
        } cursor-pointer`}
        onClick={handleClick}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <div className="relative h-48 overflow-hidden">
          <img 
            src={image} 
            alt={title} 
            className="w-full h-full object-cover object-center transition-transform duration-500 transform scale-110"
          />
        </div>
        <div className="p-6">
          <h3 className="text-xl font-bold text-gray-900 mb-2">{title}</h3>
          <p className="text-gray-600 mb-4 line-clamp-2">{description}</p>
          <div className="flex flex-wrap gap-2">
            {tags.map((tag, index) => (
              <span key={index} className="px-3 py-1 bg-blue-100 text-blue-800 text-xs rounded-full">
                {tag}
              </span>
            ))}
          </div>
        </div>
      </div>

      {isExpanded && (
        <>
          <div className="project-overlay fixed inset-0 bg-black/70 z-40" onClick={handleClick}></div>
          <div className="project-card-expanded bg-white rounded-xl shadow-2xl">
            <div className="relative">
              <img 
                src={image} 
                alt={title} 
                className="w-full h-64 md:h-96 object-cover object-center"
              />
              <button 
                className="absolute top-4 right-4 bg-black/50 hover:bg-black/70 text-white p-2 rounded-full transition-colors"
                onClick={handleClick}
              >
                <X size={24} />
              </button>
            </div>
            <div className="p-8">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">{title}</h2>
              <p className="text-gray-700 text-lg mb-6 leading-relaxed">{description}</p>
              
              <div className="mb-8">
                <h3 className="text-xl font-semibold mb-3">Technologies</h3>
                <div className="flex flex-wrap gap-2">
                  {tags.map((tag, index) => (
                    <span key={index} className="px-4 py-2 bg-blue-100 text-blue-800 rounded-full">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
              
              <div className="flex gap-4">
                {liveUrl && (
                  <a 
                    href={liveUrl}
                    target="_blank"
                    rel="noopener noreferrer" 
                    className="flex items-center gap-2 px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
                  >
                    <ExternalLink size={18} />
                    <span>Live Demo</span>
                  </a>
                )}
                {githubUrl && (
                  <a 
                    href={githubUrl}
                    target="_blank"
                    rel="noopener noreferrer" 
                    className="flex items-center gap-2 px-6 py-3 bg-gray-800 text-white rounded-lg hover:bg-gray-900 transition-colors"
                  >
                    <Github size={18} />
                    <span>Source Code</span>
                  </a>
                )}
              </div>
            </div>
          </div>
        </>
      )}
    </>
  );
};

export default ProjectCard;