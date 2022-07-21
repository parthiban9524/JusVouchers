import React from "react"
import { View, Text, ScrollView } from "react-native"

import Slider from "../../../components/Slider";
import Header from "../../../components/Header"
import { normalize, fonts } from "../../../components/Utils";


export default function OfflineMarketing({ navigation }) {
    return (
        <>
            <Header navigation={navigation} />
            <ScrollView style={{ flex: 1, backgroundColor: "#ffffff" }} >
                <View style={{ alignSelf: "center" }} >
                    <Slider navigation={navigation} id={1} set={false} />
                </View>
                <View style={{ marginTop: normalize(20), marginLeft: normalize(20), }} >
                    <Text style={{ fontSize: normalize(20), fontFamily: fonts.montserrat_semibold, color: 'black' }} >Offline Marketing</Text>
                    <View style={{ width: normalize(160), height: 8, backgroundColor: "#F36E27", right: normalize(5), borderRadius: normalize(6), marginTop: 5 }} />
                </View>
                <View style={{ marginTop: normalize(20), alignSelf: "center" }}>
                    <Text style={{ fontSize: normalize(16), fontFamily: fonts.montserrat_semibold, color: 'black' }} >Collabrating with us</Text>
                </View>
                <View>
                    <Text style={{ fontSize: normalize(14), fontFamily: fonts.montserrat_regular, color: 'black', marginHorizontal: normalize(30), marginTop: normalize(10) }}  >Who doesn’t love concessions and discounts; especially when prices of almost everything are escalating? These days,
                        most of the e-com sites and online shopping portals are offering greatdeals and free coupons so that buyers can save
                        money while buying from their websites.</Text>
                    <Text style={{ fontSize: normalize(14), fontFamily: fonts.montserrat_regular, color: 'black', marginHorizontal: normalize(30), marginTop: normalize(10) }} >Day by day, the financial system is festering and in such situations; using special discount codes and coupons have become a boon for crazy online shoppers all around the world. So if you are one of those quick-witted online shoppers who persistently try to dig up deals and coupons which could reduce their expenses to a great extent; then here we are to help you. Below are the best coupons and deals from leading-com websites like Jabong, Flipkart, Amazon, Nykaa, and Myntra which will help you to grab more products and items at less expense.</Text>
                </View>
                <View style={{ marginTop: normalize(20), alignSelf: "center" }}>
                    <Text style={{ fontSize: normalize(16), fontFamily: fonts.montserrat_semibold, color: 'black' }} >Services</Text>
                </View>
                <View>
                    <Text style={{ fontSize: normalize(14), fontFamily: fonts.montserrat_regular, color: 'black', marginHorizontal: normalize(30), marginTop: normalize(10) }} >Day by day, the financial system is festering and in such situations; using special discount codes and coupons have become a boon for crazy online shoppers all around the world. So if you are one of those quick-witted online shoppers who persistently try to dig up deals and coupons which could reduce their expenses to a great extent; then here we are to help you. Below are the best coupons and deals from leading-com websites like Jabong, Flipkart, Amazon, Nykaa, and Myntra which will help you to grab more products and items at less expense.</Text>
                </View>
                <View style={{ marginBottom: normalize(50) }} />
            </ScrollView>
        </>
    )
}