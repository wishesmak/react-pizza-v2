import React, { useState } from "react";

const Categories = () => {
  const [active, setActive] = useState(0);
  const categories = [
    "Все",
    "Мясные",
    "Вегетарианская",
    "Гриль",
    "Острые",
    "Закрытые",
  ];

  return (
    <div className="categories">
      <ul>
        {categories.map((ctg, i) => (
          <li
            key={ctg + i}
            onClick={() => setActive(i)}
            className={i === active ? "active" : ""}
          >
            {ctg}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Categories;
