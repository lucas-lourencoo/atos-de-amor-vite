import { FiHome } from "react-icons/fi";
import Slider from "react-slick";
import { Link } from "react-router-dom";
import BannerImage from "../../../components/BannerImage";
import WantTo from "../../../components/WantTo";
import DonateButtons from "../../../components/DonateButtons";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import styles from "../../../styles/ProjectLayout.module.scss";
import styles2 from "./styles.module.scss";

export function ArteVida() {
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
      <BannerImage title="Arte & Vida" image="/artevida_s2.png" />

      <div className={styles.breadcrumb}>
        <p>
          <Link to="/">
            <FiHome />
          </Link>
          /<span>Projetos</span>/<span>Arte & vida</span>
        </p>
      </div>

      <section className={styles.aboutProject}>
        <h2 className={styles.title}>O projeto</h2>
        <article>
          <p>
            O projeto Arte & Vida visa promover ações socioculturais com
            crianças, adolescentes e jovens da cidade de Campo Grande/MS,
            através das artes, com oficinas de Artes Cênicas – Teatro, formação
            e aperfeiçoamento de diferentes linguagens artísticas dentro da
            Dança.
          </p>
          <p>
            É comprovado que o movimento permite a expressão de sentimentos com
            os quais os jovens em formação não sabem lidar de antemão. Sendo
            assim, o Projeto trabalha em três grandes áreas: 
            <strong>As oficinas: </strong> visando o intercâmbio de ideias e a
            demonstração de técnicas e habilidades desenvolvidas para o
            aprimoramento físico e mental de cada criança e adolescente. 
            <strong> Rodas de conversa: </strong>trazem unidade e fortalecimento
            a cada criança/adolescente e à família, que é convidada a
            participar, criando vínculos. 
            <strong> Recital:</strong> momento em que todos os beneficiários e
            envolvidos nas oficinas terão a oportunidade de apresentarem aquilo
            que adquiriram de conhecimento e habilidades durante o projeto.
          </p>
          <p>
            A dança proporciona inúmeros benefícios às crianças e adolescentes.
            Por se tratar de uma arte, torna-se uma forma lúdica de esporte, que
            aguça tanto o lado físico quanto o psíquico. Também, por se tratar
            de esporte, pode auxiliar na aceleração do metabolismo, no
            melhoramento do condicionamento físico, no fortalecimento da
            musculatura, além de trabalhar a flexibilidade, a postura e a
            consciência corporal. É, portanto, uma grande oportunidade de manter
            as crianças e adolescentes ativos.
          </p>
          <p>
            Além de ser uma excelente prática de atividade física, nas aulas de
            dança, os beneficiados pelo projeto Arte & Vida, passam a entender
            que, por ser uma atividade em grupo, precisam partilhar
            experiências, já que a coreografia só sairá de acordo com o esperado
            se o trabalho for feito em equipe. Nas aulas de teatro, dança e nas
            rodas de conversa, se aprende que é preciso ter empatia com as
            outras crianças e adolescentes que estão em volta, pois eles também
            têm suas limitações e estão aprendendo. Assim, há grande chance de
            construir relações respeitosas, saudáveis e afetivas.
          </p>
        </article>
      </section>

      <section className={styles.helpProject}>
        <h2 className={styles.title}>Apoio</h2>
        <div className={styles.grid}>
          <article>
            <p>
              O Projeto Arte e Vida no ano de 2019 recebeu o apoio financeiro da
              secretaria de Estado Direitos Humanos, Assistência Social e
              Trabalho - SEDHAST para realizar as atividades previstas no plano
              de trabalho em anexo.
            </p>
            <p>
              Parceria estabelecida pelo termo de fomento n. 29.279/2019, tendo
              como objeto: Promover ações socioculturais com crianças e
              adolescentes nas sub-regiões centrais da cidade de Campo Grande/MS
              contribuindo com a prevenção às violações de direitos humanos
              fundamentais inerentes ao público-alvo desta parceria assegurando
              espaços de convivência social e de fortalecimento de vínculos.
            </p>
            <p>
              Com foco na formação e aperfeiçoamento de diferentes linguagens
              artísticas dentro da Dança, Artes Cênicas e Teatro.
              Disponibilizadas: oficinas, palestras e workshops finalizando com
              um recital.
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

      <section className={styles2.projectGrid}>
        <div className={styles2.projectGridCard}>
          <figure>
            <img loading="lazy" src="/IMG_1189.jpg" alt="" />
          </figure>
          <h3>Danças</h3>
          <p>
            A dança favorece a criatividade, promove socialização, estimula a
            autoestima e a autoconfiança, ajuda no processo de aprendizagem,
            colabora para a formação do indivíduo.
          </p>
        </div>
        <div className={styles2.projectGridCard}>
          <figure>
            <img loading="lazy" src="/IMG_5647.jpg" alt="" />
          </figure>
          <h3>Teatro</h3>
          <p>
            O Teatro é uma atividade que envolve o aluno em todos os sentidos:
            trabalha a postura corporal, a respiração, a fala, desenvolve a
            leitura e, principalmente, é uma ferramenta para a vida profissional
            em qualquer área de atuação.
          </p>
        </div>
        <div className={styles2.projectGridCard}>
          <figure>
            <img loading="lazy" src="/IMG_1284.jpg" alt="" />
          </figure>
          <h3>Roda de conversa</h3>
          <p>
            As Rodas de Conversas favorecem o desenvolvimento de ações,
            propiciando trocas de experiências e vivências, fortalecendo o
            respeito, a solidariedade, dignidade, igualdade e concretude dos
            Direitos Humanos.
          </p>
        </div>
      </section>

      <WantTo />

      <section className={styles2.reality}>
        <h2 className={styles2.title}>Um pouco do Projeto Arte & Vida</h2>
        <div>
          <Slider {...settings}>
            <div>
              <img loading="lazy" src="/arte_vida/1.jpeg" alt="" />
            </div>
            <div>
              <img loading="lazy" src="/arte_vida/2.jpeg" alt="" />
            </div>
            <div>
              <img loading="lazy" src="/arte_vida/3.jpeg" alt="" />
            </div>
            <div>
              <img loading="lazy" src="/arte_vida/4.jpeg" alt="" />
            </div>
            <div>
              <img loading="lazy" src="/arte_vida/5.jpeg" alt="" />
            </div>
            <div>
              <img loading="lazy" src="/arte_vida/6.jpeg" alt="" />
            </div>
            <div>
              <img loading="lazy" src="/arte_vida/7.jpeg" alt="" />
            </div>
            <div>
              <img loading="lazy" src="/arte_vida/8.jpeg" alt="" />
            </div>
            <div>
              <img loading="lazy" src="/arte_vida/9.jpeg" alt="" />
            </div>
            <div>
              <img loading="lazy" src="/arte_vida/10.jpeg" alt="" />
            </div>
          </Slider>
        </div>
      </section>
    </main>
  );
}
