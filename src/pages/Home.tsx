import HeroSection from '../components/home/HeroSection';
import AboutSection from '../components/home/AboutSection';
import SkillsSection from '../components/home/SkillsSection';
import ExperienceSection from '../components/home/ExperienceSection';
import EducationSection from '../components/home/EducationSection';
import ProjectsSection from '../components/home/ProjectsSection';
import ContactSection from '../components/home/ContactSection';

function Home() {
  return (
    <div className="animate-fade-in">
      <HeroSection />
      <AboutSection />
      <SkillsSection />
      <ExperienceSection />
      <EducationSection />
      <ProjectsSection />
      <ContactSection />
    </div>
  );
}

export default Home;