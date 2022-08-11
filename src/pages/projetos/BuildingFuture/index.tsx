import { FiHome } from "react-icons/fi";
import Slider from "react-slick";
import { Link } from "react-router-dom";
import BannerImage from "../../../components/BannerImage";
import styles from "../../../styles/ProjectLayout.module.scss";
import styles2 from "./styles.module.scss";
import "slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick.css";

export function BuildingFuture() {
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
      <BannerImage title="Construindo o Futuro" image="/meninoss2.png" />

      <div className={styles.breadcrumb}>
        <p>
          <Link to="/">
            <FiHome />
          </Link>
          /<span>Projetos</span>/<span>Construindo o Futuro</span>
        </p>
      </div>

      <section className={styles.aboutProject}>
        <h2 className={styles.title}>O projeto</h2>
        <article>
          <p>
            Priorizando a efetivação dos diretos fundamentais estabelecidos no
            Estatuto da Criança e Adolescente – ECA tais como: Direito à Vida,
            ao Esporte, à Cultura, à Educação atendendo diretamente as crianças
            e adolescentes, o Projeto Casa de Meninos - Construindo o Futuro
            promove aos acolhidos o desenvolvimento e aperfeiçoamento nas
            diferentes áreas de conhecimento, possibilitando atividades
            socioeducativas que contribuirão na formação e construção social de
            cada acolhido.
          </p>

          <p>
            As oficinas proporcionam o intercâmbio de ideias e a demonstração de
            técnicas e habilidades desenvolvidas para o aprimoramento físico e
            mental de cada criança e adolescente.
          </p>
        </article>
      </section>

      <section className={styles2.projectGrid}>
        <div className={styles2.projectGridCard}>
          <figure>
            <img
              loading="lazy"
              src="/construindo_futuro/bedminton.jpg"
              alt=""
            />
          </figure>
          <h3>Badminton</h3>
          <p>
            Uma das modalidade de esporte mais completa, visando à prática
            saudável, adquirindo conhecimento básico, condicionamento físico e
            agilidade, as apresentações abordarão os princípios da modalidade,
            fundamentos, características do Badminton e o convívio com os
            equipamentos necessários para a prática do esporte.
          </p>
        </div>
        <div className={styles2.projectGridCard}>
          <figure>
            <img
              loading="lazy"
              src="/construindo_futuro/funcional.png"
              alt=""
            />
          </figure>
          <h3>Treinamento Funcional</h3>
          <p>
            Tem como objetivo desenvolver, aprimorar as qualidades físicas com
            um método seguro e efetivo de condicionamento para crianças e
            adolescentes com várias necessidades, metas e capacidades.
          </p>
        </div>
        {/* <div className={styles2.projectGridCard}>
          <figure>
            <img loading="lazy" src="/IMG_1284.jpg" alt="" />
          </figure>
          <h3>Musicalização</h3>
          <p>
            Nesse modelo, há dois pontos fundamentais que participam: a inserção
            do movimento nas atividades e atividades multissensoriais. Dentro
            disso, a utilização de recursos materiais é ferramenta
            indispensável, e são inúmeros os benefícios trazidos por essa
            atividade tão prazerosa.
          </p>
        </div> */}
        {/* <div className={styles2.projectGridCard}>
          <figure>
            <img loading="lazy" src="/IMG_1284.jpg" alt="" />
          </figure>
          <h3>Tênis de Mesa</h3>
          <p>
            O tênis de mesa, também conhecido como pingue-pongue, é o jogo em
            que duas pessoas ou duplas usam raquetes de madeira para passar uma
            bolinha de um lado a outro de uma rede instalada em uma mesa. O
            objetivo é desenvolver as habilidades dos acolhidos ao mesmo tempo
            promover o entretenimento.
          </p>
        </div> */}
        <div className={styles2.projectGridCard}>
          <figure>
            <img loading="lazy" src="/construindo_futuro/reforco.jpg" alt="" />
          </figure>
          <h3>Desenvolvimento Pessoal</h3>
          <p>
            Mediante ao contexto causado pela pandemia do COVID/2019, as
            crianças e os adolescentes vivenciam um retrocesso na aprendizagem
            impactando diretamente seu intelecto. Diante desta situação nasce a
            oficina de acompanhamento das atividades praticadas na vida escolar.
          </p>
        </div>
        <div className={styles2.projectGridCard}>
          <figure>
            <img loading="lazy" src="/construindo_futuro/saude.jpg" alt="" />
          </figure>
          <h3>MOMENTO “SAÚDE MENTAL” – oficina motivacional</h3>
          <p>
            As Rodas de Conversas favorecem o desenvolvimento de ações,
            propiciando trocas de experiências e vivências, fortalecendo o
            respeito, a solidariedade, dignidade, igualdade e concretude dos
            Direitos Humanos.
          </p>
        </div>
      </section>

      <section className={styles.video}>
        <div className={styles.text}>
          <h2 className={styles.title}>
            A Psicóloga Isabella Santana preparou um vídeo falando um pouco mais
            sobre construir o futuro:
          </h2>

          <iframe
            width="560"
            height="315"
            src="https://www.youtube.com/embed/DyKoKy4AQjU"
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
              O Projeto Casa de Meninos - Construindo o Futuro 2021 recebeu o
              apoio financeiro da secretaria de Estado Direitos Humanos,
              Assistência Social e Trabalho - SEDHAST para realizar as
              atividades previstas no plano de trabalho em anexo.
            </p>
            <p>
              Parceria estabelecida pelo termo de fomento n. 30635/21, tendo
              como objeto: Promover a melhoria na qualidade de vida das crianças
              e adolescentes na unidade de acolhimento, através de oficinas
              desenvolvidas no Projeto “Casa de Meninos – Construindo o Futuro”
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

      <section className={styles2.realityConst}>
        <h2 className={styles2.title}>
          Um pouco do projeto Construindo o Futuro
        </h2>
        <div>
          <Slider {...settings}>
            <div>
              <img loading="lazy" src="/construindo_futuro/1.jpg" alt="" />
            </div>
            <div>
              <img loading="lazy" src="/construindo_futuro/2.jpg" alt="" />
            </div>
            <div>
              <img loading="lazy" src="/construindo_futuro/3.jpg" alt="" />
            </div>
            <div>
              <img loading="lazy" src="/construindo_futuro/4.jpg" alt="" />
            </div>
            <div>
              <img loading="lazy" src="/construindo_futuro/5.jpg" alt="" />
            </div>
            <div>
              <img loading="lazy" src="/construindo_futuro/6.jpg" alt="" />
            </div>
            <div>
              <img loading="lazy" src="/construindo_futuro/7.jpg" alt="" />
            </div>
            <div>
              <img loading="lazy" src="/construindo_futuro/8.jpg" alt="" />
            </div>
            <div>
              <img loading="lazy" src="/construindo_futuro/9.jpg" alt="" />
            </div>
            <div>
              <img loading="lazy" src="/construindo_futuro/10.jpg" alt="" />
            </div>
            <div>
              <img loading="lazy" src="/construindo_futuro/11.jpg" alt="" />
            </div>
            <div>
              <img loading="lazy" src="/construindo_futuro/12.jpg" alt="" />
            </div>
          </Slider>
        </div>
      </section>
    </main>
  );
}
