import BannerImage from "../../../components/BannerImage";
import Slider from "react-slick";
import { FiHome } from "react-icons/fi";
import { Link } from "react-router-dom";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import styles from "./styles.module.scss";

export function FriendEnterprise() {
  var settings = {
    arrows: false,
    dots: true,
    infinite: true,
    autoplay: true,
    speed: 800,
    autoplaySpeed: 4000,
    slidesToShow: 5,
    slidesToScroll: 2,
    responsive: [
      {
        breakpoint: 1300,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 400,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <main>
      <BannerImage title="Empresa Amiga" image="/empresaamiga_s2.png" />

      <div className={styles.breadcrumb}>
        <p>
          <Link to="/">
            <a>
              <FiHome />
            </a>
          </Link>
          /<span>Ajude</span>/<span>Empresa Amiga</span>
        </p>
      </div>

      <section className={styles.aboutProject}>
        <h2 className={styles.title}>Empresa Amiga</h2>
        <article>
          <p>
            A Responsabilidade Social faz parte das empresas que entendem seu
            papel na sociedade. Sabemos que o consumidor, cada vez mais, busca
            por marcas sérias e comprometidas com as causas sociais. Por isso,
            além de oferecer produtos e serviços de qualidade, as empresas têm
            se envolvido cada vez mais com as causas sustentáveis. O Instituto
            Atos de Amor é um parceiro das empresas socialmente responsáveis e
            oferece condições para que sua doação também seja abatida do Imposto
            de Renda.
          </p>
          <p>
            Por isso, você, empresário, também pode ir além e estender a mão a
            quem necessita, fazendo a diferença, ajudando centenas de pessoas,
            famílias e crianças que são atendidas pelos projetos sociais
            desenvolvidos no Instituto Atos de Amor.
          </p>
          <p>
            Sabemos que ainda podemos fazer muito mais! E você, nosso parceiro,
            pode nos ajudar a construir um mundo melhor. Este é um desafio a ser
            assumido por todos nós, e juntos conseguiremos ir mais longe e
            servir mais pessoas, por isso o IAA está sempre aberto a parcerias.
          </p>
          <p>
            Sua empresa pode fazer parte de tudo isso tornando-se uma empresa
            amiga através de doações financeiras, doações de serviços, produtos
            (mesmo com pequenas avarias), patrocínio mensal ou por tempo
            indeterminado e também aderindo os Cofrinhos da Casa de Meninos no
            seu estabelecimento. Contamos com a sua colaboração.
          </p>
          <p>
            Entre em contato com o IAA por meio do telefone{" "}
            <strong>(67) 3341-6317</strong> ou pelo e-mail{" "}
            <strong>contato@atosdeamor.org</strong> e seja uma empresa amiga!
          </p>
        </article>

        <img loading="lazy" src="/meninos2.jpeg" alt="" />
      </section>

      <section className={styles.friendEnterprise}>
        <h2 className={styles.title}>Empresas Amigas do IAA</h2>
        <Slider {...settings}>
          <div className={styles.enterprise}>
            <a href="" target="__blank">
              <img loading="lazy" src="/atos.jpeg" alt="" />
            </a>
          </div>
          <div className={styles.enterprise}>
            <a href="https://lpbadvocacia.com.br/" target="__blank">
              <img loading="lazy" src="/logo-pelogo.png" alt="" />
            </a>
          </div>
          <div className={styles.enterprise}>
            <a href="https://www.sedhast.ms.gov.br/" target="__blank">
              <img loading="lazy" src="/unnamed.png" alt="" />
            </a>
          </div>
          <div className={styles.enterprise}>
            <a href="https://saseducacao.com.br/" target="__blank">
              <img loading="lazy" src="/sas.png" alt="" />
            </a>
          </div>
          <div className={styles.enterprise}>
            <a href="http://sesc.ms/mesa-brasil/" target="__blank">
              <img loading="lazy" src="/mesa.png" alt="" />
            </a>
          </div>
          <div className={styles.enterprise}>
            <a href="https://www.tjms.jus.br/" target="__blank">
              <img loading="lazy" src="/tjms.jpeg" alt="" />
            </a>
          </div>
          <div className={styles.enterprise}>
            <a
              href="https://www.facebook.com/ProjetoPadrinhoMS/"
              target="__blank"
            >
              <img loading="lazy" src="/proj.-padrinho.jpg" alt="" />
            </a>
          </div>
          <div className={styles.enterprise}>
            <a
              href="https://www.facebook.com/NucleoCamilaBalbuena/?eid=ARCLWQZD2YiNkFTzhgOq4NBWTTmqbqMAXF8cx4hvnF0PxOYVgUcvgIzy8y90hFKBoAU6HdKSB7OTyUap"
              target="__blank"
            >
              <img loading="lazy" src="/camila_b.jpg" alt="" />
            </a>
          </div>
          <div className={styles.enterprise}>
            <a href="https://nationshelp.org/" target="__blank">
              <img loading="lazy" src="/Nations-Help.png" alt="" />
            </a>
          </div>
          <div className={styles.enterprise}>
            <a href="#" target="__blank">
              <img loading="lazy" src="/haras.png" alt="" />
            </a>
          </div>
          <div className={styles.enterprise}>
            <a
              href="https://www.facebook.com/draraquelszendler/"
              target="__blank"
            >
              <img loading="lazy" src="/raquel.png" alt="" />
            </a>
          </div>
        </Slider>
      </section>
    </main>
  );
}
