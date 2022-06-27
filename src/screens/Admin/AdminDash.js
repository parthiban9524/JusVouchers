import React, { useRef, useState } from "react";
import { Button, DrawerLayoutAndroid, TouchableOpacity, Text, Image, StyleSheet, View } from "react-native";
import { StatusBar } from "react-native";
import { normalize,fonts} from "../../components/Utils";
import { menu,close, user, sale, terms, blog, logout,man, voucher } from "../../components/Icons";
import Demp from "./DashboardHome";
import Sales from "./Sales/Sales"
import SalesDetails from "./Sales/SalesDetails";
const App = ({navigation}) => {
    const drawer = useRef(null);

    const navigationView = () => (
        <>
             <View style={{ height: "100%", width: normalize(270), backgroundColor: "#ffffff", backfaceVisibility: 'visible' }} >
                        <TouchableOpacity  style={{ marginTop: normalize(20), marginLeft: normalize(20) }} onPress={() => drawer.current.closeDrawer()}>
                            <Image source={close} style={{ height: normalize(30), width: normalize(30) }} />
                        </TouchableOpacity>
                        <TouchableOpacity style={{ marginTop: normalize(15), marginLeft: normalize(50), flexDirection: "row" }} onPress = {() => navigation.navigate("Profile")} >
                            <View style={{ height: normalize(60), width: normalize(60), backgroundColor: "#F58220", borderRadius: normalize(30), justifyContent: "center" }} >
                                <Image source={man} style={{ height: normalize(55), width: normalize(55), resizeMode: "contain", alignSelf: "center" }} />
                            </View>
                            <View style={{ marginLeft: normalize(20), justifyContent: "center" }} >
                                <Text style={{ fontFamily: fonts.montserrat_semibold, fontSize: normalize(15), color: "#3D3C3B", fontWeight: "600" }} >Admin</Text>
                                <Text style={{ fontFamily: fonts.montserrat_regular, fontSize: normalize(12), color: "#3D3C3B", fontWeight: "600" }}  >Bhopal , india</Text>
                            </View>
                        </TouchableOpacity>
                        <TouchableOpacity style={{ height: normalize(30), width: normalize(180), backgroundColor: "rgba(245, 130, 32, 0.39)", marginLeft: normalize(30), marginTop: normalize(40), borderRadius: normalize(20), justifyContent: "center" }} >
                            <View style={{ flexDirection: "row", }} >
                                <Image source={user} style={{ height: normalize(20), width: normalize(20), resizeMode: 'contain', left: normalize(25) }} />
                                <Text style={{ fontFamily: fonts.montserrat_regular, fontSize: normalize(15), color: "#3D3C3B", fontWeight: "700", marginLeft: normalize(30), top: 2 }} >Dashboard</Text>
                            </View>
                        </TouchableOpacity>
                        <TouchableOpacity style={{ marginLeft: normalize(30), marginTop: normalize(25), justifyContent: "center" }} onPress={() => navigation.navigate("SalesDetails")} >
                            <View style={{ flexDirection: "row", }} >
                                <Image source={sale} style={{ height: normalize(20), width: normalize(20), resizeMode: 'contain', left: normalize(25) }} />
                                <Text style={{ fontFamily: fonts.montserrat_regular, fontSize: normalize(15), color: "#3D3C3B", fontWeight: "700", marginLeft: normalize(30), top: 2 }} >Venders</Text>
                            </View>
                        </TouchableOpacity>
                        <TouchableOpacity style={{ marginLeft: normalize(30), marginTop: normalize(25), justifyContent: "center" }} onPress = {() => navigation.navigate("AddVoucher")} >
                            <View style={{ flexDirection: "row", }} >
                                <Image source={blog} style={{ height: normalize(20), width: normalize(20), resizeMode: 'contain', left: normalize(25) }}  />
                                <Text style={{ fontFamily: fonts.montserrat_regular, fontSize: normalize(15), color: "#3D3C3B", fontWeight: "700", marginLeft: normalize(30), top: 2 }} >Add Voucher</Text>
                            </View>
                        </TouchableOpacity>
                         <TouchableOpacity style={{ marginLeft: normalize(30), marginTop: normalize(25), justifyContent: "center" }} onPress = {() => navigation.navigate("AboutUs")} >
                            <View style={{ flexDirection: "row", }} >
                                <Image source={blog} style={{ height: normalize(20), width: normalize(20), resizeMode: 'contain', left: normalize(25) }} />
                                <Text style={{ fontFamily: fonts.montserrat_regular, fontSize: normalize(15), color: "#3D3C3B", fontWeight: "700", marginLeft: normalize(30), top: 2 }} >Add Blog</Text>
                            </View>
                        </TouchableOpacity>
                        <TouchableOpacity style={{ marginLeft: normalize(30), marginTop: normalize(25), justifyContent: "center" }} >
                            <View style={{ flexDirection: "row", }} >
                                <Image source={terms} style={{ height: normalize(20), width: normalize(20), resizeMode: 'contain', left: normalize(25) }} />
                                <Text style={{ fontFamily: fonts.montserrat_regular, fontSize: normalize(15), color: "#3D3C3B", fontWeight: "700", marginLeft: normalize(30), top: 2 }} >Quries</Text>
                            </View>
                        </TouchableOpacity>
                        <TouchableOpacity style={{ marginLeft: normalize(30), marginTop: normalize(25), justifyContent: "center" }} >
                            <View style={{ flexDirection: "row", }} >
                                <Image source={logout} style={{ height: normalize(20), width: normalize(20), resizeMode: 'contain', left: normalize(25) }} />
                                <Text style={{ fontFamily: fonts.montserrat_regular, fontSize: normalize(15), color: "#3D3C3B", fontWeight: "700", marginLeft: normalize(30), top: 2 }} >Log out</Text>
                            </View>
                        </TouchableOpacity>
                    </View>
             </>
    );

    return (
        <DrawerLayoutAndroid
            ref={drawer}
            drawerWidth={300}
            renderNavigationView={navigationView}>
            <StatusBar backgroundColor={"#F9AA44"} translucent={false} />
            <View style={{ height: normalize(50), width: "100%", backgroundColor: "#F9AA44", flexDirection: 'row', justifyContent: "center" }} >
                <TouchableOpacity style={{ justifyContent: "center", right: normalize(40) }} onPress={() => drawer.current.openDrawer()} >
                    <Image source={menu} style={{ height: normalize(30), width: normalize(30) }} />
                </TouchableOpacity>
                <View style={{justifyContent:'center',}}><Text style={{fontSize: normalize(26),color:"white",marginLeft: normalize(10),fontWeight:"bold"}}>JusVouchers Manager</Text>
                </View>
            </View>
        {/* <Demp/>
        <Sales/> */}
        <SalesDetails/>
        </DrawerLayoutAndroid>
    );
};

export default App;