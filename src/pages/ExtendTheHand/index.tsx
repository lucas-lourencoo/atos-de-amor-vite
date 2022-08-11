import { FiHome } from "react-icons/fi";
import {
  FaBarcode,
  FaCreditCard,
  FaDollarSign,
  FaHeart,
  FaHome,
  FaShoppingBasket,
} from "react-icons/fa";
import { Link } from "react-router-dom";
import BannerImage from "../../components/BannerImage";
import ProjectsSlider from "../../components/ProjectsSlider";
import styles from "./styles.module.scss";

export function ExtendTheHand() {
  return (
    <main>
      <BannerImage image="/comoajudar.png" title="Como Ajudar" />

      <div className={styles.breadcrumb}>
        <p>
          <Link to="/">
            <a>
              <FiHome />
            </a>
          </Link>
          /<span>Ajude</span>/<span>Como ajudar</span>
        </p>
      </div>

      <section className={styles.aboutProject}>
        <h2 className={styles.title}>Estenda a mão</h2>
        <article>
          <p>
            Nós não nos conformamos com os problemas do mundo, e sim nos
            dedicamos para melhorá-lo. Precisamos trabalhar juntos e somar
            forças para este objetivo. A sua colaboração é fundamental para
            continuarmos e ampliarmos nossos programas e ajudar cada vez mais
            crianças, jovens e famílias. Você pode conhecer e cooperar com
            nossos projetos sociais de diversas formas, através de doações
            financeiras, de bens materiais não duráveis como roupas e calçados
            ou até mesmo alimentos. Veja as opções abaixo e estenda a mão para
            quem precisa.
          </p>
        </article>

        <img loading="lazy" src="/meninos2.jpeg" alt="" />
      </section>

      <section className={styles.cardsGrid}>
        <div className={styles.cardsGridItem}>
          <div className={styles.cardsGridItemIcon}>
            <FaShoppingBasket />
          </div>
          <h4>Doe Produtos</h4>
          <div className={styles.cardsGridItemHiden}>
            <h4>Doação de Produtos</h4>
            <p>Você pode doar produtos usados em boas condições.</p>
            <p>Sua doação será destinada a um de nossos projetos.</p>
            <p>Basta ligar: (67)3341-6317</p>
            <a href="https://api.whatsapp.com/send?phone=556792708210&text=Olá! Gostaria de doar produtos para o IAA.">
              Ou clique aqui!
            </a>
          </div>
        </div>
        <div className={styles.cardsGridItem}>
          <div className={styles.cardsGridItemIcon}>
            <FaHeart />
          </div>
          <h4>Empresa Amiga</h4>
          <div className={styles.cardsGridItemHiden}>
            <h4>Empresa Amiga</h4>
            <p>Sua empresa ou comércio podem ajudar nossos projetos.</p>
            <p>
              Ao clicar no botão a seguir, você saberá como seu CNPJ pode ser
              usado para distribuir amor.
            </p>
            <Link to="/ajude/empresa-amiga">
              <a>Saiba +</a>
            </Link>
          </div>
        </div>
        <div className={styles.cardsGridItem}>
          <div className={styles.cardsGridItemIcon}>
            <FaBarcode />
          </div>
          <h4>Boleto Bancário</h4>
          <div className={styles.cardsGridItemHiden}>
            <h4>Boleto Bancário</h4>
            <p>Clique no botão a seguir e selecione o valor desejado</p>
            <a href="https://pag.ae/7WY2yDozu">Clique aqui para doar</a>
            <img loading="lazy" src="/Logo_PagSeguro.png" alt="" />
          </div>
        </div>
        <div className={styles.cardsGridItem}>
          <div className={styles.cardsGridItemIcon}>
            <FaCreditCard />
          </div>
          <h4>
            Doação via <br /> Cartão de Crédito
          </h4>
          <div className={styles.cardsGridItemHiden}>
            <h4>Cartão de Crédito</h4>
            <p>Clique no botão a seguir e selecione o valor desejado</p>
            <a href="https://pag.ae/7WY2yDozu">Clique aqui para doar</a>
            <img loading="lazy" src="/Logo_PagSeguro.png" alt="" />
          </div>
        </div>
        <div className={styles.cardsGridItem}>
          <div className={styles.cardsGridItemIcon}>
            <FaDollarSign />
          </div>
          <h4>
            Imposto de <br /> Renda
          </h4>
          <div className={styles.cardsGridItemHiden}>
            <h4>Imposto de Renda</h4>
            <p>
              Até 3% do seu imposto pode ser convertido em amor, saiba como!
            </p>
            <Link to="/ajude/imposto-de-renda">
              <a>Como doar pelo IR</a>
            </Link>
          </div>
        </div>
        <div className={styles.cardsGridItem}>
          <div className={styles.cardsGridItemIcon}>
            <FaHome />
          </div>
          <h4>Cofrinhos da Casa</h4>
          <div className={styles.cardsGridItemHiden}>
            <h4>Cofrinhos da Casa</h4>
            <p>
              Suas moedas podem ser convertidas em amor, você pode ter um cofre
              em sua casa ou empresa.
            </p>

            <a
              href="https://api.whatsapp.com/send?phone=556792708210&text=Ol%C3%A1!%20Gostaria%20de%20um%20cofrinho%20do%20IAA."
              target="__blank"
            >
              Quero um cofrinho
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}
