import { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ImageGallery from "react-image-gallery";
import { FaRegClock } from "react-icons/fa";
import BannerImage from "../../components/BannerImage";
import styles from "./styles.module.scss";
import "react-image-gallery/styles/css/image-gallery.css";
import { PostsContext } from "../../contexts/PostsContext";

export function SingleBlog() {
  const { posts } = useContext(PostsContext);
  const { id: postId } = useParams();

  const postFind = posts.find((post) => post.id.toString() === postId)!;

  const images =
    !!postFind?.images &&
    JSON.parse(postFind?.images).map((image: any) => {
      return {
        original: image,
        thumbnail: image,
        originalAlt: image,
        thumbnailAlt: image,
      };
    });

  return (
    <main>
      <BannerImage image="/blog.png" title="Blog" />

      <section className={styles.containerzin}>
        <article>
          <h1>{postFind?.title}</h1>
          <div className={styles.time}>
            <FaRegClock />
            {postFind?.updatedAt}
          </div>

          {postFind?.images && (
            <ImageGallery
              items={images}
              autoPlay={true}
              slideInterval={5000}
              slideDuration={800}
              additionalClass="gallery"
              lazyLoad={true}
            />
          )}

          <p>{postFind?.content}</p>
        </article>
      </section>
    </main>
  );
}
