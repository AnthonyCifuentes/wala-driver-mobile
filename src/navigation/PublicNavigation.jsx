import { Route } from "react-router-dom"
import LoginScreen from "../screens/login/LoginScreen"

const PublicNavigation = ({props}) => {
  return (
      <>
        <Route path="/login" {...props} component={LoginScreen} exact={true} />
      </>
  )
}

export default PublicNavigation
