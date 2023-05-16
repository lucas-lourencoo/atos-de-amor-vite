import { useContext, useState } from "react";
import { Link } from "react-router-dom";
import BannerImage from "../../components/BannerImage";
import { FaCaretRight, FaRegClock } from "react-icons/fa";
import styles from "./styles.module.scss";
import { Post, PostsContext } from "../../contexts/PostsContext";

export function Blog() {
  const { posts } = useContext(PostsContext);
  const [postsFiltered, setPostsFiltered] = useState<Post[]>([]);
  console.log("🚀 ~ file: index.tsx:15 ~ filter ~ posts:", posts);

  const filter = (event: any) => {
    const postsFiltered = posts.filter((post) =>
      post.content.includes(event.target.textContent)
    );

    setPostsFiltered(postsFiltered);

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
            ? postsFiltered.map((post) => {
                return (
                  <div className={styles.card} key={post.id}>
                    <img src={JSON.parse(post.images)[0]} alt="" />

                    <div className={styles.text}>
                      <div className={styles.time}>
                        <FaRegClock />
                        {post.updatedAt}
                      </div>
                      <h3>{post.title}</h3>
                      <p className={styles.content}>
                        {post.content.slice(0, 120) + "..."}
                      </p>
                      <Link to={`/blog/${post.id}`} className={styles.button}>
                        Leia mais
                      </Link>
                    </div>
                  </div>
                );
              })
            : posts?.map((post) => {
                return (
                  <div className={styles.card} key={post.id}>
                    <img src={JSON.parse(post.images)[0]} alt="" />

                    <div className={styles.text}>
                      <div className={styles.time}>
                        <FaRegClock />
                        {post.updatedAt}
                      </div>
                      <h3>{post.title}</h3>
                      <p className={styles.content}>
                        {post.content.slice(0, 120) + "..."}
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
