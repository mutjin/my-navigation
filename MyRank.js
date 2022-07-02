import React from "react";
import { View,Button,Text } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";


export default function MyRank({Navigation}){
    return(
        <View style={{flex:1,alignItems:'center',justifyContent:'center'}}>
            <Button title="This is MyRankScreen"/>
        </View>
    );
}