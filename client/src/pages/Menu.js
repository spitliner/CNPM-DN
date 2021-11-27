import React, { Component, useState } from "react";
import MenuList from "../components/MenuList";
import Categories from "../components/Categories";
import "./Menu.css";
import image from "../images/b.png";
const Menu = ({ items, history, cookies }) => {
  const allCategories = ["ALL", ...new Set(items.map((item) => item.category))];

  const [menuItems, setMenuItems] = useState(items);
  const [activeCategory, setActiveCategory] = useState("ALL");
  const [categories, setCategories] = useState(allCategories);

  const filterItems = (category) => {
    setActiveCategory(category);
    if (category === "ALL") {
      setMenuItems(items);
      console.log("MenuItem", menuItems);
      return;
    }
    const newItems = items.filter((item) => item.category === category);
    setMenuItems(newItems);
  };
  return (
    <main className="background">
      <div className="welcome">
        Welcome to our restaurent!
        <br />
        Scroll down to the view menu
      </div>
      <div className="background">
        <section className="menu section">
          <div className="title">
            <h2> Menu List </h2> <div className="underline"> </div>{" "}
          </div>
          <Categories
            categories={categories}
            activeCategory={activeCategory}
            filterItems={filterItems}
          />{" "}
          <MenuList cookies={cookies} history={history} items={menuItems} />{" "}
        </section>{" "}
      </div>
    </main>
  );
};

export default Menu;
