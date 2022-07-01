import React from "react";
import { View, Text, Image, TouchableOpacity } from "react-native"

import Header from "../../../components/Header";
import { left } from "../../../components/Icons";
import { normalize, fonts } from "../../../components/Utils";

import gym1 from "../../../assest/images/gym1.png"

export default function OrderHistory({ navigation }) {
    return (
        <>
            <Header navigation={navigation} />
            <View style={{ flex: 1 }}>
                <View style={{ marginTop: normalize(20), marginLeft: normalize(20), flexDirection: "row" }} >
                    <TouchableOpacity onPress={() => navigation.navigate("Profile")} >
                        <Image source={left} style={{ height: normalize(30), width: normalize(30) }} />
                    </TouchableOpacity>
                    <View style={{ marginLeft: normalize(60), alignSelf: "center" }} >
                        <Text style={{ fontFamily: fonts.montserrat_regular, fontSize: normalize(20), fontWeight: "600", }}>Order History</Text>
                    </View>
                </View>
                <View style={{ height: normalize(110), width: normalize(330), backgroundColor: "#FD040421", alignSelf: "center", marginTop: normalize(20) }}>
                    <View style={{ flexDirection: "row", justifyContent: "space-between", marginTop: normalize(10), marginHorizontal: normalize(40) }}>
                        <Text style={{ fontFamily: fonts.montserrat_regular, fontSize: normalize(10), }} >order Id 15985zs</Text>
                        <Text style={{ fontFamily: fonts.montserrat_regular, fontSize: normalize(10), }} >12 April 2022</Text>
                    </View>
                    <View style={{ flexDirection: "row" }} >
                        <View style={{ marginTop: normalize(20), marginHorizontal: normalize(40) }}>
                            <Text style={{ fontFamily: fonts.montserrat_regular, fontSize: normalize(12), }} >Quantity : 1</Text>
                            <Text style={{ fontFamily: fonts.montserrat_regular, fontSize: normalize(12),top : 5}} >Total : ₹799</Text>
                        </View>
                        <View style={{ marginLeft: normalize(90), marginTop: normalize(10) }}>
                            <Image source={gym1} style={{ height: normalize(50), width: normalize(90), }} />
                            <Text style={{ fontFamily: fonts.montserrat_regular, fontSize: normalize(14), top: 5, fontWeight: "500", alignSelf : "center" }} >Completed</Text>
                        </View>
                    </View>
                </View>
            </View>
        </>
    )
}