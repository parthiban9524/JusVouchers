import React from "react";
import { View, Text, TouchableOpacity, FlatList } from "react-native"
import { propTypes } from "redux-form";
import { fonts, normalize } from "./Utils";

export default function Categorybutton({parentCallBack = () => {} }) {

    const data =
        [
            {
                "id": "0",
                "name": "All"
            },
            {
                "id": "1",
                "name": "Gym"
            },
            {
                "id": "2",
                "name": "Yoga"
            },
            {
                "id": "3",
                "name": "Health"
            },
            {
                "id": "4",
                "name": "Beauty"
            },
            {
                "id": "5",
                "name": "saloon"
            }
        ];

    const func = (id) => {
        console.log("id", id)
        parentCallBack(id)

    }


    const renderItem = ({ item }) => (
        <TouchableOpacity style={{ height: normalize(30), width: normalize(90), backgroundColor: "#FFDCAE", borderRadius: normalize(20), justifyContent: "center", }} onPress={ () => func(item.id)}>
            <Text style={{ fontSize: normalize(18), fontFamily: fonts.montserrat_regular, fontWeight: "500", textAlign: "center" }} >{item.name}</Text>
        </TouchableOpacity>
    );

    const renderSepator = () => {
        return (
            <View style={{ paddingHorizontal: normalize(7) }} />
        )
    }

    return (
        <View>
            <FlatList
                data={data}
                horizontal={true}
                renderItem={renderItem}
                ItemSeparatorComponent={renderSepator}
                keyExtractor={item => item.id}
            />
        </View>
    )
}

