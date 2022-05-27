import React from "react";

import st from "./styles.module.scss";

const NotFoundBlock = () => {
  return (
    <div className={st.root}>
      <h1>
        <span>😢</span>
        <br />
        Ничего не найдено
      </h1>
      <p>К сожалении данная страница отсутсвует.</p>
    </div>
  );
};

export default NotFoundBlock;
