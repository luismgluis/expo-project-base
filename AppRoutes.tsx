import ConfigScreen from "./src/components/screens/configScreen/ConfigScreen";
import HomeScreen from "./src/components/screens/homeScreen/HomeScreen";

const AppRoutes = [
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