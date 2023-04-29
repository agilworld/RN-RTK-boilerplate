import { CommonActions, NavigationAction } from "@react-navigation/native"

// gets the current screen from navigation state
const getCurrentRouteName = (navigationState:any) => {
  if (!navigationState) {
    return null
  }
  const route = navigationState.routes[navigationState.index]
  // dive into nested navigators
  if (route.routes) {
    return getCurrentRouteName(route)
  }
  return route.routeName
}

export default getCurrentRouteName