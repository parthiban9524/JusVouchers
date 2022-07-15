import React from "react";
import { View, Text, Image, TouchableOpacity } from "react-native";
import { connect } from "react-redux";
import { Field, reduxForm } from "redux-form";
import { required, email, length, format } from 'redux-form-validators';

import { fonts, normalize } from "../../components/Utils";
import { lock, mail } from "../../components/Icons"
import Input from "../../components/Input";
import Submitbutton from "../../components/Submitbutton"
import WavyHeader from "../../components/Wavyheader";

function Login({ navigation, handleSubmit }) {

    return (
        <View style={{ flex: 1, backgroundColor: "#ffffff" }} >
            <WavyHeader navigation={navigation} />
            <View style={{ marginTop: normalize(75) }} >
                <Field
                    label="Email"
                    name="email"
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
                    name="Password"
                    component={Input}
                    validate={[required(), length({ minimum: 8, message: 'Mininum 8 character' }), format({ with: /(?=.*[0-9])(?=.*[A-Z])(?=.*[a-z])(?=.*[#?!@$%^&*-])/, message: 'Should contains: [A-Z] [a-z] [0-9] [#?!@$%^&*-]' })]}
                    img={lock}
                    id={1}
                    secureTextEntry={true}
                />
            </View>
            <View style={{flexDirection:'row',justifyContent:'space-around'}}>
            <TouchableOpacity style={{ alignSelf: "flex-end", marginLeft:20 }} onPress={() => navigation.navigate('LoginotpAuth')} >
                <Text style={{ fontSize: normalize(18), fontFamily: fonts.lato_regular, color: "#F58220" }}>Login with OTP </Text>
            </TouchableOpacity>
            <TouchableOpacity style={{ alignSelf: "flex-end", marginRight: normalize(15) }} onPress={() => navigation.navigate('ForgotPassword')} >
                <Text style={{ fontSize: normalize(18), fontFamily: fonts.lato_regular, color: "#F58220" }}>Forgot password </Text>
            </TouchableOpacity>
            </View>
            <View style={{ marginTop: normalize(69) }} >
                <Submitbutton bg={"#f69632"} text={"Log in"} txtclr={"#ffffff"} big={true}  onpress={() => navigation.navigate("DashboardNavigation")} />
            </View>
            <View style={{ flexDirection: "row", alignSelf: "center", justifyContent: "center" }} >
                <View style={{ width: normalize(130), borderBottomWidth: 1, borderColor: "#938C8C" }} />
                <Text style={{ fontFamily: fonts.montserrat_regular, fontSize: normalize(20), top: 10 }}> or </Text>
                <View style={{ width: normalize(130), borderBottomWidth: 1, borderColor: "#938C8C" }} />
            </View>
            <View style={{ marginTop: normalize(23) }}>
                <Submitbutton bg={"#ffffff"} text={"Sign up"} txtclr={"#f69632"} onpress={() => navigation.navigate("Signup")} big={true} />
            </View>
            <View style = {{marginTop : normalize(25), alignSelf : "center"}}>
                <Text style = {{fontFamily : fonts.lato_regular, fontSize : normalize(18)}} >To Register as a Admin  <Text style = {{color : "#F58220", textDecorationLine : "underline"}} onPress = {() => navigation.navigate("AdminSignup")} >click here</Text> </Text>
            </View>
        </View>
    )
}
export default connect(null, null)(reduxForm({
    form: 'Login',
})(Login));