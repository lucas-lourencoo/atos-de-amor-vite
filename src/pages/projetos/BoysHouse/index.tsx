import Slider from "react-slick";
import { FiHome } from "react-icons/fi";
import { FaSignal } from "react-icons/fa";
import { Link } from "react-router-dom";
import BannerImage from "../../../components/BannerImage";
import WantTo from "../../../components/WantTo";
import styles from "./styles.module.scss";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export function BoysHouse() {
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
    <main className={styles.casaMeninosContainer}>
      <BannerImage image="/meninoss2.png" title="Casa De Meninos" />

      <div className={styles.breadcrumb}>
        <p>
          <Link to="/">
            <FiHome />
          </Link>
          /<span>Projetos</span>/<span>Casa de meninos</span>
        </p>
      </div>

      <section className={styles.aboutProject}>
        <h2 className={styles.title}>O projeto</h2>
        <article>
          <p>
            Fundada no ano de 2015, a Casa de Meninos Atos de Amor é uma unidade
            de acolhimento do Instituto Atos de Amor, cadastrada junto ao
            Conselho Municipal dos Direitos da Criança e do Adolescente. Esta,
            atua na modalidade Casa Lar, acolhendo dez crianças/adolescentes
            através do serviço de Proteção Social Especial de Alta Complexidade,
            cujo objetivo é garantir os direitos fundamentais de crianças e
            adolescentes do sexo masculino por medidas protetivas por
            determinação judicial, com vínculos familiares
            rompidos/fragilizados, de forma a garantir sua proteção integral, em
            decorrência de violação de direitos como: maus tratos, abandono,
            negligência, situação de risco e/ou violência física e sexual.
          </p>
          <p>
            A Casa tem o intuito em atender as necessidades básicas da criança e
            do adolescente, promovendo a assistência integral de moradia,
            alimentação, lazer, acompanhamento médico, emocional, educacional e
            espiritual. Os meninos recebem todo o cuidado necessário até poderem
            retornar para suas famílias (pais, tios, avós ou irmãos) ou serem
            encaminhados para uma família substituta através da adoção. Contamos
            com o apoio profissional de dentista, nutricionista, médico,
            psicólogos, educador físico e demais voluntários.
          </p>
          <p>
            A Casa Lar oferece um ambiente acolhedor, seguro, permeado de afeto,
            segurança, atividades de lazer, esportivas (tênis de mesa,
            badminton, handebol), oficinas profissionais e educacionais no
            contraturno escolar, com foco em contribuir no desenvolvimento
            físico, cognitivo, emocional e social de cada acolhido. Um espaço
            onde a criança/adolescente possa se desenvolver de forma saudável e
            livre de qualquer violência, com direito á participação e com seus
            direitos assegurados.
          </p>
          <p>
            Os cuidadores residentes exercem um papel fundamental,
            proporcionando o convívio familiar às crianças e adolescentes,
            acompanhando as suas atividades diárias como escola, saúde, cuidados
            pessoais e entre outros. Além disso, a instituição é composta por
            coordenação e equipe técnica, (psicóloga e assistente social) que
            atuam no desenvolvimento técnico, na avaliação psicológica da
            criança/adolescente e da família bem como como intervenções
            psicossociais com cada acolhido.
          </p>
        </article>

        <span>
          “Ainda que o meu pai e a minha mãe me abandonem, o Senhor cuidará de
          mim.”
        </span>
        <cite>Salmos 27:10</cite>

        <div className={styles.aboutProjectCards}>
          <div className={styles.aboutProjectCard}>
            <div className={styles.aboutProjectCardIcon}>
              <FaSignal />
            </div>
            <h4>Clique Solidário</h4>
            <div className={styles.aboutProjectCardHiden}>
              <h4>CLIQUE ESPERANÇA</h4>
              <p>
                Você já conhece o projeto Clique Esperança? Através dele você
                pode doar até 6% do seu imposto de renda.
              </p>
              <Link to="/ajude/clique-esperanca">Clique e saiba mais</Link>
            </div>
          </div>

          <div className={styles.aboutProjectCard}>
            <div className={styles.aboutProjectCardIcon}>
              <FaSignal />
            </div>
            <h4>Doe pelo Imposto de Renda</h4>
            <div className={styles.aboutProjectCardHiden}>
              <h4>DEDUÇÃO NO IMPOSTO</h4>
              <p>
                Por lei você pode doar até 3% do seu imposto de renda devido no
                ano pode ser destinado ao fundo de auxílio da criança e
                adolescente? Quer saber mais?
              </p>
              <Link to="/ajude/imposto-de-renda">Clique e saiba mais</Link>
            </div>
          </div>
        </div>
      </section>

      <WantTo />

      <section className={styles.reality}>
        <h2 className={styles.title}>Algumas Fotos da Casa</h2>
        <div>
          <Slider {...settings}>
            <div>
              <img loading="lazy" src="/casa_meninos/1.jpeg" alt="" />
            </div>
            <div>
              <img loading="lazy" src="/casa_meninos/2.jpeg" alt="" />
            </div>
            <div>
              <img loading="lazy" src="/casa_meninos/3.jpeg" alt="" />
            </div>
            <div>
              <img loading="lazy" src="/casa_meninos/4.jpeg" alt="" />
            </div>
            <div>
              <img loading="lazy" src="/casa_meninos/5.jpeg" alt="" />
            </div>
            <div>
              <img loading="lazy" src="/casa_meninos/6.jpeg" alt="" />
            </div>
            <div>
              <img loading="lazy" src="/casa_meninos/7.jpeg" alt="" />
            </div>
            <div>
              <img loading="lazy" src="/casa_meninos/8.jpeg" alt="" />
            </div>
            <div>
              <img loading="lazy" src="/casa_meninos/9.jpeg" alt="" />
            </div>
            <div>
              <img loading="lazy" src="/casa_meninos/10.jpeg" alt="" />
            </div>
          </Slider>
        </div>
      </section>

      <section className={styles.video}>
        <h2>Temos um vídeo para te mostrar!</h2>
        <iframe
          width="560"
          height="315"
          src="https://www.youtube.com/embed/lQt7hG19AIk"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen={true}
        ></iframe>
      </section>
    </main>
  );
}
