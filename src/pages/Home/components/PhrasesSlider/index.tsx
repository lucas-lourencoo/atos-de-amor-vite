import styles from "./styles.module.scss";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export default function PhrasesSlider() {
  var settings = {
    infinite: true,
    autoplay: true,
    speed: 1000,
    autoplaySpeed: 8000,
    slidesToShow: 1,
    pauseOnHover: false,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          arrows: true,
          dots: false,
        },
      },
      {
        breakpoint: 768,
        settings: {
          arrows: false,
          dots: false,
        },
      },
    ],
  };

  return (
    <div className={styles.phraseSliderContainer}>
      <Slider {...settings}>
        <div className={styles.phraseContainer}>
          <img loading="lazy" src="/lm.png" alt="" />
          <div className={styles.phraseContainerText}>
            <p>
              “Se você não tem onde levar, dê a comida. Se você não tem a
              comida, dê água. Se você não tem água, dê um abraço, mas dê alguma
              coisa”
            </p>

            <strong>Luiz Hermínio</strong>
            <span>Presidente do MEVAM</span>
          </div>
        </div>
        <div className={styles.phraseContainer}>
          <img loading="lazy" src="/mlk.jpg" alt="" />
          <div className={styles.phraseContainerText}>
            <p>
              "Se um homem não descobriu nada pelo qual morreria, não está
              pronto para viver"
            </p>

            <strong>M. Luther King</strong>
            <span>Ativista Político Estadunidense</span>
          </div>
        </div>
        <div className={styles.phraseContainer}>
          <img loading="lazy" src="/hg.jpeg" alt="" />
          <div className={styles.phraseContainerText}>
            <p>
              "Ser humilde é imitar a Jesus quando alcançamos grandes posições
              sociais, servindo o próximo com a sinceridade de seu coração."
            </p>

            <strong>Helgir Girodo</strong>
            <span>Pastor</span>
          </div>
        </div>
      </Slider>
    </div>
  );
}
