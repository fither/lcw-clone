import { Link, Switch, Route } from "react-router-dom"
import Register from "./register"

export default function Users() {
  return (
    <div>
      <Link to="/users/register">Register</Link>

      
      <Switch>
        <Route path="/users/register">
          <Register />
        </Route>
      </Switch>
    </div>
  )
}