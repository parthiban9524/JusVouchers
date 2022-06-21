import React from "react";
import { View, Text, ScrollView, Image } from "react-native"
import Header from "../../components/Header";

import cart_bg from "../../assest/images/cart_bg.png"
import { normalize } from "../../components/Utils";

export default function Cart() {
    return (
        <>
            <Header />
            <ScrollView style={{ flex: 1, backgroundColor: "#ffffff" }} >
                <View style={{ marginHorizontal: normalize(30), marginTop: normalize(75) }}>
                    <Image source={cart_bg} style={{ height: normalize(530), width: normalize(317) }} />
                </View>
                <View style={{ position: "absolute" }} >

                </View>
            </ScrollView>
        </>
    )
}