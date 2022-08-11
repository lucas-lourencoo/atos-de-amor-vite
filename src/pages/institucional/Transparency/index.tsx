import { useEffect, useState } from "react";
import {
  FaUtensils,
  FaCoffee,
  FaCartPlus,
  FaRegFilePdf,
  FaCaretDown,
} from "react-icons/fa";
import { FiHome } from "react-icons/fi";
import { CircularProgressbarWithChildren } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import BannerImage from "../../../components/BannerImage";
import { Link } from "react-router-dom";
import ProjectsSlider from "../../../components/ProjectsSlider";
import styles from "./styles.module.scss";

export function Transparency() {
  const [refeicoes, setRefeicoes] = useState(0);
  const [lanches, setLanches] = useState(0);
  const [suco, setSuco] = useState(0);
  const [family, setFamily] = useState(0);

  useEffect(() => {
    if (refeicoes < 9505) {
      setTimeout(() => {
        setRefeicoes(refeicoes + 155);
      }, 5);
    }
    if (lanches < 2785) {
      setTimeout(() => {
        setLanches(lanches + 40);
      }, 5);
    }
    if (suco < 1230) {
      setTimeout(() => {
        setSuco(suco + 16);
      }, 5);
    }
    if (family < 198) {
      setTimeout(() => {
        setFamily(family + 3);
      }, 5);
    }
  });

  const activeDropdown = (id: string) => {
    document.getElementById(id)?.classList.toggle(styles.active);
  };

  return (
    <main className={styles.transparencia}>
      <BannerImage image="/transparencias2.png" title="Transparência" />

      <div className={styles.breadcrumb}>
        <p>
          <Link to="/">
            <a>
              <FiHome />
            </a>
          </Link>
          /<span>Institucional</span>/<span>Transparência</span>
        </p>
      </div>

      <section className={styles.transparenciaDesempenho}>
        <span>Confira nosso desempenho nos últimos anos.</span>

        <span>
          "Feliz é o homem que com honestidade conduz os seus negócios." Salmos
          112:5
        </span>

        <div className={styles.transparenciaDesempenhoGrid}>
          <div className={styles.transparenciaDesempenhoGridItem}>
            <CircularProgressbarWithChildren
              value={refeicoes}
              styles={{ path: { stroke: "#ba720f" } }}
              maxValue={9505}
            >
              <FaUtensils size={70} />
            </CircularProgressbarWithChildren>
            <p>{refeicoes}</p>
            <p>REFEIÇÕES</p>
            <span>servidas em 2018</span>
          </div>
          <div className={styles.transparenciaDesempenhoGridItem}>
            <CircularProgressbarWithChildren
              value={lanches}
              styles={{ path: { stroke: "#ba720f" } }}
              maxValue={2785}
            >
              <FaCoffee size={70} />
            </CircularProgressbarWithChildren>
            <p>{lanches}</p>
            <p>LANCHES</p>
            <span>servidos para crianças em 2018</span>
          </div>
          <div className={styles.transparenciaDesempenhoGridItem}>
            <CircularProgressbarWithChildren
              value={suco}
              styles={{ path: { stroke: "#ba720f" } }}
              maxValue={1230}
            >
              <FaUtensils size={70} />
            </CircularProgressbarWithChildren>
            <p>{suco}</p>
            <p>LITROS DE SUCO</p>
            <span>servidas em 2018</span>
          </div>
          <div className={styles.transparenciaDesempenhoGridItem}>
            <CircularProgressbarWithChildren
              value={family}
              styles={{ path: { stroke: "#ba720f" } }}
              maxValue={198}
            >
              <FaCartPlus size={70} />
            </CircularProgressbarWithChildren>
            <p>{family}</p>
            <p>FAMÍLIAS</p>
            <span>receberam 1 cesta básica em 2018</span>
          </div>
        </div>
      </section>

      <section className={styles.transparenciaRelatorio}>
        <h2 className={styles.title}>Relatórios do ano corrente</h2>
        <div className={styles.transparenciaTimeline}>
          <div className={styles.transparenciaTimelineItem}>
            <p>Janeiro de 2019</p>
            <p>
              Projeto Socorre Vidas realizou ao todo 20 atendimentos, desses 20
              atendimentos 19 pessoas/famílias receberam 01 cesta básica, 04
              famílias atendidas com vestuários em geral, fraldas, mochilas e
              utensílios domésticos.
            </p>
            <p>
              Mateus 25:35 Ruas e Bairros forneceu 200 refeições 160L de suco 92
              Banhos.
            </p>
            <p>Missão Paraguai forneceu 50L de suco e 300 refeições</p>
          </div>

          <div className={styles.trasparenciaTimelineItemContainerRight}>
            <div className={styles.transparenciaTimelineItemRight}>
              <p>Fevereiro de 2018</p>
              <p>
                Confira os relatórios de prestação de contas do mês de Fevereiro
                de 2019.
              </p>
            </div>
          </div>

          <div className={styles.transparenciaTimelineItem}>
            <p>Março de 2019</p>
            <p>
              Confira os relatórios de prestação de contas do mês de Março de
              2019.
            </p>
          </div>
        </div>
      </section>

      <section className={styles.transparenciaPastYears}>
        <h2 className={styles.title}>Documentos importantes</h2>
        <button onClick={() => activeDropdown("0")}>
          2022
          <FaCaretDown />
        </button>
        <div id="0" className={styles.docsContainer}>
          <a href="/docs/casa_meninos/Carta correção.pdf" target="__blank">
            <FaRegFilePdf size={20} />
            Carta correção - Projeto Casa de Meninos
          </a>
          <a href="/docs/casa_meninos/Extrato bancario.pdf" target="__blank">
            <FaRegFilePdf size={20} />
            Extrato Bancário - Projeto Casa de Meninos
          </a>
          <a href="/docs/casa_meninos/Fiat Enzo.pdf" target="__blank">
            <FaRegFilePdf size={20} />
            Sobre o veículo - Projeto Casa de Meninos
          </a>
          <a
            href="/docs/casa_meninos/NF fiat e fotos do carro.pdf"
            target="__blank"
          >
            <FaRegFilePdf size={20} />
            Nota Fiscal e fotos do carro - Projeto Casa de Meninos
          </a>
          <a
            href="/docs/casa_meninos/Plano de trabalho Anexo I.pdf"
            target="__blank"
          >
            <FaRegFilePdf size={20} />
            Plano de trabalho Anexo I - Projeto Casa de Meninos
          </a>
          <a
            href="/docs/casa_meninos/Prestação de contas Anexo V.pdf"
            target="__blank"
          >
            <FaRegFilePdf size={20} />
            Prestação de contas Anexo V - Projeto Casa de Meninos
          </a>
          <a
            href="/docs/casa_meninos/Prestação de contas Anexo VI.pdf"
            target="__blank"
          >
            <FaRegFilePdf size={20} />
            Prestação de contas Anexo VI - Projeto Casa de Meninos
          </a>
          <a
            href="/docs/casa_meninos/Prestação de contas Anexo VII.pdf"
            target="__blank"
          >
            <FaRegFilePdf size={20} />
            Prestação de contas Anexo VII - Projeto Casa de Meninos
          </a>
          <a
            href="/docs/casa_meninos/Prestação de contas Anexo VIII.pdf"
            target="__blank"
          >
            <FaRegFilePdf size={20} />
            Prestação de contas Anexo VIII - Projeto Casa de Meninos
          </a>
          <a
            href="/docs/casa_meninos/utilização veicular Julho 2020.pdf"
            target="__blank"
          >
            <FaRegFilePdf size={20} />
            Utilização veicular | Julho 2020 - Projeto Casa de Meninos
          </a>
          <a
            href="/docs/casa_meninos/utilização veicular Agosto 2020.pdf"
            target="__blank"
          >
            <FaRegFilePdf size={20} />
            Utilização veicular | Agosto 2020 - Projeto Casa de Meninos
          </a>
          <a
            href="/docs/casa_meninos/utilização veicular Setembro 2020.pdf"
            target="__blank"
          >
            <FaRegFilePdf size={20} />
            Utilização veicular | Setembro 2020 - Projeto Casa de Meninos
          </a>
          <a
            href="/docs/casa_meninos/utilização veicular Outubro 2020.pdf"
            target="__blank"
          >
            <FaRegFilePdf size={20} />
            Utilização veicular | Outubro 2020 - Projeto Casa de Meninos
          </a>
          <a
            href="/docs/casa_meninos/utilização veicular Novembro 2020.pdf"
            target="__blank"
          >
            <FaRegFilePdf size={20} />
            Utilização veicular | Novembro 2020 - Projeto Casa de Meninos
          </a>
          <a
            href="/docs/casa_meninos/utilização veicular Dezembro 2020.pdf"
            target="__blank"
          >
            <FaRegFilePdf size={20} />
            Utilização veicular | Dezembro 2020 - Projeto Casa de Meninos
          </a>
          <a
            href="/docs/casa_meninos/utilização veicular Janeiro 2021.pdf"
            target="__blank"
          >
            <FaRegFilePdf size={20} />
            Utilização veicular | Janeiro 2021 - Projeto Casa de Meninos
          </a>
          <a
            href="/docs/casa_meninos/utilização veicular Fevereiro 2021.pdf"
            target="__blank"
          >
            <FaRegFilePdf size={20} />
            Utilização veicular | Fevereiro 2021 - Projeto Casa de Meninos
          </a>
        </div>
        <button onClick={() => activeDropdown("1")}>
          2021
          <FaCaretDown />
        </button>
        <div id="1" className={styles.docsContainer}>
          <a
            href="/docs/PLANO DE TRABALHO - Construindo Futuro.pdf"
            target="__blank"
          >
            <FaRegFilePdf size={20} />
            Plano de trabalho - Projeto Construindo o futuro
          </a>
          <a
            href="/docs/TERMO DE FOMENTO - Construindo Futuro.pdf"
            target="__blank"
          >
            <FaRegFilePdf size={20} />
            Termo de fomento - Projeto Construindo o futuro
          </a>
          <a
            href="/docs/casa_pao/TERMO DE FOMENTO 30734 2021.pdf"
            target="__blank"
          >
            <FaRegFilePdf size={20} />
            Termo de fomento - Projeto Casa do Pão
          </a>
          <a href="/docs/casa_pao/PLANO DE TRABALHO.pdf" target="__blank">
            <FaRegFilePdf size={20} />
            Plano de trabalho- Projeto Casa do Pão
          </a>
        </div>
        <button onClick={() => activeDropdown("2")}>
          2019
          <FaCaretDown />
        </button>
        <div id="2" className={styles.docsContainer}>
          <a href="/docs/Balanço e DRE 2019.pdf" target="__blank">
            <FaRegFilePdf size={20} />
            Balanço e DRE 2019
          </a>
          <a href="/docs/DRE 2019 - Analitico.pdf" target="__blank">
            <FaRegFilePdf size={20} />
            DRE 2019 - Analitico
          </a>
          <a href="/docs/ESTATUTO IAA 2019.pdf" target="__blank">
            <FaRegFilePdf size={20} />
            Estatuto IAA - 2019
          </a>
          <a href="/docs/TERMO DE FOMENTO.pdf" target="__blank">
            <FaRegFilePdf size={20} />
            Termo de fomento - Arte & Vida
          </a>
          <a href="/docs/PLANO DE TRABALHO.pdf" target="__blank">
            <FaRegFilePdf size={20} />
            Plano de trabalho - Arte & Vida
          </a>
          <a href="/docs/OBJETO DA PARCERIA.pdf" target="__blank">
            <FaRegFilePdf size={20} />
            Objeto da parceria - Arte & Vida
          </a>
        </div>

        <button onClick={() => activeDropdown("3")}>
          2018 <FaCaretDown />
        </button>
        <div id="3" className={styles.docsContainer}>
          <a href="/docs/DRE 2018 - Analitico.pdf" target="__blank">
            <FaRegFilePdf size={20} />
            DRE 2018 - Analitico
          </a>
          <a href="/docs/Balanço e DRE 2018.pdf" target="__blank">
            <FaRegFilePdf size={20} />
            Balanço e DRE 2018
          </a>
        </div>

        <button onClick={() => activeDropdown("4")}>
          2016 <FaCaretDown />
        </button>
        <div id="4" className={styles.docsContainer}>
          <a href="/docs/Ata de posse.pdf" target="__blank">
            <FaRegFilePdf size={20} />
            Ata de posse
          </a>
          <a href="/docs/ata.2016-completa.pdf" target="__blank">
            <FaRegFilePdf size={20} />
            Ata 2016 - Completa
          </a>
        </div>

        <button onClick={() => activeDropdown("5")}>
          Certificações <FaCaretDown />
        </button>
        <div id="5" className={styles.docsContainer}>
          <a href="/docs/CEBAS.pdf" target="__blank">
            <FaRegFilePdf size={20} />
            CEBAS
          </a>
          <a href="/docs/CMDCA - inscricao.pdf" target="__blank">
            <FaRegFilePdf size={20} />
            CMDCA - Inscrição
          </a>
          <a href="/docs/CMDCA - registro.pdf" target="__blank">
            <FaRegFilePdf size={20} />
            CMDCA - Registro
          </a>
          <a href="/docs/CREDENCIAMENTO SEDHAST.pdf" target="__blank">
            <FaRegFilePdf size={20} />
            Credenciamento SEDHAST
          </a>
          <a href="/docs/UTILIDADE PÚBLICA ESTADUAL.pdf" target="__blank">
            <FaRegFilePdf size={20} />
            Utilidade pública estadual
          </a>
          <a href="/docs/UTILIDADE PÚBLICA MUNICIPAL.pdf" target="__blank">
            <FaRegFilePdf size={20} />
            Utilidade pública municipal
          </a>
        </div>
      </section>
    </main>
  );
}
