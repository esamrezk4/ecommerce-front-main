import React from "react";
import styles from "./styles.module.css";

const GridList = ({ children, items }) => {
  const renderItems = items.map((item) =>
    React.cloneElement(children, { key: item.id, ...item })
  );

  const { grid } = styles;
  return <div className={grid}>{renderItems}</div>;
};

export default GridList;
