import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, Text, View } from "react-native";
import SignupLogin from "./screens/SignupLogin";
import { AppTabNavigator } from './components/AppTabNavigator'

export default function App() {
  return (
    <SignupLogin/>
  );
}


const switchNavigator = createSwitchNavigator({
  WelcomeScreen:{screen: SignupLoginScreen},
  BottomTab:{screen: AppTabNavigator}
})

const AppContainer =  createAppContainer(switchNavigator);
