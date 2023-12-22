import React from "react";
import SkillsData from "../data/skills-data.json";
import ExpData from "../data/experience-data.json";

const Skills = () => {

  const handleHref = (experience) => {
    for (const expCat of Object.keys(ExpData)) {
      for (const exp of ExpData[expCat]) {
        //console.log("Comparing:", exp.articleTitle, experience);
        console.log(exp.articleTitle in ExpData[expCat])
        if (exp.articleTitle.replace("</abbr>", "").includes(experience)) {
          //console.log("Match Found: ", exp.articleTitle, experience)
          return `#${exp.articleId}`;
        }
      }
    }
    return "#"; // Si aucune correspondance n'est trouvée
  };

  return (
    <section>
      <table id="skills">
        <thead>
          <tr>
            <th scope="col">Type</th>
            <th scope="col">Nom</th>
            <th scope="col">Niveau Acquis</th>
            <th scope="col">Expérience(s) Rattachée(s)</th>
          </tr>
        </thead>
        <tbody>
          {Object.keys(SkillsData).map((category) =>
            SkillsData[category].map((skill, index) => (
              <React.Fragment key={index}>
                {skill.spacers ? (
                  <tr className="empty-cell">
                    <th colSpan="4"></th>
                  </tr>
                ) : (
                  <tr key={index}>
                    {index === 0 && (
                      <th
                        rowSpan={SkillsData[category].length}
                        scope="rowgroup"
                      >
                        {category}
                      </th>
                    )}
                    <th scope="row">
                      <span title={skill.nom}>{skill.nom}</span>
                    </th>
                    <td>{skill.niveau}</td>
                    <td>
                      {skill.experiences ? (
                        <ul>
                          {skill.experiences.map((experience, expIndex) => (
                            <li key={expIndex}>
                              <a className="linked-experience" href={handleHref(experience)}>
                                {experience}
                              </a>
                            </li>
                          ))}
                        </ul>
                      ) : (
                        ""
                      )}
                    </td>
                  </tr>
                )}
              </React.Fragment>
            ))
          )}
        </tbody>
      </table>
      <footer></footer>
    </section>
  );
};

export default Skills;
