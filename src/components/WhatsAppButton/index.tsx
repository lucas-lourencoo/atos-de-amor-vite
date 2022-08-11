import { FaWhatsapp } from "react-icons/fa";
import styles from "./styles.module.scss";

export default function WhatsAppButton() {
  return (
    <a
      href="https://api.whatsapp.com/send?phone=556792708210&text=Olá! Gostaria de mais informações sobre o IAA."
      id={styles.whatsapp}
    >
      <FaWhatsapp />
    </a>
  );
}
