import Slider from "react-slick";
import { Link } from "react-router-dom";
import styles from "./styles.module.scss";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export default function ProjectsSlider() {
  var settings = {
    arrows: false,
    dots: false,
    infinite: true,
    autoplay: true,
    speed: 600,
    slidesToShow: 5,
    slidesToScroll: 1,
    pauseOnHover: false,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
        },
      },
    ],
  };

  return (
    <div className={styles.projectEspecifysCarousel}>
      <Slider {...settings}>
        <div className={styles.projectEspecifysCarouselItem}>
          <Link to="/projetos/casa-de-meninos">
            <a>
              <img src="/carousel/casa1k-1.png" alt="" loading="lazy" />
            </a>
          </Link>
        </div>
        <div className={styles.projectEspecifysCarouselItem}>
          <Link to="/projetos/construindo-o-futuro">
            <a>
              <img src="/construindo.png" alt="" loading="lazy" />
            </a>
          </Link>
        </div>
        <div className={styles.projectEspecifysCarouselItem}>
          <Link to="/projetos/hogarninas">
            <a>
              <img src="/carousel/casa2.png" alt="" loading="lazy" />
            </a>
          </Link>
        </div>
        <div className={styles.projectEspecifysCarouselItem}>
          <Link to="/projetos/mateus-25-35-ruas">
            <a>
              <img src="/carousel/mateus.png" alt="" loading="lazy" />
            </a>
          </Link>
        </div>
        <div className={styles.projectEspecifysCarouselItem}>
          <Link to="/projetos/socorrevidas">
            <a>
              <img src="/carousel/socorre-azul.png" alt="" loading="lazy" />
            </a>
          </Link>
        </div>
        <div className={styles.projectEspecifysCarouselItem}>
          <Link to="/projetos/artevida">
            <a>
              <img src="/avlogo.png" alt="" loading="lazy" />
            </a>
          </Link>
        </div>
        <div className={styles.projectEspecifysCarouselItem}>
          <Link to="/projetos/casa-de-meninos">
            <a>
              <img src="/carousel/casa1k-1.png" alt="" loading="lazy" />
            </a>
          </Link>
        </div>
        <div className={styles.projectEspecifysCarouselItem}>
          <Link to="/projetos/hogarninas">
            <a>
              <img src="/carousel/casa2.png" alt="" loading="lazy" />
            </a>
          </Link>
        </div>
        <div className={styles.projectEspecifysCarouselItem}>
          <Link to="/projetos/mateus-25-35-ruas">
            <a>
              <img src="/carousel/mateus.png" alt="" loading="lazy" />
            </a>
          </Link>
        </div>
        <div className={styles.projectEspecifysCarouselItem}>
          <Link to="/projetos/socorrevidas">
            <a>
              <img src="/carousel/socorre-azul.png" alt="" loading="lazy" />
            </a>
          </Link>
        </div>
        <div className={styles.projectEspecifysCarouselItem}>
          <Link to="/projetos/artevida">
            <a>
              <img src="/avlogo.png" alt="" loading="lazy" />
            </a>
          </Link>
        </div>
        <div className={styles.projectEspecifysCarouselItem}>
          <Link to="/projetos/casa-do-pao">
            <a>
              <img src="/carousel/logo casa pao.png" alt="" loading="lazy" />
            </a>
          </Link>
        </div>
      </Slider>
    </div>
  );
}
