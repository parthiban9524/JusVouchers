import React from "react";
import { View, Text, Image, TouchableOpacity,ScrollView } from "react-native";
import { connect } from "react-redux";
import { Field, reduxForm } from "redux-form";
import { required, email, length, format } from 'redux-form-validators';

import { fonts, normalize } from "../../components/Utils";
import { Arrow, lock, mail, triangle } from "../../components/Icons"
import Input from "../../components/Input";
import Submitbutton from "../../components/Submitbutton"
import WavyHeader from "../../components/Wavyheader";

function VendorLogin({ navigation, handleSubmit }) {

    const [card, setcard] = React.useState(false)
    const [txt, settxt] = React.useState("")


    const onClick = (data) => {
        setcard(true)
        // settxt(data)
        if(card === true)
        {
            setcard(false)
        }
    }

   
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
           
            <TouchableOpacity onPress={ onClick} style={{ flexDirection: "row", marginTop: normalize(18), marginLeft: normalize(45) }} >
                    <Text style={{ fontFamily: fonts.montserrat_regular, fontSize: normalize(12), fontWeight: "500" }} > { "Vendor Login" }  </Text>
                    <Image source={triangle} style={{ height: normalize(10), width: normalize(10), alignSelf: "center", left: 10 }} />  
                </TouchableOpacity>
                {
                    card && (
                        <View style = {{marginLeft: normalize(45), marginTop : 10}} >
                        <Text style={{ fontFamily: fonts.montserrat_regular, fontSize: normalize(12), fontWeight: "500" }}  onPress={() => navigation.navigate('Login') }> Login as User </Text>
                        <Text style={{ fontFamily: fonts.montserrat_regular, fontSize: normalize(12), fontWeight: "500", marginTop : normalize(10) }}  onPress={() => navigation.navigate('AdminLogin') }> Login as Admin </Text>
                        
                        <Text style={{ fontFamily: fonts.montserrat_regular, fontSize: normalize(12), fontWeight: "500", marginTop : normalize(10) }}  onPress={() => navigation.navigate('SalesPersonLogin')} > Login as SalePerson </Text>
                        
                        </View>
                    )
                }
                
            <View style={{ marginTop: normalize(20) }} >
                <Submitbutton bg={"#f69632"} text={"Log in"} txtclr={"#ffffff"} big={true}  onpress={() => navigation.navigate("VenderScreen")} />
            </View>
            <View style={{ flexDirection: "row", alignSelf: "center", justifyContent: "center" }} >
                <View style={{ width: normalize(130), borderBottomWidth: 1, borderColor: "#938C8C" }} />
                <Text style={{ fontFamily: fonts.montserrat_regular, fontSize: normalize(20), top: 10 }}> or </Text>
                <View style={{ width: normalize(130), borderBottomWidth: 1, borderColor: "#938C8C" }} />
            </View>
            <View style={{ marginTop: normalize(23) }}>
                <Submitbutton bg={"#ffffff"} text={"Sign up"} txtclr={"#f69632"} onpress={() => navigation.navigate("VenderSignup")} big={true} />
            </View>
            <View style = {{marginTop : normalize(25), alignSelf : "center"}}>
                <Text style = {{fontFamily : fonts.lato_regular, fontSize : normalize(18)}} >To Register as a Admin  <Text style = {{color : "#F58220", textDecorationLine : "underline"}} onPress = {() => navigation.navigate("AdminSignup")} >click here</Text> </Text>
            </View>
           
        </View>
    )
}
export default connect(null, null)(reduxForm({
    form: 'VendorLogin',
})(VendorLogin));