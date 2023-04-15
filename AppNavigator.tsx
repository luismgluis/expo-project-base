import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import React from "react";
import AppRoutes from "./AppRoutes";

const Stack = createStackNavigator();

const AppNavigator = () => (
  <NavigationContainer>
    <Stack.Navigator>
      {AppRoutes.map((route, index) => (
        <Stack.Screen
          key={index}
          name={route.name}
          component={route.component as any}
        />
      ))}
    </Stack.Navigator>
  </NavigationContainer>
);

export default AppNavigator;
