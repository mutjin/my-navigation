import React from "react";
import { View,Button,Text } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import MyWalk from "./MyWalk";
import MyRank from "./MyRank"

const Tab=createBottomTabNavigator();
export default function Profile({Navigation}){
    return(
        <Tab.Navigator>
            <Tab.Screen name="MyWalk" component={MyWalk}/>
            <Tab.Screen name="MyRank" component={MyRank}/>
        </Tab.Navigator>
    );
}