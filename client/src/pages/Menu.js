import React, { Component, useState } from "react";
import MenuList from "../components/MenuList";
import Categories from "../components/Categories";
import "./Menu.css";

const Menu = ({ items, history }) => {
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
        <MenuList history={history} items={menuItems} />{" "}
      </section>{" "}
    </main>
  );
};

export default Menu;

export const FoodDetail = [
  {
    id: 21,
    imgUrl:
      "https://hallmark.brightspotcdn.com/dims4/default/5beba82/2147483647/strip/true/crop/500x281+0+0/resize/1140x640!/quality/90/?url=http%3A%2F%2Fhallmark-channel-brightspot.s3.amazonaws.com%2Fa2%2F24%2Fc5371a577db4a441383a914b79b8%2Fhf-ep2111-product-cristina-cooks.jpg",
    name: "CAKE",
    description: "DESSERT",
    pricePU: 4.8,
  },
];
