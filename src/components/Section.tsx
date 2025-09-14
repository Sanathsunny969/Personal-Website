import React from 'react';

interface SectionProps {
  id: string;
  className?: string;
  children: React.ReactNode;
}

const Section: React.FC<SectionProps> = ({ id, className = "", children }) => {
  return (
    <section id={id} className={`section ${className}`}>
      <div className="container mx-auto px-6 lg:px-12 py-12 h-full">
        {children}
      </div>
    </section>
  );
};

export default Section;