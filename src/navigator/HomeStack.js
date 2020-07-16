import React from "react";
import { StyleSheet, Text, View } from "react-native";
import {createStackNavigator} from "@react-navigation/stack";
import { useDispatch, useSelector} from "react-redux"
import HomeScreen from "../screen/HomeScreen";
import RestaurantDetailsScreen from "../screen/RestaurantDetailsScreen";

const Stack = createStackNavigator()

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#fff",
        alignItems: "center",
        justifyContent: "center"
    }
})

export default () => {
    const userSelector = useSelector((state) => state.user);

    return(
        <Stack.Navigator>
            <Stack.Screen component={HomeScreen} name="home" options={{ title: userSelector.username}} />
            <Stack.Screen component={RestaurantDetailsScreen } name="home" options={{ title: userSelector.restaurant}} />
        </Stack.Navigator>
    )
}