import React, { useState } from "react";
import { FlatList, SafeAreaView, StatusBar, StyleSheet, Text, TouchableOpacity, View, Image } from "react-native";
import { normalize, fonts } from "../../../components/Utils";
import { sale1, rising, leader } from "../../../components/Icons";
import { left } from "../../../components/Icons";
import AdminHeader from "../../../components/AdminHeader";

const DATA = [
    {
        id: "1",
        date: "24.06.2022",
        "name" : "Marc",
        "category" : "Health",
        "personal": {
            "name": "Mohit Sharma",
            "email": "mohit@gmail.com",
            "phone": "7895631245",
            "address" : "axcvbhnmjgfddsfdrsffddettew",
            "category" : "Yoga (abc yoga classes)"
        },
    },
    {
        id: "2",
        date: "25.06.2022",
        "name" : "Mohit",
        "category" : "Gym",
        "personal": {
            "name": "Doctor Voucher",
            "shop": "Dr.Rohit",
            "price": "500/-"
        },
    },
    {
        id: "3",
        date: "26.06.2022",
        "name" : "Kate",
        "category" : "Yoga",
        "personal": {
            "name": "Doctor Voucher",
            "shop": "Dr.Rohit",
            "price": "500/-"
        },
    },
    {
        id: "4",
        date: "27.06.2022",
        "name" : "David",
        "category" : "Beauty",
        "personal": {
            "name": "Doctor Voucher",
            "shop": "Dr.Rohit",
            "price": "500/-"
        },
    },
    {
        id: "5",
        date: "28.06.2022",
        "name" : "Serg",
        "category" : "Doctor",
        "personal": {
            "name": "Doctor Voucher",
            "shop": "Dr.Rohit",
            "price": "500/-"
        },
    },
];

const Venders = ({ navigation }) => {

    const [selectedId, setSelectedId] = useState(null);

    const onDate = (data) => {
        setSelectedId(data.id);
        navigation.navigate("VendersDetails", { data: data })
    }

    const renderItem = ({ item }) => {
        const backgroundColor = item.id === selectedId ? "#FB8B0766" : null;
        const color = item.id === selectedId ? 'white' : 'black';

        return (
            <TouchableOpacity style={[styles.data_container, { backgroundColor: backgroundColor }]} onPress={() => onDate(item)} >
                <View style={{ justifyContent: "center" }}>
                    <Text style={styles.data_text}>{item.name}</Text>
                </View>
                <View style={{ justifyContent: "center" }}>
                    <Text style={styles.data_text} >{item.date}</Text>
                </View>
                <View style={{ justifyContent: "center" }}>
                    <Text style={styles.data_text} >{item.category}</Text>
                </View>
            </TouchableOpacity>
        );
    };

    return (
        <>
            <AdminHeader navigation={navigation} />
            <SafeAreaView style={styles.container}>
                <View style={{ flexDirection: "row" }}>
                    <TouchableOpacity style={{ marginTop: normalize(20), marginLeft: normalize(20) }} onPress={() => navigation.goBack()} >
                        <Image source={left} style={{ height: normalize(30), width: normalize(30) }} />
                    </TouchableOpacity>
                    <Text style={{ fontFamily: fonts.montserrat_bold, fontSize: normalize(22), fontWeight: 'bold', marginLeft: normalize(100), marginTop: normalize(20) }}>Venders</Text>
                </View>
                <TouchableOpacity style={{ borderRadius: normalize(20), backgroundColor: '#FFDCAE99', width: normalize(340), height: normalize(83), alignSelf: "center", marginTop: normalize(15) }} onPress={() => navigation.navigate("SalesDetails")} >
                    <View style={{ flexDirection: "row", alignSelf: "center", marginTop: normalize(15) }}>
                        <Image source={leader} style={{ height: normalize(50), width: normalize(50), resizeMode: "contain", alignSelf: "center", marginLeft: normalize(8), marginTop: 5 }} />
                        <View>
                            <Text style={{ fontSize: normalize(18), fontWeight: '500', marginLeft: 10, marginTop: 10, color: "#000000", alignSelf: "center" }}  >Total Venders <Text style={{ fontSize: normalize(17), fontWeight: '500', marginLeft: 3, color: '#08D635', fontWeight: '800', fontFamily: fonts.montserrat_regular }}> 680 </Text></Text>
                            <Text style={{ fontSize: normalize(18), fontWeight: '500', marginLeft: 10, marginTop: 10, color: "#000000" }}  >Today  16 Venders register  </Text>
                        </View>
                        <View style={{ flexDirection: "row", marginTop: normalize(20), }} >
                            <Image source={rising} style={{ width: normalize(40), height: normalize(25), marginLeft: normalize(5), alignSelf: "center" }} />
                            <Text style={{ fontFamily: fonts.montserrat_regular, fontSize: normalize(16), color: "#08D635", alignSelf: "center", top: 10, right: 10 }} >2.6%</Text>
                        </View>
                    </View>
                </TouchableOpacity>
                <View style={{ width: normalize(340), borderRadius: normalize(10), backgroundColor: "#D0E3FFB0", marginVertical: normalize(20), alignSelf: "center" }}>
                    <View style={{ flexDirection: "row", justifyContent: "space-around", marginTop: normalize(20), }}>
                        <Text style={styles.data_text}>Name</Text>
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

export default Venders;