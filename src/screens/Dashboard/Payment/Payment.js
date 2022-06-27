import React from "react";
import { View, Text, Image, TouchableOpacity } from "react-native"
import Header from "../../../components/Header";
import { normalize, fonts } from "../../../components/Utils";
import { left, ok } from "../../../components/Icons";
import Submitbutton from "../../../components/Submitbutton";

export default function Payment({ navigation }) {
    return (
        <>
            <Header navigation={navigation} />
            <View>
                <TouchableOpacity style={{ marginTop: normalize(20), marginLeft: normalize(20) }} onPress={() => navigation.navigate("Vouchers")} >
                    <Image source={left} style={{ height: normalize(30), width: normalize(30) }} />
                </TouchableOpacity>
                <View>
                    <Text style={{ fontFamily: fonts.montserrat_regular, fontSize: normalize(20), fontWeight: "500", textAlign: "center" }} >Success</Text>
                </View>
                <View style={{ justifyContent: "center", marginTop: normalize(120) }} >
                    <Image source={ok} style={{ height: normalize(120), width: normalize(120), alignSelf: "center" }} />
                </View>
                <View style={{ marginTop: normalize(25), alignSelf: "center" }} >
                    <Text style={{ fontFamily: fonts.montserrat_semibold, fontSize: normalize(20), color: "#000000" }} >Payment Completed</Text>
                </View>
                <View style={{ marginTop: normalize(20), alignSelf: "center" }} >
                    <Text style={{ fontFamily: fonts.lato_bold, fontSize: normalize(18), color: "#565555" }} >Transaction Number : 0123Abc56</Text>
                </View>
                <View style={{ marginTop: normalize(150), alignSelf: "center" }} >
                    <Text style={{ fontFamily: fonts.lato_regular, fontWeight: "600", fontSize: normalize(18), color: "#565555" }} >Continue to Redeem the voucher</Text>
                </View>
                <View style={{ marginTop: normalize(42) }} >
                    <Submitbutton voucher={true} bg={"#6854ED"} text={"Continue"} txtclr={"#ffffff"} onpress={() => navigation.navigate("RedeemedVoucher")} />
                </View>
            </View>
        </>
    )
}