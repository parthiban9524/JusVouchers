import React from "react";
import { View, Text, Image, TouchableOpacity } from "react-native";
import { connect } from "react-redux";
import { Field, reduxForm } from "redux-form";

import { fonts, normalize } from "../../components/Utils";
import { lock } from "../../components/Icons"
import Input from "../../components/Input";
import Submitbutton from "../../components/Submitbutton"
import WavyHeader from "../../components/Wavyheader";

function ResetPassword({ navigation }) {
    return (
        <View style={{ flex: 1, backgroundColor: "#ffffff" }} >
            <WavyHeader firstTxt={"Reset"} secTxt={"Password"} />
            <View style={{ marginTop: normalize(100), alignSelf: "center", paddingHorizontal: normalize(60) }}>
                <Text style={{ fontFamily: fonts.montserrat_regular, fontSize: normalize(20), color: "#9A9393", textAlign: "center" }}>Reset new password</Text>
            </View>
            <View style={{ marginTop: normalize(40) }} >
                <Field
                    label="New Password"
                    name="email"
                    component={Input}
                    img={lock}
                />
            </View>
            <View style={{ marginTop: normalize(10) }} >
                <Field
                    label="Confirm Password"
                    name="email"
                    component={Input}
                    img={lock}
                />
            </View>
            <View style={{ marginTop: normalize(90) }} >
                <Submitbutton bg={"#f69632"} text={"Update"} txtclr={"#ffffff"} big={true} onpress={() => navigation.navigate("Welcome")} />
            </View>
        </View>
    )
}
export default connect(null, null)(reduxForm({
    form: 'ResetPassword',
    enableReinitialize: true
})(ResetPassword));