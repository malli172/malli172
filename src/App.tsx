import { usePortfolioData } from './hooks/usePortfolioData';
import Hero from './sections/Hero';
import About from './sections/About';
import FeaturedApp from './sections/FeaturedApp';
import Services from './sections/Services';
import Skills from './sections/Skills';
import Experience from './sections/Experience';
import Education from './sections/Education';
import Projects from './sections/Projects';
import Achievements from './sections/Achievements';
import Contact from './sections/Contact';

function App() {
  const { data, loading, error } = usePortfolioData();

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-2xl">Loading...</div>
      </div>
    );
  }

  if (error || !data) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-2xl text-destructive">Error loading portfolio data</div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      <Hero data={data} />
      <About about={data.about} />
      {data.featuredApp && <FeaturedApp app={data.featuredApp} />}
      {data.services && data.services.length > 0 && <Services services={data.services} />}
      <Skills skills={data.skills} />
      <Experience experience={data.experience} />
      <Education education={data.education} />
      {data.testimonials && data.testimonials.length > 0 && <Projects projects={data.testimonials} />}
      {data.achievements && data.achievements.length > 0 && <Achievements achievements={data.achievements} />}
      <Contact data={data} />
    </div>
  );
}

export default App;
