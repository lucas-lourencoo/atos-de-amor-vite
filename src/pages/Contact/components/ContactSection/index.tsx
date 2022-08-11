import { FaEnvelope, FaMapPin, FaPhone } from "react-icons/fa";
import styles from "./styles.module.scss";

export function ContactSection() {
  return (
    <div className={styles.contactContainer}>
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3686.4747489895863!2d-54.578686789826705!3d-20.4676897301537!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x9486e8aa64cd77c1%3A0xb934fac7e8d9d2b5!2sMinist%C3%A9rio%20Atos%20de%20Justi%C3%A7a!5e0!3m2!1spt-BR!2sbr!4v1614717544053!5m2!1spt-BR!2sbr"
        width="600"
        height="450"
        loading="lazy"
      ></iframe>
      <div className={styles.contactModal}>
        <header>
          <h3>Contato</h3>
          <p>
            Em caso de dúvidas, doações ou queira conhecer nosso trabalho, entre
            em contato conosco.
          </p>
        </header>

        <ul>
          <li>
            <FaMapPin size={40} />
            <div className={styles.contactModalAdress}>
              <h4>Endereço</h4>
              <p>
                Av. Ministro João Arinos, 4136 <br /> B. Tiradentes, Campo
                Grande | MS.
              </p>
            </div>
          </li>
          <li>
            <FaPhone size={40} />
            <div className={styles.contactModalAdress}>
              <h4>Fone</h4>
              <p>(+55) 67 | 3341-6317</p>
            </div>
          </li>
          <li>
            <FaEnvelope size={40} />
            <div className={styles.contactModalAdress}>
              <h4>E-mail:</h4>
              <p>contato@atosdeamor.org</p>
            </div>
          </li>
        </ul>
      </div>
    </div>
  );
}
