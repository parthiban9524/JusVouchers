import React from "react";
import { View, Text } from "react-native"
import Header from "../../components/Header";

export default function Notification({navigation}) {
    return (
        <>
        <Header navigation={navigation} />
        <View style={{ flex: 1, justifyContent: "center", alignSelf: "center" }} >
            <Text>Notification Screen</Text>
        </View>
        </>
        
    )
}