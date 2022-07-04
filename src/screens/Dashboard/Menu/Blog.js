import React from "react";
import { View, Text, Image } from "react-native"
import { fonts, normalize } from "../../../components/Utils";
import { logo, blog } from "../../../components/Icons";
import { card } from "../../../components/Icons";
import Header from "../../../components/Header";
export default function Blog({navigation}) {
    return (

        <View style={{ flex: 1, alignSelf: "center" }} >
            <Header navigation={navigation} />
            <View style={{ alignSelf: "center" }}>
                <Text style={{ fontSize: normalize(22), color: "#000000", fontFamily: fonts.montserrat_regular, fontWeight: "800", marginTop: 6 }}>Blog</Text>
            </View>
            <View>
                <View style={{ marginTop: normalize(15), backgroundColor: "#F9AA44", flexDirection: 'row', alignItems: "stretch", borderRadius: normalize(10), marginLeft: 14, marginRight: 14 }} >
                    <Image source={logo} style={{ height: normalize(100), width: normalize(150), resizeMode: "contain", marginLeft: 20 }} />
                    <View style={{marginLeft:25}}><Image source={card} style={{ height: normalize(100), width: normalize(150), resizeMode: "contain" }} />
                    </View>
                </View>
            </View>
            <View style={{ marginHorizontal: normalize(20), marginTop: normalize(15), alignSelf: 'center', flexDirection: "row" }} >
                <Text style={{ fontSize: normalize(18), fontFamily: fonts.lato_regular, alignSelf: "center", fontWeight: 'bold', color: 'black' }} >Advertisement</Text>
            </View>
            <View style={{ flexDirection: 'row', marginTop: 7 }}>
                <View>
                    <Image source={logo} style={{ height: normalize(80), width: normalize(130), resizeMode: "contain", marginLeft: 10 }} />
                </View>
                <View style={{ margin: 4, marginTop: 15 }}>
                    <Text style={{ fontFamily: fonts.lato_bold, color: '#5c5a54' }}>Many well-known online retailers </Text>
                    <Text style={{ fontFamily: fonts.lato_bold, color: '#5c5a54' }}> sort of coupon system in place, </Text>
                    <Text style={{ fontFamily: fonts.lato_bold, color: '#5c5a54' }}>and they routinely provide them   </Text>
                    <Text style={{ fontFamily: fonts.lato_bold, color: '#5c5a54' }}>to clients.The of coupon marketing </Text>
                </View>
            </View>
            <View style={{marginHorizontal:13}}>
                <Text style={{ fontFamily: fonts.lato_bold, color: '#5c5a54', marginTop: 4 }}> are well-known,and not employing coupons at your store means you're missing out on a significant opportunity.This is no coincidence. </Text>
                <Text style={{ fontFamily: fonts.lato_bold, color: '#5c5a54', marginTop: 7 }}>People love to save money when they use coupons because
                    they are practically free money. However, coupons may be used in a variety of ways, and each one can help you increase sales.</Text>
                <Text style={{ fontFamily: fonts.lato_bold, color: '#5c5a54' , marginTop: 7}}>In this article, we'll discuss coupon marketing in general and then go over four tactics you can employ to increase sales at the JusVouchers store.</Text>
                <Text style={{ fontFamily: fonts.lato_bold, color: '#5c5a54' , marginTop: 7}}>
                    Marketing using Coupons: A Quick Overview Customers are given coupons or codes that they can use to get discounts and freebies when they sign up.</Text>
                <Text style={{ fontFamily: fonts.lato_bold, color: '#5c5a54', marginTop: 7 }}>Coupons with attractive discounts for first-time clients are al frequent strategy employed by numerous internet stores. An exit-intent popup can be configured to display the offer, allowing you to target visitors as they exit the virtual door</Text>
            </View>
        </View>
    )
}