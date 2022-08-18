import React from "react";
import { View, Text, Image, ScrollView, TextInput } from "react-native"

import Header from "../../../components/Header";
import { user } from "../../../components/Icons";
import { fonts, normalize } from "../../../components/Utils";
import Submitbutton from "../../../components/Submitbutton";

export default function HealthForm({ navigation }) {
    return (
        <>
            <Header navigation={navigation} />
            <ScrollView style={{ flex: 1 }} >
                <View style={{ alignSelf: "center", marginTop: normalize(10) }}>
                    <Text style={{ fontFamily: fonts.montserrat_regular, fontWeight: "600", fontSize: normalize(22), color: "#000000" }} >Family Health Form</Text>
                </View>
                <View style={{ alignSelf: "center", marginHorizontal: normalize(50), marginTop: normalize(15) }}>
                    <Text style={{ color: "#0D2FA9", fontSize: normalize(16), textAlign: "center", fontFamily: fonts.montserrat_regular, fontWeight: "500" }}>Note* <Text style={{ color: "#3D3C3B" }}>Health voucher cover your family members (min 1 or max 4) before buy health voucher fill this form.</Text></Text>
                </View>
                <View style={{ marginTop: normalize(22), marginLeft: normalize(20) }}>
                    <View style={{ height: normalize(25), width: normalize(150), borderRadius: normalize(20), backgroundColor: "#F9AA44", flexDirection: "row" }}>
                        <View style={{ justifyContent: "center", marginLeft: normalize(15) }} >
                            <Text style={{ textAlign: "center", fontFamily: fonts.lato_regular, fontWeight: "600", fontSize: normalize(18) }} >Member 1</Text>
                        </View>
                        <View style={{ justifyContent: "center", marginLeft: normalize(15) }}>
                            <Image source={user} style={{ height: normalize(20), width: normalize(20), tintColor: "#000000" }} />
                        </View>
                    </View>
                    <View style={{ marginTop: normalize(15) }}>
                        <TextInput
                            style={{ width: normalize(318), borderColor: "#000000", borderBottomWidth: 1, marginLeft: normalize(10), fontFamily: fonts.lato_regular, fontSize: normalize(20) }}
                            placeholder={"Full Name"}
                            placeholderTextColor={"#000000"}
                        />
                    </View>
                    <View style={{ flexDirection: "row", marginTop: 10 }} >
                        <TextInput
                            style={{ width: normalize(150), borderColor: "#000000", borderBottomWidth: 1, marginLeft: normalize(10), fontFamily: fonts.lato_regular, fontSize: normalize(20) }}
                            placeholder={"Age"}
                            placeholderTextColor={"#000000"}
                        />
                        <TextInput
                            style={{ width: normalize(150), borderColor: "#000000", borderBottomWidth: 1, marginLeft: normalize(10), fontFamily: fonts.lato_regular, fontSize: normalize(20) }}
                            placeholder={"Gender"}
                            placeholderTextColor={"#000000"}
                        />
                    </View>
                    <View style={{ marginTop: 10 }} >
                        <TextInput
                            style={{ width: normalize(318), borderColor: "#000000", borderBottomWidth: 1, marginLeft: normalize(10), fontFamily: fonts.lato_regular, fontSize: normalize(20) }}
                            placeholder={"Phone"}
                            placeholderTextColor={"#000000"}
                        />
                    </View>
                    <View style={{ marginTop: 10 }}>
                        <TextInput
                            style={{ width: normalize(318), borderColor: "#000000", borderBottomWidth: 1, marginLeft: normalize(10), fontFamily: fonts.lato_regular, fontSize: normalize(20) }}
                            placeholder={"Email"}
                            placeholderTextColor={"#000000"}
                        />
                    </View>
                </View>
                <View style={{ marginTop: normalize(22), marginLeft: normalize(20) }}>
                    <View style={{ height: normalize(25), width: normalize(150), borderRadius: normalize(20), backgroundColor: "#F9AA44", flexDirection: "row" }}>
                        <View style={{ justifyContent: "center", marginLeft: normalize(15) }} >
                            <Text style={{ textAlign: "center", fontFamily: fonts.lato_regular, fontWeight: "600", fontSize: normalize(18) }} >Member 2</Text>
                        </View>
                        <View style={{ justifyContent: "center", marginLeft: normalize(15) }}>
                            <Image source={user} style={{ height: normalize(20), width: normalize(20), tintColor: "#000000" }} />
                        </View>
                    </View>
                    <View style={{ marginTop: normalize(15) }}>
                        <TextInput
                            style={{ width: normalize(318), borderColor: "#000000", borderBottomWidth: 1, marginLeft: normalize(10), fontFamily: fonts.lato_regular, fontSize: normalize(20) }}
                            placeholder={"Full Name"}
                            placeholderTextColor={"#000000"}
                        />
                    </View>
                    <View style={{ flexDirection: "row", marginTop: 10 }} >
                        <TextInput
                            style={{ width: normalize(150), borderColor: "#000000", borderBottomWidth: 1, marginLeft: normalize(10), fontFamily: fonts.lato_regular, fontSize: normalize(20) }}
                            placeholder={"Age"}
                            placeholderTextColor={"#000000"}
                        />
                        <TextInput
                            style={{ width: normalize(150), borderColor: "#000000", borderBottomWidth: 1, marginLeft: normalize(10), fontFamily: fonts.lato_regular, fontSize: normalize(20) }}
                            placeholder={"Gender"}
                            placeholderTextColor={"#000000"}
                        />
                    </View>
                    <View style={{ marginTop: 10 }} >
                        <TextInput
                            style={{ width: normalize(318), borderColor: "#000000", borderBottomWidth: 1, marginLeft: normalize(10), fontFamily: fonts.lato_regular, fontSize: normalize(20) }}
                            placeholder={"Phone"}
                            placeholderTextColor={"#000000"}
                        />
                    </View>
                    <View style={{ marginTop: 10 }}>
                        <TextInput
                            style={{ width: normalize(318), borderColor: "#000000", borderBottomWidth: 1, marginLeft: normalize(10), fontFamily: fonts.lato_regular, fontSize: normalize(20) }}
                            placeholder={"Email"}
                            placeholderTextColor={"#000000"}
                        />
                    </View>
                </View>
                <View style={{ marginTop: normalize(22), marginLeft: normalize(20) }}>
                    <View style={{ height: normalize(25), width: normalize(150), borderRadius: normalize(20), backgroundColor: "#F9AA44", flexDirection: "row" }}>
                        <View style={{ justifyContent: "center", marginLeft: normalize(15) }} >
                            <Text style={{ textAlign: "center", fontFamily: fonts.lato_regular, fontWeight: "600", fontSize: normalize(18) }} >Member 3</Text>
                        </View>
                        <View style={{ justifyContent: "center", marginLeft: normalize(15) }}>
                            <Image source={user} style={{ height: normalize(20), width: normalize(20), tintColor: "#000000" }} />
                        </View>
                    </View>
                    <View style={{ marginTop: normalize(15) }}>
                        <TextInput
                            style={{ width: normalize(318), borderColor: "#000000", borderBottomWidth: 1, marginLeft: normalize(10), fontFamily: fonts.lato_regular, fontSize: normalize(20) }}
                            placeholder={"Full Name"}
                            placeholderTextColor={"#000000"}
                        />
                    </View>
                    <View style={{ flexDirection: "row", marginTop: 10 }} >
                        <TextInput
                            style={{ width: normalize(150), borderColor: "#000000", borderBottomWidth: 1, marginLeft: normalize(10), fontFamily: fonts.lato_regular, fontSize: normalize(20) }}
                            placeholder={"Age"}
                            placeholderTextColor={"#000000"}
                        />
                        <TextInput
                            style={{ width: normalize(150), borderColor: "#000000", borderBottomWidth: 1, marginLeft: normalize(10), fontFamily: fonts.lato_regular, fontSize: normalize(20) }}
                            placeholder={"Gender"}
                            placeholderTextColor={"#000000"}
                        />
                    </View>
                    <View style={{ marginTop: 10 }} >
                        <TextInput
                            style={{ width: normalize(318), borderColor: "#000000", borderBottomWidth: 1, marginLeft: normalize(10), fontFamily: fonts.lato_regular, fontSize: normalize(20) }}
                            placeholder={"Phone"}
                            placeholderTextColor={"#000000"}
                        />
                    </View>
                    <View style={{ marginTop: 10 }}>
                        <TextInput
                            style={{ width: normalize(318), borderColor: "#000000", borderBottomWidth: 1, marginLeft: normalize(10), fontFamily: fonts.lato_regular, fontSize: normalize(20) }}
                            placeholder={"Email"}
                            placeholderTextColor={"#000000"}
                        />
                    </View>
                </View>
                <View style={{ marginTop: normalize(22), marginLeft: normalize(20) }}>
                    <View style={{ height: normalize(25), width: normalize(150), borderRadius: normalize(20), backgroundColor: "#F9AA44", flexDirection: "row" }}>
                        <View style={{ justifyContent: "center", marginLeft: normalize(15) }} >
                            <Text style={{ textAlign: "center", fontFamily: fonts.lato_regular, fontWeight: "600", fontSize: normalize(18) }} >Member 4</Text>
                        </View>
                        <View style={{ justifyContent: "center", marginLeft: normalize(15) }}>
                            <Image source={user} style={{ height: normalize(20), width: normalize(20), tintColor: "#000000" }} />
                        </View>
                    </View>
                    <View style={{ marginTop: normalize(15) }}>
                        <TextInput
                            style={{ width: normalize(318), borderColor: "#000000", borderBottomWidth: 1, marginLeft: normalize(10), fontFamily: fonts.lato_regular, fontSize: normalize(20) }}
                            placeholder={"Full Name"}
                            placeholderTextColor={"#000000"}
                        />
                    </View>
                    <View style={{ flexDirection: "row", marginTop: 10 }} >
                        <TextInput
                            style={{ width: normalize(150), borderColor: "#000000", borderBottomWidth: 1, marginLeft: normalize(10), fontFamily: fonts.lato_regular, fontSize: normalize(20) }}
                            placeholder={"Age"}
                            placeholderTextColor={"#000000"}
                        />
                        <TextInput
                            style={{ width: normalize(150), borderColor: "#000000", borderBottomWidth: 1, marginLeft: normalize(10), fontFamily: fonts.lato_regular, fontSize: normalize(20) }}
                            placeholder={"Gender"}
                            placeholderTextColor={"#000000"}
                        />
                    </View>
                    <View style={{ marginTop: 10 }} >
                        <TextInput
                            style={{ width: normalize(318), borderColor: "#000000", borderBottomWidth: 1, marginLeft: normalize(10), fontFamily: fonts.lato_regular, fontSize: normalize(20) }}
                            placeholder={"Phone"}
                            placeholderTextColor={"#000000"}
                        />
                    </View>
                    <View style={{ marginTop: 10 }}>
                        <TextInput
                            style={{ width: normalize(318), borderColor: "#000000", borderBottomWidth: 1, marginLeft: normalize(10), fontFamily: fonts.lato_regular, fontSize: normalize(20) }}
                            placeholder={"Email"}
                            placeholderTextColor={"#000000"}
                        />
                    </View>
                </View>
                <View style={{ marginVertical: normalize(42) }} >
                    <Submitbutton voucher={true} bg={"#F58220"} text={"Submit"} txtclr={"#ffffff"} onpress={() => navigation.navigate("Vouchers")} />
                </View>
            </ScrollView>
        </>

    )
}