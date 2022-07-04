import React from "react";
import { View, Text, StatusBar, ScrollView } from "react-native";
import { connect } from "react-redux";
import { Field, reduxForm } from "redux-form";

import { fonts, normalize } from "../../components/Utils";
import { lock, mail, phone, user } from "../../components/Icons"
import Input from "../../components/Input";
import Submitbutton from "../../components/Submitbutton"
import SalesHeader from "../../components/SalesHeader"

function CustomerForm({ navigation }) {
    return (

        <ScrollView style={{ flex: 1, backgroundColor: "#ffffff" }} >
            <StatusBar backgroundColor={"#F9AA44"} translucent={false} />
            <SalesHeader navigation={navigation} />
            <View style={{ margin: 20,alignSelf:'center' }} >
                <Text style={{ fontSize: normalize(22), fontWeight: 'bold', color: "#000000" }}>Get Customer Details</Text>
            </View>
            <View style={{ marginTop: normalize(60) }} >
                <Field
                    label="Customer Full Name"
                    name="Full name"
                    component={Input}
                    img={user}
                    id={1}

                />
            </View>
            <View >
                <Field
                    label="Phone"
                    name="phone"
                    component={Input}
                    img={phone}
                    id={1}
                />
            </View>
            <View  >
                <Field
                    label="Email"
                    name="email"
                    component={Input}
                    img={mail}
                    id={1}
                />
            </View>

            <View style={{ marginTop: normalize(12) }} >
                <Submitbutton bg={"#f69632"} text={"Submit"} txtclr={"#ffffff"} onpress={() => alert("Form Submit")} big={true} />
            </View>

        </ScrollView>
    )
}
export default connect(null, null)(reduxForm({
    form: 'CustomerForm',
    enableReinitialize: true
})(CustomerForm));