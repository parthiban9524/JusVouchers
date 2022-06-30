import React, { useEffect, useState } from "react";
import { FlatList, SafeAreaView, StatusBar, StyleSheet, Text, TouchableOpacity, View, Image } from "react-native";
import { connect } from "react-redux";
import { Field, reduxForm } from "redux-form";

import { normalize, fonts } from "../../../components/Utils";
import { sale1, left, new_user } from "../../../components/Icons";
import gym1 from "../../../assest/images/gym1.png"
import AdminHeader from "../../../components/AdminHeader";
import Input from "../../../components/Input";

const Details = ({ navigation }) => {

    const DATA = navigation.getState().routes[3].params.data

    return (
        <>
            <AdminHeader navigation={navigation} />
            <SafeAreaView style={styles.container}>
                <TouchableOpacity style={{ marginTop: normalize(20), marginLeft: normalize(20) }} onPress={() => navigation.goBack()} >
                    <Image source={left} style={{ height: normalize(30), width: normalize(30) }} />
                </TouchableOpacity>
                <TouchableOpacity style={{ borderRadius: 20, backgroundColor: '#FFDCAE99', width: normalize(300), height: normalize(83), marginTop: normalize(20), alignSelf: "center", justifyContent: "center" }} onPress={() => navigation.navigate("SalesDetails")} >
                    <View style={{ flexDirection: "row", alignSelf: "center" }}>
                        <Image source={new_user} style={{ height: normalize(50), width: normalize(50), resizeMode: "contain",left : normalize(20) }} />
                        <Text style={{ fontSize: normalize(18), fontWeight: '500', marginHorizontal: normalize(50), marginTop: 10, textAlign : "center" }}  >Pranay has’t Purchese anything yet. </Text>
                    </View>
                </TouchableOpacity>
                <View>
                    <Text style={{ fontFamily: fonts.montserrat_semibold, fontSize: normalize(18), color: "#348847", alignSelf: "center", marginTop: normalize(20) }} >02 June 2022 Wednesday</Text>
                </View>
                <View style={{ marginTop: normalize(10), marginLeft: normalize(15) }}>
                    <View style={{ marginLeft: normalize(15) }}>
                        <Text style={{ fontFamily: fonts.lato_regular, fontWeight: "500", fontSize: normalize(12), color: "#0D2FA9" }} >Name</Text>
                    </View>
                    <Field
                        label={DATA.name}
                        name="Full Name"
                        component={Input}
                        wid={318}
                        id={3}
                    />
                </View>
                <View style={{ marginTop: normalize(15), marginLeft: normalize(15) }}>
                    <View style={{ marginLeft: normalize(15) }}>
                        <Text style={{ fontFamily: fonts.lato_regular, fontWeight: "500", fontSize: normalize(12), color: "#0D2FA9" }} >Email</Text>
                    </View>
                    <Field
                        label={DATA.email}
                        name="Full Name"
                        component={Input}
                        wid={318}
                        id={3}
                    />
                </View>
                <View style={{ marginTop: normalize(15), marginLeft: normalize(15) }}>
                    <View style={{ marginLeft: normalize(15) }}>
                        <Text style={{ fontFamily: fonts.lato_regular, fontWeight: "500", fontSize: normalize(12), color: "#0D2FA9" }} >Mobile no</Text>
                    </View>
                    <Field
                        label={DATA.phone}
                        name="Full Name"
                        component={Input}
                        wid={318}
                        id={3}
                    />
                </View>
                <View style={{ marginTop: normalize(15), marginLeft: normalize(15) }}>
                    <View style={{ marginLeft: normalize(15) }}>
                        <Text style={{ fontFamily: fonts.lato_regular, fontWeight: "500", fontSize: normalize(12), color: "#0D2FA9" }} >Address</Text>
                    </View>
                    <Field
                        label={DATA.address}
                        name="Full Name"
                        component={Input}
                        wid={318}
                        id={3}
                    />
                </View>   
                <View style={{  alignSelf: "center", marginTop : normalize(20) }} >
                        <Text style={{ fontFamily: fonts.montserrat_semibold, fontSize: normalize(18), color: "#FA9C22" }}>Order History</Text>
                    </View>

                    <View style={{ height: normalize(110), width: normalize(330), backgroundColor: "#FD040421", alignSelf: "center", marginTop: normalize(20) }}>
                    <View style={{ flexDirection: "row", justifyContent: "space-between", marginTop: normalize(10), marginHorizontal: normalize(40) }}>
                        <Text style={{ fontFamily: fonts.montserrat_regular, fontSize: normalize(10), }} >order Id 15985zs</Text>
                        <Text style={{ fontFamily: fonts.montserrat_regular, fontSize: normalize(10), }} >12 April 2022</Text>
                    </View>
                    <View style={{ flexDirection: "row" }} >
                        <View style={{ marginTop: normalize(20), marginHorizontal: normalize(40) }}>
                            <Text style={{ fontFamily: fonts.montserrat_regular, fontSize: normalize(12), }} >Quantity : 1</Text>
                            <Text style={{ fontFamily: fonts.montserrat_regular, fontSize: normalize(12),top : 5}} >Total : ₹799</Text>
                        </View>
                        <View style={{ marginLeft: normalize(90), marginTop: normalize(10) }}>
                            <Image source={gym1} style={{ height: normalize(50), width: normalize(90), }} />
                            <Text style={{ fontFamily: fonts.montserrat_regular, fontSize: normalize(14), top: 5, fontWeight: "500", alignSelf : "center" }} >Completed</Text>
                        </View>
                    </View>
                </View>
            </SafeAreaView>
        </>
    );
};
export default connect(null, null)(reduxForm({
    form: 'Details',
    enableReinitialize: true
})(Details));

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