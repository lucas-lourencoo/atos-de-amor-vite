import { useEffect, useState } from "react";
import { FaArrowDown } from "react-icons/fa";
import { Link } from "react-router-dom";
import Slider from "react-slick";
import styles from "./styles.module.scss";

export default function Banner() {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
      anchor.addEventListener("click", function (e: any) {
        e.preventDefault();

        document.querySelector(e.target.getAttribute("href")).scrollIntoView({
          behavior: "smooth",
        });
      });
    });

    if (window.screen.width <= 760) {
      setIsMobile(true);
    }
  }, []);

  var settings = {
    infinite: true,
    autoplay: true,
    dots: false,
    arrows: false,
    speed: 1000,
    pauseOnHover: false,
    autoplaySpeed: 3000,
    slidesToShow: 1,
    slidesToScroll: 1,
    adaptiveHeight: true,
  };

  return (
    <div className={styles.banner}>
      <div className={styles.banner}>
        {isMobile ? (
          <video src="/videos/mobilesite.mp4" autoPlay loop muted></video>
        ) : (
          <video src="/videos/IAA_.mp4" autoPlay loop muted></video>
        )}
      </div>
      <section className={styles.centerText}>
        <img loading="lazy" src="/coracao1.png" alt="" draggable={false} />
        <div className={styles.text}>
          <Slider {...settings}>
            <div>
              <h1>
                Coopere <br /> com o IAA
              </h1>
            </div>
            <div>
              <h1>Doe</h1>
            </div>
            <div>
              <h1>Ajude</h1>
            </div>
            <div>
              <h1>Ame</h1>
            </div>
          </Slider>
          <strong>
            Seja bem-vindo, conheça nossos <br /> projetos sociais & torne-se um
            cooperador.
          </strong>
          <Link to="/ajude/estendaamao">Saiba mais</Link>
        </div>
      </section>
      <a href="#project" className={styles.arrowDown}>
        <FaArrowDown color="#FFFFFF" size={50} strokeWidth={3} />
      </a>
    </div>
  );
}
