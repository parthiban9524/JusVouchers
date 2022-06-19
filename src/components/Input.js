import React from "react";
import { View, Text, TextInput, Image } from "react-native"

import { fonts, normalize } from "./Utils";
import { mail, } from "./Icons";

export default function Input({ label, img }) {

    const onChangeNumber = (data) => {
        console.log("data", data)
    }

    return (
        <View  >
            <TextInput
                style={{ width: normalize(300), borderColor: "#938C8C", borderBottomWidth: 1, alignSelf: "center", fontFamily: fonts.lato_regular, fontSize: normalize(20), paddingLeft: normalize(30), top: 10, }}
                onChangeText={onChangeNumber}
                placeholder={label}
            />
            <Image source={img} style={{ height: normalize(25), width: normalize(25), left: normalize(40), bottom: normalize(28) }} />
        </View>
    )
}