import React from "react";
import { View, Text, Image, TouchableOpacity } from "react-native"
import Header from "../../../components/Header";
import { normalize, fonts } from "../../../components/Utils";
import { left, ok } from "../../../components/Icons";
import Submitbutton from "../../../components/Submitbutton";

export default function Adminupload({ navigation }) {
    return (
        <>
            <Header navigation={navigation} />
            <View>
                <TouchableOpacity style={{ marginTop: normalize(20), marginLeft: normalize(20) }} onPress={() => navigation.navigate("Vouchers")} >
                    <Image source={left} style={{ height: normalize(30), width: normalize(30) }} />
                </TouchableOpacity>
                <View>
                    <Text style={{ fontFamily: fonts.montserrat_regular, fontSize: normalize(20), fontWeight: "800", textAlign: "center" }} >Success</Text>
                </View>
                <View style={{ justifyContent: "center", marginTop: normalize(120) }} >
                    <Image source={ok} style={{ height: normalize(120), width: normalize(120), alignSelf: "center" }} />
                </View>
                <View style={{ marginTop: normalize(25), alignSelf: "center" }} >
                    <Text style={{ fontFamily: fonts.montserrat_semibold, fontSize: normalize(20), color: "#000000" }} >Blog Uploaded</Text>
                </View>
                <View style={{ marginTop: normalize(42) }} >
                    <Submitbutton voucher={true} bg={"#F9AA44"} text={"Back to Dashboard"} txtclr={"#ffffff"} onpress={() => navigation.navigate("DashboardHome")} />
                </View>
            </View>
        </>
    )
}