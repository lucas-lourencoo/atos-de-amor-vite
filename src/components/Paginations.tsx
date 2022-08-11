import { useEffect, useState } from "react";
import styles from "../styles/components/Pagination.module.css";

interface PaginationInterface {
  currentPage: number;
  paginate: (state: string) => void;
}

const Pagination = ({ paginate, currentPage }: PaginationInterface) => {
  const [isActive, setIsActive] = useState(false);

  useEffect(() => {
    if (currentPage !== 1) setIsActive(true);
    else setIsActive(false);
  }, [currentPage]);

  return (
    <nav>
      <div className={styles.container}>
        {isActive && (
          <a onClick={() => paginate("down")} className={styles.pageLink}>
            Voltar
          </a>
        )}

        <a onClick={() => paginate("up")} className={styles.pageLink}>
          Ver Mais
        </a>
      </div>
    </nav>
  );
};

export default Pagination;
