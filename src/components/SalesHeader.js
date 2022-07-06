import React, { useState } from "react";
import { View, Text, StatusBar, Image, TouchableOpacity, Modal } from "react-native"

import { fonts, normalize } from "./Utils"
import { menu, close, logout_dark, admin_user, admin_voucher, customer } from "./Icons";
import man from "../assest/images/man.png"

export default function SalesHeader({ navigation }) {

    const [sidemenu, setsidemenu] = useState(false)
    const [select,setselect] = useState(false)

    const Onmenu = () => {
        setsidemenu(true)
    }

    const Onclose = () => {
        setsidemenu(false)
    }

    const onCustomer = () => {
        navigation.navigate("CustomerData")
        setselect(true)
    }

    const onDash = () => {
     navigation.navigate("SalePerson")
     setselect(false)
    }

    return (
        <>
            <StatusBar backgroundColor={"#F9AA44"} translucent={false} />
            <View style={{ height: normalize(50), width: "100%", backgroundColor: "#F9AA44", flexDirection: 'row' }} >
                <TouchableOpacity style={{ justifyContent: "center", marginLeft: normalize(15) }} onPress={Onmenu} >
                    <Image source={menu} style={{ height: normalize(30), width: normalize(30) }} />
                </TouchableOpacity>
                <TouchableOpacity style={{ marginLeft: normalize(60), justifyContent: "center" }} >
                    <Text style={{ fontFamily: fonts.montserrat_semibold, fontSize: normalize(22), color: "#ffffff" }} >SalesPerson Manage</Text>
                </TouchableOpacity>
            </View>
            {
                sidemenu && (
                    <Modal style={{ height: "100%", width: normalize(270), backgroundColor: "#ffffff", }} transparent={true}>
                        <TouchableOpacity onPress={Onclose} style={{ paddingTop: normalize(20), paddingLeft: normalize(20), backgroundColor: "white", width: normalize(250) }} >
                            <Image source={close} style={{ height: normalize(30), width: normalize(30) }} />
                        </TouchableOpacity>
                        <View style={{ backgroundColor: "white", width: normalize(250), height : "100%"}} >
                            <TouchableOpacity style={{ marginTop: normalize(15), paddingLeft: normalize(50), flexDirection: "row", }} activeOpacity = {1} >
                                <View style={{ height: normalize(60), width: normalize(60), backgroundColor: "#F58220", borderRadius: normalize(30), justifyContent: "center", }} >
                                    <Image source={man} style={{ height: normalize(55), width: normalize(55), resizeMode: "contain", alignSelf: "center" }} />
                                </View>
                                <View style={{ marginLeft: normalize(20), justifyContent: "center" }} >
                                    <Text style={{ fontFamily: fonts.montserrat_semibold, fontSize: normalize(15), color: "#3D3C3B", fontWeight: "600" }} >SalesPerson</Text>
                                    <Text style={{ fontFamily: fonts.montserrat_regular, fontSize: normalize(12), color: "#3D3C3B", fontWeight: "600" }}  >Bhopal , india</Text>
                                </View>
                            </TouchableOpacity>
                            <TouchableOpacity style={{ height: normalize(30), width: normalize(180), backgroundColor: !select ? "rgba(245, 130, 32, 0.39)" : null, marginLeft: normalize(30), marginTop: normalize(40), borderRadius: normalize(20), justifyContent: "center" }} onPress = {onDash} >
                                <View style={{ flexDirection: "row", }} >
                                    <Image source={admin_user} style={{ height: normalize(25), width: normalize(25), resizeMode: 'contain', left: normalize(25) }} />
                                    <Text style={{ fontFamily: fonts.montserrat_regular, fontSize: normalize(15), color: "#3D3C3B", fontWeight: "700", marginLeft: normalize(30), top: 2 }} >Dashboard</Text>
                                </View>
                            </TouchableOpacity>
                            <TouchableOpacity style={{height: normalize(30), width: normalize(180),backgroundColor: select ? "rgba(245, 130, 32, 0.39)" : null, borderRadius : normalize(20), marginLeft: normalize(30), marginTop: normalize(25), justifyContent: "center" }} onPress = {onCustomer } >
                                <View style={{ flexDirection: "row", }} >
                                    <Image source={man} style={{ height: normalize(25), width: normalize(25), resizeMode: 'contain', left: normalize(25),}} />
                                    <Text style={{ fontFamily: fonts.montserrat_regular, fontSize: normalize(15), color: "#3D3C3B", fontWeight: "700", marginLeft: normalize(30), top: 2 }} >Customer info View</Text>
                                </View>
                            </TouchableOpacity>
                            <TouchableOpacity style={{height: normalize(30), width: normalize(180),backgroundColor: select ? "rgba(245, 130, 32, 0.39)" : null, borderRadius : normalize(20), marginLeft: normalize(30), marginTop: normalize(25), justifyContent: "center" }} onPress={() => navigation.navigate("CustomerForm")} >
                                <View style={{ flexDirection: "row", }} >
                                    <Image source={man} style={{ height: normalize(25), width: normalize(25), resizeMode: 'contain', left: normalize(25),}} />
                                    <Text style={{ fontFamily: fonts.montserrat_regular, fontSize: normalize(15), color: "#3D3C3B", fontWeight: "700", marginLeft: normalize(30), top: 2 }} >Customer Form</Text>
                                </View>
                            </TouchableOpacity>
                            <TouchableOpacity style={{ marginLeft: normalize(30), marginTop: normalize(25), justifyContent: "center" }} onPress={() => navigation.navigate("AuthScreen")} >
                                <View style={{ flexDirection: "row", }} >
                                    <Image source={logout_dark} style={{ height: normalize(25), width: normalize(25), resizeMode: 'contain', left: normalize(25) }} />
                                    <Text style={{ fontFamily: fonts.montserrat_regular, fontSize: normalize(15), color: "#3D3C3B", fontWeight: "700", marginLeft: normalize(30), top: 2 }} >Log out</Text>
                                </View>
                            </TouchableOpacity>
                        </View>
                    </Modal>
                )}
        </>
    )
}