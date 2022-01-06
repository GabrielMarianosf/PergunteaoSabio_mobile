import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { Button, View, Text } from "react-native";

import HomeScreen from "./screens/Home/Home";
import ConselhoScreen from "./screens/Conselho/Conselho";

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Pergunte ao Sábio" component={HomeScreen} />
        <Stack.Screen name="Conselho" component={ConselhoScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
