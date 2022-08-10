import React, { useEffect, useRef } from "react";
import { View, Text, ScrollView, Keyboard } from "react-native";
import { connect } from "react-redux";
import { Field, reduxForm } from "redux-form";
import { required, email, length, format } from 'redux-form-validators';

import { fonts, normalize, showToast } from "../../components/Utils";
import { lock, mail, phone, user } from "../../components/Icons"
import Input from "../../components/Input";
import Submitbutton from "../../components/Submitbutton"
import WavyHeader from "../../components/Wavyheader";
import { submitSignup } from "../../actions";
import { get } from "lodash";
import { useFocusEffect } from "@react-navigation/native";

function Signup(props) {

    const { handleSubmit, serverError, data = {}, submitSignup, meta } = props;

    console.log("data", data)

    const isInitialMount = useRef(true);

    const submit = value => {
        const val1 = value;
        const val2 = { "USER_ROLE": 1 };
        const data = Object.assign(val1, val2)
        console.log("data", data)
        submitSignup(data)
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
            console.log("data", data)
            console.log("meta", meta)
            console.log("status", get(data, 'status'))
            if (data && get(data, 'status') === 1 && meta === 'signup') {
                console.log("Condition working")
                props.navigation.navigate('Login');
            }
        }
    }, [data]);

    return (

        <ScrollView style={{ flex: 1, backgroundColor: "#ffffff" }} >
            <View>
                <WavyHeader firstTxt={"Create"} secTxt={"Account"} navigation={props.navigation} />
            </View>
            <View style={{ marginTop: normalize(50) }} >
                <Field
                    label="Full Name"
                    name="NAME"
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
                    keyboardType='numeric'
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
                    validate={[required(), length({ minimum: 8, message: 'Mininum 8 character' }), format({ with: /(?=.*[0-9])(?=.*[A-Z])(?=.*[a-z])(?=.*[#?!@$%^&*-])/, message: 'Should contains: [A-Z] [a-z] [0-9] [#?!@$%^&*-]' })]}
                    img={lock}
                    id={1}
                />
            </View>
            <View style={{ marginTop: normalize(15), marginLeft: normalize(30) }}>
                <Text style={{ fontFamily: fonts.lato_regular, fontSize: normalize(18) }} >Register as Vendor <Text style={{ color: "#F58220", textDecorationLine: "underline" }} onPress={() => props.navigation.navigate("VenderSignup")} > click here</Text> </Text>
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
                <Submitbutton bg={"#ffffff"} text={"Log in"} txtclr={"#f69632"} onpress={() => props.navigation.navigate("Login")} big={true} />
            </View>
            <View style={{ marginTop: normalize(25), alignSelf: "center" }}>
                <Text style={{ fontFamily: fonts.lato_regular, fontSize: normalize(18) }} >To Register as a SalesPerson  <Text style={{ color: "#F58220", textDecorationLine: "underline" }} onPress={() => props.navigation.navigate("SalesPersonSignup")} >click here</Text> </Text>
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