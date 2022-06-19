import React from "react";
import { View, Text, Image, TouchableOpacity } from "react-native";
import { connect } from "react-redux";
import { Field, reduxForm } from "redux-form";

import { fonts, normalize } from "../../components/Utils";
import { lock, mail } from "../../components/Icons"
import Input from "../../components/Input";
import Submitbutton from "../../components/Submitbutton"
import WavyHeader from "../../components/Wavyheader";

function Login({ navigation }) {
    return (
        <View style={{ flex: 1, backgroundColor: "#ffffff" }} >
            <WavyHeader />
            <View style={{ marginTop: normalize(100) }} >
                <Field
                    label="Email"
                    name="email"
                    component={Input}
                    img={mail}
                />
            </View>
            <View style={{ marginTop: normalize(10) }} >
                <Field
                    label="Password"
                    name="email"
                    component={Input}
                    img={lock}
                />
            </View>
            <TouchableOpacity style={{ alignSelf: "flex-end", marginRight: normalize(35) }} onPress={() => navigation.navigate('ForgotPassword')} >
                <Text style={{ fontSize: normalize(18), fontFamily: fonts.lato_regular, color: "#F58220" }}>Forgot password </Text>
            </TouchableOpacity>
            <View style={{ marginTop: normalize(110) }} >
                <Submitbutton bg={"#f69632"} text={"Log in"} txtclr={"#ffffff"} onpress={() => navigation.navigate("Login")} big={true} />
            </View>
            <View style={{ flexDirection: "row", alignSelf: "center", justifyContent: "center" }} >
                <View style={{ width: normalize(130), borderBottomWidth: 1, borderColor: "#938C8C" }} />
                <Text style={{ fontFamily: fonts.montserrat_regular, fontSize: normalize(20), top: 10 }}> or </Text>
                <View style={{ width: normalize(130), borderBottomWidth: 1, borderColor: "#938C8C" }} />
            </View>
            <View style={{ marginTop: normalize(30) }}>
                <Submitbutton bg={"#ffffff"} text={"Sign up"} txtclr={"#f69632"} onpress={() => navigation.navigate("Signup")} big={true} />
            </View>
        </View>
    )
}
export default connect(null, null)(reduxForm({
    form: 'Login',
    enableReinitialize: true
})(Login));