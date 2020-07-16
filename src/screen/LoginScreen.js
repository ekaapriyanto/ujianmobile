import React, { useState } from "react";
import {
    StyleSheet,
    Text,
    View,
    Dimensions,
    TouchableOpacity,
    TextInput,
    Keyboard,
    TouchableWithoutFeedback,
    KeyboardAvoidingView,
    Button,
    ImageBackground
} from "react-native"
import { Icon } from "native-base";
import LoginBg from "../../assets/images/login_bg.png"
import AsyncStorage from "@react-native-community/async-storage";
import {Provider, useDispatch, useSelector} from "react-redux"
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#fff",
        alignItems: "center",
        justifyContent: "center"
    },
    bgImage: {
        flex: 1,
        resizeMode: "cover"
    },
})

export default ({props}) => {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");

    const dispatch = useDispatch();
    const userSelector = useSelector((state) => state.user);

    const loginBtnHandler = () => {
        console.log(username)
        AsyncStorage.setItem(
            "userData",
            JSON.stringify({
                username,
            })
        )
            .then(() => {
                dispatch({
                    type: "USER_LOGIN",
                    payload: { username },
                });
            })
            .catch((err) => {
                console.log(err);
            });
    };
    return (
        <>
        <ImageBackground source={LoginBg} style={{...styles.bgImage}}>
        <View style={{...StyleSheet.absoluteFillObject, backgroundColor: "black", opacity: 0.5}}>
            <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
                <KeyboardAvoidingView behavior="padding" style={{justifyContent: "center", flex: 1 }}>
                    <View style={{paddingHorizontal: 30}}>
                        <Text style={{fontSize: 30, lineHeight: 30, color: "white"}}>Toamato App</Text>
                        <Text style={{ marginTop: 12, color: "white"}}>Please Enter Your Name</Text>
                        <View style={{ backgroundColor: "white", opacity: 0.8, borderRadius: 22, ...StyleSheet.absoluteFillObject}} />
                        <TextInput onChangeText={(text) => setUsername(text)} autoCapitalize="none" placeholderTextColor="black" style={{ fontSize: 15, color: "black", lineHeight: 20}} placeholder="Username"/>
                    </View>
                    <View style={{borderRadius: 25, paddingVertical: 10, paddingHorizontal: 20, justifyContent: "center", marginTop: 10}}>
                        <View style={{backgroundColor: "blue", borderRadius: 50, ...StyleSheet.absoluteFillObject}} />
                        <Button title="Submit" onPress={loginBtnHandler}/>
                    </View>
                </KeyboardAvoidingView>
            </TouchableWithoutFeedback>
        </View>
        </ImageBackground>
        </>
    )
}