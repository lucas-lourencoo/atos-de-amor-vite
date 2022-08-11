import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ImageGallery from "react-image-gallery";
import showdown from "showdown";
import { FaRegClock } from "react-icons/fa";
import BannerImage from "../../components/BannerImage";
import { api } from "../../services/axios";
import styles from "./styles.module.scss";
import "react-image-gallery/styles/css/image-gallery.css";

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

export function SingleBlog() {
  const [post, setPost] = useState({} as PostsInterface);
  const { id: postId } = useParams();

  useEffect(() => {
    async function getData() {
      const converter = new showdown.Converter();

      const { data } = await api
        .get(`/posts/${postId}?populate[0]=images`)
        .then((res) => res.data);

      const post = {
        id: data?.id,
        attributes: {
          title: data?.attributes.title,
          content: converter.makeHtml(data?.attributes.content),
          images: data?.attributes.images,
          updatedAt: new Date(data?.attributes.updatedAt).toLocaleDateString(
            "pt-BR",
            {
              day: "2-digit",
              month: "long",
              year: "numeric",
            }
          ),
        },
      };

      setPost(post);
    }

    getData();
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
