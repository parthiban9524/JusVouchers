import React from "react";
import { View, Text, Image, TouchableOpacity } from "react-native"

import { fonts, normalize } from "./Utils";

export default function Typecard({ navigation, bg, img, txtbg, text }) {
    return (
        <TouchableOpacity style={{ height: normalize(140), width: normalize(160), backgroundColor: bg, borderRadius: normalize(10) }} >
            <View style={{ justifyContent: "center", marginTop: normalize(12) }}>
                <Image source={img} style={{ height: normalize(121), width: normalize(140), alignSelf: "center" }} />
            </View>
            <View style={{ height: normalize(32), width: normalize(160), backgroundColor: txtbg, position: "absolute", marginTop: normalize(110), borderBottomRightRadius : 5, borderBottomLeftRadius : 5 , justifyContent: "center" }} >
                <Text style={{ fontFamily: fonts.montserrat_regular, fontWeight: "700", fontSize: normalize(18), color: "#ffffff", textAlign: "center" }} >{text}</Text>
            </View>
        </TouchableOpacity>
    )
}