import React from 'react';
import SideBar from './mini/SideBar';
import About from './mini/About';
import Skills from './mini/Skills';
import Projects from './mini/Projects';


const Template = () => {
  return (
    <div className="min-h-screen bg-dark-github text-gray-300">
    <div className="max-w-6xl mx-auto px-4 py-8">
      <div className="grid gap-8 md:grid-cols-3">
       <SideBar />
       
        <div className="space-y-12 md:col-span-2">
          <About />

          <Skills />
          
          <Projects />
        </div>
        
      </div>
    </div>
  </div>
  )
}

export default Template