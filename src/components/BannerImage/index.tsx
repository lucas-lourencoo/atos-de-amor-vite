import styles from "./styles.module.scss";

interface BannerImageProps {
  image: string;
  title: string;
}

export default function BannerImage(props: BannerImageProps) {
  const mystyle = {
    backgroundImage: `url(${props.image})`,
  };

  return (
    <section className={styles.bannerImageContainer} style={mystyle}>
      <h1>{props.title}</h1>
    </section>
  );
}
