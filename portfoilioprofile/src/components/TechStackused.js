import React from 'react';

const TechStackused= ({ techStack }) => {
  return (
    <div className="techstackused text-sm text-end mt-2">
      {techStack.map((tech, index) => (
        <span key={index} className="mr-2">{tech}</span>
      ))}
    </div>
  );
}

export default TechStackused;
