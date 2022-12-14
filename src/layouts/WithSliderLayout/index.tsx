import { Outlet } from "react-router-dom";
import ProjectsSlider from "../../components/ProjectsSlider";
import styles from "./styles.module.scss";

export function WithSliderLayout() {
  return (
    <div>
      <Outlet />

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
