import React from "react";
import s from "./MaterialsPage.module.css";

const MaterialsPage = () => {
  return (
    <section className={s.page}>
      <div className={s.literature}>
        <h3 className={s.title}>Useful literature</h3>
        <ol className={s.lit_list}>
          <li>Testing dot.com Savin.</li>
          <li>A mental hospital in the hands of patients.</li>
          <li>Scrum. J. Sutherland.</li>
        </ol>
      </div>
      <div className={s.resource}>
        <h3 className={s.title}>Useful resources</h3>
        <ol className={s.lit_list}>
          <li>dou.ua</li>
          <li>Habr</li>
          <li>facebook.com/QA</li>
        </ol>
      </div>
    </section>
  );
};

export default MaterialsPage;
