import { useEffect } from "react";
import {
  FaBarcode,
  FaGlobeAmericas,
  FaHourglass,
  FaRegHandshake,
} from "react-icons/fa";
import styles from "./styles.module.scss";

interface PassForProps {
  text: {
    text1: string;
    text2: string;
    text3: string;
    text4: string;
  };
}

export default function PassFor(props: PassForProps) {
  useEffect(() => {
    const p = document.getElementById(styles.text1);
    p && (p.innerHTML = props.text.text1);
  }, []);

  return (
    <section className={styles.cardsGrid}>
      <div className={styles.cardsGridItem}>
        <div className={styles.cardsGridItemIcon}>
          <FaGlobeAmericas />
        </div>
        <h4>PASSO 01</h4>
        <div className={styles.cardsGridItemHiden}>
          <p id={styles.text1}></p>
        </div>
      </div>
      <div className={styles.cardsGridItem}>
        <div className={styles.cardsGridItemIcon}>
          <FaHourglass />
        </div>
        <h4>PASSO 02</h4>
        <div className={styles.cardsGridItemHiden}>
          <p>{props.text.text2}</p>
        </div>
      </div>
      <div className={styles.cardsGridItem}>
        <div className={styles.cardsGridItemIcon}>
          <FaRegHandshake />
        </div>
        <h4>PASSO 03</h4>
        <div className={styles.cardsGridItemHiden}>
          <p>{props.text.text3}</p>
        </div>
      </div>
      <div className={styles.cardsGridItem}>
        <div className={styles.cardsGridItemIcon}>
          <FaBarcode />
        </div>
        <h4>PASSO 04</h4>
        <div className={styles.cardsGridItemHiden}>
          <p>{props.text.text4}</p>
        </div>
      </div>
    </section>
  );
}
