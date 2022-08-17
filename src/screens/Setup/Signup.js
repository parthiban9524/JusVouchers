import React, { useEffect, useRef } from "react";
import { View, Text, Image, ScrollView, TextInput } from "react-native";


import { fonts, normalize, showToast } from "../../components/Utils";
import { lock, mail, phone, user } from "../../components/Icons"
import Submitbutton from "../../components/Submitbutton"
import WavyHeader from "../../components/Wavyheader";

export default function Signup({ navigation, handleSubmit, }) {

    const isInitialMount = useRef(true);

    const submit = value => {

    }

    return (

        <ScrollView style={{ flex: 1, backgroundColor: "#ffffff" }} >
            <View>
                <WavyHeader firstTxt={"Create"} secTxt={"Account"} navigation={navigation} />
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

            <View style={{ marginTop: normalize(15), marginLeft: normalize(30) }}>
                <Text style={{ fontFamily: fonts.lato_regular, fontSize: normalize(18) }} >Register as Vendor <Text style={{ color: "#F58220", textDecorationLine: "underline" }} onPress={() => navigation.navigate("VenderSignup")} > click here</Text> </Text>
            </View>
            <View style={{ marginTop: normalize(12) }} >
                <Submitbutton bg={"#f69632"} text={"Sign up"} txtclr={"#ffffff"} onpress={submit} big={true} />
            </View>
            <View style={{ flexDirection: "row", alignSelf: "center", justifyContent: "center" }} >
                <View style={{ width: normalize(130), borderBottomWidth: 1, borderColor: "#938C8C" }} />
                <Text style={{ fontFamily: fonts.montserrat_regular, fontSize: normalize(18), top: 8 }}> or </Text>
                <View style={{ width: normalize(130), borderBottomWidth: 1, borderColor: "#938C8C" }} />
            </View>
            <View style={{ marginTop: normalize(13) }}>
                <Submitbutton bg={"#ffffff"} text={"Log in"} txtclr={"#f69632"} onpress={() => navigation.navigate("Login")} big={true} />
            </View>
            <View style={{ marginTop: normalize(25), alignSelf: "center" }}>
                <Text style={{ fontFamily: fonts.lato_regular, fontSize: normalize(18) }} >To Register as a SalesPerson  <Text style={{ color: "#F58220", textDecorationLine: "underline" }} onPress={() => navigation.navigate("SalesPersonSignup")} >click here</Text> </Text>
            </View>
        </ScrollView>
    )
}
