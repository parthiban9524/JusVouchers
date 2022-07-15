import React from "react";
import { View, Text, Image, TouchableOpacity } from "react-native"

import Header from "../../../components/Header";
import { left, red_heart } from "../../../components/Icons";
import { fonts, normalize } from "../../../components/Utils";
import gym1 from "../../../assest/images/gym1.png"
import Submitbutton from "../../../components/Submitbutton";

export default function Favorites({navigation}) {
    return (
        <>
            <Header navigation={navigation} />
            <View style={{ flex: 1, backgroundColor : "#ffffff" }} >
                <View style={{ flexDirection: "row", marginTop: normalize(20), marginLeft: normalize(20) }} >
                    <TouchableOpacity onPress={() => navigation.navigate("Profile")} >
                        <Image source={left} style={{ height: normalize(30), width: normalize(30) }} />
                    </TouchableOpacity>
                    <View style={{ marginLeft: normalize(60), alignSelf: "center" }} >
                        <Text style={{ fontFamily: fonts.montserrat_regular, fontSize: normalize(20), fontWeight: "600", }}>Favorite Vouchers</Text>
                    </View>
                </View>
                <View style={{ height: normalize(110), width: normalize(330), backgroundColor: "#D0E3FFB0", alignSelf: "center", marginTop: normalize(20) }}>
                    <View style={{ flexDirection: "row", marginTop: normalize(20), marginLeft: normalize(15) }}>
                        <Image source={gym1} style={{ height: normalize(50), width: normalize(90) }} />
                        <View style={{ marginLeft: normalize(15) }} >
                            <Text style={{ fontFamily: fonts.montserrat_regular, fontSize: normalize(16), fontWeight: "600", }}>GYM Voucher</Text>
                            <Text style={{ fontFamily: fonts.montserrat_regular, fontSize: normalize(12), }}>Fitness Habit</Text>
                        </View>
                        <Image source={red_heart} style={{ height: normalize(25), width: normalize(25), marginLeft: normalize(90) }} />
                    </View>
                    <View style={{ flexDirection: "row", alignSelf: "center", marginLeft: normalize(35), bottom: normalize(15) }}>
                        <Text style={{ fontFamily: fonts.montserrat_regular, fontSize: normalize(12), }} >Quantity : 1</Text>
                        <Text style={{ fontFamily: fonts.montserrat_regular, fontSize: normalize(12), left: normalize(50) }} >₹799/-  40% off</Text>
                    </View>
                    <View style={{ flexDirection: "row", alignSelf: "center", marginLeft: normalize(60), }}>
                        <Submitbutton exclusive={true} bg={"#FFDCAE99"} text={"Add to Cart"} txtclr={"#3D3C3B"} />
                        <View style = {{left : normalize(30)}} >
                            <Submitbutton exclusive={true} bg={"#FFDCAE99"} text={"Buy this now"} txtclr={"#3D3C3B"} />
                        </View>
                    </View>
                </View>
            </View>
        </>

    )
}