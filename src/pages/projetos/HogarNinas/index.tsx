import { FiHome } from "react-icons/fi";
import Slider from "react-slick";
import { Link } from "react-router-dom";
import BannerImage from "../../../components/BannerImage";
import WantTo from "../../../components/WantTo";
import styles from "../../../styles/ProjectLayout.module.scss";
import stylesHogar from "./styles.module.scss";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export function HogarNinas() {
  var settings = {
    infinite: true,
    autoplay: true,
    speed: 1000,
    dots: true,
    arrows: false,
    autoplaySpeed: 5000,
    slidesToShow: 3,
    pauseOnHover: false,
    slidesToScroll: 2,
    responsive: [
      {
        breakpoint: 540,
        settings: { slidesToShow: 1, slidesToScroll: 1 },
      },
    ],
  };

  return (
    <main>
      <BannerImage image="/hogars2.png" title="Hogar De Niñas" />

      <div className={styles.breadcrumb}>
        <p>
          <Link to="/">
            <FiHome />
          </Link>
          /<span>Projetos</span>/<span>Hogar De Niñas</span>
        </p>
      </div>

      <section className={styles.aboutProject}>
        <h2 className={styles.title}>O projeto</h2>
        <article>
          <p>
            A Casa "Hogar de Ninãs", é uma unidade de acolhimento institucional
            infantil na cidade de Pedro Juan Cabellero, foi fundada no ano de
            2018. É uma entidade filantrópica, sem fins lucrativos, que abriga
            crianças, proporcionando assistência espiritual, social e
            psicológica, além de cuidados médicos, odontológicos e escolares,
            promovendo a cidadania.
          </p>
          <p>
            A Casa atende meninas, menores de 18 anos, vítimas de uma condição
            social de risco, e oferece cuidados integrais a todas as acolhidas,
            através de uma cuidadora – Educadora Social, que atua em tempo
            integral e recebe apoio de voluntários. Atualmente, a casa está sob
            os cuidados da Educadora Mirtha Elizabeth Peralta Martinez, e da
            voluntária, Gabriella Bittar Silva. Os pastores Valdoir e Maria
            Helena oferecem toda a direção e cobertura espiritual, além do apoio
            no cuidado das meninas.
          </p>
          <p>
            Grupos voluntários oferecem às menores acolhidas a oportunidade de
            desenvolver suas habilidades, através de cursos gratuitos, como por
            exemplo o curso de fabricação de sabão. Além disso, todas as meninas
            acolhidas têm a oportunidade de aprender culinária na Casa Hogar de
            Ninãs, com a orientação das cuidadoras. Também aprendem a
            organização e cuidados domésticos e pessoais, e desenvolvem
            responsabilidade com suas tarefas escolares. A Casa Hogar de Ninãs
            também oferece um espaço em sua rotina diária para o lazer e as
            brincadeiras, pois sabe da importância das atividades lúdicas no
            desenvolvimento das crianças.
          </p>
          <p>Você também pode fazer parte deste Projeto!</p>
        </article>

        <span>
          “Ainda que o meu pai e a minha mãe me abandonem, o Senhor cuidará de
          mim.”
        </span>
        <cite>Salmos 27:10</cite>
      </section>

      <WantTo />

      <section className={stylesHogar.reality}>
        <h2 className={styles.title}>Algumas Fotos da Casa</h2>
        <div>
          <Slider {...settings}>
            <div className={styles.realityGridItem}>
              <img loading="lazy" src="/hogar_ninas/1.jpeg" alt="" />
            </div>
            <div className={styles.realityGridItem}>
              <img loading="lazy" src="/hogar_ninas/2.jpeg" alt="" />
            </div>
            <div className={styles.realityGridItem}>
              <img loading="lazy" src="/hogar_ninas/3.jpeg" alt="" />
            </div>
            <div className={styles.realityGridItem}>
              <img loading="lazy" src="/hogar_ninas/4.jpeg" alt="" />
            </div>
            <div className={styles.realityGridItem}>
              <img loading="lazy" src="/hogar_ninas/5.jpeg" alt="" />
            </div>
            <div className={styles.realityGridItem}>
              <img loading="lazy" src="/hogar_ninas/6.jpeg" alt="" />
            </div>
            <div className={styles.realityGridItem}>
              <img loading="lazy" src="/hogar_ninas/7.jpeg" alt="" />
            </div>
            <div className={styles.realityGridItem}>
              <img loading="lazy" src="/hogar_ninas/8.jpeg" alt="" />
            </div>
            <div className={styles.realityGridItem}>
              <img loading="lazy" src="/hogar_ninas/9.jpeg" alt="" />
            </div>
            <div className={styles.realityGridItem}>
              <img loading="lazy" src="/hogar_ninas/10.jpeg" alt="" />
            </div>
          </Slider>
        </div>
      </section>
    </main>
  );
}
