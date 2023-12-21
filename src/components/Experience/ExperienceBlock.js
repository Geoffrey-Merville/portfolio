import ExperienceBlockTitle from "./ExperienceBlockTitle";
import ExperienceBlockItem from "./ExperienceBlockItem";
import Data from "../data/experience-data.json";

const ExperienceBlock = () => {
  return (
    <>
      {/* Convertit l'objet JSON en tableau exploitable */}
      {Object.keys(Data).map((key) => (
        <section key={key} id={key === "Formations en ligne" ? "online-training" : null}>
          {key === "Formations en ligne" ? <a id="certificates" href="" download>Télécharger certificats de formation</a> : ""}
          <ExperienceBlockTitle blockTitle={key} />
          {Data[key].map((item) => (
            <ExperienceBlockItem key={item.id} {...item} />
          ))}
        </section>
      ))}
    </>
  );
};

export default ExperienceBlock;
