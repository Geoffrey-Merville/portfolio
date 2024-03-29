import ExperienceBlock from "./ExperienceBlock";
import Skills from "./Skills";
import SectionTitle from "../SectionTitle";

const Experience = () => {
  return (
    <main>
      <SectionTitle
        sectionTitle="Parcours Professionnel"
        description="Cette page détaillera mon parcours diplômant et professionnel.
        Cette page est susceptible d’évoluer à l’avenir en fonction des différentes expériences que j’aurai accumulées."
      />
      <ExperienceBlock />
      <Skills />
    </main>
  );
};

export default Experience;
