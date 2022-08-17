import React from "react";
import { View, Text, Image, TextInput } from "react-native";

import { fonts, normalize } from "../../components/Utils";
import { lock, mail, message } from "../../components/Icons";
import Submitbutton from "../../components/Submitbutton"
import WavyHeader from "../../components/Wavyheader";

export default function ResetPassword({ navigation }) {
    return (
        <View style={{ flex: 1, backgroundColor: "#ffffff" }} >
            <WavyHeader firstTxt={"Reset"} secTxt={"Password"} navigation={navigation} />
            <View style={{ marginTop: normalize(100), alignSelf: "center", paddingHorizontal: normalize(60) }}>
                <Text style={{ fontFamily: fonts.montserrat_regular, fontSize: normalize(20), color: "#9A9393", textAlign: "center" }}>Reset new password</Text>
            </View>
            <View style={{ marginTop: normalize(40) }} >
                <TextInput
                    style={{ width: normalize(300), borderColor: "#938C8C", borderBottomWidth: 1, alignSelf: "center", fontFamily: fonts.lato_regular, fontSize: normalize(20), paddingLeft: normalize(30), top: 10, }}
                    placeholder={"Email Address"}
                    autoCapitalize="none"
                    autoCorrect={false}
                />
                <Image source={mail} style={{ height: normalize(25), width: normalize(25), left: normalize(40), bottom: normalize(28) }} />
            </View>
            <View style={{ marginTop: normalize(10) }} >
                <TextInput
                    style={{ width: normalize(300), borderColor: "#938C8C", borderBottomWidth: 1, alignSelf: "center", fontFamily: fonts.lato_regular, fontSize: normalize(20), paddingLeft: normalize(30), top: 10, }}
                    placeholder={"Enter Code"}
                    autoCapitalize="none"
                    autoCorrect={false}
                />
                <Image source={message} style={{ height: normalize(25), width: normalize(25), left: normalize(40), bottom: normalize(28) }} />
            </View>
            <View style={{ marginTop: normalize(10) }} >
                <TextInput
                    style={{ width: normalize(300), borderColor: "#938C8C", borderBottomWidth: 1, alignSelf: "center", fontFamily: fonts.lato_regular, fontSize: normalize(20), paddingLeft: normalize(30), top: 10, }}
                    placeholder={"New Password"}
                    autoCapitalize="none"
                    autoCorrect={false}
                />
                <Image source={lock} style={{ height: normalize(25), width: normalize(25), left: normalize(40), bottom: normalize(28) }} />
            </View>
            <View style={{ marginTop: normalize(90) }} >
                <Submitbutton bg={"#f69632"} text={"Update"} txtclr={"#ffffff"} big={true} onpress={() => navigation.navigate("Welcome")} />
            </View>
        </View>
    )
}
