import React, { useEffect, useRef } from "react";
import { View, Text, Image, TouchableOpacity, ScrollView, Keyboard } from "react-native";
import { connect } from "react-redux";
import { Field, reduxForm } from "redux-form";
import { required, email, } from 'redux-form-validators';

import { fonts, normalize, showToast } from "../../components/Utils";
import { lock, mail, phone, user } from "../../components/Icons"
import Input from "../../components/Input";
import Submitbutton from "../../components/Submitbutton"
import WavyHeader from "../../components/Wavyheader";
import { submitSignup } from "../../actions";
import { get } from "lodash";

function Signup({ navigation, handleSubmit, serverError, data, submitSignup }) {

    const isInitialMount = useRef(true);

    const submit = value => {
        submitSignup(value)
    }


    useEffect(() => {
        if (serverError && serverError.length !== 0 && get(serverError, 'message')) {
            Keyboard.dismiss();
            showToast(get(serverError, 'message'));
        }
    }, [serverError])

    useEffect(() => {
        if (isInitialMount.current) {
            isInitialMount.current = false;
        } else {
            if (data && get(data, 'status') === 1 && get(data, 'meta') === 'signup') {
                navigation.navigate('HomeScreen');
            }
        }
    }, [data]);

    return (

        <ScrollView style={{ flex: 1, backgroundColor: "#ffffff" }} >
            <View>
                <WavyHeader firstTxt={"Create"} secTxt={"Account"} navigation={navigation} />
            </View>
            <View style={{ marginTop: normalize(50) }} >
                <Field
                    label="Full Name"
                    name="Name"
                    component={Input}
                    img={user}
                    id={1}
                    validate={[required()]}
                />
            </View>
            <View >
                <Field
                    label="Phone"
                    name="PHONE_NO"
                    component={Input}
                    img={phone}
                    id={1}
                    validate={[required()]}
                />
            </View>
            <View  >
                <Field
                    label="Email"
                    name="EMAIL"
                    component={Input}
                    img={mail}
                    id={1}
                    validate={[required(), email()]}
                />
            </View>
            <View>
                <Field
                    label="Password"
                    name="PASSWORD"
                    secureTextEntry={true}
                    component={Input}
                    validate={[required()]}
                    img={lock}
                    id={1}
                />
            </View>
            <View>
                <Field
                    label="User_Type"
                    name="USER_ROLE"
                    secureTextEntry={true}
                    component={Input}
                    validate={[required()]}
                    img={lock}
                    id={1}
                />
            </View>

            <View style={{ marginTop: normalize(15), marginLeft: normalize(30) }}>
                <Text style={{ fontFamily: fonts.lato_regular, fontSize: normalize(18) }} >Register as Vendor <Text style={{ color: "#F58220", textDecorationLine: "underline" }} onPress={() => navigation.navigate("VenderSignup")} > click here</Text> </Text>
            </View>
            <View style={{ marginTop: normalize(12) }} >
                <Submitbutton bg={"#f69632"} text={"Sign up"} txtclr={"#ffffff"} onpress={handleSubmit(submit)} big={true} />
            </View>
            <View style={{ flexDirection: "row", alignSelf: "center", justifyContent: "center" }} >
                <View style={{ width: normalize(130), borderBottomWidth: 1, borderColor: "#938C8C" }} />
                <Text style={{ fontFamily: fonts.montserrat_regular, fontSize: normalize(18), top: 8 }}> or </Text>
                <View style={{ width: normalize(130), borderBottomWidth: 1, borderColor: "#938C8C" }} />
            </View>
            <View style={{ marginTop: normalize(13) }}>
                <Submitbutton bg={"#ffffff"} text={"Log in"} txtclr={"#f69632"} onpress={() => navigation.navigate("Login")} big={true} />
            </View>
            <View style={{ marginTop: normalize(25), alignSelf: "center" }}>
                <Text style={{ fontFamily: fonts.lato_regular, fontSize: normalize(18) }} >To Register as a SalesPerson  <Text style={{ color: "#F58220", textDecorationLine: "underline" }} onPress={() => navigation.navigate("SalesPersonSignup")} >click here</Text> </Text>
            </View>
        </ScrollView>
    )
}
const mapStateToProps = (state) => {
    return {
        ...state.setup,
    };
};
const mapDispatchToProps = (dispatch) => {
    return {
        submitSignup: (data) => { dispatch(submitSignup(data)) },
    }
};
export default connect(mapStateToProps, mapDispatchToProps)(reduxForm({
    form: 'Signup',
})(Signup));