import React, { useState } from "react";
import { View, Text, StatusBar, Image, TouchableOpacity } from "react-native"

import { fonts, normalize } from "./Utils"
import { menu, logo, search, close, user, sale, support, terms, blog, privacy, logout, more } from "./Icons";
import man from "../assest/images/man.png"

export default function Header({ navigation }) {

    const [sidemenu, setsidemenu] = useState(false)

    const Onmenu = () => {
        setsidemenu(true)
    }

    const Onclose = () => {
        setsidemenu(false)
    }

    return (
        <>
            <StatusBar backgroundColor={"#F9AA44"} translucent={false} />
            <View style={{ height: normalize(50), width: "100%", backgroundColor: "#F9AA44", flexDirection: 'row', justifyContent: "space-evenly" }} >
                <TouchableOpacity style={{ justifyContent: "center", right: normalize(40) }} onPress={Onmenu} >
                    <Image source={menu} style={{ height: normalize(30), width: normalize(30) }} />
                </TouchableOpacity>
                <TouchableOpacity style={{ height: normalize(40), width: normalize(100), backgroundColor: "#ffffff", borderBottomLeftRadius: normalize(40), borderTopRightRadius: normalize(40), justifyContent: "center", alignSelf: "center" }} >
                    <Image source={logo} style={{ height: normalize(30), width: normalize(60), alignSelf: "center" }} />
                </TouchableOpacity>
                <TouchableOpacity style={{ justifyContent: "center", left: normalize(35) }}>
                    <Image source={search} style={{ height: normalize(30), width: normalize(30) }} />
                </TouchableOpacity>
            </View>
            {
                sidemenu && (
                    <View style={{ height: "100%", width: normalize(270), backgroundColor: "#ffffff", backfaceVisibility: 'visible' }} >
                        <TouchableOpacity onPress={Onclose} style={{ marginTop: normalize(20), marginLeft: normalize(20) }} >
                            <Image source={close} style={{ height: normalize(30), width: normalize(30) }} />
                        </TouchableOpacity>
                        <TouchableOpacity style={{ marginTop: normalize(15), marginLeft: normalize(50), flexDirection: "row" }} onPress = {() => navigation.navigate("Profile")} >
                            <View style={{ height: normalize(60), width: normalize(60), backgroundColor: "#F58220", borderRadius: normalize(30), justifyContent: "center" }} >
                                <Image source={man} style={{ height: normalize(55), width: normalize(55), resizeMode: "contain", alignSelf: "center" }} />
                            </View>
                            <View style={{ marginLeft: normalize(20), justifyContent: "center" }} >
                                <Text style={{ fontFamily: fonts.montserrat_semibold, fontSize: normalize(15), color: "#3D3C3B", fontWeight: "600" }} >Shruti Shukla</Text>
                                <Text style={{ fontFamily: fonts.montserrat_regular, fontSize: normalize(12), color: "#3D3C3B", fontWeight: "600" }}  >lucknow , india</Text>
                            </View>
                        </TouchableOpacity>
                        <TouchableOpacity style={{ height: normalize(30), width: normalize(180), backgroundColor: "rgba(245, 130, 32, 0.39)", marginLeft: normalize(30), marginTop: normalize(40), borderRadius: normalize(20), justifyContent: "center" }} >
                            <View style={{ flexDirection: "row", }} >
                                <Image source={user} style={{ height: normalize(20), width: normalize(20), resizeMode: 'contain', left: normalize(25) }} />
                                <Text style={{ fontFamily: fonts.montserrat_regular, fontSize: normalize(15), color: "#3D3C3B", fontWeight: "700", marginLeft: normalize(30), top: 2 }} >Account</Text>
                            </View>
                        </TouchableOpacity>
                        <TouchableOpacity style={{ marginLeft: normalize(30), marginTop: normalize(25), justifyContent: "center" }} >
                            <View style={{ flexDirection: "row", }} >
                                <Image source={sale} style={{ height: normalize(20), width: normalize(20), resizeMode: 'contain', left: normalize(25) }} />
                                <Text style={{ fontFamily: fonts.montserrat_regular, fontSize: normalize(15), color: "#3D3C3B", fontWeight: "700", marginLeft: normalize(30), top: 2 }} >Exclusive Packages</Text>
                            </View>
                        </TouchableOpacity>
                        <TouchableOpacity style={{ marginLeft: normalize(30), marginTop: normalize(25), justifyContent: "center" }} onPress = {() => navigation.navigate("ContactUs")} >
                            <View style={{ flexDirection: "row", }} >
                                <Image source={support} style={{ height: normalize(20), width: normalize(20), resizeMode: 'contain', left: normalize(25) }} />
                                <Text style={{ fontFamily: fonts.montserrat_regular, fontSize: normalize(15), color: "#3D3C3B", fontWeight: "700", marginLeft: normalize(30), top: 2 }} >Contact us</Text>
                            </View>
                        </TouchableOpacity>
                        <TouchableOpacity style={{ marginLeft: normalize(30), marginTop: normalize(25), justifyContent: "center" }} onPress = {() => navigation.navigate("AboutUs")} >
                            <View style={{ flexDirection: "row", }} >
                                <Image source={terms} style={{ height: normalize(20), width: normalize(20), resizeMode: 'contain', left: normalize(25) }} />
                                <Text style={{ fontFamily: fonts.montserrat_regular, fontSize: normalize(15), color: "#3D3C3B", fontWeight: "700", marginLeft: normalize(30), top: 2 }} >About us</Text>
                            </View>
                        </TouchableOpacity>
                        <TouchableOpacity style={{ marginLeft: normalize(30), marginTop: normalize(25), justifyContent: "center" }} >
                            <View style={{ flexDirection: "row", }} >
                                <Image source={blog} style={{ height: normalize(20), width: normalize(20), resizeMode: 'contain', left: normalize(25) }} />
                                <Text style={{ fontFamily: fonts.montserrat_regular, fontSize: normalize(15), color: "#3D3C3B", fontWeight: "700", marginLeft: normalize(30), top: 2 }} >Blogs</Text>
                            </View>
                        </TouchableOpacity>
                        <TouchableOpacity style={{ marginLeft: normalize(30), marginTop: normalize(25), justifyContent: "center" }} >
                            <View style={{ flexDirection: "row", }} >
                                <Image source={more} style={{ height: normalize(20), width: normalize(20), resizeMode: 'contain', left: normalize(25) }} />
                                <Text style={{ fontFamily: fonts.montserrat_regular, fontSize: normalize(15), color: "#3D3C3B", fontWeight: "700", marginLeft: normalize(30), top: 2 }} >Terms & Conditions</Text>
                            </View>
                        </TouchableOpacity>
                        <TouchableOpacity style={{ marginLeft: normalize(30), marginTop: normalize(25), justifyContent: "center" }} >
                            <View style={{ flexDirection: "row", }} >
                                <Image source={privacy} style={{ height: normalize(20), width: normalize(20), resizeMode: 'contain', left: normalize(25) }} />
                                <Text style={{ fontFamily: fonts.montserrat_regular, fontSize: normalize(15), color: "#3D3C3B", fontWeight: "700", marginLeft: normalize(30), top: 2 }} >Privacy Policy</Text>
                            </View>
                        </TouchableOpacity>
                        <TouchableOpacity style={{ marginLeft: normalize(30), marginTop: normalize(25), justifyContent: "center" }} >
                            <View style={{ flexDirection: "row", }} >
                                <Image source={logout} style={{ height: normalize(20), width: normalize(20), resizeMode: 'contain', left: normalize(25) }} />
                                <Text style={{ fontFamily: fonts.montserrat_regular, fontSize: normalize(15), color: "#3D3C3B", fontWeight: "700", marginLeft: normalize(30), top: 2 }} >Log out</Text>
                            </View>
                        </TouchableOpacity>
                    </View>
                )}
        </>
    )
}