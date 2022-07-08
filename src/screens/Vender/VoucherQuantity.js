import React, { useState } from "react";
import { View, Text, TouchableOpacity, Image, FlatList, StyleSheet } from "react-native"

import { admin_voucher, left } from "../../components/Icons";
import { normalize, fonts } from "../../components/Utils";
import VenderHeader from "../../components/VenderHeader";

export default function VoucherQuantity({ navigation }) {

    const DATA = [
        {
            "name": "Doctor Voucher",
            "Quantity": 40,
            "sale": 20,
            "pending": 20,
            "id": 1,
            "detail": [
                {
                    "name": "ABC Doctor",
                    "quantity": 10,
                    "balance": 0,
                },
                {
                    "name": " Doctor",
                    "quantity": 10,
                    "balance": 10,
                },
                {
                    "name": "ABC Doctor",
                    "quantity": 10,
                    "balance": 10,
                },
                {
                    "name": "Doctor",
                    "quantity": 10,
                    "balance": 10,
                }
            ]
        },
        {
            "name": "Saloon voucher",
            "Quantity": 20,
            "sale": 10,
            "pending": 10,
            "id": 2
        },
        {
            "name": "Gym voucher",
            "Quantity": 10,
            "sale": 5,
            "pending": 5,
            "id": 3
        },
        {
            "name": "Yoga voucher",
            "Quantity": 30,
            "sale": 10,
            "pending": 20,
            "id": 4
        },
        {
            "name": "Beauty voucher",
            "Quantity": 20,
            "sale": 15,
            "pending": 5,
            "id": 5
        },
    ]

    const [selectedId, setSelectedId] = useState(null);

    const onDate = (data) => {
        setSelectedId(data.id);
        navigation.navigate("QuantityDetails", { data: data })
    }

    const renderItem = ({ item }) => {
        const backgroundColor = item.id === selectedId ? "#FB8B0766" : null;

        return (
            <TouchableOpacity style={[styles.data_container, { backgroundColor: backgroundColor }]} onPress={() => onDate(item)} >
                <View style={{ justifyContent: "center", marginLeft: normalize(30) }}>
                    <Text style={styles.data_text}>{item.name}</Text>
                </View>
                <View style={{ justifyContent: "center", marginRight: normalize(45) }}>
                    <Text style={styles.data_text} >{item.Quantity}</Text>
                </View>
            </TouchableOpacity>
        );
    };

    return (
        <>
            <VenderHeader navigation={navigation} />
            <View>
                <View style={{ flexDirection: "row" }}>
                    <TouchableOpacity style={{ marginTop: normalize(20), marginLeft: normalize(20) }} onPress={() => navigation.goBack()} >
                        <Image source={left} style={{ height: normalize(30), width: normalize(30) }} />
                    </TouchableOpacity>
                    <Text style={{ fontFamily: fonts.montserrat_bold, fontSize: normalize(22), fontWeight: 'bold', marginLeft: normalize(100), marginTop: normalize(20), }}>Quantity</Text>
                </View>
                <View style={{ borderRadius: normalize(20), backgroundColor: '#FFDCAE99', width: normalize(340), height: normalize(83), alignSelf: "center", marginTop: normalize(15) }} >
                    <View style={{ flexDirection: "row", marginTop: normalize(15), alignSelf: "center" }}>
                        <Image source={admin_voucher} style={{ height: normalize(40), width: normalize(40), resizeMode: "contain", marginTop: 5 }} />
                        <Text style={{ fontSize: normalize(18), fontWeight: '500', marginLeft: normalize(20), marginTop: normalize(15), color: "#000000", }}  >Total Voucher Quantity : <Text style={{ fontSize: normalize(20), fontWeight: '500', marginLeft: 3, color: '#08D635', fontFamily: fonts.lato_bold }}>120</Text></Text>
                    </View>
                </View>
                <View style={{ width: normalize(340), borderRadius: normalize(10), backgroundColor: "#D0E3FFB0", marginVertical: normalize(20), alignSelf: "center" }}>
                    <View style={{ flexDirection: "row", justifyContent: "space-around", marginTop: normalize(20) }}>
                        <Text style={styles.data_text}>Voucher Name</Text>
                        <Text style={[styles.data_text, { left: 30 }]} >Voucher Quantity</Text>
                    </View>
                    <View style={{ width: normalize(340), borderColor: "#797877", borderBottomWidth: 1.2, alignSelf: "center", marginTop: normalize(10) }} />
                    <FlatList
                        data={DATA}
                        renderItem={renderItem}
                        keyExtractor={(item) => item.id}
                        extraData={selectedId}
                    />
                    <View style={{ width: normalize(340), borderColor: "#348847", borderBottomWidth: 1.2, alignSelf: "center", }} />
                    <View style={{ flexDirection: "row", justifyContent: "space-between", marginVertical: normalize(15) }}>
                        <Text style={[styles.data_text, { color: "#348847", marginLeft: normalize(40) }]} >Total Sale</Text>
                        <Text style={[styles.data_text, { color: "#348847", marginRight: normalize(55) }]}  >120</Text>

                    </View>
                </View>

            </View>
        </>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    item: {
        padding: 20,
        marginVertical: 8,
        marginHorizontal: 16,
    },
    title: {
        fontSize: 32,
    },
    data_text: {
        fontFamily: fonts.montserrat_semibold,
        fontSize: normalize(16),
        color: "#000000",
    },
    data_container: {
        flexDirection: "row",
        justifyContent: "space-between",
        marginTop: normalize(10),
        height: normalize(30),
        width: normalize(320),
        borderRadius: normalize(25),
        alignSelf: "center",
    }
});