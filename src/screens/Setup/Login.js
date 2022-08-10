import React, { useState, useRef, useEffect } from "react";
import { View, Text, Image, TouchableOpacity, Keyboard } from "react-native";
import { connect } from "react-redux";
import { Field, reduxForm } from "redux-form";
import { required, email } from 'redux-form-validators';
import SelectDropdown from 'react-native-select-dropdown'

import { fonts, normalize, showToast } from "../../components/Utils";
import { lock, mail, triangle } from "../../components/Icons"
import Input from "../../components/Input";
import Submitbutton from "../../components/Submitbutton"
import WavyHeader from "../../components/Wavyheader";
import { submitLogin } from "../../actions";
import { get } from "lodash";
import { setData } from "../../components/Authconst";

function Login(props) {

    const { navigation, handleSubmit, serverError, response = {}, submitLogin, meta, data } = props;

    const [role, setrole] = useState(1)

    const countries = ["User", "Admin", "Vendor", "SalePerson"]

    const isInitialMount = useRef(true);

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
            if (data && meta === 'login') {
                const UserRole = get(data, "user.userrole")
                setData(data)

                if (UserRole === 1) {
                    navigation.navigate("DashboardNavigation")
                }
                if (UserRole === 2) {
                    setTimeout(() => {
                        navigation.navigate("AdminScreen")
                    }, 500)
                }
                if (UserRole === 3) {
                    navigation.navigate("VenderScreen")
                }
                if (UserRole === 4) {
                    navigation.navigate("SalesScreen")
                }

                // let usertoken = get(data, 'data.token.access_token');
                // api.defaults.headers.common['Authorization'] = `Bearer ${usertoken}`;
                // let userdetails = get(data, 'data.user');
                // let userdata = {};
                // userdata['remember'] = remember;
                // userdata['token'] = usertoken;
                // userdata['userdetails'] = userdetails;
                // RNSecureKeyStore.set(USER_DATA, JSON.stringify(userdata), { accessible: ACCESSIBLE.ALWAYS_THIS_DEVICE_ONLY });
                // if (usertoken !== null && userdata !== null) {
                //     reset()
                //     fetchUserToken(usertoken);
                //     fetchUserRemember(remember);
                //     navigation.navigate('DashboardNavigation', { id: data.id })
                // }
            }
        }
    }, [data]);
    const submit = value => {
        const val1 = value;
        const val2 = { "USER_ROLE": role };
        const data = Object.assign(val1, val2)
        submitLogin(data);
    }

    return (
        <View style={{ flex: 1, backgroundColor: "#ffffff" }} >
            <WavyHeader navigation={navigation} />
            <View style={{ marginTop: normalize(75) }} >
                <Field
                    label="Email"
                    name="EMAIL"
                    component={Input}
                    img={mail}
                    id={1}
                    autoCapitalize={'none'}
                    keyboardType={'email-address'}
                    validate={[required(), email()]}
                />
            </View>
            <View style={{ marginTop: normalize(10) }} >
                <Field
                    label="Password"
                    name="PASSWORD"
                    component={Input}
                    validate={[required()]}
                    img={lock}
                    id={1}
                    secureTextEntry={true}
                />
            </View>
            <View style={{ flexDirection: 'row', justifyContent: 'space-around' }}>
                <TouchableOpacity style={{ alignSelf: "flex-end", marginLeft: 20 }} onPress={() => navigation.navigate('LoginotpAuth')} >
                    <Text style={{ fontSize: normalize(18), fontFamily: fonts.lato_regular, color: "#F58220" }}>Login with OTP </Text>
                </TouchableOpacity>
                <TouchableOpacity style={{ alignSelf: "flex-end", marginRight: normalize(15) }} onPress={() => navigation.navigate('ForgotPassword')} >
                    <Text style={{ fontSize: normalize(18), fontFamily: fonts.lato_regular, color: "#F58220" }}>Forgot password </Text>
                </TouchableOpacity>
            </View>
            <View style={{ marginLeft: normalize(30), marginTop: normalize(20) }} >
                <SelectDropdown
                    data={countries}
                    buttonStyle={{ height: normalize(30), width: normalize(115) }}
                    buttonTextStyle={{ fontSize: normalize(14), }}
                    defaultValueByIndex={0}
                    onSelect={(selectedItem, index) => {
                    }}
                    buttonTextAfterSelection={(selectedItem, index) => {
                        setrole(index + 1)
                        return selectedItem
                    }}
                    rowTextForSelection={(item, index) => {
                        return item
                    }}
                />
                <View style={{ position: "absolute", left: normalize(90), top: 7 }} >
                    <Image source={triangle} style={{ height: normalize(20), width: normalize(20) }} />
                </View>
            </View>
            <View style={{ marginTop: normalize(20) }} >
                <Submitbutton bg={"#f69632"} text={"Log in"} txtclr={"#ffffff"} big={true} onpress={handleSubmit(submit)} />
            </View>
            <View style={{ flexDirection: "row", alignSelf: "center", justifyContent: "center" }} >
                <View style={{ width: normalize(130), borderBottomWidth: 1, borderColor: "#938C8C" }} />
                <Text style={{ fontFamily: fonts.montserrat_regular, fontSize: normalize(20), top: 10 }}> or </Text>
                <View style={{ width: normalize(130), borderBottomWidth: 1, borderColor: "#938C8C" }} />
            </View>
            <View style={{ marginTop: normalize(23) }}>
                <Submitbutton bg={"#ffffff"} text={"Sign up"} txtclr={"#f69632"} onpress={() => navigation.navigate("Signup")} big={true} />
            </View>
            <View style={{ marginTop: normalize(25), alignSelf: "center" }}>
                <Text style={{ fontFamily: fonts.lato_regular, fontSize: normalize(18) }} >To Register as a Admin  <Text style={{ color: "#F58220", textDecorationLine: "underline" }} onPress={() => navigation.navigate("AdminSignup")} >click here</Text> </Text>
            </View>
        </View>
    )
}

const mapStateToProps = (state) => {
    return {
        ...state.setup,
    };
}
const mapDispatchToProps = (dispatch) => {
    return {
        submitLogin: (data) => { dispatch(submitLogin(data)) },
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(reduxForm({
    form: 'Login',
})(Login));