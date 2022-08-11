import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { api } from "../../services/axios";
import BannerImage from "../../components/BannerImage";
import { FaCaretRight, FaRegClock } from "react-icons/fa";
import styles from "./styles.module.scss";

interface PostsInterface {
  id: number;
  attributes: {
    title: string;
    updatedAt: string;
    content: string;
    images: {
      data: [
        {
          attributes: {
            url: string;
          };
        }
      ];
    };
  };
}

export function Blog() {
  const [newPosts, setPosts] = useState([] as PostsInterface[]);
  const [postsFiltered, setPostsFiltered] = useState([] as PostsInterface[]);

  useEffect(() => {
    async function getPosts() {
      const { data } = await api
        .get("/posts?populate[0]=images&sort[1]=publishedAt%3Adesc")
        .then((res) => res.data);

      const posts = data.map((post: PostsInterface) => {
        return {
          id: post.id,
          attributes: {
            title: post.attributes.title,
            content: post.attributes.content,
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
  }, []);

  const filter = (event: any) => {
    const posts = newPosts.filter((post) =>
      post.attributes.content.includes(event.target.textContent)
    );

    setPostsFiltered(posts);

    document.getElementsByName("button").forEach((item) => {
      item.classList.remove(styles.active);
    });

    event.target.classList.toggle(styles.active);
  };

  return (
    <main>
      <BannerImage image="/blog.png" title="Blog" />

      <section className={styles.container}>
        <div className={styles.filter}>
          <ul>
            <li>
              <FaCaretRight />
              <button onClick={filter} name="button">
                Socorre Vidas
              </button>
            </li>
            <li>
              <FaCaretRight />
              <button onClick={filter} name="button">
                Mateus 25:35
              </button>
            </li>
            <li>
              <FaCaretRight />
              <button onClick={filter} name="button">
                Casa de meninos
              </button>
            </li>
            <li>
              <FaCaretRight />
              <button onClick={filter} name="button">
                Missão Paraguai
              </button>
            </li>
            <li>
              <FaCaretRight />
              <button onClick={filter} name="button">
                Arte & vida
              </button>
            </li>
          </ul>
        </div>

        <div className={styles.cardsGrid} id="postsContainer">
          {postsFiltered.length > 0
            ? postsFiltered.map((post: PostsInterface) => {
                return (
                  <div className={styles.card} key={post.id}>
                    <img
                      src={post.attributes.images.data[0].attributes.url}
                      alt=""
                    />

                    <div className={styles.text}>
                      <div className={styles.time}>
                        <FaRegClock />
                        {post.attributes.updatedAt}
                      </div>
                      <h3>{post.attributes.title}</h3>
                      <p className={styles.content}>
                        {post.attributes.content.slice(0, 120) + "..."}
                      </p>
                      <Link to={`/blog/${post.id}`} className={styles.button}>
                        Leia mais
                      </Link>
                    </div>
                  </div>
                );
              })
            : newPosts.map((post: PostsInterface) => {
                return (
                  <div className={styles.card} key={post.id}>
                    <img
                      src={post.attributes.images.data[0].attributes.url}
                      alt=""
                    />

                    <div className={styles.text}>
                      <div className={styles.time}>
                        <FaRegClock />
                        {post.attributes.updatedAt}
                      </div>
                      <h3>{post.attributes.title}</h3>
                      <p className={styles.content}>
                        {post.attributes.content.slice(0, 120) + "..."}
                      </p>
                      <Link to={`/blog/${post.id}`} className={styles.button}>
                        Leia mais
                      </Link>
                    </div>
                  </div>
                );
              })}
        </div>
      </section>
    </main>
  );
}
