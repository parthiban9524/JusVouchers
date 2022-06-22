import React from "react";
import { View, Text, TouchableOpacity, FlatList } from "react-native"
import { propTypes } from "redux-form";
import { fonts, normalize } from "./Utils";

export default function Categorybutton({ parentCallBack = () => { }, data = {} }) {

    
    const func = (category) => {
        console.log("category", category)
        parentCallBack(category)

    }


    const renderItem = ({ item }) => (
        <TouchableOpacity style={{ height: normalize(30), width: normalize(90), backgroundColor: "#FFDCAE", borderRadius: normalize(20), justifyContent: "center", marginLeft : 9 }} onPress={() => func(item.name)}>
            <Text style={{ fontSize: normalize(18), fontFamily: fonts.montserrat_regular, fontWeight: "500", textAlign: "center" }} >{item.name}</Text>
        </TouchableOpacity>
    );

    return (
        <View>
            <FlatList
                data={data}
                horizontal={true}
                renderItem={renderItem}
                keyExtractor={item => item.id}
            />
        </View>
    )
}

