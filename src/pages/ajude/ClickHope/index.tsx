import { FiHome } from "react-icons/fi";
import { Link } from "react-router-dom";
import BannerImage from "../../../components/BannerImage";
import PassFor from "../../../components/PassFor";
import ProjectsSlider from "../../../components/ProjectsSlider";
import styles from "./styles.module.scss";

export function ClickHope() {
  const text = {
    text1:
      "Basta falar com seu contador, ou se você mesmo declara o seu imposto de renda, acesse o site: <a href='http://www.cliqueesperanca.org/'>www.cliqueesperanca.org</a>",
    text2:
      "Agora, você deve selecionar o tipo de doação, pessoa física ou jurídica e preencher com o seu CPF ou CNPJ, nome e demais dados que serão solicitados.",
    text3:
      "Agora selecione a IAA - Instituto Atos de Amor como entidade beneficiada com a sua doação e insira o valor, que deverá ser equivalente a até 6% do valor do seu IR.",
    text4:
      "A guia gerada deverá ser paga até dia 30 de dezembro, lembre-se de que este procedimento deverá ser executado apenas para pessoas que realizam declaração por modelo completo.",
  };

  return (
    <main>
      <BannerImage image="/meninos2s2.png" title="Clique Esperança" />

      <div className={styles.breadcrumb}>
        <p>
          <Link to="/">
            <a>
              <FiHome />
            </a>
          </Link>
          /<span>Ajude</span>/<span>Clique Esperança</span>
        </p>
      </div>

      <section className={styles.aboutProject}>
        <h2 className={styles.title}>Clique Esperança</h2>
        <article>
          <p>
            Você sabia que por lei até 6% do seu imposto de renda devido no ano
            pode ser destinado ao fundo de auxílio da criança e adolescente? E
            que é possível destinar este recurso para a{" "}
            <strong>CASA DE MENINOS ATOS DE AMOR/IAA </strong>?
          </p>
          <p>
            O projeto Clique Esperança é um instrumento de políticas e programas
            de promoção e defesa dos direitos das crianças e do adolescente.
            Participando, você diminui a distância entre o imposto pago por você
            e os benefícios gerados por ele na sociedade, podendo escolher em
            qual instituição de Campo Grande você gostaria que seu dinheiro
            fosse aplicado. Os recursos serão aplicados em ações como:
            enfrentamento ao trabalho infantil, a exploração sexual, a situação
            de crianças na rua, programas de atendimento a crianças e ao
            adolescente, orientação e apoio familiar e muitas outras.
          </p>
          <p>
            Você escolhe onde aplicar o seu recurso e deduz a quantia de seu
            imposto de renda. É simples pra você, não gera custo e ajuda as
            crianças da nossa cidade.
          </p>
          <p>
            <strong>
              Lei n. 2.898 de 14 de julho de 1992 - Cria o Fundo Municipal para
              a Infância e Adolescência - FMIA.
            </strong>
          </p>
        </article>
      </section>

      <PassFor text={text} />
    </main>
  );
}
