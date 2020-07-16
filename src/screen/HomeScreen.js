import {StatusBar} from "expo-status-bar";
import React, {useEffect, useState} from "react";
import {StyleSheet, Text, View, Dimensions, FlatList, SafeAreaView,} from "react-native"
import Axios from "axios"
import {useDispatch, useSelector} from "react-redux"
import { API_URL } from "../constants/API";
import RestaurantCart from "./RestaurantCart";
import AsyncStorage from "@react-native-community/async-storage"

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#fff",
        alignItems: "center",
        justifyContent: "center"
    }
})

export default ({ navigation }) => {
    const [restaurantList, setRestaurantList] = useState([]);
    const userSelector = useSelector((state) => state.user);

    useEffect(() => {
        Axios.get(`${API_URL}/restaurants`)
            .then((res) => {
                console.log(res.data);
                setRestaurantList(res.data.result);
                console.log(restaurantList)
            })
            .catch((err) => {
                console.log(err);
            });
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

    const renderPosts = ({ item }) => {
        return <RestaurantCart navigation={navigation} data={item} />;
    };
    return (
        <View style={{backgroundColor: "#fff", alignItems: "center"}}>
            <Text>{userSelector.username}</Text>
            <FlatList
                contentContainerStyle={{ marginTop: 46 }}
                data={restaurantList}
                renderItem={renderPosts}
                keyExtractor={(item) => item.id.toString()}
            />
        </View>
    )
}