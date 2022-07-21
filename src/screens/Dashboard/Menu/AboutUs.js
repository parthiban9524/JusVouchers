import React from "react";
import { View, Text, Image, ScrollView } from "react-native"
import { fonts, normalize } from "../../../components/Utils";
import { logo } from "../../../components/Icons";
import { card } from "../../../components/Icons";
import Header from "../../../components/Header";
import Vector1 from "../../../assest/images/Vector5.png"
import Vector2 from "../../../assest/images/Vector6.png"

import vision from "../../../assest/images/vision.png";
import mission from "../../../assest/images/mission.png";

export default function AboutUs({ navigation }) {
    return (

        <View style={{ flex: 1, alignSelf: "center" }} >
            <Header navigation={navigation} />
            <ScrollView>
                <View style={{ alignSelf: "center" }}>
                    <Text style={{ fontSize: normalize(22), color: "#000000", fontFamily: fonts.montserrat_regular, fontWeight: "800", marginTop: 6 }}>About Us</Text>
                </View>
                <View>
                    <View style={{ height: normalize(96), width: normalize(320), marginTop: normalize(15), backgroundColor: "#FFDCAE", flexDirection: 'row', alignItems: "stretch", borderRadius: normalize(10), alignSelf: "center" }} >
                        <View style={{ justifyContent: "center", marginLeft: normalize(50) }} >
                            <Image source={logo} style={{ height: normalize(62), width: normalize(104), resizeMode: "contain", marginLeft: 10 }} />
                        </View>
                        <View style={{ justifyContent: "center", marginLeft: normalize(39) }} >
                            <Image source={Vector1} style={{ height: normalize(28), width: normalize(68), resizeMode: "contain", top: 5 }} />
                            <View style={{ position: "absolute" }}>
                                <Text style={{ fontFamily: fonts.montserrat_regular, fontSize: 8, fontWeight: "600", color: "#ffffff", bottom: normalize(10), left: normalize(15), transform: [{ rotate: '-10deg' }] }} >Offer voucher</Text>
                            </View>
                            <Image source={Vector2} style={{ height: normalize(28), width: normalize(68), resizeMode: "contain", }} />
                            <View style={{ position: "absolute" }}>
                                <Text style={{ fontFamily: fonts.montserrat_regular, fontSize: 8, fontWeight: "600", color: "#ffffff", top: normalize(15), left: normalize(15), transform: [{ rotate: '10deg' }] }} >10% to 40%</Text>
                            </View>
                        </View>
                    </View>
                </View>
                <View style={{ marginLeft: normalize(35), marginTop: normalize(15), }} >
                    <Text style={{ fontSize: normalize(20), fontFamily: fonts.montserrat_semibold, fontWeight: 'bold', color: 'black' }} >Who we Are</Text>
                    <View style={{ width: normalize(110), height: 8, backgroundColor: "#F36E27", right: normalize(5), borderRadius: normalize(6) }} />
                </View>
                <View style={{ marginTop: normalize(20), }} >
                    <Text style={{ fontSize: normalize(15), fontFamily: fonts.montserrat_semibold, color: 'black', alignSelf: "center" }}  >Huge Discounts on Everything!</Text>
                </View>
                <View style={{ flexDirection: "row", marginTop: normalize(25), }} >
                    <View style={{ height: normalize(10), backgroundColor: "#000000", width: normalize(10), borderRadius: normalize(10), left: normalize(25), top: 3 }} />
                    <View style={{ marginHorizontal: normalize(30) }} >
                        <Text style={{ fontSize: normalize(13), fontFamily: fonts.montserrat_semibold, color: 'black', alignSelf: "center", }}  > You are a business that wants to market amazing offers to grow your ROI? We have got you covered.</Text>
                    </View>
                </View>
                <View style={{ flexDirection: "row", marginTop: normalize(15), }} >
                    <View style={{ height: normalize(10), backgroundColor: "#000000", width: normalize(10), borderRadius: normalize(10), left: normalize(25), top: 3 }} />
                    <View style={{ marginHorizontal: normalize(30) }} >
                        <Text style={{ fontSize: normalize(13), fontFamily: fonts.montserrat_semibold, color: 'black', alignSelf: "center", }}  > If you are a shopper or want to buy something with discounts, we’ve got your back boo!</Text>
                    </View>
                </View>
                <View style={{ flexDirection: "row", marginTop: normalize(15), }} >
                    <View style={{ height: normalize(10), backgroundColor: "#000000", width: normalize(10), borderRadius: normalize(10), left: normalize(25), top: 3 }} />
                    <View style={{ marginHorizontal: normalize(30) }} >
                        <Text style={{ fontSize: normalize(13), fontFamily: fonts.montserrat_semibold, color: 'black', alignSelf: "center", }}  > To make saving money easier, JusVouchers Portal offers you the biggest discounts on leading brands, with over 10,000 deals available every day. With JusVouchers Portal, you can save money while shopping. How? It's as simple as searching for your favorite brand and taking advantage of the best available deals to get your money back.
                        </Text>
                    </View>
                </View>
                <View style={{ flexDirection: "row", marginTop: normalize(15), }} >
                    <View style={{ height: normalize(10), backgroundColor: "#000000", width: normalize(10), borderRadius: normalize(10), left: normalize(25), top: 3 }} />
                    <View style={{ marginHorizontal: normalize(30) }} >
                        <Text style={{ fontSize: normalize(13), fontFamily: fonts.montserrat_semibold, color: 'black', alignSelf: "center", }}  > With JusVouchers, you'll never have to worry about a thing when it comes to securing the best deals on your favorite items from all the businesses.</Text>
                    </View>
                </View>
                <View style={{ marginLeft: normalize(30), marginTop: normalize(15), }} >
                    <Text style={{ fontSize: normalize(20), fontFamily: fonts.montserrat_semibold, fontWeight: 'bold', color: 'black' }} >Vision</Text>
                </View>
                <View style={{ flexDirection: "row", marginTop: normalize(30) }} >
                    <Image source={vision} style={{ height: normalize(60), width: normalize(60), left: normalize(20), }} />
                    <View style={{  marginTop: normalize(15), marginHorizontal: normalize(70), right : normalize(20) }} >
                        <Text style={{ fontSize: normalize(13), fontFamily: fonts.montserrat_semibold, color: 'black', alignSelf: "center", }}  > JusVouchers will make sure you never miss a chance to save money when shopping for things that will become a part of your everyday life from top brands and local retailers! And we will help your brand grow bigger and bigger with the best offers for your customers.</Text>
                    </View>
                </View>
                <View style={{ marginLeft: normalize(30), marginTop: normalize(15), }} >
                    <Text style={{ fontSize: normalize(20), fontFamily: fonts.montserrat_semibold, fontWeight: 'bold', color: 'black' }} >Mission</Text>
                </View>
                <View style={{ flexDirection: "row", marginTop: normalize(30) }} >
                    <Image source={mission} style={{ height: normalize(60), width: normalize(60), left: normalize(20), }} />
                    <View style={{  marginTop: normalize(15), marginHorizontal: normalize(70), right : normalize(20) }} >
                        <Text style={{ fontSize: normalize(13), fontFamily: fonts.montserrat_semibold, color: 'black', alignSelf: "center", }}  > It is our mission to provide every customer with top-notch services and genuine savings, all with the purpose of making sure that your shopping list is as inexpensive as possible.The company's creators have a knack for locating the best discounts on everything they buy and the best offers for the vendors to market their company. So why not spread the happiness around to everyone else in the store? They also understand the plight of business owners and have therefore extended the portal to businesses for diverse offline and online marketing.</Text>
                    </View>
                </View>
                <View style = {{marginBottom : normalize(30)}}  />
            </ScrollView>

        </View>
    )
}
