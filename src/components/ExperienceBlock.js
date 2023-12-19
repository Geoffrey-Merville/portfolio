import ExperienceBlockTitle from "./ExperienceBlockTitle";
import ExperienceBlockItem from "./ExperienceBlockItem";

const ExperienceBlock = ({ blockTitle }) => {
  return (
    <>
      <ExperienceBlockTitle blockTitle={blockTitle} />
      <ExperienceBlockItem
          chipDate="2023" 
          articleId=""
          articleTitle="[Alternance] Concepteur et Développeur d’applications"
          articleCompany="Dawan Lille"
          articleStartDate="01/2023"
          articleStartDateTime="2023-01-02T09:30:00"
          articleEndDate="Aujourd'hui"
          articleEndDateTime="2023-12"
          articleDescription="Durant le contrat d'apprentissage, et pendant la période en entreprise, ma mission portait sur la conception, le développement et la maintenance d'un des projets de l'entreprise (Dawan Skills). Le projet étant déjà existant et en production, ma mission consistait principalement à participer au refactoring et à l'amélioration de la conception et du code du projet existant."
        />
    </>
  );
};

export default ExperienceBlock;
