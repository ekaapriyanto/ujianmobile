import React from "react"
import {useDispatch, useSelector} from "react-redux"
import {StyleSheet, Text, View, Dimensions, TouchableOpacity, Image} from "react-native"

const { width } = Dimensions.get("screen")

export default ({navigation, data}) => {
    const dispatch = useDispatch();
    const userSelector = useSelector((state) => state.user)

    const navigationGate = () => {
        dispatch({
            type: "RESTAURANT",
            payload: { restaurant: data.restaurantName}
        })
        
        navigation.navigationGate("Detail", {
            restaurantDetailData: data,
        })
    }

    return (
        <View style={{backgroundColor: "black", marginBottom: 30, paddingBottom: 20}}>
            <TouchableOpacity onPress={navigationGate}>
                <View style={{ alignItems: "center"}}>
                    <Image source={{ uri: data.Image }} style={{borderTopLeftRadius: 6, borderTopRightRadius: 6, width: -width -30, height: -width -30,}} width={width -30}/>
                    <View style={{paddingHorizontal: 13}}>
                        <View style={{flexDirection: "row", alignItems: "center", marginTop: 11}}>
                            <View style={{marginLeft: 10 }}>
                                <View style={{flexDirection: "row"}}>
                                    <View style={{marginTop: 10, marginRight: 20}}>
                                        <Text style={{color: "black"}}>Name</Text>
                                        <Text style={{color: "black"}}>Rating</Text>
                                    </View>
                                        <Text style={{color: "black"}}>{data.restaurantName}</Text>
                                        <Text style={{color: "black"}}>{data.rating}</Text>
                                </View>
                            </View>
                        </View>
                    </View>
                </View>
            </TouchableOpacity>
        </View>
    )
}