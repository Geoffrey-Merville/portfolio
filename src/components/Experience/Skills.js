import SkillsData from '../data/skills-data.json';

const Skills = () => {
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
              {Object.keys(SkillsData).map((category) => (
                SkillsData[category].map((skill, index) => (
                  <tr key={index}>
                    {index === 0 && <th rowSpan={SkillsData[category].length} scope="rowgroup">{category}</th>}
                    <th scope="row"><span>{skill.nom}</span></th>
                    <td>{skill.niveau}</td>
                    <td>
                      <ul>
                        {skill.experiences.map((experience, expIndex) => (
                          <li key={expIndex}>
                            <a className="linked-experience" href={`#${experience}`}>{experience}</a>
                          </li>
                        ))}
                      </ul>
                    </td>
                  </tr>
                ))
              ))}
            </tbody>
        </table>
        <footer></footer>
    </section>
  )
}

export default Skills;