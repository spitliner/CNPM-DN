import { data } from "jquery";
import { createContext, Component } from "react";
import _ from "lodash";
import { BrowserRouter as Router } from "react-router-dom";
import Axios from "axios";

export const UserContext = createContext();

const emptyUser = {
  username: "",
  email: "",
  userId: "",
  phone: "",
  token: "",
  address: "",
};

const url = "http://localhost:4000";

class UserProvider extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentLoginUser: {
        username: "",
        email: "",
        userId: "",
        phone: "",
        token: "",
        address: "",
      },
    };
  }

  componentDidUpdate = () => {
    console.log("Current global user variable: ", this.state.currentLoginUser);
  };

  registerUser = async ({ data }) => {
    console.log("Context register user function", data);
    // Call the server
    let response = await Axios({
      method: "POST",
      data: {
        email: data.email,
        password: data.password,
        username: data.username,
        address: data.address,
        phone: data.phone,
      },
      withCredentials: true,
      url: url + "/api/register", // Should set to .ENV or DEFINE CONST
    });
    console.log("Register axios response", response);
    alert(response.data.message);
    console.log("Register axios complete");

    if (response.data.success) {
      return { message: "Register success" };
    } else {
      return { message: "Register failed" };
    }
  };

  /**
   * loginInfo : {data: {}, errors: {}}
   */
  loginUser = async ({ data }) => {
    console.log("Context login user function", data);

    // POST to server by axios call
    let response = await Axios({
      method: "POST",
      data: {
        email: data.email,
        password: data.password,
      },
      withCredentials: true,
      url: url + "/api/login", // Should set to .ENV or DEFINE CONST
    });

    console.log(response);

    if (response.data.success) {
      const { data, status } = response;
      const user = {
        username: data.user.username,
        email: data.user.email,
        userId: data.user._id,
        phone: data.user.phone,
        token: data.user.password,
        address: data.user.address,
      };
      this.setState({ currentLoginUser: user });
      return { message: "Login success" };
    } else {
      alert("Login failed. Something happen in our server");
      return { message: "Login failed" };
    }
  };

  logoutUser = async () => {
    // const logoutResponse = await fetch();
    this.setState({ currentLoginUser: emptyUser });
    return { message: "Logout success" };
  };

  render = () => {
    // const {} = this.props;
    return (
      <Router>
        <UserContext.Provider
          value={{
            currentLoginUser: this.state.currentLoginUser,
            loginUser: this.loginUser,
            logoutUser: this.logoutUser,
            registerUser: this.registerUser,
          }}
        >
          {this.props.children}
        </UserContext.Provider>
      </Router>
    );
  };
}

// export default withRouter(UserProvider);
export default UserProvider;
