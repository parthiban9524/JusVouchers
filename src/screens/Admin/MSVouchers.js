import React from "react";
import { View, Text, TouchableOpacity, Image, StyleSheet, FlatList } from "react-native"

import { fonts, normalize } from "../../components/Utils";
import { admin_voucher, left } from "../../components/Icons";
import AdminHeader from "../../components/AdminHeader";

export default function MSVouchers({navigation}) {

    const DATA = [

        {
            "name": "Doctor Voucher",
            "percentage": "45%"
        },
        {
            "name": "Saloon voucher",
            "percentage": "25%"
        },
        {
            "name": "Gym voucher",
            "percentage": "15%"
        },
        {
            "name": "Yoga voucher",
            "percentage": "20%"
        },
        {
            "name": "Beauty voucher",
            "percentage": "35%"
        },
    ]


    const renderItem = ({ item }) => {


        return (
            <TouchableOpacity style={[styles.data_container]} onPress={() => onDate(item)} >
                <View style={{ justifyContent: "center", right : normalize(15) }}>
                    <Text style={styles.data_text}>{item.name}</Text>
                </View>
                <View style={{ justifyContent: "center", right : normalize(15) }}>
                    <Text style={styles.data_text} >{item.percentage}</Text>
                </View>
            </TouchableOpacity>
        );
    };

    return (
        <>
            <AdminHeader />
            <View style={{ flex: 1, backgroundColor: "#ffffff" }} >
                <View style={{ flexDirection: "row", marginTop: normalize(20) }}>
                    <TouchableOpacity style={{ marginTop: normalize(20), marginLeft: normalize(20) }} onPress={() => navigation.goBack()} >
                        <Image source={left} style={{ height: normalize(30), width: normalize(30) }} />
                    </TouchableOpacity>
                    <Text style={{ fontFamily: fonts.montserrat_bold, fontSize: normalize(22), fontWeight: 'bold', marginLeft: normalize(60), marginTop: normalize(20) }}>Most Selling Voucher</Text>
                </View>
                <View style={{ borderRadius: normalize(20), backgroundColor: '#FFDCAE99', width: normalize(340), height: normalize(83), alignSelf: "center", marginTop: normalize(40) }} onPress={() => navigation.navigate("MSVouchers")} >
                    <View style={{ flexDirection: "row",marginLeft : normalize(20),  marginTop: normalize(15) }}>
                        <Image source={admin_voucher} style={{ height: normalize(40), width: normalize(40), resizeMode: "contain", marginTop: 5, tintColor: "red" }} />
                        <View>
                            <Text style={{ fontSize: normalize(16), fontWeight: '500', marginLeft: 10, marginTop: normalize(15), color: "#000000", alignSelf: "center", fontFamily: fonts.montserrat_semibold }}  >Best Selling Voucher - Doctor Voucher </Text>
                        </View>
                    </View>
                </View>
                <View style={{ width: normalize(340), borderRadius: normalize(10), backgroundColor: "#D0E3FFB0", marginVertical: normalize(20), alignSelf: "center" }}>
                    <View style={{ flexDirection: "row", justifyContent: "space-around", marginTop: normalize(20), marginLeft: normalize(20) }}>
                        <Text style={styles.data_text}>Voucher Name</Text>
                        <Text style={styles.data_text} > Sell Perchantage</Text>
                    </View>
                    <View style={{ width: normalize(340), borderColor: "#797877", borderBottomWidth: 1.2, alignSelf: "center", marginTop: normalize(10) }} />
                    <FlatList
                        data={DATA}
                        renderItem={renderItem}
                        keyExtractor={(item) => item.id}
                    />
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
        justifyContent: "space-around",
        marginTop: normalize(10),
        height: normalize(30),
        width: normalize(320),
        borderRadius: normalize(25),
        alignSelf: "center"
    }
});