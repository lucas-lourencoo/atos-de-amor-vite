import { Link } from "react-router-dom";
import BannerImage from "../../components/BannerImage";
import {
  FiBarChart,
  FiCoffee,
  FiHeart,
  FiHome,
  FiLoader,
  FiSend,
  FiUsers,
} from "react-icons/fi";
import ProjectsSlider from "../../components/ProjectsSlider";
import styles from "./styles.module.scss";

export function About() {
  return (
    <main className={styles.about}>
      <BannerImage image="/sobres2.png" title="Sobre" />

      <div className={styles.breadcrumb}>
        <p>
          <Link to="/">
            <a>
              <FiHome />
            </a>
          </Link>
          /<span>Institucional</span>/<span>Sobre</span>
        </p>
      </div>

      <section className={styles.aboutText}>
        <article>
          <p>
            <strong>O INSTITUTO ATOS DE AMOR</strong>, também identificado com a
            sigla IAA, é uma organização da sociedade civil, sediada em Campo
            Grande/MS, podendo exercer atividades e representação em todo o
            território nacional e internacional. Portanto, uma organização sem
            fins lucrativos, que gera bens, serviços, e oportunidades para a
            sociedade. Emprega toda uma metodologia, objetivando promover entre
            outras ações, a geração de trabalho e renda, através de ensino de
            práticas produtivas, desenvolvendo projetos de assistência social,
            educação profissional e capacitação para a melhoria das condições de
            vida condições de vida das pessoas em situação de vulnerabilidade.
          </p>
          <p>
            Constituído em 15 de março de 2012, tem como ação prioritária o
            desenvolvimento de projetos sócio educacionais e humanitários, que
            façam garantir à criança, adolescente e às famílias, bem como
            moradores de rua em situação de risco e exclusão social, o direito à
            alimentação, ao lazer, ao esporte, à cultura, à profissionalização e
            à dignidade da pessoa humana. Ainda busca promover e estimular a
            cultura, através das artes, projetos educacionais e culturais que
            garantem a melhoria na qualidade de vida, o fortalecimento de
            vínculos familiares e comunitários às crianças, adolescentes, jovens
            e adultos.
          </p>
          <p>
            Possui parcerias com Comunidades Terapêuticas de Reabilitação. Tem,
            ainda, uma extensão, que presta assistência social a crianças
            carentes que convivem e trabalham em um ambiente insalubre - um
            “lixão” nas imediações da cidade de Pedro Juan Cabellero.
          </p>
        </article>
      </section>

      <section className={styles.aboutMissions}>
        <div className={styles.aboutItem}>
          <div className={styles.aboutItemBackground}>
            <h3>Visão</h3>
          </div>
          <h3>Visão</h3>
          <p>
            Queremos ser uma organização de excelência que promove o atendimento
            e desenvolvimento do indivíduo para alcançar o propósito para o qual
            foi criado por Deus
          </p>
        </div>
        <div className={styles.aboutItem}>
          <div className={styles.aboutItemBackground}>
            <h3>Missão</h3>
          </div>
          <h3>Missão</h3>
          <p>
            Atender pessoas em suas necessidades sociais, emocionais,
            educacionais, espirituais e culturais, propiciando condições para
            que vivam com qualidade e desenvolvam um papel responsável na
            sociedade.
          </p>
        </div>
        <div className={styles.aboutItem}>
          <div className={styles.aboutItemBackground}>
            <h3>Valores</h3>
          </div>
          <h3>Valores</h3>
          <p>
            Princípios bíblicos; Amor; Família; Excelência; Valorização das
            pessoas; Ética nas relações; Honestidade; Solidariedade.
          </p>
        </div>
      </section>

      <section className={styles.cards}>
        <h3>O Instituto Atos de Amor possui os seguintes títulos:</h3>
        <div className={styles.cardsGrid}>
          <div className={styles.cardsGridItem}>
            <h4>CMAS</h4>
            <div className={styles.cardsGridItemHiden}>
              <p>
                Conselho Municipal de Assistência Social – Declaração de
                Regularidade para os serviços socioassistenciais – Serviço de
                Proteção Social Especial de Alta Complexidade – Acolhimento
                Institucional – Casa Lar. Resolução CNAS n. 14/2014 e
                Deliberação CMAS n. 15, de 05 de abril de 2016.
              </p>
            </div>
          </div>
          <div className={styles.cardsGridItem}>
            <h4>CMDCA</h4>
            <div className={styles.cardsGridItemHiden}>
              <p>
                Conselho Municipal dos Direitos da Criança e do Adolescente –
                Certificado de Inscrição no Programa de Proteção em Regime de
                Acolhimento Institucional n.196, vigente desde 20 de dezembro de
                2016.
              </p>
            </div>
          </div>
          <div className={styles.cardsGridItem}>
            <h4>CEBAS</h4>
            <div className={styles.cardsGridItemHiden}>
              <p>
                Cadastro de Entidades Beneficentes – Secretaria de Assistência
                Social – Conforme Lei n. 12.101/2009, nos termos do Decreto n.
                8.242/2014, vigente desde a data da Portaria n. 121, de 22 de
                junho de 2017.
              </p>
            </div>
          </div>
          <div className={styles.cardsGridItem}>
            <h4>Utilidade Pública Estadual</h4>
            <div className={styles.cardsGridItemHiden}>
              <p>
                CERTIFICADO DE CREDENCIAMENTO na Secretaria de Estado de
                Direitos Humanos, Assistência Social e Trabalho. Credenciamento
                como Organização da Sociedade Civil de Assistência Social.
                Processo n. 65/001085/2017. Conforme disposto na Lei n. 4.859,
                de 10/05/2016. Vigente desde 11/05/2016.
              </p>
            </div>
          </div>
          <div className={styles.cardsGridItem}>
            <h4>Utilidade Publica Municipal</h4>
            <div className={styles.cardsGridItemHiden}>
              <p>
                conforme LEI n. 5.518, DE 3 DE MARÇO DE 2015. QUE DECLARA DE
                UTILIDADE PÚBLICA MUNICIPAL O INSTITUTO ATOS DE AMOR, COM SEDE
                EM CAMPO GRANDE-MS, PUBLICADO NO Diário oficial de Campo Grande
                – DIOGRANDE - 4.222 - quarta-feira, 4 de março de 2015
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className={styles.eticsPrinciple}>
        <h2 className={styles.title}>Princípios Éticos</h2>
        <div className={styles.eticsPrincipleGrid}>
          <div className={styles.eticsPrincipleGridItem}>
            <FiHeart size={110} />
            <h4>cremos</h4>
            <p>Que o amor pelas vidas transpõe os obstáculos.</p>
          </div>
          <div className={styles.eticsPrincipleGridItem}>
            <FiCoffee size={110} />
            <h4>trabalhamos</h4>
            <p>De forma incansável para cumprir nossa missão social.</p>
          </div>
          <div className={styles.eticsPrincipleGridItem}>
            <FiSend size={110} />
            <h4>sabemos</h4>
            <p>Que sempre é possível ir um pouquinho além a cada dia.</p>
          </div>
          <div className={styles.eticsPrincipleGridItem}>
            <FiUsers size={110} />
            <h4>valorizamos</h4>
            <p>Nossa equipe, prezamos pessoas e não bens.</p>
          </div>
          <div className={styles.eticsPrincipleGridItem}>
            <FiLoader size={110} />
            <h4>o progresso</h4>
            <p>Depende de trabalharmos juntos e continuamente, dia após dia.</p>
          </div>
          <div className={styles.eticsPrincipleGridItem}>
            <FiBarChart size={110} />
            <h4>recompensa</h4>
            <p>Ver destinos sendo mudados através da iniciativa do amor.</p>
          </div>
        </div>
      </section>

      <section className={styles.technician}>
        <h2 className={styles.title}>Equipe do IAA</h2>
        <div className={styles.technicianGrid}>
          <div className={styles.technicianGridItem}>
            <div className={styles.blueContainer}>
              <p>Moisés de Andrade</p>
              <span>Presidente do IAA</span>
            </div>
            <img loading="lazy" src="/ahhhhh.jpeg" alt="" />
          </div>
          <div className={styles.technicianGridItem}>
            <div className={styles.blueContainer}>
              <p>Alice Lopes</p>
              <span>Vice-presidente do IAA</span>
            </div>
            <img loading="lazy" src="/alice.png" alt="" />
          </div>
          <div className={styles.technicianGridItem}>
            <div className={styles.blueContainer}>
              <p>Margareth Castro</p>
              <span>Tesoureira</span>
            </div>
            <img loading="lazy" src="/margo.png" alt="" />
          </div>
          <div className={styles.technicianGridItem}>
            <div className={styles.blueContainer}>
              <p>Gian Henriques</p>
              <span>Gerente de comunicações</span>
            </div>
            <img loading="lazy" src="/GIAN.jpg" alt="" />
          </div>
          <div className={styles.technicianGridItem}>
            <div className={styles.blueContainer}>
              <p>Yoli</p>
              <span>Financeiro</span>
            </div>
            <img loading="lazy" src="/yoli.png" alt="" />
          </div>
          <div className={styles.technicianGridItem}>
            <div className={styles.blueContainer}>
              <p>Alessandra Silva</p>
              <span>Assistente Social</span>
            </div>
            <img loading="lazy" src="/alessandra.jpg" alt="" />
          </div>
          <div className={styles.technicianGridItem}>
            <div className={styles.blueContainer}>
              <p>Larissa Abdo</p>
              <span>Psicóloga</span>
            </div>
            <img loading="lazy" src="/larissa.png" alt="" />
          </div>
          <div className={styles.technicianGridItem}>
            <div className={styles.blueContainer}>
              <p>Geovania Silveira</p>
              <span>Orientadora social</span>
            </div>
            <img loading="lazy" src="/ge.jpeg" alt="" />
          </div>
          <div className={styles.technicianGridItem}>
            <div className={styles.blueContainer}>
              <p>Vânia Machado</p>
              <span>Professora de dança</span>
            </div>
            <img loading="lazy" src="/vania.jpeg" alt="" />
          </div>
        </div>
      </section>

      <section className={styles.projects}>
        <h2 className={styles.title}>Nossos Projetos</h2>
        <p>
          Você pode clicar nos projetos abaixo para saber como cada um funciona
          e como cooperar com os mesmos.
        </p>

        <ProjectsSlider />
      </section>
    </main>
  );
}
