import React, { useState } from "react";
import { View, Text, StatusBar, Image, TouchableOpacity } from "react-native"

import { normalize } from "./Utils"
import { menu, logo, search, close } from "./Icons";

export default function Header({ navigation }) {

    const [sidemenu, setsidemenu] = useState(false)

    const Onmenu = () => {
        setsidemenu(true)
    }

    const Onclose = () => {
        setsidemenu(false)
    }

    return (
        <>
            <StatusBar backgroundColor={"#F9AA44"} translucent={false} />
            <View style={{ height: normalize(50), width: "100%", backgroundColor: "#F9AA44", flexDirection: 'row', justifyContent: "space-evenly" }} >
                <TouchableOpacity style={{ justifyContent: "center", right: normalize(40) }} onPress={Onmenu} >
                    <Image source={menu} style={{ height: normalize(30), width: normalize(30) }} />
                </TouchableOpacity>
                <TouchableOpacity style={{ height: normalize(40), width: normalize(100), backgroundColor: "#ffffff", borderBottomLeftRadius: normalize(40), borderTopRightRadius: normalize(40), justifyContent: "center", alignSelf: "center" }} >
                    <Image source={logo} style={{ height: normalize(30), width: normalize(60), alignSelf: "center" }} />
                </TouchableOpacity>
                <TouchableOpacity style={{ justifyContent: "center", left: normalize(35) }}>
                    <Image source={search} style={{ height: normalize(30), width: normalize(30) }} />
                </TouchableOpacity>
            </View>
            {
                sidemenu && (
                    <View style={{ height: "100%", width: normalize(270), backgroundColor: "#ffffff", backfaceVisibility: 'visible' }} >
                        <TouchableOpacity onPress={Onclose} style={{ marginTop: normalize(20), marginLeft: normalize(20) }} >
                            <Image source={close} style={{ height: normalize(30), width: normalize(30) }} />
                        </TouchableOpacity>
                    </View>
                )}
        </>
    )
}