import { Link } from "react-router-dom";
import styles from "./styles.module.scss";

export default function Footer() {
  return (
    <footer className={styles.footerContainer}>
      <div className={styles.footerGrid}>
        <div>
          <img loading="lazy" src="/iaalogo-copia.png" alt="" />
          <p>
            "Tive fome e deste me de comer, tive sede e deste-me de comer,
            estive nú e vestiste-me" <strong>MT. 25:35</strong>.
          </p>

          <p>
            Instituto Atos de Amor <br />
            Av. Ministro Jõao Arinos, 4136 <br />
            B. Tiradentes | CG-MS. <br />
            (+55) 67 | 3341-6317 <br />
            contato@atosdeamor.org <br />
          </p>
        </div>
        <div>
          <h3>Ajude</h3>
          <div className={styles.footerGridList}>
            <ul>
              <li>
                <Link to="/ajude/estendaamao">
                  <a>Como ajudar</a>
                </Link>
              </li>
              <li>
                <Link to="/ajude/imposto-de-renda">
                  <a>Dedução no IR</a>
                </Link>
              </li>
              <li>
                <Link to="/ajude/clique-esperanca">
                  <a>Clique esperança</a>
                </Link>
              </li>
              <li>
                <Link to="/ajude/cofrinhos">
                  <a>Cofrinhos da casa</a>
                </Link>
              </li>
              <li>
                <Link to="/ajude/empresa-amiga">
                  <a>Empresa amiga</a>
                </Link>
              </li>
            </ul>
          </div>
        </div>
        <div>
          <h3>Projetos do IAA</h3>
          <div className={styles.footerGridList}>
            <ul>
              <li>
                <Link to="/projetos/mateus-25-35-ruas">
                  <a>Mateus 25:35 Ruas</a>
                </Link>
              </li>
              <li>
                <Link to="/projetos/mateus-25-35-bairros">
                  <a>Mateus 25:35 Bairros</a>
                </Link>
              </li>
              <li>
                <Link to="/projetos/casa-do-pao">Casa do Pão</Link>
              </li>
              <li>
                <Link to="/projetos/casa-de-meninos">
                  <a>Casa de meninos</a>
                </Link>
              </li>
              <li>
                <Link to="/projetos/mateus-25-35-compartilhar">
                  Compartilhar e Amar
                </Link>
              </li>
              <li>
                <Link to="/projetos/artevida">
                  <a>Arte & vida</a>
                </Link>
              </li>
              <li>
                <Link to="/projetos/socorrevidas">
                  <a>Socorre Vidas</a>
                </Link>
              </li>
              <li>
                <Link to="/projetos/hogarninas">
                  <a>Hogar de niñas</a>
                </Link>
              </li>
              <li>
                <a href="https://missaoparaguai.com.br/" target="__blank">
                  Missão Paraguai
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <section className={styles.footerBelow}>
        <span>© 2018 All Rights Reserved by Comunicação MAJU</span>

        <div className={styles.footerSocialList}></div>
      </section>
    </footer>
  );
}
