import ConfigScreen from './components/screens/configScreen/ConfigScreen';
import HomeScreen from './components/screens/homeScreen/HomeScreen';
import LoginScreen from './components/screens/loginScreen/LoginScreen';

const AppRoutes = [
  {
    component: LoginScreen,
    name: 'Login',
  },
  {
    component: HomeScreen,
    name: 'Home',
  },
  {
    component: ConfigScreen,
    name: 'Config',
  },
  // ...
] as const;
export default AppRoutes;

export type AppRouteName = (typeof AppRoutes)[number]['name'];
