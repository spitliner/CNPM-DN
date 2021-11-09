import { data } from "jquery";
import { createContext, Component } from "react";
import _ from "lodash";
import { BrowserRouter as Router } from "react-router-dom";

export const UserContext = createContext();

const emptyUser = {
  username: "",
  email: "",
  userId: "",
  phone: "",
  token: "",
};

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
      },
    };
  }

  componentDidUpdate = () => {
    console.log(this.state.currentLoginUser);
  };

  /**
   * loginInfo : {data: {}, errors: {}}
   */
  loginUser = async ({ data, errors }) => {
    console.log("Context login user function", data);
    if (!_.isEmpty(errors)) {
      console.log("Validation form error, recheck your login input");
    }

    // const loginResponse = await fetch();
    // const data = await loginResponse.json();

    if (true) {
      const user = {
        username: "Thinh123",
        email: data.email,
        userId: 1,
        phone: "0909090909",
        token: "abcabcabc",
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
