import { useEffect, useState } from "react";
import Slider from "react-slick";
import { FiHome } from "react-icons/fi";
import { FaBitbucket, FaChild, FaShower, FaUtensils } from "react-icons/fa";
import { CircularProgressbarWithChildren } from "react-circular-progressbar";
import { Link } from "react-router-dom";
import BannerImage from "../../../components/BannerImage";
import WantTo from "../../../components/WantTo";
import styles from "../../../styles/ProjectLayout.module.scss";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "react-circular-progressbar/dist/styles.css";

export function MathewDistricts() {
  const [refeicoes, setRefeicoes] = useState(0);
  const [banho, setBanho] = useState(0);
  const [encaminha, setEncaminha] = useState(0);
  const [suco, setSuco] = useState(0);

  useEffect(() => {
    if (refeicoes < 13825) {
      setTimeout(() => {
        setRefeicoes(refeicoes + 200);
      }, 5);
    }
    if (banho < 1077) {
      setTimeout(() => {
        setBanho(banho + 12);
      }, 5);
    }
    if (encaminha < 27) {
      setTimeout(() => {
        setEncaminha(encaminha + 1);
      }, 65);
    }
    if (suco < 2484) {
      setTimeout(() => {
        setSuco(suco + 44);
      }, 5);
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
    <main className={styles.mateusRuasContainer}>
      <BannerImage image="/amteuss2.png" title="Mateus 25:35 Bairros" />

      <div className={styles.breadcrumb}>
        <p>
          <Link to="/">
            <FiHome />
          </Link>
          /<span>Projetos</span>/<span>Mateus 25:35 Bairros</span>
        </p>
      </div>

      <section className={styles.aboutProject}>
        <div className={styles.transparenciaDesempenhoGrid}>
          <div className={styles.transparenciaDesempenhoGridItem}>
            <CircularProgressbarWithChildren
              value={refeicoes}
              styles={{ path: { stroke: "#40457d" } }}
              maxValue={13825}
            >
              <FaUtensils size={60} />
            </CircularProgressbarWithChildren>
            <p>{refeicoes}</p>
            <p>REFEIÇÕES</p>
            <span>distribuídas até o momento</span>
          </div>
          <div className={styles.transparenciaDesempenhoGridItem}>
            <CircularProgressbarWithChildren
              value={banho}
              styles={{ path: { stroke: "#40457d" } }}
              maxValue={1077}
            >
              <FaShower size={60} />
            </CircularProgressbarWithChildren>
            <p>{banho}</p>
            <p>BANHOS</p>
            <span>fornecidos até o momento</span>
          </div>
          <div className={styles.transparenciaDesempenhoGridItem}>
            <CircularProgressbarWithChildren
              value={encaminha}
              styles={{ path: { stroke: "#40457d" } }}
              maxValue={27}
            >
              <FaChild size={60} />
            </CircularProgressbarWithChildren>
            <p>{encaminha}</p>
            <p>ENCAMINHAMENTOS</p>
            <span>para tratamento até o momento</span>
          </div>
          <div className={styles.transparenciaDesempenhoGridItem}>
            <CircularProgressbarWithChildren
              value={suco}
              styles={{ path: { stroke: "#40457d" } }}
              maxValue={2484}
            >
              <FaBitbucket size={60} />
            </CircularProgressbarWithChildren>
            <p>{suco}</p>
            <p>LITROS DE SUCO</p>
            <span>distribuídos até o momento</span>
          </div>
        </div>

        <h2 className={styles.title}>O projeto</h2>
        <article>
          <p>
            O Projeto “Mateus 25:35 Bairros” atualmente promove assistência
            humanitária as famílias carentes que residem no bairro Noroeste do
            Município, com distribuição de sacolões com frutas e legumes, cestas
            básicas, brinquedos, itens de higiene bucal e pessoal. A ação
            acontece todo último domingo de cada mês. Em uma comunidade local
            parceira do projeto, reúnem as famílias para a realização das
            atividades tais como: Brincadeiras, reuniões com temas diversos.
            Ainda mais, no fim do ano é realizada uma grande festa com um
            delicioso almoço com sobremesa e brinquedos para as crianças.
            Atualmente o projeto atende mais de 150 famílias, graças ao trabalho
            voluntário de muitos e doações que mantêm o projeto.
          </p>
        </article>
      </section>

      <WantTo />

      <section className={styles.reality}>
        <h2 className={styles.title}>Realidade dos Bairros</h2>
        <div>
          <Slider {...settings}>
            <div className={styles.realityGridItem}>
              <img loading="lazy" src="/mateus_bairros/1.jpeg" alt="" />
            </div>
            <div className={styles.realityGridItem}>
              <img loading="lazy" src="/mateus_bairros/2.jpeg" alt="" />
            </div>
            <div className={styles.realityGridItem}>
              <img loading="lazy" src="/mateus_bairros/3.jpeg" alt="" />
            </div>
            <div className={styles.realityGridItem}>
              <img loading="lazy" src="/mateus_bairros/4.jpeg" alt="" />
            </div>
            <div className={styles.realityGridItem}>
              <img loading="lazy" src="/mateus_bairros/5.jpeg" alt="" />
            </div>
            <div className={styles.realityGridItem}>
              <img loading="lazy" src="/mateus_bairros/6.jpeg" alt="" />
            </div>
            <div className={styles.realityGridItem}>
              <img loading="lazy" src="/mateus_bairros/7.jpeg" alt="" />
            </div>
            <div className={styles.realityGridItem}>
              <img loading="lazy" src="/mateus_bairros/8.jpeg" alt="" />
            </div>
            <div className={styles.realityGridItem}>
              <img loading="lazy" src="/mateus_bairros/9.jpeg" alt="" />
            </div>
          </Slider>
        </div>
      </section>
    </main>
  );
}
