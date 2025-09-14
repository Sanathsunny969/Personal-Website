import React from 'react';
import { Mail, Linkedin, Github, Twitter, X, TwitterIcon, Instagram } from 'lucide-react';

const Contact: React.FC = () => {
  return (
    <div className="bg-white rounded-2xl shadow-xl p-8 max-w-4xl mx-auto">
      <h2 className="text-4xl font-bold text-blue-950 mb-8 text-center">Get In Touch</h2>
      
      <div className="grid md:grid-cols-2 gap-12">
        <div className="space-y-6">
          <h3 className="text-2xl font-semibold text-gray-800 mb-4">Contact Information</h3>
          <p className="text-gray-600">Feel free to reach out! I'm always open to discussing new projects, creative ideas or opportunities to be part of your vision.</p>
          
          <div className="flex items-center gap-3 text-gray-700">
            <Mail size={20} className="text-blue-600" />
            <span>Sanathkumarbode@gmail.com</span>
          </div>
          
          <div className="flex gap-4 mt-8">
            <a href="https://www.linkedin.com/in/sanathkumarbode/" className="w-12 h-12 rounded-full bg-blue-100 flex items-center justify-center text-blue-600 hover:bg-blue-600 hover:text-white transition-colors">
              <Linkedin size={22} />
            </a>
            <a href="https://github.com/Sanathsunny969" className="w-12 h-12 rounded-full bg-blue-100 flex items-center justify-center text-blue-600 hover:bg-blue-600 hover:text-white transition-colors">
              <Github size={22} />
            </a>
            <a href="https://www.instagram.com/_sunny969/" className="w-12 h-12 rounded-full bg-blue-100 flex items-center justify-center text-blue-600 hover:bg-blue-600 hover:text-white transition-colors">
              <Instagram size={22} />
            </a>
          </div>
        </div>
        
        <form className="space-y-6">
          <div>
            <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">Name</label>
            <input
              type="text"
              id="name"
              className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              placeholder="Your Name"
            />
          </div>
          
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">Email</label>
            <input
              type="email"
              id="email"
              className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              placeholder="your@email.com"
            />
          </div>
          
          <div>
            <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">Message</label>
            <textarea
              id="message"
              rows={5}
              className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              placeholder="Your message..."
            ></textarea>
          </div>
          
          <button
            type="submit"
            className="w-full bg-blue-600 text-white py-3 px-6 rounded-lg hover:bg-blue-700 transition-colors font-medium"
          >
            Send Message
          </button>
        </form>
      </div>
    </div>
  );
};

export default Contact;