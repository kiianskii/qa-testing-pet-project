import React from "react";
import s from "./MaterialsPage.module.css";

const MaterialsPage = () => {
  return (
    <section className={s.page}>
      <div className={s.literature}>
        <h3 className={s.title}>Useful literature</h3>
        <ol className={s.lit_list}>
          <li className={s.lit_item}>Testing dot.com Savin.</li>
          <li className={s.lit_item}>
            A mental hospital in the hands of patients.
          </li>
          <li className={s.lit_item}>Scrum. J. Sutherland.</li>
        </ol>
      </div>
      <div className={s.resource}>
        <h3 className={s.title}>Useful resources</h3>
        <ol className={s.lit_list}>
          <li className={s.lit_item}>dou.ua</li>
          <li className={s.lit_item}>Habr</li>
          <li className={s.lit_item}>facebook.com/QA</li>
        </ol>
      </div>
    </section>
  );
};

export default MaterialsPage;
