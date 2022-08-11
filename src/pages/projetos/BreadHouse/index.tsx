import { FiHome } from "react-icons/fi";
import Slider from "react-slick";
import { Link } from "react-router-dom";
import BannerImage from "../../../components/BannerImage";
import styles from "../../../styles/ProjectLayout.module.scss";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export function BreadHouse() {
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
      <BannerImage image="/meninoss2.png" title="Casa Do Pão" />

      <div className={styles.breadcrumb}>
        <p>
          <Link to="/">
            <FiHome />
          </Link>
          /<span>Projetos</span>/<span>Casa do Pão</span>
        </p>
      </div>

      <section className={styles.aboutProject}>
        <h2 className={styles.title}>O projeto</h2>
        <article>
          <p>
            Mesmo a alimentação sendo uma necessidade básica do ser humano,
            muitas pessoas não possuem esse acesso. No Estado de Mato Grosso do
            Sul o cenário não é diferente, pois as pesquisas apontam para um
            número expressivo de pessoas que vivem em situação de rua. Na
            capital de Campo Grande esse número é ainda mais significativo, em
            se tratando de pessoas em situação de rua que vivem em extrema
            necessidade.
          </p>
          <p>
            Nesse sentido o IAA mobiliza-se em versar uma proposta para mudar
            este cenário tão caótico e desafiador. Para além do grupo
            marginalizado pela fome advindo das ruas, o Projeto Mateus 25 “Casa
            do Pão” Atua na perspectiva de prevenção, intervenção e manutenção
            com vistas ao atendimento direcionado a causa da pessoa em situação
            de rua com distribuição de refeições e café da manhã, com dias e
            horários planejados.
          </p>
          <p>
            O Projeto conta ainda com a supervisão do casal Reginaldo e
            Walderice para confecção dos pães e alinhamento dos demais
            colaboradores que atuam semanalmente com dedicação e esmero, já a
            equipe especializada no atendimento e distribuição do kit café da
            manhã nas ruas. A iniciativa conta com a liderança do casal Pr.
            Moises e Prª. Maria Antônia.
          </p>
        </article>
      </section>

      <section className={styles.video}>
        <div className={styles.text}>
          <h2 className={styles.title}>Saiba mais vendo este vídeo:</h2>

          <iframe
            width="560"
            height="315"
            src="https://www.youtube.com/embed/2bKWQwFt2Z8"
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </div>
      </section>

      <section className={styles.helpProject}>
        <h2 className={styles.title}>Apoio</h2>
        <div className={styles.grid}>
          <article>
            <p>
              O Projeto Mateus 25 "Casa do Pão” recebeu o apoio financeiro da
              Secretaria de Estado Direitos Humanos, Assistência Social e
              Trabalho - SEDHAST para realizar as atividades previstas no plano
              de trabalho em anexo.
            </p>
            <p>
              Parceria estabelecida pelo termo de fomento n. 30734/2021, tendo
              como objeto: Promover o combate da fome para as pessoas em
              situação de rua, através da distribuição de refeições pelo Projeto
              Mateus 25 “Casa do Pão”
            </p>
          </article>

          <div className={styles.logos}>
            <img src="/sedhast.png" alt="" />
            <img src="/governo.png" alt="" />
          </div>
        </div>
        <Link to="/institucional/transparencia">
          Veja a nossa prestação de contas
        </Link>
      </section>

      <section className={styles.reality}>
        <h2 className={styles.title}>Algumas Fotos da Casa do Pão</h2>
        <div>
          <Slider {...settings}>
            <div>
              <img loading="lazy" src="/casa_pao/1.jpeg" alt="" />
            </div>
            <div>
              <img loading="lazy" src="/casa_pao/2.jpeg" alt="" />
            </div>
            <div>
              <img loading="lazy" src="/casa_pao/3.jpeg" alt="" />
            </div>
            <div>
              <img loading="lazy" src="/casa_pao/4.jpeg" alt="" />
            </div>
            <div>
              <img loading="lazy" src="/casa_pao/5.jpeg" alt="" />
            </div>
            <div>
              <img loading="lazy" src="/casa_pao/6.jpeg" alt="" />
            </div>
            <div>
              <img loading="lazy" src="/casa_pao/7.jpeg" alt="" />
            </div>
            <div>
              <img loading="lazy" src="/casa_pao/8.jpeg" alt="" />
            </div>
          </Slider>
        </div>
      </section>
    </main>
  );
}
