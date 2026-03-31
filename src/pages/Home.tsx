import Portrait from "../assets/portrait.png";
import Contact from "../components/Contact";
import Skills from "../components/Skills";
import ExperienceGrid from "../components/ExperienceGrid";

function App() {
  return (
    <div className="dark:bg-darkmode bg-lightmode">
      {/* Hero */}
      <section className="pt-16 pb-20 md:pt-24 md:pb-28">
        <div className="flex flex-row items-start justify-between">
          <div className="flex flex-col max-w-2xl">
            <span className="opacity-0 animate-fade-up text-xs uppercase tracking-widest text-accentcolor mb-6 font-medium">
              Lead Frontend Engineer
            </span>
            <h1 className="opacity-0 animate-fade-up stagger-1 font-serif text-5xl md:text-7xl tracking-tight leading-[1.05] mb-0">
              Conor Kemp
            </h1>
            <p className="opacity-0 animate-fade-up stagger-2 mt-8 text-base text-lightsubtext dark:text-darksubtext leading-relaxed max-w-md">
            Lead Frontend Engineer with 6+ years of experience building
            scalable, production-grade web applications using React, Next.js,
            and TypeScript. Proven track record of architecting frontend
            systems, mentoring engineering teams, and delivering
            high-performance applications across startups and enterprise
            environments.
            </p>
            <div className="opacity-0 animate-fade-up stagger-3 mt-8">
              <Contact />
            </div>
          </div>
          <div className="hidden lg:block opacity-0 animate-fade-in stagger-4 w-48 flex-shrink-0 ml-12">
            <img
              src={Portrait}
              alt="Conor Kemp"
              className="w-full rounded-sm grayscale hover:grayscale-0 transition-all duration-500"
            />
          </div>
        </div>
      </section>

      {/* Skills */}
      <section className="pb-20 opacity-0 animate-fade-up stagger-5">
        <div className="flex items-center gap-4 mb-10">
          <h2 className="font-serif text-2xl md:text-3xl mb-0 whitespace-nowrap">Skills</h2>
          <div className="w-full h-px bg-border dark:bg-borderdark" />
        </div>
        <Skills />
      </section>

      {/* Experience */}
      <section className="pb-10 opacity-0 animate-fade-up stagger-6">
        <div className="flex items-center gap-4 mb-6">
          <h2 className="font-serif text-2xl md:text-3xl mb-0 whitespace-nowrap">Experience</h2>
          <div className="w-full h-px bg-border dark:bg-borderdark" />
        </div>
        <ExperienceGrid />
      </section>
    </div>
  );
}

export default App;
