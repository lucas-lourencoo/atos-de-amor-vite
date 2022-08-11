import { Outlet } from "react-router-dom";
import BackToTop from "../../components/BackToTop";
import Footer from "../../components/Footer";
import Header from "../../components/Header";
import ProjectsSlider from "../../components/ProjectsSlider";
import WhatsAppButton from "../../components/WhatsAppButton";
import styles from "./styles.module.scss";

export function WithSliderLayout() {
  return (
    <div>
      <Header />
      <WhatsAppButton />
      <Outlet />
      <BackToTop />

      <section className={styles.projects}>
        <h2 className={styles.title}>Nossos Projetos</h2>
        <p>
          Você pode clicar nos projetos abaixo para saber como cada um funciona
          e como cooperar com os mesmos.
        </p>

        <ProjectsSlider />
      </section>

      <Footer />
    </div>
  );
}
