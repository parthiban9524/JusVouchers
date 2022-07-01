import React, { useEffect, useState } from "react";
import { FlatList, SafeAreaView, StatusBar, StyleSheet, Text, TouchableOpacity, View, Image } from "react-native";

import { normalize, fonts } from "../../../components/Utils";
import { sale1, rising, left } from "../../../components/Icons"
import VenderHeader from "../../../components/VenderHeader";

const VenderSaleDetails = ({ navigation }) => {

    const [selectedId, setSelectedId] = useState(null);
    const DATA = navigation.getState().routes[2].params.data.voucher

    const renderItem = ({ item }) => {
        console.log("item", item)
        return (
            <TouchableOpacity style={[styles.data_container]} onPress={() => navigation.navigate("Details", { data: item })} >
                <View style={{ justifyContent: "center", marginLeft: normalize(40) }}>
                    <Text style={styles.data_text}>{item.name}</Text>
                </View>
                <View style={{ justifyContent: "center", marginRight: normalize(40) }}>
                    <Text style={styles.data_text} >{item.status}</Text>
                </View>
            </TouchableOpacity>
        )
    }

    return (
        <>
            <VenderHeader navigation={navigation} />
            <SafeAreaView style={styles.container}>
                <TouchableOpacity style={{ marginTop: normalize(20), marginLeft: normalize(20) }} onPress={() => navigation.goBack()} >
                    <Image source={left} style={{ height: normalize(30), width: normalize(30) }} />
                </TouchableOpacity>
                <TouchableOpacity style={{ borderRadius: 20, backgroundColor: '#FFDCAE99', width: normalize(340), height: normalize(83), marginTop: normalize(20), alignSelf: "center", justifyContent: "center" }} onPress={() => navigation.navigate("SalesDetails")} >
                    <View style={{ flexDirection: "row", alignSelf: "center" }}>
                        <Image source={sale1} style={{ height: normalize(50), width: normalize(50), resizeMode: "contain", }} />
                        <Text style={{ fontSize: normalize(18), fontWeight: '500', marginLeft: 25, marginTop: 10 }}  >Today Sale</Text>
                        <View style={{ flexDirection: "row", marginTop: 10, }} >
                            <Text style={{ fontSize: normalize(19), fontWeight: '500', marginLeft: normalize(15), }}>$6960</Text>
                            <Image source={rising} style={{ width: normalize(40), height: normalize(25), marginLeft: normalize(20), alignSelf: "center", }} />
                            <Text style={{ fontFamily: fonts.montserrat_regular, fontSize: normalize(16), color: "#08D635", top: normalize(20) }} >5.6%</Text>
                        </View>
                    </View>
                </TouchableOpacity>
                <View style={{}}>
                    <Text style={{ fontFamily: fonts.montserrat_semibold, fontSize: normalize(18), color: "#348847", alignSelf: "center", marginTop: normalize(20) }} >02 June 2022 Wednesday</Text>
                </View>
                <View style={{ width: normalize(340), borderRadius: normalize(10), backgroundColor: "#D0E3FFB0", marginVertical: normalize(20), alignSelf: "center" }}>
                    <View style={{ flexDirection: "row", justifyContent: "space-around", marginTop: normalize(20), marginLeft: normalize(20) }}>
                        <Text style={styles.data_text}>Date</Text>
                        <Text style={styles.data_text} >Buy Status</Text>
                    </View>
                    <View style={{ width: normalize(340), borderColor: "#797877", borderBottomWidth: 1.2, alignSelf: "center", marginTop: normalize(10) }} />
                    <FlatList
                        data={DATA}
                        renderItem={renderItem}
                        keyExtractor={(item) => item.id}

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

export default VenderSaleDetails; 