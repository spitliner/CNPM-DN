import React from "react";
import { confirmAlert } from "react-confirm-alert";
import "react-confirm-alert/src/react-confirm-alert.css";
import Popup from "reactjs-popup";
import "reactjs-popup/dist/index.css";
import "./AdminMenuList.css";
import EditMenuForm from "./EditMenuForm";
import MenuDetail from "../pages/MenuDetail";

const AdminMenuList = ({ items, history, cookies, categories }) => {
  var renderStar = (star) => {
    star = Math.floor(star);
    var yellowStar;
    var whiteStar;
    yellowStar = [...Array(star)].map((element, index) => (
      <li key={index} className={"menu-list-star menu-list-selected"}></li>
    ));
    whiteStar = [...Array(5 - star)].map((element, index) => (
      <li key={index + 10} className={"menu-list-star"}></li>
    ));
    return (
      <ul className="menu-list-ratings">
        {yellowStar}
        {whiteStar}
      </ul>
    );
  };

  return (
    <div className="section-center">
      {items.map((item) => {
        const { _id, name, imgUrl, description, pricePU, star } = item;
        return (
          <div key={_id} className="menu-item">
            <img src={imgUrl} alt={name} className="photo" />
            <div className="item-info">
              <div className="sub-item-info">
                <header>
                  <h4> {name} </h4>
                  <div className="price"> $ {pricePU} </div>
                </header>
                <div>{renderStar(star)}</div>
                <p className="item-text"> {description} </p>
                {cookies.get("user") && cookies.get("admin") && (
                  <Popup
                    className="edit-menu-popup"
                    modal
                    trigger={
                      <button className="edit-dish-btn">
                        Edit Food Detail
                      </button>
                    }
                  >
                    {(close) => (
                      <div className="edit-menu-pop-up-body">
                        <div className="edit-menu-popup-dish-detail">
                          <MenuDetail
                            history={history}
                            cookies={cookies}
                            updateAllFoods={() => {
                              alert("You are in Edit Menu Page");
                            }}
                            _id={item._id}
                            menuItems={items}
                          />
                        </div>
                        <div className="edit-menu-popup-form">
                          <EditMenuForm
                            _id={item._id}
                            history={history}
                            menuItems={items}
                            categories={categories}
                          />
                        </div>
                      </div>
                    )}
                  </Popup>
                )}
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default AdminMenuList;
