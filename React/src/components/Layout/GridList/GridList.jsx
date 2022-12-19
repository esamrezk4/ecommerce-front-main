import { cloneElement } from "react";
import styles from "./styles.module.css";
import Loading from "../Loading/Loading";

const GridList = ({ children, items, loading, error }) => {
  const renderItems = items.map((item) =>
    cloneElement(children, { key: item.id, ...item })
  );

  const { grid } = styles;
  return (
    <Loading
      loading={loading}
      error={error}
    >
      <div className={grid}>{renderItems}</div>
    </Loading>
  );
};

export default GridList;
