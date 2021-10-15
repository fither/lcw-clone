import { getToken } from "./token";
import { Redirect } from "react-router";
import { Route } from "react-router-dom";

const PrivateRoute = ({ component: Component, ...rest }) => {
    const isLoggedIn = getToken();
    return (
      <Route {...rest} render={props => (
        isLoggedIn ? 
        ( <Component {...props} /> ) : 
        (
          <Redirect to={{
            pathname: '/users/login',
            state: { from: props.location }
          }} />
        )
      )} />
    )
  }

  export default PrivateRoute;