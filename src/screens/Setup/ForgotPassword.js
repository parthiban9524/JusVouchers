import React from "react";
import { View, Text, Image, TextInput } from "react-native";


import { fonts, normalize } from "../../components/Utils";
import { lock, mail } from "../../components/Icons"
import Submitbutton from "../../components/Submitbutton"
import WavyHeader from "../../components/Wavyheader";
import { ScrollView } from "react-native-gesture-handler";

export default function ForgotPassword({ navigation }) {
    return (
        <View style={{ flex: 1, backgroundColor: "#ffffff" }} >
            <ScrollView>
            <WavyHeader firstTxt={"Forgot"} secTxt={"Password"} navigation = {navigation} />
            <View style={{ marginTop: normalize(100), alignSelf: "center", paddingHorizontal: normalize(50) }}>
                <Text style={{ fontFamily: fonts.montserrat_regular, fontSize: normalize(20), color: "#9A9393", textAlign: "center" }}>Enter the Registered Email to reset the password</Text>
            </View>
            <View style={{ marginTop: normalize(75) }} >
                <TextInput
                    style={{ width: normalize(300), borderColor: "#938C8C", borderBottomWidth: 1, alignSelf: "center", fontFamily: fonts.lato_regular, fontSize: normalize(20), paddingLeft: normalize(30), top: 10, }}
                    placeholder={"Email Address"}
                    autoCapitalize="none"
                    autoCorrect={false}
                />
                <Image source={mail} style={{ height: normalize(25), width: normalize(25), left: normalize(40), bottom: normalize(28) }} />
            </View>
            <View style={{ marginTop: normalize(100) }} >
                <Submitbutton bg={"#f69632"} text={"Send"} txtclr={"#ffffff"} onpress={() => navigation.navigate("ResetPassword")} big={true} />
            </View>
            </ScrollView>
        </View>
    )
}
