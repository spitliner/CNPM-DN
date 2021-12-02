import React, { Component, useState } from "react";
import AdminMenuList from "../components/AdminMenuList";
import Categories from "../components/Categories";
import "./Menu.css";
import "./AdminMenu.css";
import image from "../images/b.png";

const AdminMenu = (props) => {
  let allCategories = [
    "ALL",
    ...new Set(props.items.map((item) => item.category)),
  ];

  const [menuItems, setMenuItems] = useState(props.items);
  const [activeCategory, setActiveCategory] = useState("ALL");
  const [categories, setCategories] = useState(allCategories);

  React.useEffect(() => {
    setMenuItems(props.items);
    setCategories([
      "ALL",
      ...new Set(props.items.map((item) => item.category)),
    ]);
  }, [props.items]);

  const filterItems = (category) => {
    setActiveCategory(category);
    if (category === "ALL") {
      setMenuItems(props.items);
      return;
    }
    const newItems = props.items.filter((item) => item.category === category);
    setMenuItems(newItems);
  };

  return (
    <main className="background">
      <div className="admin-welcome">
        <div className="admin-welcome-text">
          Restaurant Menu
          <br></br>
          Last edit at 2/12/2021
        </div>
      </div>
      <div className="background">
        <section className="menu section">
          <div className="admin-title">
            <h2> Current Restaurant Menu List </h2>
            <div className="underline"> </div>{" "}
          </div>
          <Categories
            categories={categories}
            activeCategory={activeCategory}
            filterItems={filterItems}
          />{" "}
          <AdminMenuList
            cookies={props.cookies}
            history={props.history}
            items={menuItems}
            categories={categories}
          />{" "}
        </section>{" "}
      </div>
    </main>
  );
};

export default AdminMenu;
