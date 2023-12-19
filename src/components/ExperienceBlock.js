import React, { useEffect } from "react";
import ExperienceBlockTitle from "./ExperienceBlockTitle";
import ExperienceBlockItem from "./ExperienceBlockItem";
import Data from "./data/data.json";

const ExperienceBlock = ({ blockTitle }) => {
  // Utiliser un tableau pour stocker les composants générés
  const experienceItems = [];

  useEffect(() => {
    renderSection(Data["Expérience Professionnelle"], "Expérience Professionnelle");
    renderSection(Data["Formations & Apprentissages"], "Formations & Apprentissages");
    renderSection(Data["Formations en ligne"], "Formations en ligne");
    renderSection([Data["Bénévolat"]], "Bénévolat");
  }, []);

  const renderSection = (sectionData, sectionTitle) => {
    sectionData.forEach(item => {
      // Ajouter chaque composant au tableau
      experienceItems.push(
        <ExperienceBlockItem 
          key={item.id}
          {...item}
        />
      );
    });
  };

  return (
    <>
      <ExperienceBlockTitle blockTitle={blockTitle} />
      {/* Afficher le tableau de composants générés */}
      {experienceItems}
    </>
  );
};

export default ExperienceBlock;