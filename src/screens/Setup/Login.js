import React from "react";
import { View, Text, Image, TouchableOpacity, TextInput } from "react-native";


import { fonts, normalize } from "../../components/Utils";
import { Arrow, lock, mail, triangle } from "../../components/Icons"
import Submitbutton from "../../components/Submitbutton"
import WavyHeader from "../../components/Wavyheader";

export default function Login({ navigation }) {

    const [card, setcard] = React.useState(false)
    const [txt, settxt] = React.useState("")


    const onClick = (data) => {
        setcard(true)
        // settxt(data)
        if (card === true) {
            setcard(false)
        }
    }

    const onTouch = (data) => {
        settxt(data)
        if (txt == data) {
            settxt("")
        }
        setcard(false)
    }

    return (
        <View style={{ flex: 1, backgroundColor: "#ffffff" }} >
            <WavyHeader navigation={navigation} />
            <View style={{ marginTop: normalize(75) }} >
                <TextInput
                    style={{ width: normalize(300), borderColor: "#938C8C", borderBottomWidth: 1, alignSelf: "center", fontFamily: fonts.lato_regular, fontSize: normalize(20), paddingLeft: normalize(30), top: 10, }}
                    placeholder={"Email"}
                    autoCapitalize="none"
                    autoCorrect={false}
                />
                <Image source={mail} style={{ height: normalize(25), width: normalize(25), left: normalize(40), bottom: normalize(28) }} />
            </View>
            <View style={{ marginTop: normalize(15) }} >
                <TextInput
                    style={{ width: normalize(300), borderColor: "#938C8C", borderBottomWidth: 1, alignSelf: "center", fontFamily: fonts.lato_regular, fontSize: normalize(20), paddingLeft: normalize(30), top: 10, }}
                    placeholder={"Password"}
                    autoCapitalize="none"
                    autoCorrect={false}
                    secureTextEntry = {true}
                />
                <Image source={lock} style={{ height: normalize(25), width: normalize(25), left: normalize(40), bottom: normalize(28) }} />
            </View>
            <View style={{ flexDirection: 'row', justifyContent: 'space-around' }}>
                <TouchableOpacity style={{ alignSelf: "flex-end", marginLeft: 20 }} onPress={() => navigation.navigate('LoginotpAuth')} >
                    <Text style={{ fontSize: normalize(18), fontFamily: fonts.lato_regular, color: "#F58220" }}>Login with OTP </Text>
                </TouchableOpacity>
                <TouchableOpacity style={{ alignSelf: "flex-end", marginRight: normalize(15) }} onPress={() => navigation.navigate('ForgotPassword')} >
                    <Text style={{ fontSize: normalize(18), fontFamily: fonts.lato_regular, color: "#F58220" }}>Forgot password </Text>
                </TouchableOpacity>
            </View>
            <TouchableOpacity onPress={onClick} style={{ flexDirection: "row", marginTop: normalize(18), marginLeft: normalize(45) }} >
                <Text style={{ fontFamily: fonts.montserrat_regular, fontSize: normalize(12), fontWeight: "500" }} > {txt !== "" ? txt : "User Login"}  </Text>
                <Image source={triangle} style={{ height: normalize(10), width: normalize(10), alignSelf: "center", left: 10 }} />
            </TouchableOpacity>
            {
                card && (
                    <View style={{ marginLeft: normalize(45), marginTop: 10 }} >
                        <Text style={{ fontFamily: fonts.montserrat_regular, fontSize: normalize(12), fontWeight: "500" }} onPress={() => onTouch("Admin Login")}  > Admin Login </Text>
                        <Text style={{ fontFamily: fonts.montserrat_regular, fontSize: normalize(12), fontWeight: "500", marginTop: normalize(10) }} onPress={() => onTouch("Vendor Login")}  > Vendor Login </Text>
                        <Text style={{ fontFamily: fonts.montserrat_regular, fontSize: normalize(12), fontWeight: "500", marginTop: normalize(10) }} onPress={() => onTouch("SalePerson Login")}  > SalePerson Login </Text>
                    </View>
                )
            }
            <View style={{ marginTop: normalize(20) }} >
                <Submitbutton bg={"#f69632"} text={"Log in"} txtclr={"#ffffff"} big={true} onpress={() => navigation.navigate("DashboardNavigation")} />
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
