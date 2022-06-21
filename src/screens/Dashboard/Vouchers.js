import React, { useState } from "react";
import { View, Text, ScrollView, Image, FlatList } from "react-native"
import Categorybutton from "../../components/Categorybutton";
import Header from "../../components/Header";
import { fonts, normalize } from "../../components/Utils";

import beauty1 from "../../assest/images/beauty1.png"
import beauty2 from "../../assest/images/beauty2.png"
import card_bg from "../../assest/images/card_bg.png"



export default function Vouchers() {

    const [cateid, setcateid] = useState(false)


    const values =
        [
            {
                "category_id": 4,
                "name": "Beauty one",
                "offer": "599/-",
                "offer_text": "on Cobmo pack",
                "image": beauty1
            },
            {
                "category_id": 4,
                "name": "Beauty Two",
                "offer": "599/-",
                "offer_text": "on Cobmo pack",
                "image": beauty2
            }
        ]

    const example = (id) => {
        setcateid(id)
    }

    const renderItem = ({ item }) => (
        
        <View style={{ marginLeft: normalize(20), marginTop: normalize(36), }} >
            <Image source={card_bg} style={{ height: normalize(91), width: normalize(340) }} />
            <View style={{ position: "absolute", flexDirection: "row", }} >
                <View style={{ marginVertical: normalize(10), marginLeft: normalize(20) }} >
                    <Image source={item.image} style={{ height: normalize(70), width: normalize(140), resizeMode: "contain" }} />
                </View>
                <View style={{ marginTop: normalize(20), marginLeft: normalize(20) }} >
                    <Text style={{ fontWeight: "700", fontSize: normalize(30), color: "#F58220" }} >{item.offer} <Text style={{ fontFamily: fonts.montserrat_regular, fontWeight: "500", fontSize: normalize(20), color: "#938C8C" }} >off</Text></Text>
                    <Text style={{ fontFamily: fonts.montserrat_regular, fontWeight: "500", fontSize: normalize(12), color: "#3D3C3B", textAlign: "center" }} >{item.offer_text}</Text>
                </View>
            </View>
        </View>
        
    )



    return (
        <>
            <Header />
            <ScrollView style={{ flex: 1, backgroundColor: "#ffffff" }} >
                <View style={{ marginTop: normalize(20), marginLeft: normalize(20), }} >
                    <Categorybutton parentCallBack={(val) => example(val)} />
                </View>
                <FlatList
                    data={values}
                    renderItem={renderItem}
                    keyExtractor={item => item.id}
                />
            </ScrollView>
        </>

    )
}