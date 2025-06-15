import { Globe } from 'lucide-react'
import React from 'react'
import { Linkedin, GitHub, Mail } from 'react-feather'

const SideBar = () => {
  return (
         <div className="space-y-6 md:col-span-1">
            <div className="space-y-4">
              <img
                src="https://i.ibb.co/1fy0KpSC/pfp-cropped.jpg"
                alt="Profile photo"
                width="200"
                height="300"
                className="rounded-full"
              />
              <div>
                <h1 className="text-2xl font-bold text-white">Ahmed </h1>
                <p className="text-xl text-gray-400">Full Stack Developer</p>
              </div>
            </div>

            <p className="text-sm leading-relaxed">
              Passionate developer crafting digital experiences. Focused on building scalable and user-friendly
              applications.
            </p>

            <button className="w-full px-4 py-2 text-sm border border-gray-700 rounded-md hover:border-gray-600 text-gray-300 hover:text-white transition-colors">
              <a href="https://www.linkedin.com/in/lsahmed/" target="_blank">Connect With me</a>
            </button>

            <div className="space-y-2">
              <a href="https://github.com/lsahmed" className="flex items-center gap-2 text-sm hover:text-white transition-colors" target="_blank">
                <GitHub size={14} />
                <span>github.com/lsahmed</span>
              </a>
              <a href="https://www.linkedin.com/in/lsahmed/" className="flex items-center gap-2 text-sm hover:text-white transition-colors" target="_blank">
                <Linkedin size={15} />
                <span>linkedin.com/in/lsahmed</span>
              </a>
              <a href="mailto:md.ahmed701153@gmail.com" className="flex items-center gap-2 text-sm hover:text-white transition-colors" target="_blank">
                <Mail size={14} />
                <span>md.ahme..@gmail.com</span>
              </a>
              <a href="#" className="flex items-center gap-2 text-sm hover:text-white transition-colors">
                <Globe size={14} />
                <span>lsahmed.tech</span>
              </a>
            </div>
          </div>
  )
}

export default SideBar