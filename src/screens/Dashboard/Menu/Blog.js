import React, { useEffect, useState } from "react";
import { View, Text, Image, ScrollView, TouchableOpacity, FlatList } from "react-native"

import { fonts, normalize } from "../../../components/Utils";
import Categorybutton from "../../../components/Categorybutton"
import { getDistinctCategory } from "../../../components/Utils";
import Header from "../../../components/Header";
import card_bg from "../../../assest/images/card_bg.png"
import { BlogData } from "../Data";
import { left } from "../../../components/Icons";

export default function Blog({ navigation }) {

    const [category, setcategory] = useState([]);
    const [all, setall] = useState(false)
    const [selectedName, setselectedName] = useState('')

    const offers = (!selectedName) ? BlogData : BlogData.filter(x => x.category == selectedName)


    useEffect(() => {
        setcategory(getDistinctCategory(BlogData))
    }, [])

    const handleCallback = (selectedName) => {
        setall(false)
        setselectedName(selectedName)
    }

    const onSet = () => {
        setall(true)
    }

    const renderItem = ({ item }) => (
        <TouchableOpacity style={{ marginTop: normalize(20) }} activeOpacity={1} onPress={() => navigation.navigate("BlogDetails",{data : item})} >
            <Image source={item.image} style={{ height: normalize(170), width: normalize(330), resizeMode: "contain", marginLeft: normalize(20), }} />
            <View style={{ marginTop: normalize(15), marginLeft: normalize(20), }} >
                <Text style={{ fontFamily: fonts.montserrat_semibold, fontSize: normalize(22), color: "#000000" }} >{item.name}</Text>
            </View>
            <View style={{ marginTop: normalize(5), marginHorizontal: normalize(20) }} >
                <Text style={{ fontFamily: fonts.montserrat_semibold, fontSize: normalize(14) }} >{item.details}</Text>
            </View>
        </TouchableOpacity>
    )

    const renderSeparate = () => {
        return (<View style={{ marginTop: normalize(20) }} />)
    }

    return (

        <View style={{ flex: 1, alignSelf: "center" }} >
            <Header navigation={navigation} />
            <ScrollView style={{ backgroundColor: "#ffffff" }}>
            <View style={{ flexDirection: "row", marginTop: normalize(10), marginLeft: normalize(20), }} >
                <TouchableOpacity onPress={() => navigation.goBack()}>
                    <Image source={left} style={{ height: normalize(27), width: normalize(27), alignSelf: "center",marginTop:5 }} />
                </TouchableOpacity>
                <Text style={{ fontSize: normalize(28), fontFamily: fonts.montserrat_regular, fontWeight: "800", marginLeft: normalize(20) }}>Blog</Text>
            </View>
                <ScrollView style={{ marginTop: normalize(20), marginLeft: normalize(15), flexDirection: "row", }} horizontal={true} >
                    <TouchableOpacity style={{ height: normalize(30), width: normalize(90), backgroundColor: "#FFDCAE", borderRadius: normalize(20), justifyContent: "center", }} onPress={onSet}>
                        <Text style={{ fontSize: normalize(15), fontFamily: fonts.montserrat_regular, fontWeight: "500", textAlign: "center" }} >All</Text>
                    </TouchableOpacity>
                    <Categorybutton data={category} parentCallBack={handleCallback} />
                </ScrollView>
                <FlatList
                    data={all ? BlogData : offers}
                    renderItem={renderItem}
                    keyExtractor={item => item.id}
                    ItemSeparatorComponent={renderSeparate}
                />
                <View style={{ marginBottom: normalize(120) }} />
            </ScrollView>
        </View>
    )
}