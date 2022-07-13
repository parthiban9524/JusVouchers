import React, { useState } from "react";
import { View, Text, Image, TouchableOpacity, Modal, StyleSheet, Dimensions } from "react-native"

import { fonts, normalize } from "../../../components/Utils";
import man from "../../../assest/images/man.png"
import { profile_back, edit, phone, mail, heart, share, logout_dark, paycard, whatsapp, facebook, instagram, cancel, order_history } from "../../../components/Icons"
import styles from "../../../assest/styles";

export default function Profile({ navigation }) {

    const [refer, setrefer] = useState(false);

    const Onshare = () => {
        setrefer(true)
    }

    const Onclose = () => {
        setrefer(false)
    }

    return (
        <View style={{ flex: 1 }} >
            <View style={{ height: "100%", width: "100%", backgroundColor: "#F9AA44" }} >
                <View style={{ marginTop: normalize(20), flexDirection: "row", justifyContent: "space-evenly" }} >
                    <TouchableOpacity onPress = {() => navigation.navigate("Home")} >
                        <Image source={profile_back} style={{ height: normalize(30), width: normalize(30), right: normalize(40) }} />
                    </TouchableOpacity>
                    <View style={{ height: normalize(90), width: normalize(90), borderRadius: normalize(50), top: normalize(50), borderColor: "#ffffff", borderWidth: 3 }} >
                        <Image source={man} style={{ height: normalize(85), width: normalize(85), alignSelf: "center" }} />
                        <View style={{ width: normalize(120), marginTop: normalize(10), alignSelf: "center" }} >
                            <Text style={{ fontFamily: fonts.montserrat_semibold, fontSize: normalize(20), fontWeight: "600", color: "#ffffff" }} >Shruti Shukla</Text>
                        </View>
                    </View>
                    <Image source={edit} style={{ height: normalize(20), width: normalize(20), left: normalize(40) }} />
                </View>
                <View style={{ marginTop: normalize(120), marginLeft: normalize(26) }} >
                    <View style={{ flexDirection: "row", }} >
                        <Image source={phone} style={{ height: normalize(22), width: normalize(22), tintColor: "#ffffff" }} />
                        <Text style={{ fontFamily: fonts.lato_regular, fontSize: normalize(18), color: "#ffffff", left: normalize(14) }} >6307739829</Text>
                    </View>
                    <View style={{ flexDirection: "row", marginTop: normalize(10) }} >
                        <Image source={mail} style={{ height: normalize(22), width: normalize(22), tintColor: "#ffffff" }} />
                        <Text style={{ fontFamily: fonts.lato_regular, fontSize: normalize(18), color: "#ffffff", left: normalize(14) }} >shrutishukla@gmail.com</Text>
                    </View>
                </View>
                <View style={styles.profile_white}>
                    <View style={{ flexDirection: "row", marginTop: normalize(18) }} >
                        <View style={styles.price_box}>
                            <Text style={styles.price_amount} >₹856.00</Text>
                            <Text style={styles.price_text} >Wallet</Text>
                        </View>
                        <View style={styles.price_box}>
                            <Text style={styles.price_amount} >12</Text>
                            <Text style={styles.price_text} >order</Text>
                        </View>
                    </View>
                    <TouchableOpacity style={{ flexDirection: "row", marginTop: normalize(40), marginLeft: normalize(36) }} onPress = {() => navigation.navigate("Favorites")} >
                        <Image source={heart} style={{ height: normalize(25), width: normalize(25) }} />
                        <Text style={styles.profile_text} >Your Favorites</Text>
                    </TouchableOpacity>
                    <View style={{ flexDirection: "row", marginTop: normalize(25), marginLeft: normalize(36) }} >
                        <Image source={paycard} style={{ height: normalize(25), width: normalize(25) }} />
                        <Text style={styles.profile_text} >Payment</Text>
                    </View>
                    <TouchableOpacity style={{ flexDirection: "row", marginTop: normalize(25), marginLeft: normalize(36) }} onPress = {() => navigation.navigate("OrderHistory")} >
                        <Image source={order_history} style={{ height: normalize(25), width: normalize(25) }} />
                        <Text style={styles.profile_text} >Order History</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={{ flexDirection: "row", marginTop: normalize(25), marginLeft: normalize(36) }} onPress={Onshare} >
                        <Image source={share} style={{ height: normalize(25), width: normalize(25) }} />
                        <Text style={styles.profile_text} >Refer & earn</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={{ flexDirection: "row", marginTop: normalize(80), marginLeft: normalize(36) }} onPress = { () => navigation.navigate("AuthScreen") } >
                        <Image source={logout_dark} style={{ height: normalize(25), width: normalize(25) }} />
                        <Text style={[styles.profile_text, { color: "#3D3C3B" }]} >Logout</Text>
                    </TouchableOpacity>
                </View>
            </View>
            {
                refer == true && (

                    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
                        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center', paddingTop: 10, backgroundColor: '#F9BB6B' }}>
                            <Modal
                                animationType="fade"
                                transparent={true}
                                visible={true}
                                onRequestClose={() => console.log("modal")}>
                                <View style={[addSpotScreenStyles.altertContainer, addSpotScreenStyles.modalBackgroundStyle]}>
                                    <View style={addSpotScreenStyles.innerContainerTransparentStyle}>
                                        <TouchableOpacity style={{ alignSelf: "flex-end", marginTop: 10, marginRight: 10 }} onPress={Onclose} >
                                            <Image source={cancel} style={{ height: normalize(35), width: normalize(35) }} />
                                        </TouchableOpacity>
                                        <View style={{ flexDirection: "row", marginTop: normalize(30), justifyContent: "space-evenly" }} >
                                            <Image source={whatsapp} style={{ height: normalize(50), width: normalize(50) }} />
                                            <Image source={facebook} style={{ height: normalize(50), width: normalize(50) }} />
                                            <Image source={instagram} style={{ height: normalize(50), width: normalize(50) }} />
                                        </View>
                                        <View style={{ marginTop: normalize(24) }} >
                                            <Text style={addSpotScreenStyles.alertbody}>Share with your Friends  </Text>
                                        </View>
                                    </View>
                                </View>
                            </Modal>
                        </View>
                    </View>

                )
            }
        </View>
    )
}

const addSpotScreenStyles = StyleSheet.create({
    altertContainer: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        paddingTop: 10,
        backgroundColor: '#ecf0f1',
    },
    modalBackgroundStyle: {
        backgroundColor: 'rgba(0, 0, 0, 0.7)',
    },
    innerContainerTransparentStyle: {
        backgroundColor: '#F9BB6B', height: normalize(200), width: normalize(300), borderRadius: 10
    },
    alertbody: { textAlign: "center", fontFamily: fonts.lato_regular, fontSize: normalize(18), color: "#000000", paddingHorizontal: 20 },
});