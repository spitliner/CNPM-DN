import React, { Component } from "react";

const Menu = ({ items }) => {
    return ( <
        div className = "section-center" > {
            items.map((item) => {
                const { id, title, img, desc, price } = item;
                return ( <
                    article key = { id }
                    className = "menu-item" >
                    <
                    img src = { img }
                    alt = { title }
                    className = "photo" / >
                    <
                    div className = "item-info" >
                    <
                    header >
                    <
                    h4 > { title } < /h4> <
                    h4 className = "price" > $ { price } < /h4> <
                    /header> <
                    p className = "item-text" > { desc } < /p> <
                    button className = "cart" > Add to cart < /button> <
                    /div>


                    <
                    /article>
                );
            })
        } <
        /div>
    );
};

export default Menu;

export const FoodDetail= [
  {
    id: 21,
    imgUrl:
      "https://hallmark.brightspotcdn.com/dims4/default/5beba82/2147483647/strip/true/crop/500x281+0+0/resize/1140x640!/quality/90/?url=http%3A%2F%2Fhallmark-channel-brightspot.s3.amazonaws.com%2Fa2%2F24%2Fc5371a577db4a441383a914b79b8%2Fhf-ep2111-product-cristina-cooks.jpg",
    name: "CAKE",
    description: "DESSERT",
    pricePU: 4.8,
  },
];

