import React from "react";
import { View, Text, TouchableOpacity, Image } from "react-native"

import { left } from "../../components/Icons";
import { fonts, normalize } from "../../components/Utils";
import gym1 from "../../assest/images/gym1.png"
import Submitbutton from "../../components/Submitbutton";
import AdminHeader from "../../components/AdminHeader";

export default function VouchersHandling({navigation}) {
    return (
        <>
            <AdminHeader />

            <View style={{ flex: 1, backgroundColor: "white" }} >
                <View style={{ flexDirection: "row", marginTop: normalize(20), marginLeft: normalize(20) }} >
                    <TouchableOpacity onPress={() => navigation.goBack()} >
                        <Image source={left} style={{ height: normalize(30), width: normalize(30) }} />
                    </TouchableOpacity>
                    <View style={{ marginLeft: normalize(70), alignSelf: "center" }} >
                        <Text style={{ fontFamily: fonts.montserrat_regular, fontSize: normalize(20), fontWeight: "600", textAlign: "center" }}>Approve Vouchers</Text>
                    </View>
                </View>
                <View style={{ height: normalize(120), width: normalize(330), backgroundColor: "#D0E3FFB0", alignSelf: "center", marginTop: normalize(20) }}>
                    <View style={{ flexDirection: "row", marginTop: normalize(20), marginLeft: normalize(15) }}>
                        <Image source={gym1} style={{ height: normalize(50), width: normalize(90) }} />
                        <View style={{ marginLeft: normalize(15) }} >
                            <Text style={{ fontFamily: fonts.montserrat_semibold, fontSize: normalize(16), fontWeight: "600", }}>GYM Voucher</Text>
                            <Text style={{ fontFamily: fonts.montserrat_regular, fontSize: normalize(12), }}>Fitness Habit</Text>
                        </View>
                        <Text style={{ fontFamily: fonts.montserrat_regular, fontSize: normalize(12), left: normalize(25), top: 10 }} >₹799/-  40% off</Text>
                    </View>
                    <View style={{ flexDirection: "row", alignSelf: "center", marginLeft: normalize(80), }}>
                        <Submitbutton exclusive={true} bg={"#FFDCAE99"} text={"Cancel"} txtclr={"#3D3C3B"} />
                        <View style={{ left: normalize(30) }} >
                            <Submitbutton exclusive={true} bg={"#FFDCAE99"} text={"Approve"} txtclr={"#3D3C3B"} onpress={() => navigation.navigate("RemoveVoucher")} />
                        </View>
                    </View>
                </View>
            </View>
        </>
    )
}