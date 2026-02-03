import Navbar from "./components/navbar";
import Hero from "./components/hero";
import About from "./components/about";
import Contact from "./components/contact";
import PortfolioList from "./components/portofoliolist";
import { getProjects } from "./core/data/projectrepository";

export default async function Home() {
  const projects = await getProjects();

  return (
    <main className="min-h-screen bg-slate-950 relative overflow-hidden selection:bg-red-500/30">
      
      {/* Background Ambience */}
      <div className="fixed top-0 left-0 w-full h-full overflow-hidden pointer-events-none z-0">
        <div className="absolute top-[-10%] left-[-10%] w-[500px] h-[500px] bg-red-600/10 rounded-full blur-[120px]" />
        <div className="absolute top-[40%] right-[-10%] w-[400px] h-[400px] bg-purple-600/10 rounded-full blur-[120px]" />
        <div className="absolute bottom-[-10%] left-[20%] w-[600px] h-[600px] bg-blue-600/5 rounded-full blur-[120px]" />
      </div>

      <Navbar /> 
      
      {/* Konten Utama */}
      <div className="relative z-10">
        <Hero />
        <About />
        <PortfolioList projects={projects} />
        <Contact />

        <footer className="text-center text-slate-700 py-8 text-sm border-t border-slate-900 mt-10">
          © {new Date().getFullYear()} Rama. Designed with Clean Architecture.
        </footer>
      </div>

    </main>
  );
}