import ConfigScreen from "./src/components/screens/configScreen/ConfigScreen";
import HomeScreen from "./src/components/screens/homeScreen/HomeScreen";
import LoginScreen from "./src/components/screens/loginScreen/LoginScreen";

const AppRoutes = [
  {
    component: LoginScreen,
    name: "Login",
  },
  {
    component: HomeScreen,
    name: "Home",
  },
  {
    component: ConfigScreen,
    name: "Config",
  },
  // ...
];
export default AppRoutes