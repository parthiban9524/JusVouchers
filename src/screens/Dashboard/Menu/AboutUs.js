import React from "react";
import { View, Text, Image } from "react-native"
import { fonts, normalize } from "../../../components/Utils";
import { logo } from "../../../components/Icons";
import { card } from "../../../components/Icons";
import Header from "../../../components/Header";
import  Vector1 from "../../../assest/images/Vector5.png"
import  Vector2 from "../../../assest/images/Vector6.png"


export default function AboutUs({ navigation }) {
    return (

        <View style={{ flex: 1, alignSelf: "center" }} >
            <Header navigation={navigation} />
            <View style={{ alignSelf: "center" }}>
                <Text style={{ fontSize: normalize(22), color: "#000000", fontFamily: fonts.montserrat_regular, fontWeight: "800", marginTop: 6 }}>About Us</Text>
            </View>
            <View>
                <View style={{ height: normalize(96), width: normalize(320), marginTop: normalize(15), backgroundColor: "#FFDCAE", flexDirection: 'row', alignItems: "stretch", borderRadius: normalize(10), alignSelf: "center" }} >
                    <View style={{ justifyContent: "center", marginLeft: normalize(50) }} >
                        <Image source={logo} style={{ height: normalize(62), width: normalize(104), resizeMode: "contain", marginLeft: 10 }} />
                    </View>
                    <View style = {{justifyContent : "center", marginLeft : normalize(39)}} >
                        <Image source={Vector1} style={{ height: normalize(28), width: normalize(68), resizeMode: "contain", top : 5  }} />
                        <View style = {{position : "absolute"}}>
<Text style = {{fontFamily : fonts.montserrat_regular, fontSize : 8, fontWeight : "600", color : "#ffffff", bottom : normalize(10),left : normalize(15), transform: [{ rotate: '-10deg' }]}} >Offer voucher</Text>
                        </View>
                        <Image source={Vector2} style={{ height: normalize(28), width: normalize(68), resizeMode: "contain",  }} />
                        <View style = {{position : "absolute"}}>
<Text style = {{fontFamily : fonts.montserrat_regular, fontSize : 8, fontWeight : "600", color : "#ffffff", top : normalize(15),left : normalize(15), transform: [{ rotate: '10deg' }]}} >10% to 40%</Text>
                        </View>
                    </View>
                </View>
            </View>
            <View style={{ marginHorizontal: normalize(20), marginTop: normalize(15), alignSelf: 'center', flexDirection: "row" }} >
                <Text style={{ fontSize: normalize(18), fontFamily: fonts.lato_regular, alignSelf: "center", fontWeight: 'bold', color: 'black' }} >Huge <Text style={{ color: "#F58220", fontWeight: 'bold' }} >Discounts</Text><Text> on </Text></Text>
                <Text style={{ fontSize: normalize(18), fontFamily: fonts.lato_regular, alignSelf: "center", fontWeight: 'bold', color: 'black' }} >Everything!</Text>
            </View>
            <View style={{ marginHorizontal: normalize(40), marginVertical: normalize(20) }}>
                <Text style={{ fontFamily: fonts.lato_bold, color: '#5c5a54', fontSize: normalize(14) }} >You are a business that wants to market amazing offers to grow your ROI? We have got you covered.
                    Want to market yourself better? Online and offline for better ROI? Jus Vouchers is the portal for you!
                </Text>
                <Text style={{ marginTop: normalize(16), fontFamily: fonts.lato_bold, color: '#5c5a54', fontSize: normalize(14) }}>If you are a shopper or want to buy something with discounts, we've got your back boo!</Text>
                <Text style={{ marginTop: normalize(16), fontFamily: fonts.lato_bold, color: '#5c5a54', fontSize: normalize(14) }}>To make saving money easier, JusVouchers Portal offers you the biggest discounts on leading brands, with over 10,000 deals available every day. With Jus Vouchers Portal, you can save money while shopping. How? It's as simple as searching for your favorite brand and taking advantage of the best available deals to get your money back.</Text>
                <Text style={{ marginTop: normalize(16), fontFamily: fonts.lato_bold, color: '#5c5a54', fontSize: normalize(14) }}>With JusVouchers, you'll never have to worry about a thing when it comes to securing the best deals onyour favorite items from all the businesses.</Text>

                <Text style={{ fontFamily: fonts.montserrat_bold, color: 'black', fontSize: normalize(15), alignSelf: 'center', marginTop: normalize(20), }}>Mission</Text>
                <Text style={{ marginTop: 7, fontFamily: fonts.lato_bold, color: '#5c5a54', fontSize: normalize(14) }}>It is our mission to provide every customer with top notch services and genuine savings, all with the purpose of making sure that your shopping list is as inexpensive as possible.</Text>
            </View>
        </View>
    )
}