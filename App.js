import * as React from 'react';
import {Button,View,Text} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

function HomeScreen({navigation}){
    return(
        <View style={{flex:1,alignItems:'center',justifyContent:'center'}}>
            <Text>Home Screen</Text>
            <Button title="Go to DetailScreen" onPress={()=>{
                navigation.navigate('Detail',{
                    itemID:1,
                    otherParam:'anything you want here',
                });
            }}/>
        </View>
    );
;
};

function DetailScreen({route,navigation}){
    const{itemID,otherParam}=route.params;
    return(
        <View style={{flex:1,alignItems:'center',justifyContent:'center'}}>
            <Text>Detail Screen</Text>
            <Text>itemID: {JSON.stringify(itemID)}</Text>
            <Text>otherParam: {JSON.stringify(otherParam)}</Text>
            <Button title="Go to DetailScreen again" onPress={()=>navigation.push('Detail',{
                itemID:Math.floor(Math.random()*10),
            })}/>
            <Button title="Go to Home" onPress={()=>navigation.navigate('Home')}/>
            <Button title="Go back" onPress={()=>navigation.goBack()}/>
            <Button title="Go back to first screen in stack" onPress={()=>navigation.popToTop()}/>
        </View>
    )
}

const Stack=createNativeStackNavigator();

function App(){
    return(
        <NavigationContainer>
            <Stack.Navigator initialRouteName='Home'>
                <Stack.Screen name="Home" component={HomeScreen} options={{title:'OverView'}}/>
                <Stack.Screen name="Detail" component={DetailScreen}/>
            </Stack.Navigator>
        </NavigationContainer>
    );
};

export default App;