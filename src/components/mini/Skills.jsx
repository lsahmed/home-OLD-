import React, { useContext, useEffect, useState } from 'react';
import { Code2 } from 'lucide-react';
import { DataContext } from '../../context/PortContext';

const Skills = () => {
  const {skills } = useContext(DataContext);

    return (
        <div>
        <h2 className="text-xl font-semibold text-white mb-4 flex items-center gap-2">
          <Code2 size={22} />
          Skills
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
          { Object.keys(skills).map((category, idx) => {
            return <div key={idx} className="border border-gray-700 rounded-lg p-4 hover:border-gray-600 transition-colors">
            <h3 className="text-white font-medium mb-2">{ category.charAt(0).toUpperCase() + category.slice(1) }</h3>
            <div className="space-y-1 text-sm">
              <p>{ skills[category] }</p>
            </div>
          </div>
          }) }
          <div className="border border-gray-700 rounded-lg p-4 hover:border-gray-600 transition-colors">
            <h3 className="text-white font-medium mb-2">Soft Skills</h3>
            <div className="space-y-1 text-sm">
              <p>Problem Solving</p>
              <p>Communication</p>
              <p>Teamwork</p>
            </div>

          </div>
          
          </div>
        </div>
    )
}

export default Skills;