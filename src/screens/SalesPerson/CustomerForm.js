import React from "react";
import { View, Text, StatusBar, ScrollView, TouchableOpacity, Image , TextInput} from "react-native";

import { fonts, normalize } from "../../components/Utils";
import { mail, phone, user, left, Address, Price, VName } from "../../components/Icons"
import Submitbutton from "../../components/Submitbutton"
import SalesHeader from "../../components/SalesHeader"

export default function CustomerForm({ navigation }) {
    return (

        <ScrollView style={{ flex: 1, backgroundColor: "#ffffff" }} >
            <StatusBar backgroundColor={"#F9AA44"} translucent={false} />
            <SalesHeader navigation={navigation} />
            <TouchableOpacity style={{ marginTop: normalize(20), marginLeft: normalize(20) }} onPress={() => navigation.navigate("SalePerson")} >
                <Image source={left} style={{ height: normalize(30), width: normalize(30) }} />
            </TouchableOpacity>
            <View style={{ alignSelf: 'center' }} >

                <Text style={{ fontSize: normalize(24), fontWeight: 'bold' }}>Get Customer Details</Text>
            </View>
            <View style={{ marginTop: normalize(25) }} >
                <TextInput
                    style={{ width: normalize(300), borderColor: "#938C8C", borderBottomWidth: 1, alignSelf: "center", fontFamily: fonts.lato_regular, fontSize: normalize(20), paddingLeft: normalize(30), top: 10, }}
                    placeholder={"Customer Full Name"}
                    autoCapitalize="none"
                    autoCorrect={false}
                />
                <Image source={user} style={{ height: normalize(25), width: normalize(25), left: normalize(40), bottom: normalize(28) }} />
            </View>
            <View >
                <TextInput
                    style={{ width: normalize(300), borderColor: "#938C8C", borderBottomWidth: 1, alignSelf: "center", fontFamily: fonts.lato_regular, fontSize: normalize(20), paddingLeft: normalize(30), top: 10, }}
                    placeholder={"Phone"}
                    autoCapitalize="none"
                    autoCorrect={false}
                />
                <Image source={phone} style={{ height: normalize(25), width: normalize(25), left: normalize(40), bottom: normalize(28) }} />
            </View>
            <View>
                <TextInput
                    style={{ width: normalize(300), borderColor: "#938C8C", borderBottomWidth: 1, alignSelf: "center", fontFamily: fonts.lato_regular, fontSize: normalize(20), paddingLeft: normalize(30), top: 10, }}
                    placeholder={"Email"}
                    autoCapitalize="none"
                    autoCorrect={false}
                />
                <Image source={mail} style={{ height: normalize(25), width: normalize(25), left: normalize(40), bottom: normalize(28) }} />
            </View>
            <View>
                <TextInput
                    style={{ width: normalize(300), borderColor: "#938C8C", borderBottomWidth: 1, alignSelf: "center", fontFamily: fonts.lato_regular, fontSize: normalize(20), paddingLeft: normalize(30), top: 10, }}
                    placeholder={"Address"}
                    autoCapitalize="none"
                    autoCorrect={false}
                />
                <Image source={Address} style={{ height: normalize(25), width: normalize(25), left: normalize(40), bottom: normalize(28) }} />
            </View>

            <View>
                <TextInput
                    style={{ width: normalize(300), borderColor: "#938C8C", borderBottomWidth: 1, alignSelf: "center", fontFamily: fonts.lato_regular, fontSize: normalize(20), paddingLeft: normalize(30), top: 10, }}
                    placeholder={"Voucher Name"}
                    autoCapitalize="none"
                    autoCorrect={false}
                />
                <Image source={VName} style={{ height: normalize(25), width: normalize(25), left: normalize(40), bottom: normalize(28) }} />
            </View>
            <View>
                <TextInput
                    style={{ width: normalize(300), borderColor: "#938C8C", borderBottomWidth: 1, alignSelf: "center", fontFamily: fonts.lato_regular, fontSize: normalize(20), paddingLeft: normalize(30), top: 10, }}
                    placeholder={"Voucher Price"}
                    autoCapitalize="none"
                    autoCorrect={false}
                />
                <Image source={Price} style={{ height: normalize(25), width: normalize(25), left: normalize(40), bottom: normalize(28) }} />
            </View>
            <View style={{ marginTop: normalize(13) }} >
                <Submitbutton bg={"#f69632"} text={"Submit"} txtclr={"#ffffff"} onpress={() => alert("Form Submit")} big={true} />
            </View>

        </ScrollView>
    )
}