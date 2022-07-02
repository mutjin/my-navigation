import React from "react";
import { View,Button,Text } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";


export default function MyWalk({Navigation}){
    return(
        <View style={{flex:1,alignItems:'center',justifyContent:'center'}}>
            <Button title="This is MyWalkScreen"/>
        </View>
    );
}