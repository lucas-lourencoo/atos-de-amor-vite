import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import BannerImage from "../../../components/BannerImage";
import WantTo from "../../../components/WantTo";
import { CircularProgressbarWithChildren } from "react-circular-progressbar";

import Slider from "react-slick";
import { FaCartPlus, FaHome, FaThumbsUp, FaUserMd } from "react-icons/fa";
import { FiHome } from "react-icons/fi";

import styles from "../../../styles/ProjectLayout.module.scss";
import stylesProject from "./styles.module.scss";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "react-circular-progressbar/dist/styles.css";

export function HelpLifes() {
  const [refeicoes, setRefeicoes] = useState(0);
  const [internacoes, setInternacoes] = useState(0);
  const [cestas, setCestas] = useState(0);
  const [family, setFamily] = useState(0);

  useEffect(() => {
    if (refeicoes < 7) {
      setTimeout(() => {
        setRefeicoes(refeicoes + 1);
      }, 50);
    }
    if (internacoes < 27) {
      setTimeout(() => {
        setInternacoes(internacoes + 1);
      }, 1);
    }
    if (cestas < 780) {
      setTimeout(() => {
        setCestas(cestas + 100);
      }, 1);
    }
    if (family < 259) {
      setTimeout(() => {
        setFamily(family + 10);
      }, 1);
    }
  });

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
    <main className={styles.socorreVidasContainer}>
      <BannerImage image="/socorres2.png" title="Socorre Vidas" />

      <div className={styles.breadcrumb}>
        <p>
          <Link to="/">
            <FiHome />
          </Link>
          /<span>Projetos</span>/<span>Socorre Vidas</span>
        </p>
      </div>

      <section className={styles.aboutProject}>
        <div className={styles.transparenciaDesempenhoGrid}>
          <div className={styles.transparenciaDesempenhoGridItem}>
            <CircularProgressbarWithChildren
              value={refeicoes}
              styles={{ path: { stroke: "#227194" } }}
              maxValue={7}
            >
              <FaThumbsUp size={60} />
            </CircularProgressbarWithChildren>
            <p>{refeicoes}</p>
            <p>
              PROJETOS <br /> APOIADOS
            </p>
            <span>distribu??das at?? o momento</span>
          </div>
          <div className={styles.transparenciaDesempenhoGridItem}>
            <CircularProgressbarWithChildren
              value={cestas}
              styles={{ path: { stroke: "#227194" } }}
              maxValue={780}
            >
              <FaCartPlus size={60} />
            </CircularProgressbarWithChildren>
            <p>{cestas}</p>
            <p>CESTAS B??SICAS</p>
            <span>fornecidos at?? o momento</span>
          </div>
          <div className={styles.transparenciaDesempenhoGridItem}>
            <CircularProgressbarWithChildren
              value={internacoes}
              styles={{ path: { stroke: "#227194" } }}
              maxValue={27}
            >
              <FaUserMd size={60} />
            </CircularProgressbarWithChildren>
            <p>{internacoes}</p>
            <p>INTERNA????ES</p>
            <span>para tratamento at?? o momento</span>
          </div>
          <div className={styles.transparenciaDesempenhoGridItem}>
            <CircularProgressbarWithChildren
              value={family}
              styles={{ path: { stroke: "#227194" } }}
              maxValue={259}
            >
              <FaHome size={60} />
            </CircularProgressbarWithChildren>
            <p>{family}</p>
            <p>FAM??LIAS</p>
            <span>distribu??dos at?? o momento</span>
          </div>
        </div>

        <h2 className={styles.title}>O projeto</h2>
        <article>
          <p>
            O projeto Socorre Vidas foi o primeiro a ser desenvolvido, sendo a
            origem de todas as a????es sociais do Instituto Atos de Amor. A partir
            do princ??pio de atender os dom??sticos da f??, o Socorre Vidas n??o se
            limitou, e expandiu sua atua????o. Hoje, realiza atendimento ??s
            fam??lias cadastradas, com visitas e distribui????o de cestas b??sicas,
            itens de vestu??rio, e outros tipos de doa????es. Entre os
            atendimentos, s??o beneficiados: fam??lias em situa????o de risco e
            vulnerabilidade social, bem como Comunidades Terap??uticas e Projetos
            Sociais de outras denomina????es.
          </p>
          <p>
            Al??m disso, o Socorre Vidas d?? suporte aos demais projetos sociais
            do Instituto Atos de Amor e aos parceiros do IAA, tais como: o
            Esquadr??o da Vida, Projeto Restaurando Vidas, Peniel, Lar Bet??nia,
            Projeto Sopa Solid??ria e Atos Futebol Clube. A atua????o do Socorre
            Vidas n??o para por a??! Em parceria com o SESC ??? MESA BRASIL,
            distribui, semanalmente, cerca de 700Kg de alimentos, compondo
            sacol??es de legumes, frutas e verduras.
          </p>
          <p>
            Voc?? pode estender sua m??o a quem precisa, participando do Projeto
            Socorre Vidas! Sendo um volunt??rio, ?? poss??vel ajudar nas diversas
            atividades que o Projeto desenvolve.
          </p>
          <p>
            Ajudar a quem precisa ?? um Ato de Amor! Participe conosco do Socorre
            Vidas!
          </p>
        </article>
      </section>

      <WantTo />

      <section className={stylesProject.reality}>
        <h2 className={styles.title}>Fotos do Projeto Socorre Vidas</h2>
        <div>
          <Slider {...settings}>
            <div>
              <img loading="lazy" src="/socorre_vidas/1.jpeg" alt="" />
            </div>
            <div>
              <img loading="lazy" src="/socorre_vidas/2.jpeg" alt="" />
            </div>
            <div>
              <img loading="lazy" src="/socorre_vidas/3.jpeg" alt="" />
            </div>
            <div>
              <img loading="lazy" src="/socorre_vidas/4.jpeg" alt="" />
            </div>
            <div>
              <img loading="lazy" src="/socorre_vidas/5.jpeg" alt="" />
            </div>
            <div>
              <img loading="lazy" src="/socorre_vidas/6.jpeg" alt="" />
            </div>
            <div>
              <img loading="lazy" src="/socorre_vidas/7.jpeg" alt="" />
            </div>
            <div>
              <img loading="lazy" src="/socorre_vidas/8.jpeg" alt="" />
            </div>
            <div>
              <img loading="lazy" src="/socorre_vidas/9.jpeg" alt="" />
            </div>
          </Slider>
        </div>
      </section>
    </main>
  );
}
