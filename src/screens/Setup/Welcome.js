import React from "react";
import { View, Text, Image, StatusBar } from "react-native";

import { logo } from "../../components/Icons";
import Submitbutton from "../../components/Submitbutton";
import { normalize, fonts } from "../../components/Utils"

export default function Welcome({ navigation }) {

  return (
    <>
      <StatusBar backgroundColor={"#F9AA44"} translucent={false} />
      <View style={{ flex: 1, backgroundColor: "#ffffff" }} >
        <View style={{ alignSelf: "center", marginTop: normalize(80) }} >
          <Image source={logo} style={{ height: normalize(142), width: normalize(220), resizeMode: "contain" }} />
        </View>
        <View style={{ marginHorizontal: normalize(30), marginTop: normalize(65) }} >
          <Text style={{ fontSize: normalize(28), fontFamily: fonts.lato_regular, alignSelf: "center" }} >Huge <Text style={{ color: "#F58220" }} >Discounts</Text><Text> on</Text></Text>
          <Text style={{ fontSize: normalize(28), fontFamily: fonts.lato_regular, alignSelf: "center" }} >Everything</Text>
        </View>
        <View style={{ marginTop: normalize(200) }} >
          <Submitbutton bg={"#f69632"} text={"Log in"} big={true} txtclr={"#ffffff"} onpress={() => navigation.navigate("Login")}/>
        </View>
        <View style={{ marginTop: normalize(20) }} >
          <Submitbutton bg={"#ffffff"} text={"Sign up"} big={true} txtclr={"#f69632"} onpress={() => navigation.navigate("Signup")} />
        </View>
      </View>
    </>
  )
}