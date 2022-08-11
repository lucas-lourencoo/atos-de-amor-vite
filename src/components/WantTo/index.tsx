import { FaDollarSign, FaHourglassHalf, FaSearch } from "react-icons/fa";
import { Link } from "react-router-dom";
import styles from "./styles.module.scss";

export default function WantTo() {
  return (
    <section className={styles.wantTo}>
      <div className={styles.wantToItem}>
        <div className={styles.circle}>
          <FaSearch size={66} />
        </div>
        <h4>Quero conhecer</h4>
        <p>
          Você pode agendar uma visita e conhecer nossa estrutura para a
          realização deste projeto.
        </p>
        <a href="tel: +55 67 3341-6317">Saiba mais</a>
      </div>
      <div className={styles.wantToItem}>
        <div className={styles.circle}>
          <FaDollarSign size={66} />
        </div>
        <h4>Quero manter</h4>
        <p>
          Precisamos de mantenedores, sua ajuda de qualquer valor monetário será
          muito bem vinda, seja mensal fixa ou exporádica, clique abaixo e veja
          como ajudar.
        </p>
        <Link to="/ajude/estendaamao">Saiba mais</Link>
      </div>
      <div className={styles.wantToItem}>
        <div className={styles.circle}>
          <FaHourglassHalf size={66} />
        </div>
        <h4>QUERO DOAR</h4>
        <p>
          Você pode também doar peças de roupas ou outros objetos que poderão
          ser reverditos para uma das nossas frentes de atuação, basta clicar no
          botão a seguir.
        </p>
        <Link to="/ajude/estendaamao">Saiba mais</Link>
      </div>
    </section>
  );
}
