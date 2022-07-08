import React from "react";
import { View, Text, Image } from "react-native"
import { fonts, normalize } from "../../../components/Utils";
import { logo, left } from "../../../components/Icons";
import Header from "../../../components/Header";

export default function BlogDetails({ navigation }) {

    const data = navigation.getState().routes[2].params.data

    return (
        <View style={{ flex: 1, alignSelf: "center" }} >
            <Header navigation={navigation} />
            <View style={{ flexDirection: "row", marginTop: normalize(20), marginLeft: normalize(20), }} >
                    <Image source={left} style={{ height: normalize(27), width: normalize(27), alignSelf: "center" }} />
                    <Text style={{ fontSize: normalize(28), fontFamily: fonts.montserrat_regular, fontWeight: "800", marginLeft: normalize(10) }}>Blog Details</Text>
                </View>
            <View style = {{marginTop : normalize(10)}}>
                <Image source={data.image} style = {{height : normalize(200), width : "100%", resizeMode : "contain"}} />
            </View>
            <View style={{ marginLeft: normalize(35), marginTop: normalize(15),  }} >
                <Text style={{ fontSize: normalize(25), fontFamily: fonts.lato_regular, fontWeight: 'bold', color: 'black' }}>{data.name}</Text>
            </View>
            <View style={{ marginHorizontal: normalize(20), marginVertical: normalize(20) }}>
                <Text style={{ fontFamily: fonts.lato_bold, color: '#5c5a54', fontSize: normalize(14) }} >You are a business that wants to market amazing offers to grow your ROI? We have got you covered.
                    Want to market yourself better? Online and offline for better ROI? Jus Vouchers is the portal for you!
                </Text>
                <Text style={{ marginTop: normalize(16), fontFamily: fonts.lato_bold, color: '#5c5a54', fontSize: normalize(14) }}>If you are a shopper or want to buy something with discounts, we've got your back boo!</Text>
                <Text style={{ marginTop: normalize(16), fontFamily: fonts.lato_bold, color: '#5c5a54', fontSize: normalize(14) }}>To make saving money easier, JusVouchers Portal offers you the biggest discounts on leading brands, with over 10,000 deals available every day. With Jus Vouchers Portal, you can save money while shopping. How? It's as simple as searching for your favorite brand and taking advantage of the best available deals to get your money back.</Text>
                <Text style={{ marginTop: normalize(16), fontFamily: fonts.lato_bold, color: '#5c5a54', fontSize: normalize(14) }}>With JusVouchers, you'll never have to worry about a thing when it comes to securing the best deals onyour favorite items from all the businesses.</Text>

                <Text style={{ marginTop: 7, fontFamily: fonts.lato_bold, color: '#5c5a54', fontSize: normalize(14) }}>It is our mission to provide every customer with top notch services and genuine savings, all with the purpose of making sure that your shopping list is as inexpensive as possible.</Text>
            </View>
        </View>
    )
}