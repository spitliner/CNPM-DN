import React, { Component } from "react";
import { UserContext } from "../context/User";
import "./Introduction.css";

class Introduction extends React.Component {
  render() {
    return (
      <main>
        <div className="introduction-background">
          <div className="title">
            <h2> Introduction </h2> <div className="underline"> </div>{" "}
          </div>{" "}
          <div className="text-wrapper">
            A restaurant, or, more informally, an eatery, is a business that
            prepares and serves food and drinks to customers. Meals are
            generally served and eaten on the premises, but many restaurants
            also offer take-out and food delivery services. Restaurants vary
            greatly in appearance and offerings, including a wide variety of
            cuisines and service models ranging from inexpensive fast food
            restaurants and cafeterias, to mid-priced family restaurants, to
            high-priced luxury establishments.
          </div>
          <div className="map">
            <iframe
              width="600px"
              height="450px"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3919.4946681007846!2d106.65843061471834!3d10.773374292323565!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31752ec3c161a3fb%3A0xef77cd47a1cc691e!2zVHLGsOG7nW5nIMSQ4bqhaSBo4buNYyBCw6FjaCBraG9hIC0gxJDhuqFpIGjhu41jIFF14buRYyBnaWEgVFAuSENN!5e0!3m2!1svi!2s!4v1638052039047!5m2!1svi!2s"
              allowfullscreen=""
              loading="lazy"
            ></iframe>
          </div>
        </div>{" "}
      </main>
    );
  }
}

export default Introduction;
