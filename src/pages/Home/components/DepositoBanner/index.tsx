import DonateButtons from "../../../../components/DonateButtons";
import styles from "./styles.module.scss";

export function DepositoBanner() {
  return (
    <div className={styles.depositoBannerContainer}>
      <img loading="lazy" src="banner_deposito-min-1.png" alt="" />

      <DonateButtons />
    </div>
  );
}
