import React, { useState } from "react";
import { View, Text, Image, TouchableOpacity } from "react-native"
import Header from "../../../components/Header";
import { gpay, left, payment_card, payment_card1, paytm, phonepe, round, qrcode } from "../../../components/Icons"
import Submitbutton from "../../../components/Submitbutton";
import { fonts, normalize } from "../../../components/Utils";

export default function PaymentType({ navigation }) {
 
    const [fix, setfix] = useState(false)

    const Onselect = () => {
     setfix(true)
     if( fix === true)
     {
        setfix(false)
     }
    }
    
    return (
        <>
            <Header navigation={navigation} />
            <View>
                <TouchableOpacity style={{ marginTop: normalize(10), marginLeft: normalize(20) }} onPress={() => navigation.navigate("Vouchers")} >
                    <Image source={left} style={{ height: normalize(30), width: normalize(30) }} />
                </TouchableOpacity>
                <View style={{ marginTop: normalize(15) }} >
                    <Text style={{ fontFamily: fonts.montserrat_regular, fontSize: normalize(20), fontWeight: "500", textAlign: "center" }} >Select a Payment Method</Text>
                    <View style={{ alignSelf: "center", marginTop: normalize(15) }}>
                        <Image style={{ height: normalize(165), width: normalize(320) }} source={payment_card} />
                        <View style={{ position: "absolute" }} >
                            <View>
                                <View style={{ flexDirection: "row", marginLeft: normalize(30), marginTop: normalize(25), }} >
                                    <View>
                                    <TouchableOpacity onPress={Onselect}>
                                    <Image source={round} style={{ height: normalize(15), width: normalize(15) }} />
                                    </TouchableOpacity>
                                    <View style = {{height : normalize(9), width : normalize(9), backgroundColor : fix ? "red" : "white", borderRadius : normalize(10), position : "absolute", alignSelf : "center", top : 3}} />
                                    </View>
                                    <TouchableOpacity style={{ justifyContent: "center" }}  onPress={Onselect} >
                                        <Text style={{ fontFamily: fonts.montserrat_regular, fontSize: normalize(18), left: 10, bottom: 5 }} >UPI</Text>
                                    </TouchableOpacity>
                                    <View style={{ flexDirection: "row", marginLeft: normalize(130) }} >
                                        <Image source={paytm} style={{ height: normalize(28), width: normalize(28) }} />
                                        <Image source={phonepe} style={{ height: normalize(28), width: normalize(28), marginLeft: 10 }} />
                                        <Image source={gpay} style={{ height: normalize(28), width: normalize(28), left: 10 }} />
                                    </View>
                                </View>
                                <View style={{ flexDirection: "row", marginLeft: normalize(30), marginTop: normalize(15), }} >
                                    <Image source={round} style={{ height: normalize(15), width: normalize(15) }} />
                                    <View style={{ justifyContent: "center" }} >
                                        <Text style={{ fontFamily: fonts.montserrat_regular, fontSize: normalize(18), left: 10, bottom: 5 }} >Debit / Credit card</Text>
                                    </View>
                                </View>
                                <View style={{ flexDirection: "row", left: normalize(30), top: normalize(15), }} >
                                    <Image source={round} style={{ height: normalize(15), width: normalize(15) }} />
                                    <View style={{ justifyContent: "center" }} >
                                        <Text style={{ fontFamily: fonts.montserrat_regular, fontSize: normalize(18), left: 10, bottom: 5 }} >Net Banking</Text>
                                    </View>
                                </View>
                                <TouchableOpacity style={{ flexDirection: "row", marginLeft: normalize(30), marginTop: normalize(25), }} onPress = {() => navigation.navigate("QrCodePayment")} >
                                    <Image source={round} style={{ height: normalize(15), width: normalize(15) }} />
                                    <View style={{ justifyContent: "center", flexDirection : "row" }} >
                                        <Text style={{ fontFamily: fonts.montserrat_regular, fontSize: normalize(18), left: 10, bottom: 5 }} >Scan QR </Text>
                                    </View>
                                    <Image source={qrcode} style={{ height: normalize(30), width: normalize(30), left : normalize(100) }} />
                                </TouchableOpacity>
                            </View>
                        </View>
                    </View>
                </View>

                <View style={{ marginTop: normalize(80), alignSelf: "center" }}>
                    <Image source={payment_card1} style={{ height: normalize(135), width: normalize(320) }} />
                    <View style={{ position: "absolute", marginTop: normalize(10) }} >
                        <View style={{ marginLeft: normalize(35), }} >
                            <Text style={{ fontFamily: fonts.montserrat_regular, fontSize: normalize(18), fontWeight: "600", color: "#000000" }} >Price Details</Text>
                        </View>
                        <View style={{ width: normalize(297), borderColor: "#797877", borderBottomWidth: 1.2, alignSelf: "center", left: 15 }} />
                        <View style={{ flexDirection: "row", justifyContent: "space-between", marginTop: normalize(10) }} >
                            <Text style={{ fontFamily: fonts.montserrat_semibold, fontSize: normalize(15), color: "#000000", marginLeft: normalize(38) }} >Price (1 card)</Text>
                            <Text style={{ fontFamily: fonts.montserrat_semibold, fontSize: normalize(15), color: "#000000" }}>2500/-</Text>
                        </View>
                        <View style={{ flexDirection: "row", justifyContent: "space-between", marginTop: normalize(10) }} >
                            <Text style={{ fontFamily: fonts.montserrat_semibold, fontSize: normalize(15), color: "#000000", marginLeft: normalize(38) }} >Discount</Text>
                            <Text style={{ fontFamily: fonts.montserrat_semibold, fontSize: normalize(15), color: "#000000" }}>-1000/-</Text>
                        </View>
                        <View style={{ width: normalize(297), borderColor: "#797877", borderBottomWidth: 1.2, alignSelf: "center", left: 15, marginTop: normalize(20) }} />
                        <View style={{ flexDirection: "row", justifyContent: "space-between", marginTop: normalize(10) }} >
                            <Text style={{ fontFamily: fonts.montserrat_semibold, fontSize: normalize(15), marginLeft: normalize(38), color: "#348847" }} >Discount</Text>
                            <Text style={{ fontFamily: fonts.montserrat_semibold, fontSize: normalize(15), color: "#348847" }}>1500/-</Text>
                        </View>
                    </View>
                </View>

                <View style={{ marginTop: normalize(34), flexDirection: "row", marginLeft: normalize(50) }} >
                    <TouchableOpacity style={{ height: normalize(15), width: normalize(15), borderColor: "#797877", borderWidth: 1, top: 2 }} />
                    <Text style={{ fontFamily: fonts.montserrat_regular, fontSize: normalize(16), left: normalize(12) }} >I accept terms and policies.</Text>
                </View>
                <View style={{ marginTop: normalize(42) }} >
                    <Submitbutton voucher={true} bg={"#6854ED"} text={"Continue"} txtclr={"#ffffff"} onpress={() => navigation.navigate("PaymentOption")} />
                </View>
            </View>
        </>

    )
}