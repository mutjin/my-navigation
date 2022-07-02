import React from "react";
import { View,Button,Text } from "react-native";

export default function Notification({Navigation}){
    return(
        <View style={{flex:1,alignItems:'center',justifyContent:'center'}}>
            <Button title="This is NotificationScreen"/>
        </View>
    );
}