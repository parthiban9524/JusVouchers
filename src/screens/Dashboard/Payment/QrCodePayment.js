import React from "react";
import { View, Text, TouchableOpacity, Image } from "react-native"

import QrCode from "../../../components/QrCode";
import Header from "../../../components/Header";
import { normalize, fonts } from "../../../components/Utils";
import { left, qr } from "../../../components/Icons";
import Submitbutton from "../../../components/Submitbutton";

export default function QrCodePayment({ navigation }) {
    return (
        <>
            <Header navigation={navigation} />
            <View style={{ flex: 1 }} >
                <View style={{ flexDirection: "row", marginTop: normalize(20), marginLeft: normalize(20) }} >
                    <TouchableOpacity onPress={() => navigation.navigate("PaymentType")} >
                        <Image source={left} style={{ height: normalize(30), width: normalize(30) }} />
                    </TouchableOpacity>
                    <View style={{ marginLeft : normalize(100)  }} >
                        <Text style={{ fontFamily: fonts.montserrat_regular, fontSize: normalize(20), fontWeight: "600", }}>Scan QR</Text>
                    </View>
                </View>
                <View style={{ alignSelf: "center", marginTop: normalize(70) }} >
                    <View style={{ flexDirection: "row", justifyContent: "space-around", marginHorizontal: normalize (-50), top: normalize(40) }}>
                        <View style={{ height: normalize(33), width: normalize(33), borderLeftWidth: 2, borderTopWidth: 2, borderColor: "#F58220" }} />
                        <View style={{ height: normalize(33), width: normalize(33), borderRightWidth: 2, borderTopWidth: 2, borderColor: "#F58220" }} />
                    </View>
                    <Image source={qr} style={{ height: normalize(200), width: normalize(200) }} />
                    <View style={{ flexDirection: "row", justifyContent: "space-around", marginHorizontal: (-50), bottom: normalize(30) }} >
                        <View style={{ height: normalize(33), width: normalize(33), borderLeftWidth: 2, borderBottomWidth: 2, borderColor: "#F58220" }} />
                        <View style={{ height: normalize(33), width: normalize(33), borderRightWidth: 2, borderBottomWidth: 2, borderColor: "#F58220" }} />
                    </View>
                </View>
                <View style = {{marginTop : normalize(30), alignSelf : "center"}}>
                    <Text style = {{fontFamily : fonts.lato_regular, fontWeight : "600", fontSize : normalize(22), color : "#F58220", letterSpacing : 2}} >Scan QR to make payment</Text>
                </View>
                <View style={{ marginTop: normalize(150) }} >
                    <Submitbutton voucher={true} bg={"#6854ED"} text={"Continue"} txtclr={"#ffffff"} onpress={() => navigation.navigate("PaymentOption")} />
                </View>
            </View>
        </>
    )
}