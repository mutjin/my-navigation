import * as React from 'react';
import {Button,View,Text,TextInput} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

function HomeScreen({navigation,route}){
    React.useEffect(()=>{
        if(route.params?.post){
        }
    },[route.params?.post]);
    return(
        <View style={{flex:1,alignItems:'center',justifyContent:'center'}}>
            <Text>Home Screen</Text>
            <Button title="Go to DetailScreen" onPress={()=>{
                navigation.navigate('Detail',{
                    itemID:1,
                    otherParam:'anything you want here',
                });
            }}/>
            <Button title='Create Post' onPress={()=>navigation.navigate('CreatePost')}/>
            <Text style={{margin:10}}>Post:{route.params?.post}</Text>
        </View>
    );
;
};

function CreatePostScreen({navigation,route}){
    const[postText,setPostText]=React.useState('');

    return(
        <>
        <TextInput multiline placeholder="what's on your mind?"
        style={{height:200,padding:10,backgroundColor:'white'}}
        value={{postText}}
        onChangeText={setPostText}/>

        <Button title="Done"
        onPress={()=>{
            navigation.navigate({
                name:"Home",
                params:{post:postText},
                merge:true,
            })
        }}/>
        </>
    );
}

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
                <Stack.Screen name="CreatePost" component={CreatePostScreen}/>
            </Stack.Navigator>
        </NavigationContainer>
    );
};

export default App;