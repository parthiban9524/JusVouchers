import React from "react";
import { View, Text, TextInput, Image } from "react-native"

import { fonts, normalize } from "./Utils";
import { mail, } from "./Icons";

export default function Input({ label, img, id, wid }) {

    const onChangeNumber = (data) => {
        console.log("data", data)
    }

    return (
        <View>
            {
                id == 1 && (
                    <>
                        <TextInput
                            style={{ width: normalize(300), borderColor: "#938C8C", borderBottomWidth: 1, alignSelf: "center", fontFamily: fonts.lato_regular, fontSize: normalize(20), paddingLeft: normalize(30), top: 10, }}
                            onChangeText={onChangeNumber}
                            placeholder={label}
                        />
                        <Image source={img} style={{ height: normalize(25), width: normalize(25), left: normalize(40), bottom: normalize(28) }} />
                    </>
                )}
            {
                id == 2 && (
                    <View>
                        <TextInput
                        style={{ width: normalize(wid) ,height : normalize(50), borderColor: "#9A9393", borderWidth: 1, alignSelf: "center", fontFamily: fonts.montserrat_regular, fontSize: normalize(15), paddingLeft: normalize(20), top: 10, }}
                        onChangeText={onChangeNumber}
                        placeholder={label}
                        />
                    </View>
                )
            }
            {
                id == 3 && (
                    <>
                    <TextInput
                        style={{ width: normalize(wid), borderColor: "#000000", borderBottomWidth: 1, marginLeft : normalize(10), fontFamily: fonts.lato_regular, fontSize: normalize(20) }}
                        onChangeText={onChangeNumber}
                        placeholder={label}
                    />
                </>
                )
            }
        </View>
    )
}