import React from "react"
import { navigate } from "gatsby"
import { isAuthenticated } from "../../services/auth"

const PrivateRoute = ({ component: Component, allowed, user, location, ...rest }) => {
    const authorize = isAuthenticated(allowed);
  if (!authorize(user) && location.pathname !== `/app`) {
    navigate("/app")
    return null
  }
  return <Component {...rest} />
}
export default PrivateRoute
