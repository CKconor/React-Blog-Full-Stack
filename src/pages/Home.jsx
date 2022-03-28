import { useState, useEffect } from "react";
import { db } from "../firebase.config";
import { collection, getDocs } from "firebase/firestore";
import Container from "../components/Container";
import Portrait from "../assets/portrait.png"
import Contact from '../components/Contact'
import Skills from '../components/Skills'
import ProjectsGrid from "../components/ProjectsGrid";


function App() {
  const [posts, setPosts] = useState([]);
  const blogCollectionRef = collection(db, "blogs");

  useEffect(() => {
    const getPosts = async () => {
      const data = await getDocs(blogCollectionRef);
      setPosts(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
    };
    getPosts();
  }, []);

  return (
    <div className="App dark:bg-darkmode bg-lightmode">
        <div className="flex flex-row mt-10">
          <div className="flex flex-col basis-3/4 items-start">
            <h1 className="text-5xl font-bold mb-0 mt-0">
              Web Developer, UI Designer
            </h1>
            <h3 className="text-3xl mt-1 font-normal text-darkmode dark:text-lightmode">Conor Kemp</h3>
            <p className="max-w-prose mt-6 text-lightsubtext dark:text-darksubtext">
              Freelance Web Developer and Designer based in the UK, specialising
              in e-commerce and business branding alongside modern frameworks
              such as React and CMS systems such as Wordpress
            </p>
            <div className="mt-5">
            <Contact/>
            </div>
          </div>
          <div className="flex flex-col basis-1/4  items-end">
            <img src={Portrait} alt="" />
          </div>
        </div>
        <div className="skills-section flex flex-col mb-10">
          <h2 className="text-4xl text-darkmode dark:text-lightmode font-bold mt-0 mb-5">Skills</h2>
          <Skills />
        </div>
        <div className="project-section flex flex-col">
          <h2 className="text-4xl text-darkmode dark:text-lightmode font-bold mt-0 mb-5">My Projects</h2>
          <ProjectsGrid />
        </div>
    </div>
  );
}

export default App;
