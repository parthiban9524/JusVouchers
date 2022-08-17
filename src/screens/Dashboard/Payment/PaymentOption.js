import React, { useState } from "react";
import { View, Text, Image, TouchableOpacity, TextInput } from "react-native"

import Header from "../../../components/Header";
import { normalize, fonts } from "../../../components/Utils";
import { left, mastercard, rupay, triangle, visa } from "../../../components/Icons";
import Submitbutton from "../../../components/Submitbutton";

export default function PaymentOption({ navigation }) {

    const [card, setcard] = useState(false)
    const [txt, settxt] = useState("")


    const onClick = (data) => {
        setcard(true)
        // settxt(data)
        if (card === true) {
            setcard(false)
        }
    }

    const onTouch = (data) => {
        settxt(data)
        if (txt == data) {
            settxt("")
        }
        setcard(false)
    }


    return (
        <>
            <Header navigation={navigation} />
            <View>
                <TouchableOpacity style={{ marginTop: normalize(20), marginLeft: normalize(20) }} onPress={() => navigation.navigate("PaymentType")} >
                    <Image source={left} style={{ height: normalize(30), width: normalize(30) }} />
                </TouchableOpacity>
                <View style={{ marginTop: normalize(25), marginLeft: normalize(45) }} >
                    <Text style={{ fontFamily: fonts.montserrat_regular, fontWeight: '600', fontSize: normalize(20), color: "#000000" }} >Payment Option</Text>
                </View>
                <TouchableOpacity onPress={onClick} style={{ flexDirection: "row", marginTop: normalize(18), marginLeft: normalize(45) }} >
                    <Text style={{ fontFamily: fonts.montserrat_regular, fontSize: normalize(12), fontWeight: "500" }} > {txt !== "" ? txt : "SelectOne"}  </Text>
                    <Image source={triangle} style={{ height: normalize(10), width: normalize(10), alignSelf: "center", left: 10 }} />
                </TouchableOpacity>
                {
                    card && (
                        <View style={{ marginLeft: normalize(45), marginTop: 10 }} >
                            <Text style={{ fontFamily: fonts.montserrat_regular, fontSize: normalize(12), fontWeight: "500" }} onPress={() => onTouch("DebitCard")} > DebitCard </Text>
                            <Text style={{ fontFamily: fonts.montserrat_regular, fontSize: normalize(12), fontWeight: "500", marginTop: normalize(10) }} onPress={() => onTouch("CreditCard")}  > CreditCard </Text>
                        </View>
                    )
                }
                <View style={{ flexDirection: "row", marginTop: normalize(25), marginLeft: normalize(15), justifyContent: "space-evenly" }}>
                    <View style={{ height: normalize(43), width: normalize(75), borderColor: "#08D635", borderWidth: 1, borderRadius: 5, justifyContent: "center" }} >
                        <Image source={visa} style={{ height: normalize(25), width: normalize(53), resizeMode: "contain", alignSelf: "center" }} />
                    </View>
                    <View style={{ height: normalize(43), width: normalize(75), borderColor: "#08D635", borderWidth: 1, borderRadius: 5, justifyContent: "center" }} >
                        <Image source={mastercard} style={{ height: normalize(25), width: normalize(53), resizeMode: "contain", alignSelf: "center" }} />
                    </View>
                    <View style={{ height: normalize(43), width: normalize(75), borderColor: "#08D635", borderWidth: 1, borderRadius: 5, justifyContent: "center" }} >
                        <Image source={rupay} style={{ height: normalize(25), width: normalize(53), resizeMode: "contain", alignSelf: "center" }} />
                    </View>
                </View>

                <View style={{ marginTop: normalize(55) }} >
                    <TextInput
                        style={{ width: normalize(318), height: normalize(50), borderColor: "#9A9393", borderWidth: 1, alignSelf: "center", fontFamily: fonts.montserrat_regular, fontSize: normalize(15), paddingLeft: normalize(20), top: 10, }}
                        placeholder={"Email"}

                    />
                </View>
                <View style={{ marginTop: normalize(15), flexDirection: "row", justifyContent: "space-evenly", marginHorizontal: 10 }} >
                    <TextInput
                        style={{ width: normalize(216), height: normalize(50), borderColor: "#9A9393", borderWidth: 1, alignSelf: "center", fontFamily: fonts.montserrat_regular, fontSize: normalize(15), paddingLeft: normalize(20), top: 10, }}
                        placeholder={"Card Number"}

                    />
                    <TextInput
                        style={{ width: normalize(84), height: normalize(50), borderColor: "#9A9393", borderWidth: 1, alignSelf: "center", fontFamily: fonts.montserrat_regular, fontSize: normalize(15), paddingLeft: normalize(20), top: 10, }}
                        placeholder={"EXP"}

                    />
                </View>
                <View style={{ marginTop: normalize(15), flexDirection: "row", justifyContent: "space-evenly", marginHorizontal: 10 }} >
                    <TextInput
                        style={{ width: normalize(216), height: normalize(50), borderColor: "#9A9393", borderWidth: 1, alignSelf: "center", fontFamily: fonts.montserrat_regular, fontSize: normalize(15), paddingLeft: normalize(20), top: 10, }}
                        placeholder={"Cardholder Name"}

                    />
                    <TextInput
                        style={{ width: normalize(84), height: normalize(50), borderColor: "#9A9393", borderWidth: 1, alignSelf: "center", fontFamily: fonts.montserrat_regular, fontSize: normalize(15), paddingLeft: normalize(20), top: 10, }}
                        placeholder={"C V V"}

                    />
                </View>
                <View style={{ marginTop: normalize(65), flexDirection: "row", marginLeft: normalize(70) }} >
                    <TouchableOpacity style={{ height: normalize(15), width: normalize(15), borderColor: "#797877", borderWidth: 1, top: 2 }} />
                    <Text style={{ fontFamily: fonts.montserrat_regular, fontSize: normalize(16), left: normalize(12) }} >I accept terms and policies.</Text>
                </View>
                <View style={{ marginTop: normalize(42) }} >
                    <Submitbutton voucher={true} bg={"#6854ED"} text={"Confirm"} txtclr={"#ffffff"} onpress={() => navigation.navigate("Payment")} />
                </View>
            </View>
        </>
    )
}