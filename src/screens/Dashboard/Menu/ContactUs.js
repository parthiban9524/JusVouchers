import React from "react";
import { View, ScrollView, TextInput, Image, } from "react-native";

import { normalize, fonts } from "../../../components/Utils";
import { message, mail, phone, user, } from "../../../components/Icons"
import Submitbutton from "../../../components/Submitbutton"
import WavyHeader from "../../../components/Wavyheader";

export default function Contactus({ navigation }) {
    return (
        <ScrollView style={{ flex: 1, backgroundColor: "#ffffff" }} >
            <View style={{ marginleft: 20 }}>
                <WavyHeader firstTxt={"Contact"} secTxt={"Us"} navigation = {navigation} dash = {true} />
            </View>
            <View style={{ marginTop: normalize(75) }} >
                <TextInput
                    style={{ width: normalize(300), borderColor: "#938C8C", borderBottomWidth: 1, alignSelf: "center", fontFamily: fonts.lato_regular, fontSize: normalize(20), paddingLeft: normalize(30), top: 10, }}
                    placeholder={"Full Name"}
                    autoCapitalize="none"
                    autoCorrect={false}
                />
                <Image source={user} style={{ height: normalize(25), width: normalize(25), left: normalize(40), bottom: normalize(28) }} />
            </View>
            <View>
                <TextInput
                    style={{ width: normalize(300), borderColor: "#938C8C", borderBottomWidth: 1, alignSelf: "center", fontFamily: fonts.lato_regular, fontSize: normalize(20), paddingLeft: normalize(30), top: 10, }}
                    placeholder={"Phone"}
                    autoCapitalize="none"
                    autoCorrect={false}
                />
                <Image source={phone} style={{ height: normalize(25), width: normalize(25), left: normalize(40), bottom: normalize(28) }} />

            </View>
            <View >
                <TextInput
                    style={{ width: normalize(300), borderColor: "#938C8C", borderBottomWidth: 1, alignSelf: "center", fontFamily: fonts.lato_regular, fontSize: normalize(20), paddingLeft: normalize(30), top: 10, }}
                    placeholder={"Email"}
                    autoCapitalize="none"
                    autoCorrect={false}
                />
                <Image source={mail} style={{ height: normalize(25), width: normalize(25), left: normalize(40), bottom: normalize(28) }} />

            </View>
            <View >
                <TextInput
                    style={{ width: normalize(300), borderColor: "#938C8C", borderBottomWidth: 1, alignSelf: "center", fontFamily: fonts.lato_regular, fontSize: normalize(20), paddingLeft: normalize(30), top: 10, }}
                    placeholder={"Email"}
                    autoCapitalize="none"
                    autoCorrect={false}
                />
                <Image source={message} style={{ height: normalize(25), width: normalize(25), left: normalize(40), bottom: normalize(28) }} />

            </View>
            <View style={{ marginTop: normalize(30) }} >
                <Submitbutton bg={"#f69632"} text={"Submit"} txtclr={"#ffffff"} onpress={() => navigation.navigate("Login")} big={true} />
            </View>
        </ScrollView>
    )
}