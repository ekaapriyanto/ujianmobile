import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import HomeStack from "./HomeStack";
import ProfileScreen from "../screen/ProfileScreen"
import { Icon } from "native-base";

const Tab = createBottomTabNavigator();

export default () => {
    return (
        <Tab.Navigator tabBarOptions={{
            activeTintColor: "black",
            style: {
                backgroundColor: "blue",
                borderTopWidth: 0,
                paddingTop: 4,
                alignSelft: "center",
                borderRadius: 18,
                position: "absolute",
                bottom: 20,
                left: 30,
                right: 30,
                alignItems: "center",
            },
        }}>
            <Tab.Screen name="HOME" component={HomeStack} options={{tabBarIcon: ({color, size}) => <Icon type="Feather" name="home" style={{ color, fontSize: size}}/>,}}/>
            <Tab.Screen name="PROFILE" component={ProfileScreen} options={{tabBarIcon: ({color, size}) => <Icon type="Feather" name="user" style={{ color, fontSize: size}}/>,}}/>
        </Tab.Navigator>
    )
}