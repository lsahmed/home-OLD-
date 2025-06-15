import React, { useContext } from 'react';
import { DataContext } from '../../context/PortContext';
import { ExternalLink } from 'lucide-react';

const Projects = () => {
  const { projects } = useContext(DataContext);

    return (
        <div>
              <h2 className="text-xl font-semibold text-white mb-4 flex items-center gap-2">
                <i data-lucide="sparkles" className="w-5 h-5"></i>
                Featured Projects
              </h2>
              <div className="grid gap-4 m-5">
                { Object.keys(projects).map((key, idx) => {
                  return <div key={idx} className="border border-gray-700 rounded-lg p-4 hover:border-gray-600 transition-colors">
                  <div className="flex justify-between items-start mb-2">
                    <h3 className="text-white font-medium">{ projects[key].data['title'] }</h3>
                    <a href={projects[key].data['git']} className="text-gray-400 hover:text-white" target="_blank">
                      <ExternalLink size={10} />
                    </a>
                  </div>
                  <p className="text-sm mb-4">
                  {projects[key].data['description']}
                  </p>
                  <div className="flex gap-2 flex-wrap">
                    { projects[key].data['technologies'].split(",").map((elements, idx) => {
                      return <span key={idx} className="text-xs px-2 py-1 bg-gray-800 rounded-full">{elements}</span>
                    }) }
                  </div>
                </div>
                }) }
              </div>
            </div>
    )
}

export default Projects;