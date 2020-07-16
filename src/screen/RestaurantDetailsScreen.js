import React from "react";
import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  TextInput,
  TouchableOpacity,
  Dimensions,
  ScrollView,
  KeyboardAvoidingView,
  Image,
} from "react-native";
// import TextUI from "../components/TextUI"
// import Colors from "../components/constants/Colors"
import { Icon } from "native-base";
// import Header from "../components/Header"
const { width } = Dimensions.get("screen");

const styles = StyleSheet.create({
    header: {
      height: 50,
      flexDirection: "row",
      paddingHorizontal: 18,
      alignItems: "center",
    },
    commentContainer: {
      paddingHorizontal: 30,
      marginTop: 12,
    },
  });

  export default (props) => {
    // const { postData } = props.route.params;
    const { postDetailData } = props.route.params
    return (
        <View
        style={{
          flex: 1,
          // backgroundColor: Colors.backgroundColor,
          borderTopWidth:70
        }}
        >
        <SafeAreaView/>
          {/* <Header {...props} title={postDetailData.restaurantName} /> */}
          <Text>
            {postDetailData.restaurantName}
          </Text>
            <Image
              style={{
                padding:40,
                width:width - 30,
                height:width -30,
                marginHorizontal:10
            }}
              source={{uri: postDetailData.image}}
            />
            <View style={{ ...styles.commentContainer }}>
              <Text size="sm" style={{ height: null }}>
                Rating : {postDetailData.rating}
              </Text>
              <Text size="sm" style={{ height: null }}>
                Address : {postDetailData.address}
              </Text>
              <Text size="sm" style={{ height: null }}>
               Cusines : {postDetailData.cuisine}
              </Text>
              <Text size="sm" style={{ height: null }}>
               Open : {postDetailData.openTime} AM to {postDetailData.closeTime}
              </Text>
              <Text size="sm" style={{ height: null }}>
               Cost for 2 : TL {postDetailData.costForTwo}
              </Text>
            </View>
        </View>
      );
  }