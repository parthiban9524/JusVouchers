import React from "react";
import {  SafeAreaView, StyleSheet, Text, TouchableOpacity, View, Image, TextInput } from "react-native";

import { normalize, fonts } from "../../../components/Utils";
import { left, new_user } from "../../../components/Icons";
import VenderHeader from "../../../components/VenderHeader";

export default function Details({ navigation }) {

    const DATA = navigation.getState().routes[3].params.data

    return (
        <>
            <VenderHeader navigation={navigation} />
            <SafeAreaView style={styles.container}>
                <TouchableOpacity style={{ marginTop: normalize(20), marginLeft: normalize(20) }} onPress={() => navigation.goBack()} >
                    <Image source={left} style={{ height: normalize(30), width: normalize(30) }} />
                </TouchableOpacity>
                <View style={{ borderRadius: 20, backgroundColor: '#FFDCAE99', width: normalize(300), height: normalize(83), marginTop: normalize(20), alignSelf: "center", justifyContent: "center" }} >
                    <View style={{ flexDirection: "row", alignSelf: "center" }}>
                        <Image source={new_user} style={{ height: normalize(50), width: normalize(50), resizeMode: "contain", left: normalize(20) }} />
                        <Text style={{ fontSize: normalize(18), fontWeight: '500', marginHorizontal: normalize(50), marginTop: 4, textAlign: "center" }}  >Pranay has’t Purchese anything yet. </Text>
                    </View>
                </View>
                <View>
                    <Text style={{ fontFamily: fonts.montserrat_semibold, fontSize: normalize(18), color: "#348847", alignSelf: "center", marginTop: normalize(20) }} >02 June 2022 Wednesday</Text>
                </View>
                <View style={{ marginTop: normalize(10), marginLeft: normalize(15) }}>
                    <View style={{ marginLeft: normalize(15) }}>
                        <Text style={{ fontFamily: fonts.lato_regular, fontWeight: "500", fontSize: normalize(12), color: "#0D2FA9" }} >Name</Text>
                    </View>
                    <TextInput
                        style={{ width: normalize(318), borderColor: "#000000", borderBottomWidth: 1, marginLeft: normalize(10), fontFamily: fonts.lato_regular, fontSize: normalize(20) }}
                        placeholder={DATA.name}
                        placeholderTextColor={"#000000"}
                    />
                </View>
                <View style={{ marginTop: normalize(15), marginLeft: normalize(15) }}>
                    <View style={{ marginLeft: normalize(15) }}>
                        <Text style={{ fontFamily: fonts.lato_regular, fontWeight: "500", fontSize: normalize(12), color: "#0D2FA9" }} >Email</Text>
                    </View>
                    <TextInput
                        style={{ width: normalize(318), borderColor: "#000000", borderBottomWidth: 1, marginLeft: normalize(10), fontFamily: fonts.lato_regular, fontSize: normalize(20) }}
                        placeholder={DATA.email}
                        placeholderTextColor={"#000000"}
                    />
                </View>
                <View style={{ marginTop: normalize(15), marginLeft: normalize(15) }}>
                    <View style={{ marginLeft: normalize(15) }}>
                        <Text style={{ fontFamily: fonts.lato_regular, fontWeight: "500", fontSize: normalize(12), color: "#0D2FA9" }} >Mobile no</Text>
                    </View>
                    <TextInput
                        style={{ width: normalize(318), borderColor: "#000000", borderBottomWidth: 1, marginLeft: normalize(10), fontFamily: fonts.lato_regular, fontSize: normalize(20) }}
                        placeholder={DATA.phone}
                        placeholderTextColor={"#000000"}
                    />
                </View>
                <View style={{ marginTop: normalize(15), marginLeft: normalize(15) }}>
                    <View style={{ marginLeft: normalize(15) }}>
                        <Text style={{ fontFamily: fonts.lato_regular, fontWeight: "500", fontSize: normalize(12), color: "#0D2FA9" }} >Address</Text>
                    </View>
                    <TextInput
                        style={{ width: normalize(318), borderColor: "#000000", borderBottomWidth: 1, marginLeft: normalize(10), fontFamily: fonts.lato_regular, fontSize: normalize(20) }}
                        placeholder={DATA.address}
                        placeholderTextColor={"#000000"}
                    />
                </View>
            </SafeAreaView>
        </>
    );
};

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
    data_container: {
        flexDirection: "row",
        justifyContent: "space-between",
        marginVertical: normalize(10),
        width: normalize(320),
    },
    data_text: {
        fontFamily: fonts.montserrat_semibold,
        fontSize: normalize(16),
        color: "#000000",
    },
    data_text_shop: {
        fontFamily: fonts.montserrat_regular,
        fontSize: normalize(10),
        fontWeight: "500",
        color: "#000000",
    },
});