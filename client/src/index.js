import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import "bootstrap-icons/font/bootstrap-icons.css";
import "bootstrap/dist/css/bootstrap.min.css";
import UserProvider from "./context/User";
import { BrowserRouter as Router } from "react-router-dom";
import { CookiesProvider, useCookies } from "react-cookie";
import Axios from "axios";
// var menuItems = [];
// const url = "http://localhost:4000";

// Axios({
//   method: "GET",
//   data: {},
//   withCredentials: true,
//   url: url + "/api/get_all_foods", // Should set to .ENV or DEFINE CONST
// }).then((response) => {
//   menuItems = response.data.menuItems;
//   ReactDOM.render(
//     <CookiesProvider>
//       <UserProvider>
//         <React.StrictMode>
//           <Router>
//             <App menuItems={menuItems} />
//           </Router>
//         </React.StrictMode>
//       </UserProvider>
//     </CookiesProvider>,
//     document.getElementById("root")
//   );
// });

ReactDOM.render(
  <CookiesProvider>
    <UserProvider>
      <React.StrictMode>
        <Router>
          <App />
        </Router>
      </React.StrictMode>
    </UserProvider>
  </CookiesProvider>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
