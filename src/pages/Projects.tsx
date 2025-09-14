import React from 'react';
import ProjectCard from '../components/ProjectCard';

const Projects: React.FC = () => {
  const projects = [
    {
      title: "Smart Mobility Using Dual Arm",
      description: "Developed depalletization system using dual robotic arms with side-grip friction-based manipulation. Built and controlled UR5-inspired dual-arm robot using ROS2 Control and MoveIt2. Implemented OpenCV for box and pallet detection with pose estimation.",
      image: "https://images.pexels.com/photos/2085832/pexels-photo-2085832.jpeg",
      tags: ["ROS2", "MoveIt2", "Servo", "Python", "OpenCV"],
      githubUrl: "https://github.com/example/dual-arm"
    },
    {
      title: "Centralized Intelligence for Dynamic Swarm Navigation",
      description: "Designed dynamic Gazebo environment for autonomous mapping, localization, and navigation. Enhanced navigation efficiency through reinforcement learning approaches.",
      image: "https://images.pexels.com/photos/8566472/pexels-photo-8566472.jpeg",
      tags: ["ROS2", "Nav2", "SLAM", "Path Planning", "Reinforcement Learning"],
      githubUrl: "https://github.com/example/swarm-nav"
    },
    {
      title: "Logistics Cobot",
      description: "Developed autonomous logistics system coordinating UR5 arm and rover for pick-and-drop operations. Implemented navigation, obstacle avoidance, and ArUco marker-based pose estimation.",
      image: "https://images.pexels.com/photos/2159/flight-sky-earth-space.jpg",
      tags: ["ROS2", "Nav2", "MoveIt2", "Servo", "Python"],
      githubUrl: "https://github.com/example/logistics-cobot"
    },
    {
      title: "Autonomous Mobile Robot",
      description: "Created self-localization and navigation system for differential drive robot with visual navigation and autonomous docking capabilities. Integrated hardware components using custom ROS2 Control interfaces.",
      image: "https://images.pexels.com/photos/2085831/pexels-photo-2085831.jpeg",
      tags: ["ROS2", "Navigation", "SLAM", "C++", "Python"],
      githubUrl: "https://github.com/example/amr"
    }
  ];

  return (
    <div className="flex flex-col h-full py-20 bg-gradient-to-br from-blue-50 to-white">
      <div className="container mx-auto px-6 max-w-6xl">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-blue-950 mb-6">Featured Projects</h2>
          <div className="w-24 h-1 bg-blue-600 mx-auto mb-12 rounded-full"></div>
          
          <p className="text-xl text-gray-700 max-w-3xl mx-auto leading-relaxed">
            A selection of my key robotics and automation projects, showcasing expertise in ROS2, computer vision, and intelligent control systems.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <div key={index} className="h-full">
              <ProjectCard {...project} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Projects;