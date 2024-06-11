import { FiHome } from "react-icons/fi";
import Slider from "react-slick";
import { Link } from "react-router-dom";
import BannerImage from "../../../components/BannerImage";
import styles from "../../../styles/ProjectLayout.module.scss";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export function ShareAndLove() {
  var settings = {
    infinite: true,
    autoplay: true,
    speed: 1000,
    dots: true,
    arrows: false,
    autoplaySpeed: 5000,
    slidesToShow: 4,
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
      <BannerImage image="/mateusruass2.png" title="Compartilhar e Amar" />

      <div className={styles.breadcrumb}>
        <p>
          <Link to="/">
            <FiHome />
          </Link>
          /<span>Projetos</span>/<span>Compartilhar e Amar</span>
        </p>
      </div>

      <section className={styles.aboutProject}>
        <h2 className={styles.title}>O projeto</h2>
        <article>
          <p>
            O Projeto tem por finalidade a prevenção, intervenção e manutenção a
            causa da pessoa em situação de rua, atendidas pelo Projeto Mateus 25
            – Compartilhar e Amar. O atendimento emergencial de combate à fome
            é, sobretudo, uma ação de enfrentamento à miserabilidade, promovendo
            o mínimo de dignidade e respeito humano às pessoas que de alguma
            forma fizeram da rua sua moradia permanente ou provisória.
          </p>
          <p>
            As refeições são confeccionadas com muito amor e dedicação por
            voluntários que seguem todos os cuidados básicos de higiene e
            manipulação dos alimentos, a produção é realizada na cozinha
            funcional da Organização, obedecendo um cardápio pré-elaborado e
            seguindo a logística de distribuição pela equipe que atua na rua em
            pontos estratégicos na cidade de Campo Grande/MS, as saídas para as
            entregas acontecem a partir das 18 horas tendo seu término às 22
            horas. As refeições são distribuídas em marmitex e talheres
            descartáveis.
          </p>
        </article>
      </section>

      <section className={styles.video}>
        <div className={styles.text}>
          <h2 className={styles.title}>Saiba mais vendo este vídeo:</h2>

          <iframe
            width="560"
            height="315"
            src="https://www.youtube.com/embed/mHegTmNbItc"
            title="YouTube video player"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerPolicy="strict-origin-when-cross-origin"
            allowFullScreen
          ></iframe>
        </div>
      </section>

      <section className={styles.helpProject}>
        <h2 className={styles.title}>Apoio</h2>
        <div className={styles.grid}>
          <article>
            <p>
              Para realização deste Projeto o IAA recebeu o apoio financeiro da
              Secretaria de Estado, Assistência Social e dos Direitos Humano –
              <strong>SEAD</strong>. Tendo como finalidade aquisições dos
              seguintes insumos (Gêneros alimentícios, material descartável,
              material de limpeza, utensílios domésticos e gás de cozinha).
            </p>
            <p>
              Parceria estabelecida pelo termo de fomento <i>n. 32012/2022</i>,
              Data da assinatura: 07/07/2022, Instituto Atos de Amor, CNPJ:
              15.454.003/0001-72.
            </p>
            <p>
              Objetivo da parceria: Promover o combate a fome através da
              distribuição de refeições as pessoas em situação de rua atendidas
              pelo Projeto Mateus 25 - “Compartilhar e Amar”. Meta estabelecida:
              2.400 pessoas atendidas. Resultados obtidos: 4.100 pessoas
              atendidas. Valor da Parceria: R$ 65.000.00. Parcela: Única.
              Prestação de Contas: Em anexo
            </p>
          </article>

          <div className={styles.logos}>
            <img src="/sead.png" alt="Logo da SEAD" />
          </div>
        </div>
        <Link to="/institucional/transparencia">
          Veja a nossa prestação de contas
        </Link>
      </section>

      <section className={styles.reality}>
        <h2 className={styles.title}>Algumas Fotos do Compartilhar e amar</h2>
        <div>
          <Slider {...settings}>
            <div>
              <img loading="lazy" src="/compartilhar_e_amar/1.jpg" alt="" />
            </div>
            <div>
              <img loading="lazy" src="/compartilhar_e_amar/2.jpg" alt="" />
            </div>
            <div>
              <img loading="lazy" src="/compartilhar_e_amar/3.jpg" alt="" />
            </div>
            <div>
              <img loading="lazy" src="/compartilhar_e_amar/4.jpg" alt="" />
            </div>
            <div>
              <img loading="lazy" src="/compartilhar_e_amar/5.jpg" alt="" />
            </div>
            <div>
              <img loading="lazy" src="/compartilhar_e_amar/6.jpg" alt="" />
            </div>
            <div>
              <img loading="lazy" src="/compartilhar_e_amar/7.jpg" alt="" />
            </div>
            <div>
              <img loading="lazy" src="/compartilhar_e_amar/8.jpg" alt="" />
            </div>
            <div>
              <img loading="lazy" src="/compartilhar_e_amar/9.jpg" alt="" />
            </div>
            <div>
              <img loading="lazy" src="/compartilhar_e_amar/10.jpg" alt="" />
            </div>
            <div>
              <img loading="lazy" src="/compartilhar_e_amar/11.jpg" alt="" />
            </div>
            <div>
              <img loading="lazy" src="/compartilhar_e_amar/12.jpg" alt="" />
            </div>
            <div>
              <img loading="lazy" src="/compartilhar_e_amar/13.jpg" alt="" />
            </div>
            <div>
              <img loading="lazy" src="/compartilhar_e_amar/14.jpg" alt="" />
            </div>
          </Slider>
        </div>
      </section>
    </main>
  );
}
