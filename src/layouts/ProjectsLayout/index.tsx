import { Outlet } from "react-router-dom";
import DonateButtons from "../../components/DonateButtons";
import ProjectsSlider from "../../components/ProjectsSlider";
import styles from "./styles.module.scss";

export function ProjectsLayout() {
  return (
    <div>
      <Outlet />

      <section className={styles.projectAbout}>
        <div className={styles.projectAboutForm}>
          <h4>Quero ajudar</h4>
          <DonateButtons />
        </div>
      </section>

      <section className={styles.projects}>
        <h2 className={styles.title}>Nossos Projetos</h2>
        <p>
          Você pode clicar nos projetos abaixo para saber como cada um funciona
          e como cooperar com os mesmos.
        </p>

        <ProjectsSlider />
      </section>
    </div>
  );
}
