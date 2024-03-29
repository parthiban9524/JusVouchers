import React from "react";
import { View, Text, Image, ScrollView } from "react-native"

import Header from "../../components/Header";
import { card, cart1, cart2, offer1, offer2, offer3, offer4, offer5, offer6 } from "../../components/Icons";
import Submitbutton from "../../components/Submitbutton";
import Typecard from "../../components/Typecard";
import { fonts, normalize } from "../../components/Utils";

import doctor from "../../assest/images/doctor.png"
import health from "../../assest/images/health.png"
import yoga from "../../assest/images/yoga.png"
import saloon from "../../assest/images/saloon.png"
import online from "../../assest/images/online.png"
import offline from "../../assest/images/offline.png"
import exclusive from "../../assest/images/exclusive.png"
import Slider from "../../components/Slider";

export default function Home({ navigation }) {

    const val1 = [
        { "bg": "#E61E6B", "img": health, "txtbg": "#74002D", "text": "Health" },
        { "bg": "#92DAF9", "img": doctor, "txtbg": "#006895", "text": "Doctor" },
    ]

    const val2 = [
        { "bg": "#819CFF", "img": online, "txtbg": "#0D2FA9", "text": "Online Marketing" },
        { "bg": "#76E28E", "img": yoga, "txtbg": "#348847", "text": "SPA" },
    ]

    const val3 = [
        { "bg": "#E61E6B", "img": offline, "txtbg": "#74002D", "text": "Offline Marketing" },
        { "bg": "#92DAF9", "img": saloon, "txtbg": "#006895", "text": "Saloon" },
    ]

    const val4 = [
        { "bg": "#819CFF", "img": health, "txtbg": "#0D2FA9", "text": "Doctor" },
        { "bg": "#76E28E", "img": doctor, "txtbg": "#348847", "text": "Health" },
    ]

    return (
        <>
            <Header navigation={navigation} bg = {true} />
            <ScrollView style={{ backfaceVisibility: "visible", backgroundColor: "#ffffff" }} >
                <View style={{ alignSelf: "center" }}>
                    <Slider navigation={navigation} id={1} />
                </View>
                <View style={{ marginTop: normalize(40), marginLeft: normalize(30) }} >
                    <View style={{ flexDirection: "row", justifyContent: "space-between" }} >
                        <Text style={{ fontFamily: fonts.montserrat_regular, fontWeight: "500", color: "#3D3C3B", fontSize: normalize(18) }} >Latest Offer</Text>
                        <View style={{ right: normalize(25) }} >
                            <Submitbutton tiny={true} bg={"#f69632"} text={"Near Search"} txtclr={"#ffffff"} />
                        </View>
                    </View>
                </View>
                <ScrollView horizontal={true} style={{ flexDirection: "row", marginLeft: normalize(20), }}>
                    <View>
                        <View style={{ marginHorizontal: normalize(10), marginTop: 16, flexDirection: "row", justifyContent: "space-around" }} >
                            <Typecard data={val1} onpress={() => navigation.navigate("VouchersScreen")} />
                        </View>
                        <View style={{ marginHorizontal: normalize(10), marginTop: 16, flexDirection: "row", justifyContent: "space-around" }} >
                            <Typecard data={val2} onpress={() => navigation.navigate("DigitalMarketing")} />
                        </View>
                    </View>
                    <View>
                        <View style={{ marginHorizontal: normalize(10), marginTop: normalize(20), flexDirection: "row", justifyContent: "space-around" }} >
                            <Typecard data={val3}  onpress={() => navigation.navigate("OfflineMarketing")} />
                        </View>
                        <View style={{ marginHorizontal: normalize(10), marginTop: 16, flexDirection: "row", justifyContent: "space-around" }} >
                            <Typecard data={val4} />
                        </View>
                    </View>
                </ScrollView>
                <View style={{ alignSelf: "center" }} >
                    <Slider navigation={navigation} id={1} set = {true} />
                </View>
                <View style={{ marginTop: normalize(20), marginLeft: normalize(30) }} >
                    <Text style={{ fontFamily: fonts.montserrat_regular, fontWeight: "600", color: "#3D3C3B", fontSize: normalize(18) }} >Health Plus Card</Text>
                </View>
                <View style={{ flexDirection: "row", marginLeft: normalize(15), marginTop: normalize(10) }} >
                    <Image source={cart1} style={{ height: normalize(85), width: normalize(170), resizeMode: "contain" }} />
                    <Image source={cart2} style={{ height: normalize(85), width: normalize(170), resizeMode: "contain", marginLeft: normalize(10) }} />
                </View>
                <View style={{ marginTop: normalize(20), marginLeft: normalize(30) }} >
                    <Text style={{ fontFamily: fonts.montserrat_regular, fontWeight: "600", color: "#3D3C3B", fontSize: normalize(18) }} >Offer Cards</Text>
                </View>
                <View style={{ marginTop: normalize(20), marginLeft: normalize(20) }} >
                    <View style={{ flexDirection: "row" }} >
                        <Image source={offer1} style={{ height: normalize(85), width: normalize(110), resizeMode: "contain" }} />
                        <Image source={offer2} style={{ height: normalize(85), width: normalize(110), resizeMode: "contain", marginLeft: 10 }} />
                        <Image source={offer3} style={{ height: normalize(85), width: normalize(110), resizeMode: "contain", marginLeft: 10 }} />
                    </View>
                    <View style={{ flexDirection: "row", marginTop: normalize(18) }} >
                        <Image source={offer4} style={{ height: normalize(85), width: normalize(110), resizeMode: "contain" }} />
                        <Image source={offer5} style={{ height: normalize(85), width: normalize(110), resizeMode: "contain", marginLeft: 10 }} />
                        <Image source={offer6} style={{ height: normalize(85), width: normalize(110), resizeMode: "contain", marginLeft: 10 }} />
                    </View>
                </View>
                <View style={{ marginTop: normalize(20), marginLeft: normalize(30) }} >
                    <Text style={{ fontFamily: fonts.montserrat_regular, fontWeight: "500", color: "#3D3C3B", fontSize: normalize(18) }} >Top Selling</Text>
                </View>
                <ScrollView horizontal={true} style={{ flexDirection: "row", marginLeft: normalize(20), }}>
                    <View>
                        <View style={{ marginHorizontal: normalize(10), marginTop: 16, flexDirection: "row", justifyContent: "space-around" }} >
                            <Typecard data={val3} onpress={() => navigation.navigate("OfflineMarketing")} />
                        </View>
                        <View style={{ marginHorizontal: normalize(10), marginTop: 16, flexDirection: "row", justifyContent: "space-around" }} >
                            <Typecard data={val4}/>
                        </View>
                    </View>
                    <View>
                        <View style={{ marginHorizontal: normalize(10), marginTop: normalize(20), flexDirection: "row", justifyContent: "space-around" }} >
                            <Typecard data={val1} onpress={() => navigation.navigate("OfflineMarketing")} />
                        </View>
                        <View style={{ marginHorizontal: normalize(10), marginTop: 16, flexDirection: "row", justifyContent: "space-around" }} >
                            <Typecard data={val2}  onpress={() => navigation.navigate("DigitalMarketing")}  />
                        </View>
                    </View>
                </ScrollView>
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
                <View style={{ marginLeft: normalize(15) }} >
                    <Slider navigation={navigation} id={2} />
                </View>
                <View style={{ paddingBottom: normalize(50) }} />
            </ScrollView>
        </>
    )
}