import Hero from "./components/hero";
import ProjectCard from "./components/projectcard";
import { projects } from "./data/project";

export default function Home() {
  return (
    <main className="min-h-screen bg-slate-950 relative overflow-hidden">
      
      <div className="absolute top-[-10%] left-[-10%] w-[500px] h-[500px] bg-purple-500/20 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-[-10%] right-[-10%] w-[500px] h-[500px] bg-blue-500/20 rounded-full blur-[120px] pointer-events-none" />
      
      <div className="relative z-10 pb-20">
        <Hero />
        
        <section className="max-w-6xl mx-auto px-4 mt-10">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-white">
            Featured <span className="text-blue-500">Projects</span>
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <ProjectCard key={project.id} data={project} index={index} />
            ))}
          </div>
        </section>

        {/* Footer Simple */}
        <footer className="text-center text-slate-600 mt-20 pb-10 text-sm">
          © {new Date().getFullYear()} Rama. Built with Next.js & Tailwind.
        </footer>
      </div>

    </main>
  );
}