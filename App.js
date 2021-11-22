import React, { useState } from 'react';
import { Account, Recipe, Login, SignUp} from "./screens";
import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from '@react-navigation/native';
import { useFonts } from 'expo-font';
import firebase from 'firebase/app';
import "firebase/auth";

import Tabs from "./navigation/tabs";

const Stack = createStackNavigator();

const App = () => {
    const [isLoggedIn, setIsLoggedIn] = useState(false)

    const firebaseConfig = {
      apiKey: "AIzaSyDCS3_5Y9aQ9bBHEzkP_Tl-cL8oFv8x68M",
      authDomain: "gohan-17fde.firebaseapp.com",
      projectId: "gohan-17fde",
      storageBucket: "gohan-17fde.appspot.com",
      messagingSenderId: "700519482680",
      appId: "1:700519482680:web:ea65ea154a8f790bf86dcd",
      measurementId: "G-2RHXXS3KDX"
    };

    //Checking if firebase has been initialized
    if (!firebase.apps.length) {
      firebase.initializeApp(firebaseConfig);
    } else {
      firebase.app();
    }
  
    firebase.auth().onAuthStateChanged((user) => {
      if (user != null) {
        setIsLoggedIn(true)
      } else {
        setIsLoggedIn(false);
      }
    });


    const [loaded] = useFonts({
      "Roboto-Black" : require('./assets/fonts/Roboto-Black.ttf'),
      "Roboto-Bold" : require('./assets/fonts/Roboto-Bold.ttf'),
      "Roboto-Regular" : require('./assets/fonts/Roboto-Regular.ttf'),
    })

    if(!loaded){
        return null;
    }
    return (
      <NavigationContainer>
          <Stack.Navigator
              screenOptions={{
                  headerShown: false
              }}
              initialRouteName={'Home'}
          >
              <Stack.Screen
                  name="Account"
                  component={Account}
              />
              <Stack.Screen
                  name="Home"
                  component={Tabs}
              />
              <Stack.Screen
                  name="Recipe"
                  component={Recipe}
              />
                <Stack.Screen
                  name="Login"
                  component={Login}
              />
                <Stack.Screen
                  name="SignUp"
                  component={SignUp}
              />
          </Stack.Navigator>
      </NavigationContainer>
  )
}

export default App;