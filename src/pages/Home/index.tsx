import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import ProjectsSlider from "../../components/ProjectsSlider";
import { Post } from "../../contexts/PostsContext";
import { api } from "../../services/axios";
import { ContactSection } from "../Contact/components/ContactSection";
import Banner from "./components/Banner";
import { DepositoBanner } from "./components/DepositoBanner";
import PhrasesSlider from "./components/PhrasesSlider";
import ProjectsEspecifys from "./components/ProjectsEspecifys";
import styles from "./styles.module.scss";

export function Home() {
  const [posts, setPosts] = useState<Post[]>([]);

  useEffect(() => {
    async function getPosts() {
      const { data } = await api
        .get("/posts", {
          params: {
            "populate[0]": "images",
            "pagination[pageSize]": 3,
          },
        })
        .then((res) => res.data);

      const posts = data.map((post: Post) => {
        return {
          id: post.id,
          attributes: {
            title: post.attributes.title,
            content: post.attributes.content.slice(0, 120) + "...",
            images: post.attributes.images,
            updatedAt: new Date(post.attributes.updatedAt).toLocaleDateString(
              "pt-BR",
              {
                day: "2-digit",
                month: "long",
                year: "numeric",
              }
            ),
          },
        };
      });

      setPosts(posts);
    }

    getPosts();
  });

  return (
    <main>
      <Banner />

      <section className={styles.projects} id="project">
        <h2>Projetos em destaque</h2>
        <div className={styles.projectGrid}>
          <div className={styles.projectGridCard}>
            <figure>
              <img loading="lazy" src="/foto_meninos.png" alt="" />
            </figure>
            <h3>Casa de Meninos</h3>
            <p>
              A <strong>Casa de Meninos Atos de Amor</strong>, tem o intuito de
              garantir os direitos fundamentais de crian??as e adolescentes do
              sexo masculino.
            </p>
            <Link to="/projetos/casa-de-meninos">Saiba mais</Link>
          </div>
          <div className={styles.projectGridCard}>
            <figure>
              <img loading="lazy" src="/mateus_foto.png" alt="" />
            </figure>
            <h3>Mateus 25:35</h3>
            <p>
              O Projeto <strong>Mateus 25:35</strong> trabalha em tr??s esferas
              urbanas que s??o nas ruas, bairros & Paraguai. Voc?? pode ser um
              cooperador deste projeto.
            </p>
            <Link to="/projetos/mateus-25-35-ruas">Saiba mais</Link>
          </div>
          <div className={styles.projectGridCard}>
            <figure>
              <img loading="lazy" src="/ATEVIDA.png" alt="" />
            </figure>
            <h3>Arte & vida</h3>
            <p>
              O Projeto <strong>Arte & vida</strong> trabalha pensando nas
              pessoas menos favorecidas, que tem dificuldades financeiras e/ou
              para a provis??o di??ria.
            </p>
            <Link to="/projetos/artevida">Saiba mais</Link>
          </div>
        </div>
      </section>
      <section className={styles.videoInstitucional}>
        <h2 className={styles.title}>V??deo institucional</h2>
        <iframe
          width="560"
          height="315"
          src="https://www.youtube.com/embed/h8bh9kMbxsk"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
      </section>

      <section className={styles.projectEspecifys}>
        <ProjectsEspecifys />
        <ProjectsSlider />
      </section>

      <section>
        <PhrasesSlider />
      </section>

      <section>
        <DepositoBanner />
      </section>

      <section className={styles.news}>
        <h2 className={styles.title}>??ltimas not??cias</h2>
        <div className={styles.newsContainer}>
          {posts.map((post: Post) => {
            return (
              <div className={styles.card} key={post.id}>
                <figure>
                  <img
                    src={post.attributes.images.data[0].attributes.url}
                    alt=""
                  />
                </figure>
                <div className={styles.text}>
                  <h4>{post.attributes.title}</h4>
                  <Link to={`/blog/${post.id}`}>Leia mais</Link>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      <section>
        <ContactSection />
      </section>
    </main>
  );
}
