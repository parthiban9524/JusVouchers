import React from "react";
import { View, Text, Image, TouchableOpacity, FlatList } from "react-native"

import { fonts, normalize } from "./Utils";

export default function Typecard({ navigation, data, onpress }) {

    const renderItem = ({ item }) => (
        <TouchableOpacity style={{ height: normalize(140), width: normalize(160), backgroundColor: item.bg, borderRadius: normalize(10) }} onPress={onpress} >
            <View style={{ justifyContent: "center", marginTop: normalize(12) }}>
                <Image source={item.img} style={{ height: normalize(121), width: normalize(140), alignSelf: "center" }} />
            </View>
            <View style={{ height: normalize(32), width: normalize(160), backgroundColor: item.txtbg, position: "absolute", marginTop: normalize(110), borderBottomRightRadius: 5, borderBottomLeftRadius: 5, justifyContent: "center" }} >
                <Text style={{ fontFamily: fonts.montserrat_regular, fontWeight: "700", fontSize: normalize(18), color: "#ffffff", textAlign: "center" }} >{item.text}</Text>
            </View>
        </TouchableOpacity>
    )

    const renderSeparate = () => {
        return(<View style = {{marginHorizontal : 10}} />)
    }

    return (
        <View>
            <FlatList
                data={data}
                renderItem={renderItem}
                ItemSeparatorComponent = {renderSeparate}
                horizontal={true}
                keyExtractor={item => item.id}
            />
        </View>

    )
}