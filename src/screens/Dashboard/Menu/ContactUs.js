import React from "react";
import { View, ScrollView } from "react-native";
import { connect } from "react-redux";
import { Field, reduxForm } from "redux-form";

import { normalize } from "../../../components/Utils";
import { message, mail, phone, user } from "../../../components/Icons"
import Input from "../../../components/Input";
import Submitbutton from "../../../components/Submitbutton"
import WavyHeader from "../../../components/Wavyheader";
import Header from "../../../components/Header";

function Contactus({ navigation }) {
    return (
        <ScrollView style={{ flex: 1, backgroundColor: "#ffffff" }} >
            <View style={{marginleft:20}}>
            <WavyHeader firstTxt={"Contact"} secTxt={"Us"}/>
            </View>
            <View style={{marginTop:normalize(35) }} >
                <Field
                    label="Full Name"
                    name="Full name"
                    component={Input}
                    img={user}
                />
            </View>
            <View style={{ marginTop: normalize(5) }} >
                <Field
                    label="Phone"
                    name="phone"
                    component={Input}
                    img={phone}
                />
            </View>
            <View style={{ marginTop: normalize(5) }} >
                <Field
                    label="Email"
                    name="email"
                    component={Input}
                    img={mail}
                />
            </View>
            <View style={{ marginTop: normalize(5) }} >
                <Field
                    label="Message"
                    name="message"
                    component={Input}
                    img={message}
                />
            </View>
            <View style={{ marginTop: normalize(10) }} >
                <Submitbutton bg={"#f69632"} text={"Submit"} txtclr={"#ffffff"} onpress={() => navigation.navigate("Login")} big={true} />
            </View>
        </ScrollView>
    )
}
export default connect(null, null)(reduxForm({
    form: 'Contactus',
    enableReinitialize: true
})(Contactus));