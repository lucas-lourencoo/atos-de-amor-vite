import { useEffect, useState } from "react";
import styles from "./styles.module.scss";
import { FaBars, FaTimes, FaChevronDown } from "react-icons/fa";
import { Link } from "react-router-dom";

export default function Header() {
  const [isActive, setIsActive] = useState(false);
  const [isMenuActive, setIsMenuActive] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      document.documentElement.scrollTop > 20
        ? setIsActive(true)
        : setIsActive(false);
    };

    window.addEventListener("scroll", onScroll);
  });

  function showMenu() {
    !isMenuActive ? setIsMenuActive(true) : setIsMenuActive(false);
  }

  return (
    <header
      className={
        isActive ? styles.headerContainerActive : styles.headerContainer
      }
    >
      <Link to="/">
        <img loading="lazy" src="/logosite2.png" alt="Logo" />
      </Link>
      <nav>
        <ul className={styles.navigator}>
          <li className={styles.navigatorItem}>
            <Link to="/" className={styles.navigatorLink}>
              Home
            </Link>
          </li>
          <li className={styles.navigatorItem}>
            <a className={styles.navigatorLink}>
              Institucional <FaChevronDown size={17} />
              <ul className={styles.navigatorDropdown}>
                <li>
                  <Link to="/institucional/sobre">Sobre</Link>
                </li>
                <li>
                  <Link to="/institucional/transparencia">TransparĂȘncia</Link>
                </li>
              </ul>
            </a>
          </li>
          <li className={styles.navigatorItem}>
            <a className={styles.navigatorLink}>
              Projetos <FaChevronDown size={17} />
              <ul className={styles.navigatorDropdown}>
                <li>
                  <Link to="/projetos/artevida">Arte & vida</Link>
                </li>
                <li>
                  <Link to="/projetos/casa-de-meninos">Casa de meninos</Link>
                </li>
                <li>
                  <Link to="/projetos/casa-do-pao">Casa do PĂŁo</Link>
                </li>
                <li>
                  <Link to="/projetos/construindo-o-futuro">
                    Construindo o futuro
                  </Link>
                </li>
                <li>
                  <Link to="/projetos/hogarninas">Hogar de niĂ±as</Link>
                </li>
                <li>
                  <Link to="/projetos/mateus-25-35-ruas">
                    Mateus 25:35 Ruas
                  </Link>
                </li>
                <li>
                  <Link to="/projetos/mateus-25-35-bairros">
                    Mateus 25:35 Bairros
                  </Link>
                </li>
                <li>
                  <a href="https://missaoparaguai.com.br/" target="__blank">
                    MissĂŁo Paraguai
                  </a>
                </li>
                <li>
                  <Link to="/projetos/socorrevidas">Socorre Vidas</Link>
                </li>
              </ul>
            </a>
          </li>
          <li className={styles.navigatorItem}>
            <a className={styles.navigatorLink}>
              Ajuda <FaChevronDown size={17} />
              <ul className={styles.navigatorDropdown}>
                <li>
                  <Link to="/ajude/estendaamao">Como ajudar</Link>
                </li>
                <li>
                  <Link to="/ajude/imposto-de-renda">DeduĂ§ĂŁo no IR</Link>
                </li>
                <li>
                  <Link to="/ajude/clique-esperanca">Clique esperanĂ§a</Link>
                </li>
                <li>
                  <Link to="/ajude/cofrinhos">Cofrinhos da casa</Link>
                </li>
                <li>
                  <Link to="/ajude/empresa-amiga">Empresa amiga</Link>
                </li>
              </ul>
            </a>
          </li>
          <li className={styles.navigatorItem}>
            <Link to="/contato" className={styles.navigatorLink}>
              Contato
            </Link>
          </li>
          <li className={styles.navigatorItem}>
            <Link className={styles.navigatorLink} to="/blog">
              Blog
            </Link>
          </li>
          <li className={styles.navigatorItem}>
            <a
              href="https://pag.ae/7WY2yDozu"
              className={styles.navigatorLink}
              target="__blank"
            >
              DOE AGORA
            </a>
          </li>
        </ul>

        <button className={styles.navigatorButton} onClick={showMenu}>
          <FaBars size={28} />
        </button>

        <ul
          className={
            isMenuActive
              ? styles.navigatorCelphoneActive
              : styles.navigatorCelphone
          }
        >
          <button className={styles.closeButton} onClick={showMenu}>
            <FaTimes size={32} color="#fff" />
          </button>
          <li className={styles.navigatorItem} onClick={showMenu}>
            <Link to="/" className={styles.navigatorLink}>
              Home
            </Link>
          </li>
          <li className={styles.navigatorItem}>
            <a className={styles.navigatorLink}>
              <span>
                Institucional <FaChevronDown size={17} />
              </span>
              <ul className={styles.navigatorDropdown}>
                <li>
                  <Link to="/institucional/sobre">Sobre</Link>
                </li>
                <li>
                  <Link to="/institucional/transparencia">TransparĂȘncia</Link>
                </li>
              </ul>
            </a>
          </li>
          <li className={styles.navigatorItem}>
            <a className={styles.navigatorLink}>
              <span>
                Projetos <FaChevronDown size={17} />
              </span>
              <ul className={styles.navigatorDropdown}>
                <li>
                  <Link to="/projetos/mateus-25-35-ruas">
                    Mateus 25:35 Ruas
                  </Link>
                </li>
                <li>
                  <Link to="/projetos/mateus-25-35-bairros">
                    Mateus 25:35 Bairros
                  </Link>
                </li>
                <li>
                  <Link to="/projetos/casa-de-meninos">Casa de meninos</Link>
                </li>
                <li>
                  <Link to="/projetos/artevida">Arte & vida</Link>
                </li>
                <li>
                  <Link to="/projetos/socorrevidas">Socorre Vidas</Link>
                </li>
                <li>
                  <Link to="/projetos/hogarninas">Hogar de niĂ±as</Link>
                </li>
                <li>
                  <a href="https://missaoparaguai.com.br/" target="__blank">
                    MissĂŁo Paraguai
                  </a>
                </li>
              </ul>
            </a>
          </li>
          <li className={styles.navigatorItem}>
            <a className={styles.navigatorLink}>
              <span>
                Ajuda <FaChevronDown size={17} />
              </span>
              <ul className={styles.navigatorDropdown}>
                <li>
                  <Link to="/ajude/estendaamao">Como ajudar</Link>
                </li>
                <li>
                  <Link to="/ajude/imposto-de-renda">DeduĂ§ĂŁo no IR</Link>
                </li>
                <li>
                  <Link to="/ajude/clique-esperanca">Clique esperanĂ§a</Link>
                </li>
                <li>
                  <Link to="/ajude/cofrinhos">Cofrinhos da casa</Link>
                </li>
                <li>
                  <Link to="/ajude/empresa-amiga">Empresa amiga</Link>
                </li>
              </ul>
            </a>
          </li>
          <li className={styles.navigatorItem}>
            <Link to="/blog" className={styles.navigatorLink}>
              Blog
            </Link>
          </li>
          <li className={styles.navigatorItem}>
            <Link to="/contato" className={styles.navigatorLink}>
              Contato
            </Link>
          </li>
          <li className={styles.navigatorItem}>
            <a
              href="https://pag.ae/7WY2yDozu"
              className={styles.navigatorLink}
              target="__blank"
            >
              DOE AGORA
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
}
