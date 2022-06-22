import React, { useState,useRef } from "react";
import { View,StyleSheet,Text, StatusBar, Image,DrawerLayoutAndroid, TouchableOpacity } from "react-native"

import { normalize } from "../../components/Utils";
import { menu, logo, search, close } from "../../components/Icons";
import AdminDash from "./AdminDash"

export default function Drawer({ navigation }) {

    const drawer = useRef(null);
    const navigationView = () => (
        <View style={[styles.container, styles.navigationContainer]}>
         <Text>hello</Text>
        </View>
      );

    return (
        <>
            <StatusBar backgroundColor={"#F9AA44"} translucent={false} />
          
            <View style={{ height: normalize(50), width: "100%", backgroundColor: "#F9AA44", flexDirection: 'row', justifyContent: "space-evenly" }} >
                <TouchableOpacity style={{ justifyContent: "center", right: normalize(40) }} onPress={() => drawer.current.openDrawer()}>
                    <Image source={menu} style={{ height: normalize(30), width: normalize(30) }} />
                </TouchableOpacity>
                <TouchableOpacity style={{ height: normalize(40), width: normalize(100), backgroundColor: "#ffffff", borderBottomLeftRadius: normalize(40), borderTopRightRadius: normalize(40), justifyContent: "center", alignSelf: "center" }} >
                    <Image source={logo} style={{ height: normalize(30), width: normalize(60), alignSelf: "center" }} />
                </TouchableOpacity>
                <TouchableOpacity style={{ justifyContent: "center", left: normalize(35) }}>
                    <Image source={search} style={{ height: normalize(30), width: normalize(30) }} />
                </TouchableOpacity>
            </View>
            <DrawerLayoutAndroid
      ref={drawer}
      drawerWidth={300}
      renderNavigationView={navigationView}
    >
    < AdminDash/>
            </DrawerLayoutAndroid>
        </>
    )
}
const styles = StyleSheet.create({
    container: {
      flex: 1,
      alignItems: "center",
      justifyContent: "center",
      padding: 16
    },
    navigationContainer: {
      backgroundColor: "#ecf0f1"
    },
    paragraph: {
      padding: 16,
      fontSize: 15,
      textAlign: "center"
    }
  });