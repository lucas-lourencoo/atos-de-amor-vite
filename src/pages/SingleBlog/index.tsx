import { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ImageGallery from "react-image-gallery";
import { FaRegClock } from "react-icons/fa";
import BannerImage from "../../components/BannerImage";
import styles from "./styles.module.scss";
import "react-image-gallery/styles/css/image-gallery.css";
import { Post, PostsContext } from "../../contexts/PostsContext";

export function SingleBlog() {
  const { posts } = useContext(PostsContext);
  const [post, setPost] = useState({} as Post);
  const { id: postId } = useParams();

  useEffect(() => {
    const post = posts.find((post) => post.id.toString() === postId)!;
    setPost(post);
  }, []);

  const images = JSON.parse(post?.images).map((image: any) => {
    return {
      original: image.url,
      thumbnail: image.formats.thumbnail.url,
      originalAlt: image.name,
      thumbnailAlt: image.name,
    };
  });

  return (
    <main>
      <BannerImage image="/blog.png" title="Blog" />

      <section className={styles.containerzin}>
        <article>
          <h1>{post?.title}</h1>
          <div className={styles.time}>
            <FaRegClock />
            {post?.updatedAt}
          </div>

          {post?.images && (
            <ImageGallery
              items={images}
              autoPlay={true}
              slideInterval={5000}
              slideDuration={800}
              additionalClass="gallery"
              lazyLoad={true}
            />
          )}

          <div dangerouslySetInnerHTML={{ __html: post?.content }}></div>
        </article>
      </section>
    </main>
  );
}
