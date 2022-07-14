import React, { useState } from "react";
import { FlatList, SafeAreaView, StatusBar, StyleSheet, Text, TouchableOpacity, View, Image } from "react-native";
import { normalize, fonts } from "../../../components/Utils";
import { sale1, rising } from "../../../components/Icons";
import { left } from "../../../components/Icons";
import VenderHeader from "../../../components/VenderHeader";

const DATA = [
    {
        id: "1",
        Date: "24.06.2022",
        "voucher": [
            {
                "name": "Aakash",
                "id" : 1,
                "email": "mohit@gmail.com",
                "phone": "7895631245",
                "address": "axcvbhnmjgfddsfdrsffddettew",
                "status": "Completed"
            },
            {
                "name": "Tejas",
                "id" : 2,
                "email": "mohit@gmail.com",
                "phone": "7895631245",
                "address": "axcvbhnmjgfddsfdrsffddettew",
                "status": "Cancel"
            },
            {
                "name": "Ronak",
                "id" : 3,
                "email": "mohit@gmail.com",
                "phone": "7895631245",
                "address": "axcvbhnmjgfddsfdrsffddettew",
                "status": "Completed"
            },
            {
                "name": "Sunny",
                "id" : 4,
                "email": "mohit@gmail.com",
                "phone": "7895631245",
                "address": "axcvbhnmjgfddsfdrsffddettew",
                "status": "Cancel"
            },
            {
                "name": "Pranay",
                "id" : 5,
                "email": "mohit@gmail.com",
                "phone": "7895631245",
                "address": "axcvbhnmjgfddsfdrsffddettew",
                "status": "Completed"
            },
        ],
        Sale: '₹2400',

    },
    {
        id: "2",
        "voucher": [
            {
                "name": "Aakash",
                "id" : 1,
                "email": "mohit@gmail.com",
                "phone": "7895631245",
                "address": "axcvbhnmjgfddsfdrsffddettew",
                "status": "Completed"
            },
            {
                "name": "Tejas",
                "id" : 2,
                "email": "mohit@gmail.com",
                "phone": "7895631245",
                "address": "axcvbhnmjgfddsfdrsffddettew",
                "status": "Cancel"
            },
            {
                "name": "Ronak",
                "id" : 3,
                "email": "mohit@gmail.com",
                "phone": "7895631245",
                "address": "axcvbhnmjgfddsfdrsffddettew",
                "status": "Completed"
            },
            {
                "name": "Sunny",
                "id" : 4,
                "email": "mohit@gmail.com",
                "phone": "7895631245",
                "address": "axcvbhnmjgfddsfdrsffddettew",
                "status": "Cancel"
            },
            {
                "name": "Pranay",
                "id" : 5,
                "email": "mohit@gmail.com",
                "phone": "7895631245",
                "address": "axcvbhnmjgfddsfdrsffddettew",
                "status": "Completed"
            },
        ],
        Date: "25.06.2022",
        Sale: '₹1600'
    },
    {
        id: "3",
        Date: "26.06.2022",
        "voucher": [
            {
                "name": "Aakash",
                "id" : 1,
                "email": "mohit@gmail.com",
                "phone": "7895631245",
                "address": "axcvbhnmjgfddsfdrsffddettew",
                "status": "Completed"
            },
            {
                "name": "Tejas",
                "id" : 2,
                "email": "mohit@gmail.com",
                "phone": "7895631245",
                "address": "axcvbhnmjgfddsfdrsffddettew",
                "status": "Cancel"
            },
            {
                "name": "Ronak",
                "id" : 3,
                "email": "mohit@gmail.com",
                "phone": "7895631245",
                "address": "axcvbhnmjgfddsfdrsffddettew",
                "status": "Completed"
            },
            {
                "name": "Sunny",
                "id" : 4,
                "email": "mohit@gmail.com",
                "phone": "7895631245",
                "address": "axcvbhnmjgfddsfdrsffddettew",
                "status": "Cancel"
            },
            {
                "name": "Pranay",
                "id" : 5,
                "email": "mohit@gmail.com",
                "phone": "7895631245",
                "address": "axcvbhnmjgfddsfdrsffddettew",
                "status": "Completed"
            },
        ],
        Sale: '₹3200'
    },
    {
        id: "4",
        Date: "27.06.2022",
        "voucher": [
            {
                "name": "Aakash",
                "id" : 1,
                "email": "mohit@gmail.com",
                "phone": "7895631245",
                "address": "axcvbhnmjgfddsfdrsffddettew",
                "status": "Completed"
            },
            {
                "name": "Tejas",
                "id" : 2,
                "email": "mohit@gmail.com",
                "phone": "7895631245",
                "address": "axcvbhnmjgfddsfdrsffddettew",
                "status": "Cancel"
            },
            {
                "name": "Ronak",
                "id" : 3,
                "email": "mohit@gmail.com",
                "phone": "7895631245",
                "address": "axcvbhnmjgfddsfdrsffddettew",
                "status": "Completed"
            },
            {
                "name": "Sunny",
                "id" : 4,
                "email": "mohit@gmail.com",
                "phone": "7895631245",
                "address": "axcvbhnmjgfddsfdrsffddettew",
                "status": "Cancel"
            },
            {
                "name": "Pranay",
                "id" : 5,
                "email": "mohit@gmail.com",
                "phone": "7895631245",
                "address": "axcvbhnmjgfddsfdrsffddettew",
                "status": "Completed"
            },
        ],
        Sale: '₹4000'
    },
    {
        id: "5",
        Date: "28.06.2022",
        "voucher": [
            {
                "name": "Aakash",
                "id" : 1,
                "email": "mohit@gmail.com",
                "phone": "7895631245",
                "address": "axcvbhnmjgfddsfdrsffddettew",
                "status": "Completed"
            },
            {
                "name": "Tejas",
                "id" : 2,
                "email": "mohit@gmail.com",
                "phone": "7895631245",
                "address": "axcvbhnmjgfddsfdrsffddettew",
                "status": "Cancel"
            },
            {
                "name": "Ronak",
                "id" : 3,
                "email": "mohit@gmail.com",
                "phone": "7895631245",
                "address": "axcvbhnmjgfddsfdrsffddettew",
                "status": "Completed"
            },
            {
                "name": "Sunny",
                "id" : 4,
                "email": "mohit@gmail.com",
                "phone": "7895631245",
                "address": "axcvbhnmjgfddsfdrsffddettew",
                "status": "Cancel"
            },
            {
                "name": "Pranay",
                "id" : 5,
                "email": "mohit@gmail.com",
                "phone": "7895631245",
                "address": "axcvbhnmjgfddsfdrsffddettew",
                "status": "Completed"
            },
        ],
        Sale: '₹2000'
    },
];

const VenderSale = ({ navigation }) => {

    const [selectedId, setSelectedId] = useState(null);

    const onDate = (data) => {
        setSelectedId(data.id);
        navigation.navigate("VenderSaleDetails", { data: data })
    }

    const renderItem = ({ item }) => {
        const backgroundColor = item.id === selectedId ? "#FB8B0766" : null;

        return (
            <TouchableOpacity style={[styles.data_container, { backgroundColor: backgroundColor }]} onPress={() => onDate(item)} >
                <View style={{ justifyContent: "center" }}>
                    <Text style={styles.data_text}>{item.Date}</Text>
                </View>
                <View style={{ justifyContent: "center" }}>
                    <Text style={styles.data_text} >{item.Sale}</Text>
                </View>
            </TouchableOpacity>
        );
    };

    return (
        <>
            <VenderHeader navigation={navigation} />
            <SafeAreaView style={styles.container}>
                <View style={{ flexDirection: "row" }}>
                    <TouchableOpacity style={{ marginTop: normalize(20), marginLeft: normalize(20) }} onPress={() => navigation.goBack()} >
                        <Image source={left} style={{ height: normalize(30), width: normalize(30) }} />
                    </TouchableOpacity>
                    <Text style={{ fontFamily: fonts.montserrat_bold, fontSize: normalize(22), fontWeight: 'bold', marginLeft: normalize(120), marginTop: normalize(20), color: "#000000" }}>Sales</Text>
                </View>
                <View style={{ borderRadius: normalize(20), backgroundColor: '#FFDCAE99', width: normalize(340), height: normalize(83), alignSelf: "center", marginTop: normalize(15) }} onPress={() => navigation.navigate("SalesDetails")} >
                    <View style={{ flexDirection: "row", alignSelf: "center", marginTop: normalize(15),marginLeft:20}}>
                        <Image source={sale1} style={{ height: normalize(50), width: normalize(50), resizeMode: "contain", alignSelf: "center", marginLeft: normalize(30), marginTop: 5 }} />
                        <Text style={{ fontSize: normalize(18), fontWeight: '500', marginLeft: 10, marginTop: 10, color: "#000000" }}  >Total Revenue <Text style={{ fontSize: normalize(17), fontWeight: '500', marginLeft: 3, color: '#08D635', fontWeight: '800', fontFamily: fonts.montserrat_regularj}}>₹6,45,960.00</Text></Text>
                        <View style={{ flexDirection: "row", marginTop: normalize(30),marginRight:20 }} >
                            <Image source={rising} style={{ width: normalize(40), height: normalize(25), marginRight: normalize(2), alignSelf: "center" }} />
                            <View style={{marginRight:20}}>
                            <Text style={{ fontFamily: fonts.montserrat_regular, fontSize: normalize(16), color: "#08D635", top: normalize(20) }} >5.6%</Text>
                        </View>
                        </View>
                    </View>
                </View>
                <View style={{ width: normalize(340), borderRadius: normalize(10), backgroundColor: "#D0E3FFB0", marginVertical: normalize(20), alignSelf: "center" }}>
                    <View style={{ flexDirection: "row", justifyContent: "space-around", marginTop: normalize(20), marginLeft: normalize(20) }}>
                        <Text style={styles.data_text}>Date</Text>
                        <Text style={styles.data_text} >Sales in Day</Text>
                    </View>
                    <View style={{ width: normalize(340), borderColor: "#797877", borderBottomWidth: 1.2, alignSelf: "center", marginTop: normalize(10) }} />
                    <FlatList
                        data={DATA}
                        renderItem={renderItem}
                        keyExtractor={(item) => item.id}
                        extraData={selectedId}
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

export default VenderSale;