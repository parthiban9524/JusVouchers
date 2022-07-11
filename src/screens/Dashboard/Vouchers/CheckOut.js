import React from "react";
import { View, Text, Image, TouchableOpacity } from "react-native"

import Header from "../../../components/Header";
import { left } from "../../../components/Icons";
import { fonts, normalize } from "../../../components/Utils";
import gym1 from "../../../assest/images/gym1.png"
import Submitbutton from "../../../components/Submitbutton";
import Quantity from "../../../components/Quantity";

export default function CheckOut({ navigation }) {
    return (
        <>
            <Header navigation={navigation} />
            <View style={{ flex: 1, backgroundColor: "#ffffff" }} >
                <View style={{ flexDirection: "row" }} >
                    <TouchableOpacity style={{ marginTop: normalize(20), marginLeft: normalize(20) }} onPress={() => navigation.goBack()} >
                        <Image source={left} style={{ height: normalize(35), width: normalize(35), resizeMode: "contain" }} />
                    </TouchableOpacity>
                    <View style={{ marginLeft: normalize(100), marginTop: normalize(25) }} >
                        <Text style={{ fontFamily: fonts.lato_bold, fontSize: normalize(24) }} >CheckOut</Text>
                    </View>
                </View>
                <View style={{ height: normalize(120), width: normalize(330), backgroundColor: "#D0E3FFB0", alignSelf: "center", marginTop: normalize(20) }}>
                    <View style={{ flexDirection: "row", marginTop: normalize(20), marginLeft: normalize(15) }}>
                        <Image source={gym1} style={{ height: normalize(50), width: normalize(90) }} />
                        <View style={{ marginLeft: normalize(15) }} >
                            <Text style={{ fontFamily: fonts.montserrat_semibold, fontSize: normalize(16), fontWeight: "600", }}>GYM Voucher</Text>
                            <Text style={{ fontFamily: fonts.montserrat_regular, fontSize: normalize(12), }}>Fitness Habit</Text>
                        </View>
                    </View>
                    <View style={{ flexDirection: "row", alignSelf: "center", marginLeft: normalize(35), bottom: normalize(15) }}>
                        <Text style={{ fontFamily: fonts.montserrat_regular, fontSize: normalize(12), top: 10, marginLeft: normalize(45) }} >Quantity :</Text>
                        <Quantity />
                        <Text style={{ fontFamily: fonts.montserrat_regular, fontSize: normalize(12), left: normalize(25), top: 10 }} >₹799/-  40% off</Text>
                    </View>
                    <View style={{ flexDirection: "row", alignSelf: "center", marginLeft: normalize(60), }}>
                        <Submitbutton exclusive={true} bg={"#FFDCAE99"} text={"Remove"} txtclr={"#3D3C3B"} />
                        <View style={{ left: normalize(30) }} >
                            <Submitbutton exclusive={true} bg={"#FFDCAE99"} text={"Buy this now"} txtclr={"#3D3C3B"} onpress={() => navigation.navigate("PaymentType")} />
                        </View>
                    </View>
                </View>
                <View style={{ height: normalize(120), width: normalize(330), backgroundColor: "#D0E3FFB0", alignSelf: "center", marginTop: normalize(20) }}>
                    <View style={{ flexDirection: "row", marginTop: normalize(20), marginLeft: normalize(15) }}>
                        <Image source={gym1} style={{ height: normalize(50), width: normalize(90) }} />
                        <View style={{ marginLeft: normalize(15) }} >
                            <Text style={{ fontFamily: fonts.montserrat_semibold, fontSize: normalize(16), fontWeight: "600", }}>GYM Voucher</Text>
                            <Text style={{ fontFamily: fonts.montserrat_regular, fontSize: normalize(12), }}>Fitness Habit</Text>
                        </View>
                    </View>
                    <View style={{ flexDirection: "row", alignSelf: "center", marginLeft: normalize(35), bottom: normalize(15) }}>
                        <Text style={{ fontFamily: fonts.montserrat_regular, fontSize: normalize(12), top: 10, marginLeft: normalize(45) }} >Quantity :</Text>
                        <Quantity />
                        <Text style={{ fontFamily: fonts.montserrat_regular, fontSize: normalize(12), left: normalize(25), top: 10 }} >₹799/-  40% off</Text>
                    </View>
                    <View style={{ flexDirection: "row", alignSelf: "center", marginLeft: normalize(60), }}>
                        <Submitbutton exclusive={true} bg={"#FFDCAE99"} text={"Remove"} txtclr={"#3D3C3B"} />
                        <View style={{ left: normalize(30) }} >
                            <Submitbutton exclusive={true} bg={"#FFDCAE99"} text={"Buy this now"} txtclr={"#3D3C3B"} onpress={() => navigation.navigate("PaymentType")} />
                        </View>
                    </View>
                </View>
                <View style={{ height: normalize(120), width: normalize(330), backgroundColor: "#D0E3FFB0", alignSelf: "center", marginTop: normalize(20) }}>
                    <View style={{ flexDirection: "row", marginTop: normalize(20), marginLeft: normalize(15) }}>
                        <Image source={gym1} style={{ height: normalize(50), width: normalize(90) }} />
                        <View style={{ marginLeft: normalize(15) }} >
                            <Text style={{ fontFamily: fonts.montserrat_semibold, fontSize: normalize(16), fontWeight: "600", }}>GYM Voucher</Text>
                            <Text style={{ fontFamily: fonts.montserrat_regular, fontSize: normalize(12), }}>Fitness Habit</Text>
                        </View>
                    </View>
                    <View style={{ flexDirection: "row", alignSelf: "center", marginLeft: normalize(35), bottom: normalize(15) }}>
                        <Text style={{ fontFamily: fonts.montserrat_regular, fontSize: normalize(12), top: 10, marginLeft: normalize(45) }} >Quantity :</Text>
                        <Quantity />
                        <Text style={{ fontFamily: fonts.montserrat_regular, fontSize: normalize(12), left: normalize(25), top: 10 }} >₹799/-  40% off</Text>
                    </View>
                    <View style={{ flexDirection: "row", alignSelf: "center", marginLeft: normalize(60), }}>
                        <Submitbutton exclusive={true} bg={"#FFDCAE99"} text={"Remove"} txtclr={"#3D3C3B"} />
                        <View style={{ left: normalize(30) }} >
                            <Submitbutton exclusive={true} bg={"#FFDCAE99"} text={"Buy this now"} txtclr={"#3D3C3B"} onpress={() => navigation.navigate("PaymentType")} />
                        </View>
                    </View>
                </View>
                <View style={{ flexDirection: "row", marginTop: normalize(120), marginHorizontal : normalize(20), justifyContent : "space-around" }} >
                    <View style={{}} >
                        <Submitbutton double={true} bg={"#F9AA44"} text={"Add Voucher"} txtclr={"#ffffff"} onpress={() => navigation.navigate("Vouchers")} />
                    </View>
                    <View>
                        <Submitbutton double={true} bg={"#6854ED"} text={"Buy all Vouchers"} txtclr={"#ffffff"} onpress={() => navigation.navigate("PaymentType")} />
                    </View>
                </View>
            </View>
        </>
    )
}