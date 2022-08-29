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

  const images = post?.attributes?.images?.data.map((image: any) => {
    return {
      original: image.attributes.url,
      thumbnail: image.attributes.formats.thumbnail.url,
      originalAlt: image.attributes.name,
      thumbnailAlt: image.attributes.name,
    };
  });

  return (
    <main>
      <BannerImage image="/blog.png" title="Blog" />

      <section className={styles.containerzin}>
        <article>
          <h1>{post?.attributes?.title}</h1>
          <div className={styles.time}>
            <FaRegClock />
            {post?.attributes?.updatedAt}
          </div>

          {post?.attributes?.images && (
            <ImageGallery
              items={images}
              autoPlay={true}
              slideInterval={5000}
              slideDuration={800}
              additionalClass="gallery"
              lazyLoad={true}
            />
          )}

          <div
            dangerouslySetInnerHTML={{ __html: post?.attributes?.content }}
          ></div>
        </article>
      </section>
    </main>
  );
}
