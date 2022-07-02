import React from "react";
import { View,Button,Text } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

export default function Home({navigation}){
    return(
        <View style={{flex:1,alignItems:'center',justifyContent:'center'}}>
            <Button title="This is HomeScreen"/>
            <Button title="1. Goto LetsWalkScreen"/>
            <Button title="2. Goto LetsTourScreen"/>
        </View>
    );
}