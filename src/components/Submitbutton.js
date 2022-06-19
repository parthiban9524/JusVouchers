import React from "react";
import { View, Text, TouchableOpacity } from "react-native"
import { fonts, normalize } from "./Utils";

export default function Submitbutton({ bg, text, txtclr, onpress, tiny = false, big = false, exclusive = false }) {
    console.log("tiny", tiny)
    return (
        <>
            {
                big && (
                    <TouchableOpacity style={{ height: normalize(50), width: normalize(330), backgroundColor: bg, justifyContent: "center", borderRadius: normalize(10), alignSelf: "center", borderColor: "#F58220", borderWidth: 1 }} onPress={onpress} >
                        <Text style={{ color: txtclr, alignSelf: "center", fontSize: normalize(18), fontWeight: "600", fontFamily: fonts.montserrat_semibold }}>{text}</Text>
                    </TouchableOpacity>
                )
            }
            {
                tiny && (
                    <TouchableOpacity style={{ height: normalize(18), width: normalize(100), backgroundColor: bg, justifyContent: "center", borderRadius: normalize(10), alignSelf: "center", borderColor: "#F58220", borderWidth: 1 }} onPress={onpress} >
                        <Text style={{ color: txtclr, alignSelf: "center", fontSize: normalize(12), fontWeight: "600", fontFamily: fonts.montserrat_semibold }}>{text}</Text>
                    </TouchableOpacity>
                )
            }
            {
                exclusive && (
                    <TouchableOpacity style={{ height: normalize(22), width: normalize(96), backgroundColor: bg, justifyContent: "center", borderRadius: normalize(10), alignSelf: "center", borderColor: "#F58220", borderWidth: 1, elevation: 10, shadowColor: "#FE7500" }} onPress={onpress} >
                        <Text style={{ color: txtclr, alignSelf: "center", fontSize: normalize(12), fontWeight: "600", fontFamily: fonts.montserrat_semibold }}>{text}</Text>
                    </TouchableOpacity>
                )

            }
        </>
    )
}