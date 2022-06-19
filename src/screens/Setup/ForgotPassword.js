import React from "react";
import { View, Text, Image, TouchableOpacity } from "react-native";
import { connect } from "react-redux";
import { Field, reduxForm } from "redux-form";

import { fonts, normalize } from "../../components/Utils";
import { lock, mail } from "../../components/Icons"
import Input from "../../components/Input";
import Submitbutton from "../../components/Submitbutton"
import WavyHeader from "../../components/Wavyheader";

function ForgotPassword({ navigation }) {
    return (
        <View style={{ flex: 1, backgroundColor: "#ffffff" }} >
            <WavyHeader firstTxt={"Forgot"} secTxt={"Password"} />
            <View style={{ marginTop: normalize(100), alignSelf: "center", paddingHorizontal: normalize(60) }}>
                <Text style={{ fontFamily: fonts.montserrat_regular, fontSize: normalize(20), color: "#9A9393", textAlign: "center" }}>Enter a Regestier Email to rest the password</Text>
            </View>
            <View style={{ marginTop: normalize(40) }} >
                <Field
                    label="Email"
                    name="email"
                    component={Input}
                    img={mail}
                />
            </View>
            <View style={{ marginTop: normalize(110) }} >
                <Submitbutton bg={"#f69632"} text={"Send"} txtclr={"#ffffff"} onpress={() => navigation.navigate("ResetPassword")} big={true} />
            </View>
        </View>
    )
}
export default connect(null, null)(reduxForm({
    form: 'ForgotPassword',
    enableReinitialize: true
})(ForgotPassword));