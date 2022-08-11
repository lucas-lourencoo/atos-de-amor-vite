import { Link } from "react-router-dom";
import { FaHome } from "react-icons/fa";
import ProjectsSlider from "../../components/ProjectsSlider";
import BannerImage from "../../components/BannerImage";
import { ContactSection } from "./components/ContactSection";
import styles from "./styles.module.scss";

export function Contact() {
  return (
    <main className={styles.contact}>
      <BannerImage image="/contato.png" title="Contato" />

      <div className={styles.breadcrumb}>
        <p>
          <Link to="/">
            <a>
              <FaHome />
            </a>
          </Link>
          /<span>Contato</span>
        </p>
      </div>

      <section className={styles.contactUs}>
        <h2>Contate-nos</h2>
        <form action="" method="post">
          <input type="text" name="contact" placeholder="Nome" />
          <input type="email" name="email" placeholder="Email" />
          <input type="text" name="subject" placeholder="Assunto" />
          <textarea name="message" placeholder="Mensagem" rows={5}></textarea>
          <button type="submit">Enviar email</button>
        </form>
      </section>

      <ProjectsSlider />
      <ContactSection />
    </main>
  );
}
