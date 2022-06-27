import React from "react";
import { View, Text, TouchableOpacity } from "react-native"

export default function Sales({ navigation }) {
    return (
        <View style={{ flex: 1, justifyContent: "center", alignSelf: "center" }}>
            <Text onPress={() => navigation.navigate("SalesDetails")} > Sales Screen </Text>
        </View>
    )
}