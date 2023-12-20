import ExperienceBlockTitle from "./ExperienceBlockTitle";
import ExperienceBlockItem from "./ExperienceBlockItem";
import Data from "./data/data.json";

const ExperienceBlock = () => {

  return (
    <>
      {/* Afficher le tableau de composants générés */}
      {Object.keys(Data).map((key) => (
        <div key={key}>
          <ExperienceBlockTitle blockTitle={key} />
          {/* Vérifie si la valeur associée à la clé est un tableau avant d'utiliser map */}
          {Data[key].map((item) => (
              <ExperienceBlockItem key={item.id} {...item} />
            ))}
        </div>
      ))}
    </>
  );
};

export default ExperienceBlock;
