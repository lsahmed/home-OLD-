import React, { createContext, useState, useEffect } from 'react'
import App from '../App';
import { db } from '../firebase/firebase'
import { doc, collection, getDoc, getDocs } from 'firebase/firestore';
import { Dock } from 'lucide-react';

export const DataContext = createContext();

const PortContext = ({ children }) => {

  const [skills, setSkills] = useState({});
  const [projects, setProjects] = useState([])

  useEffect(() => {
    const fetchData = async () => {
      const skillRef = doc(db, "skills", "skills"); // -> third one is document ID
      const skillSnap = await getDoc(skillRef);

      const projectRef = collection(db, "projects");
      const projectSnap = await getDocs(projectRef);

      const projectsArray = [];

      projectSnap.forEach((doc) => {
        projectsArray.push({id: doc.id, data: doc.data()});
      });

      setSkills(skillSnap.data());
      setProjects(projectsArray)

    }
    fetchData();
  }, []);

  return (
    <DataContext.Provider value={{skills, projects}}>
      { children }
    </DataContext.Provider>
  )
}

export default PortContext;