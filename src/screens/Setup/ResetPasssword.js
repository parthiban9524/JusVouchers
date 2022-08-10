import React, { useEffect, useRef } from "react";
import { View, Text, Image, TouchableOpacity } from "react-native";
import { connect } from "react-redux";
import { Field, reduxForm } from "redux-form";
import { required, email, } from 'redux-form-validators';
import { get } from "lodash";

import { fonts, normalize } from "../../components/Utils";
import { lock, mail, message } from "../../components/Icons"
import Input from "../../components/Input";
import Submitbutton from "../../components/Submitbutton"
import WavyHeader from "../../components/Wavyheader";
import { submitPassword } from "../../actions";
import KeyboardAvoiding from "../../components/KeyboardAvoiding";

function ResetPassword(props) {

    const { navigation, handleSubmit, submitPassword, serverError, data = {}, meta } = props;

    const isInitialMount = useRef(true);

    const submit = value => {
        submitPassword(value)
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
            if (data && get(data, 'status') === 1 && meta === 'password' ) {
                navigation.navigate('Login');
            }
        }
    }, [data]);

    return (
        <KeyboardAvoiding style={{ flex: 1, backgroundColor: "#ffffff" }} >
            <WavyHeader firstTxt={"Reset"} secTxt={"Password"} navigation={navigation} />
            <View style={{ marginTop: normalize(100), alignSelf: "center", paddingHorizontal: normalize(60) }}>
                <Text style={{ fontFamily: fonts.montserrat_regular, fontSize: normalize(20), color: "#9A9393", textAlign: "center" }}>Reset new password</Text>
            </View>
            <View style={{ marginTop: normalize(40) }} >
                <Field
                    label="Email"
                    name="EMAIL"
                    component={Input}
                    img={mail}
                    id={1}
                    validate={[required(), email()]}
                />
            </View>
            <View style={{ marginTop: normalize(10) }} >
                <Field
                    label="Enter Code"
                    name="CODE"
                    component={Input}
                    img={message}
                    id={1}
                    keyboardType='numeric'
                    validate={[required()]}
                />
            </View>
            <View style={{ marginTop: normalize(10) }} >
                <Field
                    label="New Password"
                    name="PASSWORD"
                    component={Input}
                    img={lock}
                    id={1}
                    validate={[required()]}
                    secureTextEntry={true}
                />
            </View>
            <View style={{ marginTop: normalize(90) }} >
                <Submitbutton bg={"#f69632"} text={"Update"} txtclr={"#ffffff"} big={true} onpress={handleSubmit(submit)} />
            </View>
        </KeyboardAvoiding>
    )
}

const mapStateToProps = (state) => {
    return {
        ...state.setup,
    };
};
const mapDispatchToProps = (dispatch) => {
    return {
        submitPassword: (data) => { dispatch(submitPassword(data)) },
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(reduxForm({
    form: 'ResetPassword',
    enableReinitialize: true
})(ResetPassword));