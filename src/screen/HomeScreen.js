import {StatusBar} from "expo-status-bar";
import React, {useEffect, useState} from "react";
import {StyleSheet, Text, View, Dimensions, FlatList, SafeAreaView,} from "react-native"
import Axios from "axios"
import {useDispatch, useSelector} from "react-redux"
import { API_URL } from "../constants/API";

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
            console.log(res.data)
            setRestaurantList(res.data.result);
        })
        .catch((err) => {
            console.log(err)
        })
    }, []);

    return (
        <View style={{backgroundColor: "#fff", alignItems: "center"}}>
            <FlatList
                ListHeaderComponentStyle={{marginHorizontal: 15}}
                contentContainerStyle={{marginTop: 46}}
                data={restaurantList}
                keyExtractor={(item) => item.id.toString()}
            />
        </View>
    )
}