import { useEffect, useState } from "react";
import Slider from "react-slick";
import BannerImage from "../../../components/BannerImage";
import { CircularProgressbarWithChildren } from "react-circular-progressbar";
import { Link } from "react-router-dom";
import { FiHome } from "react-icons/fi";
import { FaBitbucket, FaChild, FaShower, FaUtensils } from "react-icons/fa";
import WantTo from "../../../components/WantTo";
import styles from "../../../styles/ProjectLayout.module.scss";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "react-circular-progressbar/dist/styles.css";

export function MathewStreets() {
  const [refeicoes, setRefeicoes] = useState(0);
  const [water, setWater] = useState(0);
  const [people, setPeople] = useState(0);
  const [glass, setGlass] = useState(0);

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

  useEffect(() => {
    if (refeicoes < 13825) {
      setTimeout(() => {
        setRefeicoes(refeicoes + 155);
      }, 5);
    }
    if (water < 1077) {
      setTimeout(() => {
        setWater(water + 15);
      }, 5);
    }
    if (people < 27) {
      setTimeout(() => {
        setPeople(people + 1);
      }, 50);
    }
    if (glass < 2484) {
      setTimeout(() => {
        setGlass(glass + 48);
      }, 5);
    }
  });

  return (
    <main className={styles.mateusRuasContainer}>
      <BannerImage image="/mateusruass2.png" title="Mateus 25:35 Ruas" />

      <div className={styles.breadcrumb}>
        <p>
          <Link to="/">
            <FiHome />
          </Link>
          /<span>Projetos</span>/<span>Mateus 25:35 Ruas</span>
        </p>
      </div>

      <section className={styles.aboutProject}>
        <div className={styles.transparenciaDesempenhoGrid}>
          <div className={styles.transparenciaDesempenhoGridItem}>
            <CircularProgressbarWithChildren
              value={refeicoes}
              styles={{ path: { stroke: "#a60b05" } }}
              maxValue={9505}
            >
              <FaUtensils size={70} />
            </CircularProgressbarWithChildren>
            <p>{refeicoes}</p>
            <p>REFEI????ES</p>
            <span>distribu??das at?? o momento</span>
          </div>
          <div className={styles.transparenciaDesempenhoGridItem}>
            <CircularProgressbarWithChildren
              value={refeicoes}
              styles={{ path: { stroke: "#a60b05" } }}
              maxValue={9505}
            >
              <FaShower size={70} />
            </CircularProgressbarWithChildren>
            <p>{water}</p>
            <p>BANHOS</p>
            <span>fornecidos at?? o momento</span>
          </div>
          <div className={styles.transparenciaDesempenhoGridItem}>
            <CircularProgressbarWithChildren
              value={people}
              styles={{ path: { stroke: "#a60b05" } }}
              maxValue={27}
            >
              <FaChild size={70} />
            </CircularProgressbarWithChildren>
            <p>{people}</p>
            <p>ENCAMINHAMENTOS</p>
            <span>para tratamento at?? o momento</span>
          </div>
          <div className={styles.transparenciaDesempenhoGridItem}>
            <CircularProgressbarWithChildren
              value={glass}
              styles={{ path: { stroke: "#a60b05" } }}
              maxValue={2484}
            >
              <FaBitbucket size={70} />
            </CircularProgressbarWithChildren>
            <p>{glass}</p>
            <p>LITROS DE SUCO</p>
            <span>distribu??dos at?? o momento</span>
          </div>
        </div>

        <h2 className={styles.title}>O projeto</h2>
        <article>
          <p>
            O Projeto Mateus 25:35 Ruas prepara e distribui mais de 100
            refei????es de excelente qualidade todo s??bado ?? noite em pontos
            espec??ficos da cidade. Al??m disso, realiza doa????es de roupas,
            cobertores e produtos de higiene pessoal para moradores de rua. O
            ??nibus do Projeto ?? adaptado com banheiros para atender os moradores
            de rua com banho e higieniza????o necess??ria, proporcionando dignidade
            ??s pessoas atendidas. O projeto prev?? uma parceria com Comunidades
            Terap??uticas de Reabilita????o, encaminhando para tratamento os
            dependentes qu??micos que queiram abandonar v??cios.
          </p>
          <p>
            O cora????o do projeto Mateus 25:35 ?? as equipes de volunt??rios, que
            atuam na cozinha como tamb??m in loco (ruas). Preparando as refei????es
            com amor e dedica????o na cozinha industrial do Minist??rio Atos de
            Justi??a. O card??pio ?? planejado para nutrir aqueles que, muitas
            vezes, ficam sem uma refei????o digna a semana inteira. A preocupa????o
            com a qualidade e excel??ncia ?? a marca desta equipe. Por isso,
            recebemos apoio de nutricionistas que capacitam todos os volunt??rios
            com as boas pr??ticas da higiene e manipula????o de alimentos.
          </p>
          <p>
            Voc?? pode conhecer e cooperar com o Projeto Mateus 25.35 Ruas, sendo
            um volunt??rio na equipe da cozinha ou na distribui????o dos alimentos.
            Tamb??m ?? poss??vel colaborar de diversas formas, atrav??s de ofertas
            em doa????es financeiras, bens materiais n??o dur??veis como vestu??rios,
            itens de higiene ou at?? mesmo alimentos.
          </p>
        </article>
      </section>

      <WantTo />

      <section className={styles.video}>
        <h2>Temos um v??deo para te ajudar!</h2>
        <iframe
          width="560"
          height="315"
          frameBorder="0"
          src="https://www.youtube.com/embed/XgdRMYKXQxQ"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen={true}
        ></iframe>
      </section>

      <section className={styles.reality}>
        <h2 className={styles.title}>Realidade das Ruas</h2>
        <div>
          <Slider {...settings}>
            <div>
              <img loading="lazy" src="/mateus_ruas/1.jpeg" alt="" />
            </div>
            <div>
              <img loading="lazy" src="/mateus_ruas/2.jpeg" alt="" />
            </div>
            <div>
              <img loading="lazy" src="/mateus_ruas/3.jpeg" alt="" />
            </div>
            <div>
              <img loading="lazy" src="/mateus_ruas/4.jpeg" alt="" />
            </div>
            <div>
              <img loading="lazy" src="/mateus_ruas/5.jpeg" alt="" />
            </div>
            <div>
              <img loading="lazy" src="/mateus_ruas/6.jpeg" alt="" />
            </div>
            <div>
              <img loading="lazy" src="/mateus_ruas/7.jpeg" alt="" />
            </div>
            <div>
              <img loading="lazy" src="/mateus_ruas/8.jpeg" alt="" />
            </div>
            <div>
              <img loading="lazy" src="/mateus_ruas/9.jpeg" alt="" />
            </div>
            <div>
              <img loading="lazy" src="/mateus_ruas/10.jpeg" alt="" />
            </div>
          </Slider>
        </div>
      </section>
    </main>
  );
}
