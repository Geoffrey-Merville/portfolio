import ExperienceBlockTitle from "./ExperienceBlockTitle";
import ExperienceBlockItem from "./ExperienceBlockItem";
import Data from "./data/data.json";

const ExperienceBlock = () => {

  return (
    <>
      {/* Convertit l'objet JSON en tableau exploitable */}
      {Object.keys(Data).map((key) => (
        <div key={key}>
          <ExperienceBlockTitle blockTitle={key} />
          {Data[key].map((item) => (
              <ExperienceBlockItem key={item.id} {...item} />
            ))}
        </div>
      ))}
    </>
  );
};

export default ExperienceBlock;
