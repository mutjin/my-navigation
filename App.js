import React from "react";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { NavigationContainer } from "@react-navigation/native";
import "react-native-gesture-handler";

import Profile from './Screen/Profile';
import Notification from './Screen/Notification';
import Home from './Screen/Home';

const Drawer=createDrawerNavigator();
export default function App(){
    return(
        <NavigationContainer>
            <Drawer.Navigator initialRouteName="Home">
                <Drawer.Screen name="Home" component={Home}/>
                <Drawer.Screen name="Profile" component={Profile} options={{ headerShown: false }}/>
                <Drawer.Screen name="Notification" component={Notification}/>
            </Drawer.Navigator>
        </NavigationContainer>
    );
}