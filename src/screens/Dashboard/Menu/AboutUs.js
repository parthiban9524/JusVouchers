import React from "react";
import { View, Text, ScrollView } from "react-native"
import Header from "../../../components/Header";


export default function AboutUs({ navigation }) {
    return (
        <>
            <Header navigation={navigation} />
            <ScrollView style={{ flex: 1, alignSelf: "center"}} >
                <Text>
                    AboutUs Screen
                </Text>
            </ScrollView>
        </>
    )
}