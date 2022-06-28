import * as React from 'react';
import {Button,View,Text} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

function HomeScreen({navigation}){
    return(
        <View style={{flex:1,alignItems:'center',justifyContent:'center'}}>
            <Text>Home Screen</Text>
            <Button title="Go to DetailScreen" onPress={()=>navigation.navigate('Detail')}/>
        </View>
    );
;
};

function DetailScreen({navigation}){
    return(
        <View style={{flex:1,alignItems:'center',justifyContent:'center'}}>
            <Text>Detail Screen</Text>
            <Button title="Go to DetailScreen again" onPress={()=>navigation.push('Detail')}/>
            <Button title="Go to Home" onPress={()=>navigation.navigate('Home')}/>
            <Button title="Go back" onPress={()=>navigation.goBack()}/>
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