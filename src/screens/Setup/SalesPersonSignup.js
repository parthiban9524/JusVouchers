import React from "react";
import { View, Text, Image, TouchableOpacity, ScrollView, TextInput } from "react-native";

import { fonts, normalize } from "../../components/Utils";
import { lock, mail, phone, user } from "../../components/Icons"
import Submitbutton from "../../components/Submitbutton"
import WavyHeader from "../../components/Wavyheader";

export default function SalesPersonSignup({ navigation }) {
    return (
        <ScrollView style={{ flex: 1, backgroundColor: "#ffffff" }} >
            <View style={{}}>
                <WavyHeader firstTxt={"Sales Person"} secTxt={"Account"} navigation={navigation} />
            </View>
            <View style={{ marginTop: normalize(50) }} >
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
                    placeholder={"Password"}
                    autoCapitalize="none"
                    autoCorrect={false}
                    secureTextEntry = {true}
                />
                <Image source={lock} style={{ height: normalize(25), width: normalize(25), left: normalize(40), bottom: normalize(28) }} />

            </View>
            <View style={{ marginTop: normalize(20) }} >
                <Submitbutton bg={"#f69632"} text={"Sign up"} txtclr={"#ffffff"} onpress={() => navigation.navigate('SalesScreen')} big={true} />
            </View>
            <View style={{ flexDirection: "row", alignSelf: "center", justifyContent: "center" }} >
                <View style={{ width: normalize(130), borderBottomWidth: 1, borderColor: "#938C8C" }} />
                <Text style={{ fontFamily: fonts.montserrat_regular, fontSize: normalize(18), top: 8 }}> or </Text>
                <View style={{ width: normalize(130), borderBottomWidth: 1, borderColor: "#938C8C" }} />
            </View>
            <View style={{ marginTop: normalize(13) }}>
                <Submitbutton bg={"#ffffff"} text={"Log in"} txtclr={"#f69632"} onpress={() => navigation.navigate("Login")} big={true} />
            </View>
        </ScrollView>
    )
}