import Portrait from "../assets/portrait.png";
import Contact from "../components/Contact";
import Skills from "../components/Skills";
import ExperienceGrid from "../components/ExperienceGrid";

function App() {
  return (
    <div className="App dark:bg-darkmode bg-lightmode">
      <div className="flex flex-row mt-5 md:mt-10">
        <div className="flex flex-col  basis-2/2 md:basis-3/4 items-start">
          <h1 className="text-3xl md:text-5xl font-bold mb-0 mt-0">
            Fullstack Developer, UI Designer
          </h1>
          <h3 className="text-1xl md:text-3xl mt-1 font-normal text-darkmode dark:text-lightmode">
            Conor Kemp
          </h3>
          <p className="max-w-xl mt-6 text-1xl text-lightsubtext dark:text-darksubtext">
            Web Developer and Designer based in the UK, specializing in
            e-commerce and business branding alongside modern frameworks such as
            React and CMS systems such as Wordpress
          </p>
          <div className="mt-5 mb-10">
            <Contact />
          </div>
        </div>
        <div className="flex flex-col basis-1/4  items-end lg:visible invisible">
          <img src={Portrait} alt="" />
        </div>
      </div>
      <div className="skills-section flex flex-col mb-10">
        <h2 className="text-4xl text-darkmode dark:text-lightmode font-bold mt-0 mb-5">
          Skills
        </h2>
        <Skills />
      </div>
      <div className="experience-section flex flex-col">
        <h2 className="text-4xl text-darkmode dark:text-lightmode font-bold mt-0 mb-5">
          Experience
        </h2>
        <ExperienceGrid />
      </div>
    </div>
  );
}

export default App;
