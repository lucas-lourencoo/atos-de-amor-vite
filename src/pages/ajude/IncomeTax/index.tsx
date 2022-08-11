import { FiHome } from "react-icons/fi";
import { Link } from "react-router-dom";
import BannerImage from "../../../components/BannerImage";

import PassFor from "../../../components/PassFor";
import styles from "./styles.module.scss";

export function IncomeTax() {
  const text = {
    text1:
      "Basta falar com seu contador, ou se você mesmo declara o seu imposto de renda, acesse o site da receita federal e baixe o programa de declaração do IR.",
    text2:
      "Após preencher corretamente a sua declaração de IR. Acesse o painel esquerdo e clique na aba “Fichas da Declaração” entre em: Doações Diretamente na Declaração - ECA",
    text3:
      "Clique em “NOVO”e preencha os dados com: “Municipal, UF: MS, Município: Campo Grande” Dentro do Valor disponível para doação, digite o valor que você deseja doar e clique em “ok”",
    text4:
      "Agora imprima o DARF e realize o pagamento. ATENÇÃO, para que a sua doação chegue até o IAA, é necessário a apresentação do DARF. Assim que sua doação for efetivada ligue para 67 | 3341-6317.",
  };

  return (
    <main>
      <BannerImage image="/meninos2s2.png" title="Dedução No IR" />

      <div className={styles.breadcrumb}>
        <p>
          <Link to="/">
            <FiHome />
          </Link>
          /<span>Ajude</span>/<span>Imposto de Renda</span>
        </p>
      </div>

      <section className={styles.aboutProject}>
        <h2 className={styles.title}>Dedução no IR</h2>
        <article>
          <p>
            Você sabia que, por lei, até 3% do seu imposto de renda devido no
            ano pode ser destinado ao fundo de auxílio da criança e adolescente?
            E que é possível destinar este recurso para a{" "}
            <strong>CASA DE MENINOS ATOS DE AMOR/IAA</strong>?
          </p>
          <p>
            Destinando esse percentual, você diminui a distância entre o imposto
            pago por você e os benefícios gerados por ele na sociedade, podendo
            escolher em qual instituição de Campo Grande você gostaria que seu
            dinheiro fosse aplicado. Os recursos serão aplicados em ações como:
            enfrentamento ao trabalho infantil, a exploração sexual, a situação
            de crianças na rua, programas de atendimento a crianças e ao
            adolescente, orientação e apoio familiar, e muitas outras coisas.
          </p>
          <p>
            Você escolhe onde aplicar o seu recurso e deduz a quantia de seu
            imposto de renda. É simples para você, não gera custo e ajuda as
            crianças da nossa cidade, lembrando que para destinar os recursos
            para a <strong>Casa de Meninos Atos de Amor</strong> é necessário
            nos apresentar a<strong> DARF</strong> paga, referente aos valores a
            serem deduzidos. Passe o mouse no passo a passo abaixo e saiba mais
            detalhes de como doar através do seu Imposto de Renda.
          </p>
        </article>
      </section>

      <PassFor text={text} />
      <section className={styles.video}>
        <h2 className={styles.title}>Temos um vídeo para te ajudar!</h2>

        <iframe
          width="560"
          height="315"
          src="https://www.youtube.com/embed/9YZEpWZYdMQ"
          title="YouTube video player"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
      </section>
    </main>
  );
}
