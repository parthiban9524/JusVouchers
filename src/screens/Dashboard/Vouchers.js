import React, { useState, useEffect } from "react";
import { View, Text, ScrollView, Image, FlatList, TouchableOpacity } from "react-native"

import Categorybutton from "../../components/Categorybutton";
import Header from "../../components/Header";
import { fonts, normalize, getDistinctCategory } from "../../components/Utils";
import card_bg from "../../assest/images/card_bg.png"

import { Data } from "./Data";

export default function Vouchers({navigation}) {

    const [cat, setcatid] = useState("")
    const [category, setcategory] = useState([]);
    const [all, setall] = useState(false)

    console.log("all", all)
    const [selectedName, setselectedName] = useState('')
    const offers = (!selectedName) ? Data : Data.filter(x => x.category == selectedName)

    useEffect(() => {
        setcategory(getDistinctCategory(Data))
    }, [])

    const handleCallback = (selectedName) => {
        setall(false)
        setselectedName(selectedName)
    }

    const onSet = () => {
        setall(true)
    }

    const renderItem = ({ item }) => (
        <TouchableOpacity style={{ marginLeft: normalize(20), marginTop: normalize(36), }} onPress = {() => navigation.navigate("Vouchers_detail",{ image : item.image})} >
            <Image source={card_bg} style={{ height: normalize(91), width: normalize(340) }} />
            <View style={{ position: "absolute", flexDirection: "row", }} >
                <View style={{ marginVertical: normalize(10), marginLeft: normalize(20) }} >
                    <Image source={item.image} style={{ height: normalize(70), width: normalize(140), resizeMode: "contain" }} />
                </View>
                <View style={{ marginTop: normalize(20), marginLeft: normalize(5) }} >
                    {
                        item.start_offer && (<Text style={{ fontWeight: "700", fontSize: normalize(23), color: "#F58220" }} >{item.start_offer} <Text style={{ fontFamily: fonts.montserrat_regular, fontWeight: "500", fontSize: normalize(20), color: "#938C8C" }} >to</Text> <Text style={{ fontWeight: "700", fontSize: normalize(23), color: "#F58220" }} >{item.end_offer}</Text><Text style={{ fontFamily: fonts.montserrat_regular, fontWeight: "500", fontSize: normalize(20), color: "#938C8C" }} >off</Text></Text>)}
                    {
                        !item.start_offer && (<Text style={{ fontWeight: "700", fontSize: normalize(28), color: "#F58220" }} >{item.offer} <Text style={{ fontFamily: fonts.montserrat_regular, fontWeight: "500", fontSize: normalize(20), color: "#938C8C" }} >off</Text></Text>)
                    }
                    <Text style={{ fontFamily: fonts.montserrat_regular, fontWeight: "500", fontSize: normalize(12), color: "#3D3C3B", textAlign: "center" }} >{item.offer_text}</Text>
                </View>
            </View>
        </TouchableOpacity>


    )

    return (
        <>
            <Header />
            <ScrollView style={{ flex: 1, backgroundColor: "#ffffff" }} >
                <ScrollView style={{ marginTop: normalize(20), marginLeft: normalize(15), flexDirection: "row", }} horizontal={true} >
                    <TouchableOpacity style={{ height: normalize(30), width: normalize(90), backgroundColor: "#FFDCAE", borderRadius: normalize(20), justifyContent: "center", }} onPress={onSet}>
                        <Text style={{ fontSize: normalize(18), fontFamily: fonts.montserrat_regular, fontWeight: "500", textAlign: "center" }} >All</Text>
                    </TouchableOpacity>
                    <View>
                        <Categorybutton data={category} parentCallBack={handleCallback} />
                    </View>
                </ScrollView>
                <FlatList
                    data={all ? Data : offers}
                    renderItem={renderItem}
                    keyExtractor={item => item.id}
                />
            </ScrollView>
        </>

    )
}