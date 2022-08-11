import { Link } from "react-router-dom";
import styles from "./styles.module.scss";

export default function ProjectsEspecifys() {
  return (
    <section className={styles.projectEspecifysContainer}>
      <div className={styles.projectEspecifysImage}>
        <img loading="lazy" src="/irmaos.png" alt="" />
      </div>
      <div className={styles.projectEspecifysText}>
        <h2>PROJETOS QUE TRANSFORMAM VIDAS</h2>
        <p>
          <strong>O INSTITUTO ATOS DE AMOR</strong> também identificado com a
          sigla IAA, é uma entidade não governamental, sem fins lucrativos de
          assistência social, autônoma para fins culturais, de Direito Privado e
          tempo indeterminado de duração, composta de número ilimitado de
          associados, sem qualquer preconceito de crença, raça, cor, sexo,
          preferência partidária ou categoria social.
        </p>
        <Link to="/institucional/sobre" className={styles.projectButton}>
          Saiba mais
        </Link>
      </div>
    </section>
  );
}
