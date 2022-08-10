import React, { useEffect, useRef } from 'react'
import { View, Text, Keyboard } from 'react-native'
import { connect } from "react-redux";
import { Field, reduxForm } from "redux-form";
import { get } from 'lodash';
import { required, } from 'redux-form-validators';

import { showToast } from '../../components/Utils';
import { fonts, normalize } from '../../components/Utils';
import WavyHeader from '../../components/Wavyheader';
import Submitbutton from '../../components/Submitbutton';
import { phone } from '../../components/Icons';
import { submitOTP } from '../../actions';
import Input from '../../components/Input';

const LoginotpAuth = ({ navigation, handleSubmit, submitOTP, serverError, data = {} }) => {

    const isInitialMount = useRef(true);


    const submit = value => {
        submitOTP(value)
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
            if (data && get(data, 'status') === 1) {
                console.log("condition pass", data)
                navigation.navigate('InputOTPScreen');
            }
        }
    }, [data]);

    return (
        <>
            <WavyHeader firstTxt={"OTP Login"} secTxt={""} navigation={navigation} />
            <View>
                <View style={{ marginTop: normalize(100) }} >
                    <Text style={{ textAlign: "center", fontSize: normalize(20), fontFamily: fonts.montserrat_semibold, }}>{"Please Input Mobile Number"}</Text>
                </View>
                <View style={{ marginTop: normalize(40) }} >
                    <Field
                        label=" +91  PhoneNumber"
                        name="PHONE_NO"
                        component={Input}
                        img={phone}
                        id={1}
                        keyboardType='numeric'
                        validate={[required()]}
                    />
                </View>
                <View style={{ marginTop: normalize(80) }} >
                    <Submitbutton bg={"#f69632"} text={"Send"} txtclr={"#ffffff"} onpress={handleSubmit(submit)} big={true} />
                </View>
            </View>
        </>
    )
}
const mapStateToProps = (state) => {
    return {
        ...state.setup,
    };
};
const mapDispatchToProps = (dispatch) => {
    return {
        submitOTP: (data) => { dispatch(submitOTP(data)) },
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(reduxForm({
    form: 'LoginotpAuth',
})(LoginotpAuth));
