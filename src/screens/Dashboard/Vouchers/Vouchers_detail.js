import React from "react";
import { View, Text, Image } from "react-native"

import cart_bg from "../../../assest/images/cart_bg.png"
import Header from "../../../components/Header";
import { fonts, normalize } from "../../../components/Utils";
import Submitbutton from "../../../components/Submitbutton";

export default function Vouchers_detail({ navigation }) {

    const img = navigation.getState().routes[1].params.image

    return (
        <>
            <Header />
            <View style={{ marginHorizontal: normalize(30), marginTop: normalize(75) }}>
                <Image source={cart_bg} style={{ height: normalize(530), width: normalize(317) }} />
                <View style={{ position: "absolute", alignSelf: "center" }} >
                    <View style={{ marginTop: normalize(35) }} >
                        <Image source={img} style={{ height: normalize(180), width: normalize(240), resizeMode : "contain" }} />
                    </View>
                    <View style={{ width: normalize(245), borderColor: "#ffffff", borderBottomWidth: 1, marginTop: normalize(30) }} />
                    <View style={{ marginTop: normalize(60), alignSelf: "center" }} >
                        <Text style={{ fontFamily: fonts.montserrat_regular, fontSize: normalize(18), color: "#ffffff" }} >Coupon Code</Text>
                    </View>
                    <View style={{ marginTop: normalize(25), alignSelf: "center" }} >
                        <Text style={{ fontFamily: fonts.montserrat_regular, fontSize: normalize(22), fontWeight: '500', color: "#ffffff" }} >XXXXXXXXXXXXXXX</Text>
                    </View>
                    <View style={{ marginTop: normalize(40) }} >
                        <Submitbutton text={"Buy Now"} txtclr={"#74002D"} bg={"#ffffff"} voucher={true} onpress = { () => navigation.navigate("PaymentType") } />
                    </View>
                    <View style={{ marginTop: normalize(20), alignSelf: "center" }} >
                        <Text style={{ fontFamily: fonts.montserrat_regular, fontSize: normalize(12), color: "#ffffff" }} >Validty - 1 June to 30 Aug 2022</Text>
                    </View>
                </View>
            </View>
        </>
    )
}