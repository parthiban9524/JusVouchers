import React, { useState } from "react";
import { View, Text, Image, TouchableOpacity } from "react-native"
import { down, up } from "./Icons";
import { normalize } from "./Utils";

export default function Quantity({ price = "" }) {

    const [val, setval] = useState(1)

    const num = val
    var rate = 0

    const add = () => {
        setval(val + 1)
        rate = price + price
    }

    const min = () => {
        if (val !== 0) {
            setval(val - 1)
            rate = price - price
        }
    }

    return (
        <View  >
            <View style={{ height: normalize(25), width: normalize(60), backgroundColor: "#FFFFFF", flexDirection: "row", justifyContent: "space-evenly", borderRadius: normalize(8) }} >
                <TouchableOpacity style={{ justifyContent: "center" }} onPress={min} >
                    <Image source={down} style={{ height: normalize(15), width: normalize(15), resizeMode: "contain", }} />
                </TouchableOpacity>
                <View style={{ justifyContent : "center", alignSelf: "center" }} >
                    <Text style={{ fontSize: normalize(15), textAlign: "center" }} >{num}</Text>
                </View>
                <TouchableOpacity style={{ justifyContent: "center" }} onPress={add} >
                    <Image source={up} style={{ height: normalize(15), width: normalize(15), resizeMode: "contain", }} />
                </TouchableOpacity>
            </View>
        </View>
    )
}