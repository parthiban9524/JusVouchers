import React, { useEffect, useRef } from "react";
import { View, Text, Image, TouchableOpacity } from "react-native";
import { connect } from "react-redux";
import { Field, reduxForm } from "redux-form";
import { get } from "lodash";

import { fonts, normalize } from "../../components/Utils";
import { lock, mail } from "../../components/Icons"
import Input from "../../components/Input";
import Submitbutton from "../../components/Submitbutton"
import WavyHeader from "../../components/Wavyheader";
import { ScrollView } from "react-native-gesture-handler";
import { submitEmail } from "../../actions";
import { required, email, } from 'redux-form-validators';
import { showToast } from "../../components/Utils";


function ForgotPassword(props) {

    const { navigation, handleSubmit, submitEmail, serverError, data = {}, meta  } = props;

    console.log("data", data)
    const isInitialMount = useRef(true);
    console.log("server", serverError)
    console.log("props", props)


    const submit = value => {
        submitEmail(value)
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
            if (data && get(data, 'status') === 1 && meta === "email") {
                navigation.navigate('ResetPassword');
            }
        }
    }, [data]);

    return (
        <View style={{ flex: 1, backgroundColor: "#ffffff" }} >
            <ScrollView>
                <WavyHeader firstTxt={"Forgot"} secTxt={"Password"} navigation={navigation} />
                <View style={{ marginTop: normalize(100), alignSelf: "center", paddingHorizontal: normalize(50) }}>
                    <Text style={{ fontFamily: fonts.montserrat_regular, fontSize: normalize(20), color: "#9A9393", textAlign: "center" }}>Enter the Registered Email to reset the password</Text>
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
                <View style={{ marginTop: normalize(100) }} >
                    <Submitbutton bg={"#f69632"} text={"Send"} txtclr={"#ffffff"} onpress={handleSubmit(submit)} big={true} />
                </View>
            </ScrollView>
        </View>
    )
}

const mapStateToProps = (state) => {
    return {
        ...state.setup,
    };
};
const mapDispatchToProps = (dispatch) => {
    return {
        submitEmail: (data) => { dispatch(submitEmail(data)) },
    }
};


export default connect(mapStateToProps, mapDispatchToProps)(reduxForm({
    form: 'ForgotPassword',
})(ForgotPassword));