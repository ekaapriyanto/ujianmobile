import React, {useEffect} from "react"
import {NavigationContainer, StackActions} from "@react-navigation/native"
import {createStackNavigator} from "@react-navigation/stack"
import {Provider, useDispatch, useSelector} from "react-redux"
import AsyncStorage from "@react-native-community/async-storage"
import {StatusBar} from "expo-status-bar"
import TestScreen from "../screen/TestScreen"
import LoginScreen from "../screen/LoginScreen"
import MainTab from "./MainTab"

const Stack = createStackNavigator()

export default ({navigation}) => {

    const dispatch = useDispatch();
    const userSelector = useSelector((state) => state.user);
    
    useEffect(() => {
        console.log(userSelector.username)
        AsyncStorage.getItem("userData")
        .then((storageItem) => {
            if (!storageItem) throw "Item is empty";
            dispatch({
                type: "USER_LOGIN",
                payload: JSON.parse(storageItem),
            });
        })
        .catch((err) => {
            console.log(err);
        });
      }, []);

    return(
        <NavigationContainer>
            <Stack.Navigator screenOptions={{ headerShown: false }}>
                {userSelector.username ? (
                    <Stack.Screen name="maintab" component={MainTab}/>
                ) : (
                    <Stack.Screen name="login" component={LoginScreen} />
                )}
                
            </Stack.Navigator>
        </NavigationContainer>
    )

}