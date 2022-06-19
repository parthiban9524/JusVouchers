import React from "react";
import { View, Text, Image, ScrollView } from "react-native"

import Header from "../../components/Header";
import { card } from "../../components/Icons";
import Submitbutton from "../../components/Submitbutton";
import Typecard from "../../components/Typecard";
import { fonts, normalize } from "../../components/Utils";

import gym from "../../assest/images/gym.png"
import doctor from "../../assest/images/doctor.png"
import health from "../../assest/images/health.png"
import yoga from "../../assest/images/yoga.png"
import saloon from "../../assest/images/saloon.png"
import diet from "../../assest/images/diet.png"
import exclusive from "../../assest/images/exclusive.png"
import Slider from "../../components/Slider";
export default function Home({ navigation }) {
    return (
        <>
            <Header navigation={navigation} />
            <ScrollView style={{ backfaceVisibility: "visible" }} >
                <View style={{ flexDirection: "row" }} >
                    <View style={{ marginTop: normalize(30), marginLeft: normalize(30) }} >
                        <Text style={{ fontSize: normalize(22), color: "#000000", fontFamily: fonts.montserrat_regular, fontWeight: "700" }}>It's raining</Text>
                        <Text style={{ fontSize: normalize(22), color: "#000000", fontFamily: fonts.montserrat_regular, fontWeight: "700" }} >discounts on</Text>
                        <Text style={{ fontSize: normalize(24), color: "#F9AA44", fontFamily: fonts.montserrat_regular, fontWeight: "800" }} >JusVouchers!</Text>
                    </View>
                    <View style={{ marginTop: normalize(20), marginLeft: normalize(15) }} >
                        <Image source={card} style={{ height: normalize(120), width: normalize(200), resizeMode: "contain" }} />
                    </View>
                </View>
                <View style={{ marginTop: normalize(40), marginLeft: normalize(30) }} >
                    <View style={{ flexDirection: "row", justifyContent: "space-between" }} >
                        <Text style={{ fontFamily: fonts.montserrat_regular, fontWeight: "500", color: "#3D3C3B", fontSize: normalize(18) }} >Latest Offer</Text>
                        <View style={{ right: normalize(25) }} >
                            <Submitbutton tiny={true} bg={"#f69632"} text={"Near Search"} txtclr={"#ffffff"} />
                        </View>
                    </View>
                </View>
                <View style={{ marginHorizontal: normalize(10), marginTop: 16, flexDirection: "row", justifyContent: "space-around" }} >
                    <Typecard bg={"#E61E6B"} img={health} txtbg={"#74002D"} text={"Health"} />
                    <Typecard bg={"#92DAF9"} img={doctor} txtbg={"#006895"} text={"Doctor"} />
                </View>
                <View style={{ marginHorizontal: normalize(10), marginTop: 16, flexDirection: "row", justifyContent: "space-around" }} >
                    <Typecard bg={"#819CFF"} img={gym} txtbg={"#0D2FA9"} text={"GYM"} />
                    <Typecard bg={"#76E28E"} img={yoga} txtbg={"#348847"} text={"Yoga"} />
                </View>
                <View style={{ marginTop: normalize(25) }} >
                    <Slider />
                </View>
                <View style={{ marginTop: normalize(20), marginLeft: normalize(30) }} >
                    <Text style={{ fontFamily: fonts.montserrat_regular, fontWeight: "500", color: "#3D3C3B", fontSize: normalize(18) }} >Health Plus Card</Text>
                </View>
                <View style={{ marginTop: normalize(85), marginLeft: normalize(30) }} >
                    <Text style={{ fontFamily: fonts.montserrat_regular, fontWeight: "500", color: "#3D3C3B", fontSize: normalize(18) }} >Offer Cards</Text>
                </View>
                <View style={{ marginTop: normalize(213), marginLeft: normalize(30) }} >
                    <Text style={{ fontFamily: fonts.montserrat_regular, fontWeight: "500", color: "#3D3C3B", fontSize: normalize(18) }} >Offer Cards</Text>
                </View>
                <View style={{ marginHorizontal: normalize(10), marginTop: normalize(20), flexDirection: "row", justifyContent: "space-around" }} >
                    <Typecard bg={"#E61E6B"} img={health} txtbg={"#74002D"} text={"Health"} />
                    <Typecard bg={"#92DAF9"} img={saloon} txtbg={"#006895"} text={"Saloon"} />
                </View>
                <View style={{ marginHorizontal: normalize(10), marginTop: 16, flexDirection: "row", justifyContent: "space-around" }} >
                    <Typecard bg={"#819CFF"} img={gym} txtbg={"#0D2FA9"} text={"GYM"} />
                    <Typecard bg={"#76E28E"} img={diet} txtbg={"#348847"} text={"Dietician"} />
                </View>
                <View style={{ marginTop: normalize(20), marginLeft: normalize(30) }} >
                    <Text style={{ fontFamily: fonts.montserrat_regular, fontWeight: "600", color: "#3D3C3B", fontSize: normalize(18) }} >Exclusive Package</Text>
                </View>
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
                <View style={{ marginTop: normalize(20), marginLeft: normalize(30) }} >
                    <Text style={{ fontFamily: fonts.montserrat_regular, fontWeight: "600", color: "#3D3C3B", fontSize: normalize(18) }} >Doctors Card</Text>
                </View>
                <View style={{ paddingBottom: normalize(200) }} />
            </ScrollView>
        </>
    )
}