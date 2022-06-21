import React from "react";
import { View, Text, Image } from "react-native"

import { normalize } from "./Utils";

export default function Card({ src = {}, value, card_style = {}, id = {} }) {
    return (
        <>
            {
                id === 1 && (
                    <View>
                        <View style={{ flex: 1, flexDirection: "row", backgroundColor: "#ffffff" }} >
                            <View style={{ top: 2, left: normalize(7), zIndex: 2, }} >
                                <View style={{ height: normalize(10), width: normalize(10), backgroundColor: "white", borderRadius: normalize(10), }} />
                                <View style={{ height: normalize(10), width: normalize(10), backgroundColor: "white", borderRadius: normalize(10), top: 4, }} />
                                <View style={{ height: normalize(10), width: normalize(10), backgroundColor: "white", borderRadius: normalize(10), top: 8, }} />
                                <View style={{ height: normalize(10), width: normalize(10), backgroundColor: "white", borderRadius: normalize(10), top: 12, }} />
                                <View style={{ height: normalize(10), width: normalize(10), backgroundColor: "white", borderRadius: normalize(10), top: 16, }} />
                                <View style={{ height: normalize(10), width: normalize(10), backgroundColor: "white", borderRadius: normalize(10), top: 20, }} />
                                <View style={{ height: normalize(10), width: normalize(10), backgroundColor: "white", borderRadius: normalize(10), top: 24, }} />
                            </View>

                            <View style={{ height: normalize(85), width: normalize(160), backgroundColor: "#ffffff", }}>
                                <Image source={src} style={{ height: normalize(85), width: normalize(160), position: "absolute", resizeMode: "contain", backgroundColor: "#74002d" }} />
                            </View>
                            <View style={{ top: 2, right: normalize(7) }} >
                                <View style={{ height: normalize(10), width: normalize(10), backgroundColor: "white", borderRadius: normalize(10), }} />
                                <View style={{ height: normalize(10), width: normalize(10), backgroundColor: "white", borderRadius: normalize(10), top: 4, }} />
                                <View style={{ height: normalize(10), width: normalize(10), backgroundColor: "white", borderRadius: normalize(10), top: 8, }} />
                                <View style={{ height: normalize(10), width: normalize(10), backgroundColor: "white", borderRadius: normalize(10), top: 12, }} />
                                <View style={{ height: normalize(10), width: normalize(10), backgroundColor: "white", borderRadius: normalize(10), top: 16, }} />
                                <View style={{ height: normalize(10), width: normalize(10), backgroundColor: "white", borderRadius: normalize(10), top: 20, }} />
                                <View style={{ height: normalize(10), width: normalize(10), backgroundColor: "white", borderRadius: normalize(10), top: 24, }} />
                            </View>
                        </View>
                    </View>
                )}
            {
                id === 2 && (
                    <View style={{ flex: 1, flexDirection: "row", justifyContent: "space-evenly", backgroundColor: "white" }} >
                        <View style={{ top: 2, left: normalize(9), zIndex: 2, }} >
                            <View style={{ height: normalize(15), width: normalize(15), backgroundColor: "white", borderRadius: normalize(20), }} />
                            <View style={{ height: normalize(15), width: normalize(15), backgroundColor: "white", borderRadius: normalize(20), top: 3, }} />
                            <View style={{ height: normalize(15), width: normalize(15), backgroundColor: "white", borderRadius: normalize(20), top: 6, }} />
                            <View style={{ height: normalize(15), width: normalize(15), backgroundColor: "white", borderRadius: normalize(20), top: 9, }} />
                            <View style={{ height: normalize(15), width: normalize(15), backgroundColor: "white", borderRadius: normalize(20), top: 12, }} />
                            <View style={{ height: normalize(15), width: normalize(15), backgroundColor: "white", borderRadius: normalize(20), top: 15, }} />
                            <View style={{ height: normalize(15), width: normalize(15), backgroundColor: "white", borderRadius: normalize(20), top: 18, }} />
                            <View style={{ height: normalize(15), width: normalize(15), backgroundColor: "white", borderRadius: normalize(20), top: 21, }} />
                            <View style={{ height: normalize(15), width: normalize(15), backgroundColor: "white", borderRadius: normalize(20), top: 24, }} />
                            <View style={{ height: normalize(15), width: normalize(15), backgroundColor: "white", borderRadius: normalize(20), top: 27, }} />
                            <View style={{ height: normalize(15), width: normalize(15), backgroundColor: "white", borderRadius: normalize(20), top: 30, }} />

                        </View>

                        <View style={{ height: normalize(180), width: normalize(180), backgroundColor: "red", }}>
                            <Image source={src} style={{ height: normalize(180), width: normalize(180), position: "absolute", resizeMode: "contain", backgroundColor: "#74002d" }} />
                        </View>
                        <View style={{ top: 2, right: normalize(5) }} >
                            <View style={{ height: normalize(15), width: normalize(15), backgroundColor: "white", borderRadius: normalize(20), right: normalize(5) }} />
                            <View style={{ height: normalize(15), width: normalize(15), backgroundColor: "white", borderRadius: normalize(20), top: 3, right: normalize(5) }} />
                            <View style={{ height: normalize(15), width: normalize(15), backgroundColor: "white", borderRadius: normalize(20), top: 6, right: normalize(5) }} />
                            <View style={{ height: normalize(15), width: normalize(15), backgroundColor: "white", borderRadius: normalize(20), top: 9, right: normalize(5) }} />
                            <View style={{ height: normalize(15), width: normalize(15), backgroundColor: "white", borderRadius: normalize(20), top: 12, right: normalize(5) }} />
                            <View style={{ height: normalize(15), width: normalize(15), backgroundColor: "white", borderRadius: normalize(20), top: 15, right: normalize(5) }} />
                            <View style={{ height: normalize(15), width: normalize(15), backgroundColor: "white", borderRadius: normalize(20), top: 18, right: normalize(5) }} />
                            <View style={{ height: normalize(15), width: normalize(15), backgroundColor: "white", borderRadius: normalize(20), top: 21, right: normalize(5) }} />
                            <View style={{ height: normalize(15), width: normalize(15), backgroundColor: "white", borderRadius: normalize(20), top: 24, right: normalize(5) }} />
                            <View style={{ height: normalize(15), width: normalize(15), backgroundColor: "white", borderRadius: normalize(20), top: 27, right: normalize(5) }} />
                            <View style={{ height: normalize(15), width: normalize(15), backgroundColor: "white", borderRadius: normalize(20), top: 30, right: normalize(5) }} />
                        </View>
                    </View>
                )
            }
            {
                id === 3 && (

                    <View style={{ flex: 1, flexDirection: "row", justifyContent: "space-evenly", backgroundColor: "white" }} >
                        <View style={{ top: 2, left: normalize(9), zIndex: 2, }} >
                            <View style={{ height: normalize(15), width: normalize(15), backgroundColor: "white", borderRadius: normalize(20), }} />
                            <View style={{ height: normalize(15), width: normalize(15), backgroundColor: "white", borderRadius: normalize(20), top: 3, }} />
                            <View style={{ height: normalize(15), width: normalize(15), backgroundColor: "white", borderRadius: normalize(20), top: 6, }} />
                            <View style={{ height: normalize(15), width: normalize(15), backgroundColor: "white", borderRadius: normalize(20), top: 9, }} />
                            <View style={{ height: normalize(15), width: normalize(15), backgroundColor: "white", borderRadius: normalize(20), top: 12, }} />
                            <View style={{ height: normalize(15), width: normalize(15), backgroundColor: "white", borderRadius: normalize(20), top: 15, }} />
                            <View style={{ height: normalize(15), width: normalize(15), backgroundColor: "white", borderRadius: normalize(20), top: 18, }} />
                            <View style={{ height: normalize(15), width: normalize(15), backgroundColor: "white", borderRadius: normalize(20), top: 21, }} />
                        </View>

                        <View style={{ height: normalize(110), width: normalize(200), backgroundColor: "#ffffff", }}>
                            <Image source={src} style={{ height: normalize(110), width: normalize(200), position: "absolute", resizeMode: "contain", backgroundColor: "#74002d" }} />
                        </View>
                        <View style={{ top: 2, right: normalize(5) }} >
                            <View style={{ height: normalize(15), width: normalize(15), backgroundColor: "white", borderRadius: normalize(20), right: normalize(5) }} />
                            <View style={{ height: normalize(15), width: normalize(15), backgroundColor: "white", borderRadius: normalize(20), top: 3, right: normalize(5) }} />
                            <View style={{ height: normalize(15), width: normalize(15), backgroundColor: "white", borderRadius: normalize(20), top: 6, right: normalize(5) }} />
                            <View style={{ height: normalize(15), width: normalize(15), backgroundColor: "white", borderRadius: normalize(20), top: 9, right: normalize(5) }} />
                            <View style={{ height: normalize(15), width: normalize(15), backgroundColor: "white", borderRadius: normalize(20), top: 12, right: normalize(5) }} />
                            <View style={{ height: normalize(15), width: normalize(15), backgroundColor: "white", borderRadius: normalize(20), top: 15, right: normalize(5) }} />
                            <View style={{ height: normalize(15), width: normalize(15), backgroundColor: "white", borderRadius: normalize(20), top: 18, right: normalize(5) }} />
                            <View style={{ height: normalize(15), width: normalize(15), backgroundColor: "white", borderRadius: normalize(20), top: 21, right: normalize(5) }} />
                        </View>
                    </View>
                )}
        </>
    )
}
