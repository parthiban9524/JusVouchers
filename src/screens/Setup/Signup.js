import React from "react";
import { View, Text, Image, TouchableOpacity, ScrollView } from "react-native";
import { connect } from "react-redux";
import { Field, reduxForm } from "redux-form";

import { fonts, normalize } from "../../components/Utils";
import { lock, mail, phone, user } from "../../components/Icons"
import Input from "../../components/Input";
import Submitbutton from "../../components/Submitbutton"
import WavyHeader from "../../components/Wavyheader";

function Signup({ navigation }) {
    return (
        <ScrollView style={{ flex: 1, backgroundColor: "#ffffff" }} >
            <WavyHeader firstTxt={"Create"} secTxt={"Account"} />
            <View style={{ marginTop: normalize(60) }} >
                <Field
                    label="Full Name"
                    name="Full name"
                    component={Input}
                    img={user}
                    id={1}
                />
            </View>
            <View style={{ marginTop: normalize(10) }} >
                <Field
                    label="Phone"
                    name="phone"
                    component={Input}
                    img={phone}
                    id={1}
                />
            </View>
            <View style={{ marginTop: normalize(10) }} >
                <Field
                    label="Email"
                    name="email"
                    component={Input}
                    img={mail}
                    id={1}
                />
            </View>
            <View style={{ marginTop: normalize(10) }} >
                <Field
                    label="Password"
                    name="email"
                    component={Input}
                    img={lock}
                    id={1}
                />
            </View>
            <View style={{ marginTop: normalize(50) }} >
                <Submitbutton bg={"#f69632"} text={"Sign up"} txtclr={"#ffffff"} onpress={() => navigation.navigate('AdminDash')} big={true} />
            </View>
            <View style={{ flexDirection: "row", alignSelf: "center", justifyContent: "center" }} >
                <View style={{ width: normalize(130), borderBottomWidth: 1, borderColor: "#938C8C" }} />
                <Text style={{ fontFamily: fonts.montserrat_regular, fontSize: normalize(20), top: 10 }}> or </Text>
                <View style={{ width: normalize(130), borderBottomWidth: 1, borderColor: "#938C8C" }} />
            </View>
            <View style={{ marginTop: normalize(30) }}>
                <Submitbutton bg={"#ffffff"} text={"Log in"} txtclr={"#f69632"} onpress={() => navigation.navigate("Login")} big={true} />
            </View>
        </ScrollView>
    )
}
export default connect(null, null)(reduxForm({
    form: 'Signup',
    enableReinitialize: true
})(Signup));