import { useEffect, useState } from "react";
import { FaArrowCircleUp } from "react-icons/fa";
import styles from "./styles.module.scss";

export default function BackToTop() {
  const [showScroll, setShowScroll] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (!showScroll && window.pageYOffset > 300) {
        setShowScroll(true);
      } else if (showScroll && window.pageYOffset <= 300) {
        setShowScroll(false);
      }
    });
  }, [showScroll]);

  const scrollTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <FaArrowCircleUp
      onClick={scrollTop}
      className={styles.scrollTop}
      style={{ height: 40, display: showScroll ? "flex" : "none" }}
    />
  );
}
