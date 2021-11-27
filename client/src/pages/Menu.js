import React, { Component, useState } from "react";
import MenuList from "../components/MenuList";
import Categories from "../components/Categories";
import "./Menu.css";

const Menu = ({ items, history, cookies }) => {
  const allCategories = ["all", ...new Set(items.map((item) => item.category))];

  const [menuItems, setMenuItems] = useState(items);
  const [activeCategory, setActiveCategory] = useState("");
  const [categories, setCategories] = useState(allCategories);

  const filterItems = (category) => {
    setActiveCategory(category);
    if (category === "all") {
      setMenuItems(items);
      console.log("MenuItem", menuItems);
      return;
    }
    const newItems = items.filter((item) => item.category === category);
    setMenuItems(newItems);
  };
  return (
    <main>
      <section className="menu section">
        <div className="title">
          <h2> Menu List </h2> <div className="underline"> </div>{" "}
        </div>{" "}
        <Categories
          categories={categories}
          activeCategory={activeCategory}
          filterItems={filterItems}
        />{" "}
        <MenuList cookies={cookies} history={history} items={menuItems} />{" "}
      </section>{" "}
    </main>
  );
};

export default Menu;
