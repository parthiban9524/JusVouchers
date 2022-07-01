import React from 'react';
import { View, Image, Text, TouchableOpacity } from 'react-native';

import { normalize, fonts } from '../../../components/Utils';
import Header from '../../../components/Header';
import Submitbutton from '../../../components/Submitbutton';
import exclusive from "../../../assest/images/exclusive.png"

export default function Exclusive({ navigation }) {
    return (
        <>
            <Header navigation={navigation} />
            <View style = {{flex : 1, backgroundColor : "#ffffff"}}>
                <Text style={{ fontFamily: fonts.montserrat_semibold, color: "#3D3C3B", fontSize: normalize(18), alignSelf : "center", marginTop : normalize(30) }} >Exclusive Package</Text>

                <View style={{ marginTop: 20, height: normalize(180), width: '90%', alignSelf: "center", backgroundColor: "#FDD29B", borderRadius: normalize(10) }} >
                    <View style={{ flexDirection: "row" }} >
                        <Image source={exclusive} style={{ height: normalize(180), width: normalize(180), resizeMode: "contain" }} />
                        <View style={{ marginLeft: normalize(21), marginTop: normalize(31) }} >
                            <Text style={{ fontFamily: fonts.montserrat_regular, fontWeight: "700", color: "#3D3C3B", fontSize: normalize(16) }} >Health PlusCard</Text>
                            <View style={{ flexDirection: "row", marginTop: 15 }} >
                                <Text style={{ fontFamily: fonts.montserrat_regular, fontWeight: "500", fontSize: normalize(12), textDecorationLine: "line-through", color: "#797877" }} >₹5,000.00 </Text>
                                <Text style={{ fontFamily: fonts.montserrat_regular, fontWeight: "600", fontSize: normalize(12) }} >  ₹1,900.00</Text>
                            </View>
                            <View style={{ marginTop: normalize(20), }} >
                                <Submitbutton exclusive={true} bg={"#ffffff"} text={"Buy Now"} txtclr={"#FE7500"} />
                            </View>
                        </View>
                    </View>
                </View>
            </View>
        </>
    )
}