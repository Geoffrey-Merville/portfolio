import cvImage from "../../assets/images/photo.png";
import interactiveResumee from "../../assets/files/cv-interactif.pdf";
import printResumee from "../../assets/files/cv-impression.pdf";
import DownloadButton from "../RouterLinks/DownloadButton";
import ContentSection from "./ContentSection";
import ResumeeData from "../data/resumee-data.json";

const Resume = () => {
  return (
    <main id="cv">
      <aside>
        <DownloadButton
          href={interactiveResumee}
          buttonText="Télécharger CV (Interactif)"
        />
        <DownloadButton
          href={printResumee}
          buttonText="Télécharger CV (Pour Impression)"
        />
      </aside>
      <header id="cv-title">
        <img src={cvImage} alt="Photo CV" />
        <div>
          <h1>Geoffrey MERVILLE</h1>
          <h2>Apprenti Concepteur et Développeur d'Applications</h2>
        </div>
      </header>
      <section id="cv-content">
      </section>
    </main>
  );
};

export default Resume;
