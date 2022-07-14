import React, { useState, useEffect } from "react";
import { View, Text, ScrollView, Image, FlatList, TouchableOpacity } from "react-native"

import Categorybutton from "../../../components/Categorybutton";
import Header from "../../../components/Header";
import { fonts, normalize, getDistinctCategory } from "../../../components/Utils";
import card_bg from "../../../assest/images/card_bg.png"

import { Data } from "../Data";
import { red_heart, white_heart } from "../../../components/Icons";
import HealthForm from "./HealthForm";

export default function Vouchers({ navigation }) {

    const [cat, setcatid] = useState("")
    const [category, setcategory] = useState([]);
    const [all, setall] = useState(false)
    const [page, setpage] = useState(false)
    const [selectedName, setselectedName] = useState('')
    const [like, setlike] = useState(false)
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

    const Onpress = (data) => {

    }

    // useEffect(() => {
    //     page === false && (
    //         navigation.navigate('HealthForm')
    //     )   
    //     setpage(true)   
    // })

    const renderItem = ({ item }) => (
        <View style={{ marginLeft: normalize(20), marginTop: normalize(36), }} >
            <Image source={card_bg} style={{ height: normalize(91), width: normalize(340) }} />
            <View style={{ position: "absolute", flexDirection: "row", }} >
                <TouchableOpacity style={{ marginVertical: normalize(10), marginLeft: normalize(20) }} onPress={() => navigation.navigate("Vouchers_detail", { image: item.image })} >
                    <Image source={item.image} style={{ height: normalize(70), width: normalize(140), resizeMode: "contain" }} />
                </TouchableOpacity>
                <TouchableOpacity style={{ left: normalize(145), top: 5 }} onPress={Onpress(item.like)} >
                    <Image source={item.like ? red_heart : white_heart} style={{ height: normalize(18), width: normalize(18), }} />
                </TouchableOpacity>
                <TouchableOpacity style={{ right: 10 }} onPress={() => navigation.navigate("Vouchers_detail", { image: item.image })} >

                    {
                        item.start_offer && (
                            <>
                                {
                                    item.name !== "" && (
                                        <Text style={{ fontFamily: fonts.lato_regular, fontWeight: "500", fontSize: normalize(16), color: "#000000", marginTop: normalize(15) }} >{item.name}</Text>

                                    )
                                }
                                <Text style={{ fontWeight: "700", fontSize: normalize(23), color: "#F58220", right: normalize(20),  marginTop: item.name !== "" ? normalize(8) : normalize(20) }} >{item.start_offer}<Text style={{ fontFamily: fonts.montserrat_regular, fontWeight: "500", fontSize: normalize(20), color: "#938C8C" }} >to</Text> <Text style={{ fontWeight: "700", fontSize: normalize(23), color: "#F58220" }} >{item.end_offer}</Text><Text style={{ fontFamily: fonts.montserrat_regular, fontWeight: "500", fontSize: normalize(20), color: "#938C8C" }} >off</Text></Text>
                            </>)
                    }
                    {
                        !item.start_offer && (
                            <>
                                {
                                    item.name !== "" && (
                                        <Text style={{ fontFamily: fonts.lato_regular, fontWeight: "500", fontSize: normalize(16), color: "#000000", marginTop: normalize(10) }} >{item.name}</Text>

                                    )
                                }
                                <Text style={{ fontWeight: "700", fontSize: normalize(28), color: "#F58220", marginTop: item.name !== "" ? null : normalize(20) }} >{item.offer} <Text style={{ fontFamily: fonts.montserrat_regular, fontWeight: "500", fontSize: normalize(20), color: "#938C8C" }} >off</Text></Text>
                            </>)
                    }
                    <Text style={{ fontFamily: fonts.montserrat_regular, fontWeight: "500", fontSize: normalize(12), color: "#3D3C3B", textAlign: "center" }} >{item.offer_text}</Text>
                </TouchableOpacity>
            </View>
        </View>
    )

    return (
        <>
            <Header navigation={navigation} />
            <ScrollView style={{ flex: 1, backgroundColor: "#ffffff" }} >
                <ScrollView style={{ marginTop: normalize(20), marginLeft: normalize(15), flexDirection: "row", marginBottom: 15 }} horizontal={true} >
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
                <View style={{ marginBottom: normalize(100) }} />
            </ScrollView>
        </>

    )
}