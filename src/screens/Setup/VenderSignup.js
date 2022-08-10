import React, { useEffect, useRef } from "react";
import { View, Text, ScrollView } from "react-native";
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


function VenderSignup(props) {

    const { navigation, handleSubmit, serverError, data = {}, submitSignup, meta } = props;

    const isInitialMount = useRef(true);

    const submit = value => {
        const val1 = value;
        const val2 = { "USER_ROLE": 3 };
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
        console.log("isIntial", isInitialMount)
        if (isInitialMount.current) {
            isInitialMount.current = false;
        } else {
            if (data && get(data, 'status') === 1 && meta === 'signup') {
                navigation.navigate('Login');
            }
        }
    }, [data]);

    return (

        <ScrollView style={{ flex: 1, backgroundColor: "#ffffff" }} >
            <View style={{}}>
                <WavyHeader firstTxt={"Vendor"} secTxt={"Account"} navigation={navigation} />
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
                    validate={[required()]}
                    img={lock}
                    id={1}
                />
            </View>

            <View style={{ marginTop: normalize(15) }} >
                <Submitbutton bg={"#f69632"} text={"Sign up"} txtclr={"#ffffff"} onpress={handleSubmit(submit)} big={true} />
            </View>
            <View style={{ flexDirection: "row", alignSelf: "center", justifyContent: "center" }} >
                <View style={{ width: normalize(130), borderBottomWidth: 1, borderColor: "#938C8C" }} />
                <Text style={{ fontFamily: fonts.montserrat_regular, fontSize: normalize(20), top: 10 }}> or </Text>
                <View style={{ width: normalize(130), borderBottomWidth: 1, borderColor: "#938C8C" }} />
            </View>
            <View style={{ marginTop: normalize(21) }}>
                <Submitbutton bg={"#ffffff"} text={"Log in"} txtclr={"#f69632"} onpress={() => navigation.navigate("Login")} big={true} />
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
    form: 'VenderSignup',
})(VenderSignup));