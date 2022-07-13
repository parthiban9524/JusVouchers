import React from "react";
import { View, Text, TouchableOpacity, Image, FlatList, StyleSheet } from "react-native"

import { left, admin_voucher } from "../../components/Icons";
import { normalize, fonts } from "../../components/Utils";
import VenderHeader from "../../components/VenderHeader";

export default function QuantityDetails({ navigation }) {

    const DATA = navigation.getState().routes[2].params.data.detail
    const data = navigation.getState().routes[2].params.data


    console.log("data",DATA)

    const renderItem = ({ item }) => {
console.log("Item", item)
        return (
            <TouchableOpacity style={[styles.data_container]} onPress={() => onDate(item)} >
                <View style={{ justifyContent: "center",marginRight:30 }}>
                    <Text style={styles.data_text}>{item.name}</Text>
                </View>
                <View style={{ justifyContent: "center",marginRight:70}}>
                    <Text style={styles.data_text} >{item.quantity}</Text>
                </View>
                <View style={{ justifyContent: "center", marginRight: normalize(0) }}>
                    <Text style={styles.data_text} >{item.balance}</Text>
                </View>
            </TouchableOpacity>
        );
    };

        return(
            <>
                <VenderHeader navigation={navigation} />
                <View>
                    <View style={{ flexDirection: "row" }}>
                        <TouchableOpacity style={{ marginTop: normalize(20), marginLeft: normalize(20) }} onPress={() => navigation.goBack()} >
                            <Image source={left} style={{ height: normalize(30), width: normalize(30) }} />
                        </TouchableOpacity>
                        <Text style={{ fontFamily: fonts.montserrat_bold, fontSize: normalize(22), fontWeight: 'bold', marginLeft: normalize(80), marginTop: normalize(20) }}>QuantityDetails</Text>
                    </View>
                    <View style={{ borderRadius: normalize(20), backgroundColor: '#FFDCAE99', width: normalize(340), height: normalize(83), alignSelf: "center", marginTop: normalize(15) }} >
                        <View style={{ flexDirection: "row", marginTop: normalize(15), alignSelf: "center" }}>
                            <Image source={admin_voucher} style={{ height: normalize(40), width: normalize(40), resizeMode: "contain", marginTop: 5 }} />
                            <Text style={{ fontSize: normalize(18), fontWeight: '500', marginLeft: normalize(20), marginTop: normalize(15), color: "#000000", }}  >{data.name} Quantity : <Text style={{ fontSize: normalize(20), fontWeight: '500', marginLeft: 3, color: '#08D635', fontFamily: fonts.lato_bold }}>{data.Quantity}</Text></Text>
                        </View>
                    </View>
                    <View style={{ width: normalize(340), borderRadius: normalize(10), backgroundColor: "#D0E3FFB0", marginVertical: normalize(20), alignSelf: "center" }}>
                    <View style={{ flexDirection: "row", justifyContent: "space-around", marginTop: normalize(20), marginLeft: normalize(20) }}>
                        <Text style={styles.data_text}>Shop Name</Text>
                        <Text style={[styles.data_text, { left: 10 }]} >Purchased</Text>
                        <Text style={[styles.data_text, { left: 10 }]} >Pending</Text>

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
        marginTop: normalize(10),
        height: normalize(30),
        width: normalize(320),
        borderRadius: normalize(25),
        alignSelf: "center",
        justifyContent : "space-around"
    }
});