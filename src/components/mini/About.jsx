import React from 'react';
import { Terminal } from 'lucide-react';

const About = () => {
    return (
        <div>
              <h2 className="text-xl font-semibold text-white mb-4 flex items-center gap-2">
                <Terminal size={22} />
                About
              </h2>
              <div className="prose prose-invert">
                <p>
                  With over a year of experience in full-stack development, I specialize in building robust web
                  applications that solve real-world problems. My journey in tech started with a curiosity about how
                  things work on the internet, and that curiosity has evolved into a passion for creating elegant
                  solutions.
                </p>
                <p>
                  Currently working on exciting projects that push the boundaries of what's possible with modern web
                  technologies. Always eager to learn new things and contribute to the developer community.
                </p>
              </div>
            </div>
    )
}

export default About;