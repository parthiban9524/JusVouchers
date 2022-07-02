import React, { useEffect, useState } from "react";
import { FlatList, SafeAreaView, StatusBar, StyleSheet, Text, TouchableOpacity, View, Image } from "react-native";
import { connect } from "react-redux";
import { Field, reduxForm } from "redux-form";

import { normalize, fonts } from "../../../components/Utils";
import { sale1, rising, left, new_user } from "../../../components/Icons";
import AdminHeader from "../../../components/AdminHeader";
import Input from "../../../components/Input";

const UserDetails = ({ navigation }) => {

    const DATA = navigation.getState().routes[2].params.data.personal

    return (
        <>
            <AdminHeader navigation={navigation} />
            <SafeAreaView style={styles.container}>
                <TouchableOpacity style={{ marginTop: normalize(20), marginLeft: normalize(20) }} onPress={() => navigation.goBack()} >
                    <Image source={left} style={{ height: normalize(30), width: normalize(30) }} />
                </TouchableOpacity>
                <View style={{ borderRadius: 20, backgroundColor: '#FFDCAE99', width: normalize(300), height: normalize(83), marginTop: normalize(20), alignSelf: "center", justifyContent: "center" }} onPress={() => navigation.navigate("SalesDetails")} >
                    <View style={{ flexDirection: "row", alignSelf: "center" }}>
                        <Image source={new_user} style={{ height: normalize(50), width: normalize(50), resizeMode: "contain",left : normalize(20) }} />
                        <Text style={{ fontSize: normalize(18), fontWeight: '500', marginHorizontal: normalize(50), marginTop: 10, textAlign : "center" }}  >Pranay has’t Purchese anything yet. </Text>
                    </View>
                </View>
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
            </SafeAreaView>
        </>
    );
};
export default connect(null, null)(reduxForm({
    form: 'UserDetails',
    enableReinitialize: true
})(UserDetails));

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