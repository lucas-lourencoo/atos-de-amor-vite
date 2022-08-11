import { FiHome } from "react-icons/fi";
import { Link } from "react-router-dom";
import BannerImage from "../../../components/BannerImage";
import ProjectsSlider from "../../../components/ProjectsSlider";
import styles from "./styles.module.scss";

export function Banks() {
  return (
    <main>
      <BannerImage image="/cofres.png" title="Cofrinhos Da Casa" />

      <div className={styles.breadcrumb}>
        <p>
          <Link to="/">
            <a>
              <FiHome />
            </a>
          </Link>
          /<span>Ajude</span>/<span>Cofrinhos da Casa</span>
        </p>
      </div>

      <section className={styles.aboutProject}>
        <h2 className={styles.title}>Doe amor</h2>
        <article>
          <p>
            O Cofrinho da Casa de Meninos é uma das formas de contribuir com o
            IAA. As doações recebidas da comunidade através do nosso Cofrinho,
            são utilizadas para custear as despesas diretas e necessidades dos
            meninos acolhidos. O troco depositado nos Cofrinhos localizados nos
            comércios ajudam o IAA a continuar com as atividades e aprimorá-las
            cada vez mais e ajudar mais pessoas. Contamos com a parceria de
            diversos estabelecimentos comercias como: supermercados, farmácias,
            restaurantes, entre outros. Pequenas quantias fazem grande
            diferença! Quando encontrar nosso cofrinho deposite a sua moedinha
            do troco nele. Sua colaboração nos ajudará a continuar a estender a
            mão a quem precisa.
          </p>
          <strong>Como Solicitar?</strong>
          <p>
            O Cofrinho da Casa pode ser retirado diretamente na sede
            administrativa do IAA, pelo e-mail: contato@atosdeamor.org ou
            solicitado no banner abaixo. Quando o cofrinho estiver quase cheio,
            não se preocupe, que a equipe do IAA irá até o seu estabelecimento
            fazer a coleta e substituir o cofre por um novinho.
          </p>
          <p>
            Nosso endereço: Av. Ministro Jõao Arinos, 4136, Bairro Tiradentes,
            CG/MS
          </p>
        </article>

        <a
          href="https://api.whatsapp.com/send?phone=556792708210&text=Ol%C3%A1!%20Gostaria%20de%20um%20cofrinho%20do%20IAA."
          target="__blank"
        >
          <img loading="lazy" src="/novo_cofres cópia.png" alt="" />
        </a>
      </section>
    </main>
  );
}
