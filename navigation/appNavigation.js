import { StyleSheet, Text, View } from "react-native";
import React, { useEffect, useState } from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { NavigationContainer } from "@react-navigation/native";
import HomeScreen from "../src/screens/HomeScreen";
import onBoardingScreen from "../src/screens/OnBoardingScreen";
import { getItem } from "../utils/storage";

const Stack = createNativeStackNavigator();
const AppNavigation = () => {
  const [showOnBoarding, setShowOnBoarding] = useState(null);

  useEffect(() => {
    checkIfOnBoarded();
  });

  const checkIfOnBoarded = async () => {
    let onBoarded = await getItem("onBoarded");

    if (onBoarded == 1) {
      setShowOnBoarding(false);
    } else {
      setShowOnBoarding(true);
    }
  };

  if (showOnBoarding == null) {
    return null;
  }

  if(showOnBoarding){
     return (
       <NavigationContainer>
         <Stack.Navigator initialRouteName="OnBoardingScreen">
           <Stack.Screen
             name="Home"
             options={{ headerShown: false }}
             component={HomeScreen}
           />
           <Stack.Screen
             name="OnBoardingScreen"
             options={{ headerShown: false }}
             component={onBoardingScreen}
           />
         </Stack.Navigator>
       </NavigationContainer>
     );

  }else{
     return (
       <NavigationContainer>
         <Stack.Navigator initialRouteName="Home">
           <Stack.Screen
             name="Home"
             options={{ headerShown: false }}
             component={HomeScreen}
           />
           <Stack.Screen
             name="OnBoardingScreen"
             options={{ headerShown: false }}
             component={onBoardingScreen}
           />
         </Stack.Navigator>
       </NavigationContainer>
     );
  }
  

 
};

export default AppNavigation;

const styles = StyleSheet.create({});
