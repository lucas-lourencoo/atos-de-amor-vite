import { Link } from "react-router-dom";
import styles from "./styles.module.scss";

const DonateButtons = () => {
  const copiarChave = (event: any) => {
    navigator.clipboard.writeText("15454003000172");
    event.target.innerText = "COPIADO!";
  };
  return (
    <div className={styles.bannerContainerButtons}>
      <Link to="/ajude/estendaamao">Outras formas de doar</Link>

      <button onClick={copiarChave}>Copiar chave pix</button>
    </div>
  );
};

export default DonateButtons;
