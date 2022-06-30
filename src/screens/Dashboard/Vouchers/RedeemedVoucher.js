import React from "react";
import { View, Text, Image } from "react-native"

import cart_bg from "../../../assest/images/cart_bg.png"
import Header from "../../../components/Header";
import { fonts, normalize } from "../../../components/Utils";
import Submitbutton from "../../../components/Submitbutton";
import path from "../../../assest/images/1.png"
import barcode from "../../../assest/images/barcode.png"



export default function RedeemedVoucher({navigation}) {
    return (
        <>
            <Header />
            <View style={{ marginHorizontal: normalize(30), marginTop: normalize(20) }}>
                <Image source={cart_bg} style={{ height: normalize(530), width: normalize(317) }} />
                <View style={{ position: "absolute", alignSelf: "center" }} >
                    <View style={{ marginTop: normalize(35) }} >
                        <Image source={path} style={{ height: normalize(180), width: normalize(240), resizeMode: "contain" }} />
                    </View>
                    <View style={{ width: normalize(245), borderColor: "#ffffff", borderBottomWidth: 1, marginTop: normalize(30) }} />
                    <View style={{ marginTop: normalize(60), alignSelf: "center" }} >
                        <Text style={{ fontFamily: fonts.montserrat_regular, fontSize: normalize(18), color: "#ffffff" }} >Coupon Code</Text>
                    </View>
                    <View style={{ marginTop: normalize(25), alignSelf: "center" }} >
                        <Text style={{ fontFamily: fonts.montserrat_regular, fontSize: normalize(22), fontWeight: '500', color: "#ffffff" }} >1256ZQW79</Text>
                    </View>
                    <View style={{ marginTop: normalize(40), width: normalize(247), height: normalize(47), backgroundColor: "#ffffff", borderRadius: normalize(7) }} >
                        <Image source={barcode} style={{ height: normalize(45), width: normalize(211), alignSelf: "center" }} />
                    </View>
                    <View style={{ marginTop: normalize(20), alignSelf: "center" }} >
                        <Text style={{ fontFamily: fonts.montserrat_regular, fontSize: normalize(12), color: "#ffffff" }} >Validty - 1 June to 30 Aug 2022</Text>
                    </View>
                </View>
                <View style={{ marginTop: normalize(15) }} >
                    <Submitbutton voucher={true} bg={"#6854ED"} text={"Back to Home"} txtclr={"#ffffff"} onpress={() => navigation.navigate("Home")} />
                </View>
            </View>
        </>
    )
}