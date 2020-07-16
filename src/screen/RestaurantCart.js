import React from "react"
import {useDispatch, useSelector} from "react-redux"
import {StyleSheet, Text, View, Dimensions, TouchableOpacity, Image} from "react-native"

const { width } = Dimensions.get("screen")

export default ({ navigation, data }) => {
    return (
        <View
            style={{
                // backgroundColor: Colors.backgroundColor,
                width: width - 30,
                marginHorizontal: 15,
                borderRadius: 6,
                shadowColor: "#000",
                shadowOffset: {
                    width: 0,
                    height: 3,
                },
                shadowOpacity: 0.5,
                shadowRadius: 8,
                elevation: 6,
                marginVertical: 10,
                // marginTop:30
            }}
        >
            <TouchableOpacity  onPress={() => navigation.navigate("details", { postDetailData: data })}>
            <Image
                source={{
                    uri: data.image,
                }}
                style={{
                    padding:40,
                    width:width - 30,
                    height:width -30,
                }}
                
                // width={width - 50}
            />
            </TouchableOpacity>

            <View style={{ paddingHorizontal: 13 }}>
                <View
                    style={{
                        flexDirection: "row",
                        alignItems: "center",
                        marginTop: 11,
                    }}
                >
                </View>
                <Text style={{ marginTop: 11, height: null }} bold>
                    Rating: {data.rating}
                </Text>
                <Text style={{ marginTop: 11, height: null }}>
                    Address : {data.address}
                </Text>
                <Text style={{ marginTop: 11, height: null }}>
                    Cuisines : {data.cuisine}
                </Text>
                <Text style={{ marginTop: 11, height: null }}>
                    Open : {data.openTime} AM to {data.closeTime} PM
                </Text>
                <Text style={{ marginTop: 11, height: null }}>
                    Cost for 2 : TL {data.costForTwo}
                </Text>
                {/* <Button
                    onPress={() => navigation.navigate("HomePostDetail", { postDetailData: data })}
                    style={{
                        flexDirection: "row",
                        alignItems: "center",
                        marginLeft: 22,
                    }}
                >
                    <Text>
                        View
                    </Text>
                </Button> */}
            </View>
        </View>
    );
};