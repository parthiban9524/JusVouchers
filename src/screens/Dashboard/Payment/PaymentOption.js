import React from "react";
import { View, Text, Image, TouchableOpacity } from "react-native"
import { connect } from "react-redux";
import { Field, reduxForm } from "redux-form";

import Header from "../../../components/Header";
import { normalize, fonts } from "../../../components/Utils";
import { left, mastercard, rupay, triangle, visa } from "../../../components/Icons";
import Input from "../../../components/Input";
import Submitbutton from "../../../components/Submitbutton";

function PaymentOption({ navigation }) {
    return (
        <>
            <Header navigation={navigation} />
            <View>
                <TouchableOpacity style={{ marginTop: normalize(20), marginLeft: normalize(20) }} onPress={() => navigation.navigate("PaymentType")} >
                    <Image source={left} style={{ height: normalize(30), width: normalize(30) }} />
                </TouchableOpacity>
                <View style={{ marginTop: normalize(25), marginLeft: normalize(45) }} >
                    <Text style={{ fontFamily: fonts.montserrat_regular, fontWeight: '600', fontSize: normalize(20), color: "#000000" }} >Payment Option</Text>
                </View>
                <View style={{ flexDirection: "row", marginTop: normalize(18), marginLeft: normalize(45) }} >
                    <Text style={{ fontFamily: fonts.montserrat_regular, fontSize: normalize(12), fontWeight: "500" }} > Debit card </Text>
                    <Image source={triangle} style={{ height: normalize(10), width: normalize(10), alignSelf: "center", left: 10 }} />
                </View>
                <View style={{ flexDirection: "row", marginTop: normalize(25), marginLeft: normalize(15), justifyContent: "space-evenly" }}>
                    <View style={{ height: normalize(43), width: normalize(75), borderColor: "#08D635", borderWidth: 1, borderRadius: 5, justifyContent: "center" }} >
                        <Image source={visa} style={{ height: normalize(25), width: normalize(53), resizeMode: "contain", alignSelf: "center" }} />
                    </View>
                    <View style={{ height: normalize(43), width: normalize(75), borderColor: "#08D635", borderWidth: 1, borderRadius: 5, justifyContent: "center" }} >
                        <Image source={mastercard} style={{ height: normalize(25), width: normalize(53), resizeMode: "contain", alignSelf: "center" }} />
                    </View>
                    <View style={{ height: normalize(43), width: normalize(75), borderColor: "#08D635", borderWidth: 1, borderRadius: 5, justifyContent: "center" }} >
                        <Image source={rupay} style={{ height: normalize(25), width: normalize(53), resizeMode: "contain", alignSelf: "center" }} />
                    </View>
                </View>

                <View style={{ marginTop: normalize(55) }} >
                    <Field
                        label="Email"
                        name="email"
                        component={Input}
                        wid={318}
                        id={2}
                    />
                </View>
                <View style={{ marginTop: normalize(15), flexDirection: "row", justifyContent: "space-evenly", marginHorizontal: 10 }} >
                    <Field
                        label="Card number"
                        name="Card number"
                        component={Input}
                        wid={216}
                        id={2}
                    />
                    <Field
                        label="Exp"
                        name="Exp"
                        component={Input}
                        wid={84}
                        id={2}
                    />
                </View>
                <View style={{ marginTop: normalize(15), flexDirection: "row", justifyContent: "space-evenly", marginHorizontal: 10 }} >
                    <Field
                        label="Cardholder Name"
                        name="Cardholder Name"
                        component={Input}
                        wid={216}
                        id={2}
                    />
                    <Field
                        label="C V V"
                        name="C V V"
                        component={Input}
                        wid={84}
                        id={2}
                    />
                </View>
                <View style={{ marginTop: normalize(65), flexDirection: "row", marginLeft: normalize(70) }} >
                    <TouchableOpacity style={{ height: normalize(15), width: normalize(15), borderColor: "#797877", borderWidth: 1, top: 2 }} />
                    <Text style={{ fontFamily: fonts.montserrat_regular, fontSize: normalize(16), left: normalize(12) }} >I accept terms and policies.</Text>
                </View>
                <View style={{ marginTop: normalize(42) }} >
                    <Submitbutton voucher={true} bg={"#6854ED"} text={"Confirm"} txtclr={"#ffffff"} onpress={() => navigation.navigate("Payment")} />
                </View>
            </View>
        </>
    )
}
export default connect(null, null)(reduxForm({
    form: 'PaymentOption',
    enableReinitialize: true
})(PaymentOption));