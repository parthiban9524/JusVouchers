import React from "react";
import { View, Text, Image, TouchableOpacity } from "react-native"

import Header from "../../../components/Header";
import { left } from "../../../components/Icons";
import { fonts, normalize } from "../../../components/Utils";
import gym1 from "../../../assest/images/gym1.png"
import { round } from "../../../components/Icons";
import Submitbutton from "../../../components/Submitbutton";
import Quantity from "../../../components/Quantity";

export default function Cart({ navigation }) {
    const [fix, setfix] = React.useState(false)

    const Onselect = () => {
        setfix(true)
        if (fix === true) {
            setfix(false)
        }
    }
    return (
        <>
            <Header navigation={navigation} />
            <View style={{ flex: 1, }} >
                <View style={{ flexDirection: "row", marginTop: normalize(20), marginLeft: normalize(20) }} >
                    <TouchableOpacity onPress={() => navigation.navigate("Home")} >
                        <Image source={left} style={{ height: normalize(30), width: normalize(30) }} />
                    </TouchableOpacity>
                    <View style={{ marginLeft: normalize(60), alignSelf: "center" }} >
                        <Text style={{ fontFamily: fonts.montserrat_regular, fontSize: normalize(20), fontWeight: "800", }}>Request Cancellation</Text>
                    </View>
                </View>
                <View style={{ height: normalize(95), width: normalize(330), backgroundColor: "#D0E3FFB0", alignSelf: "center", marginTop: normalize(20) }}>
                    <View style={{ flexDirection: "row", marginTop: normalize(20), marginLeft: normalize(15) }}>
                        <Image source={gym1} style={{ height: normalize(50), width: normalize(90) }} />
                        <View style={{ marginLeft: normalize(15) }} >
                            <Text style={{ fontFamily: fonts.montserrat_semibold, fontSize: normalize(16), fontWeight: "700", }}>GYM Voucher</Text>
                            <Text style={{ fontFamily: fonts.montserrat_regular, fontSize: normalize(12), }}>Fitness Habit</Text>
                        </View>
                    </View>
                    <View style={{ flexDirection: "row", alignSelf: "center", marginLeft: normalize(35), bottom: normalize(15) }}>
                        <Text style={{ fontFamily: fonts.montserrat_regular, fontSize: normalize(12), top: 10, marginLeft: normalize(45) }} >Quantity :</Text>
                        <Quantity />
                        <Text style={{ fontFamily: fonts.montserrat_regular, fontSize: normalize(12), left: normalize(25), top: 10 }} >₹799/-  40% off</Text>
                    </View>
                </View>
                <View style={{ marginTop: 15,backgroundColor:"#e8eaeb",marginLeft:10,marginRight:10,borderRadius:10}}>
                    <Text style={{ marginTop: 10, marginLeft: 20, fontFamily: fonts.inter_bold, fontSize: normalize(19) }}>Reason For Cancellation </Text>
                    <View style={{ flexDirection: "row", marginLeft: normalize(20), marginTop: normalize(25), }} >
                        <View>
                            <TouchableOpacity onPress={Onselect}>
                                <Image source={round} style={{ height: normalize(15), width: normalize(15) }} />
                            </TouchableOpacity>
                            <View style={{ height: normalize(9), width: normalize(9), backgroundColor: fix ? "red" : "white", borderRadius: normalize(10), position: "absolute", alignSelf: "center", top: 3 }} />
                        </View>
                        <TouchableOpacity style={{ justifyContent: "center" }} onPress={Onselect} >
                            <Text style={{ fontFamily: fonts.montserrat_regular, fontSize: normalize(15), left: 10, bottom: 5 }} >I have purchased the product elsewhere</Text>
                        </TouchableOpacity>
                    </View>
                    <View style={{ flexDirection: "row", marginLeft: normalize(20), marginTop: normalize(15), }} >
                        <View>
                            <TouchableOpacity onPress={Onselect}>
                                <Image source={round} style={{ height: normalize(15), width: normalize(15) }} />
                            </TouchableOpacity>
                            <View style={{ height: normalize(9), width: normalize(9), backgroundColor: fix ? "red" : "white", borderRadius: normalize(10), position: "absolute", alignSelf: "center", top: 3 }} />
                        </View>
                        <TouchableOpacity style={{ justifyContent: "center" }} onPress={Onselect} >
                            <Text style={{ fontFamily: fonts.montserrat_regular, fontSize: normalize(15), left: 10, bottom: 5 }} >I want to cancel due to product quality issues</Text>
                        </TouchableOpacity>
                    </View>
                    <View style={{ flexDirection: "row", marginLeft: normalize(20), marginTop: normalize(15), }} >
                        <View>
                            <TouchableOpacity onPress={Onselect}>
                                <Image source={round} style={{ height: normalize(15), width: normalize(15) }} />
                            </TouchableOpacity>
                            <View style={{ height: normalize(9), width: normalize(9), backgroundColor: fix ? "red" : "white", borderRadius: normalize(10), position: "absolute", alignSelf: "center", top: 3 }} />
                        </View>
                        <TouchableOpacity style={{ justifyContent: "center" }} onPress={Onselect} >
                            <Text style={{ fontFamily: fonts.montserrat_regular, fontSize: normalize(15), left: 10, bottom: 5 }} >I want to change address for the order</Text>
                        </TouchableOpacity>
                    </View>
                    <View style={{ flexDirection: "row", marginLeft: normalize(20), marginTop: normalize(15), }} >
                        <View>
                            <TouchableOpacity onPress={Onselect}>
                                <Image source={round} style={{ height: normalize(15), width: normalize(15) }} />
                            </TouchableOpacity>
                            <View style={{ height: normalize(9), width: normalize(9), backgroundColor: fix ? "red" : "white", borderRadius: normalize(10), position: "absolute", alignSelf: "center", top: 3 }} />
                        </View>
                        <TouchableOpacity style={{ justifyContent: "center" }} onPress={Onselect} >
                            <Text style={{ fontFamily: fonts.montserrat_regular, fontSize: normalize(15), left: 10, bottom: 5 }} >I have changed my mind</Text>
                        </TouchableOpacity>
                    </View>
                    <View style={{ flexDirection: "row", marginLeft: normalize(20), marginTop: normalize(15), }} >
                        <View>
                            <TouchableOpacity onPress={Onselect}>
                                <Image source={round} style={{ height: normalize(15), width: normalize(15) }} />
                            </TouchableOpacity>
                            <View style={{ height: normalize(9), width: normalize(9), backgroundColor: fix ? "red" : "white", borderRadius: normalize(10), position: "absolute", alignSelf: "center", top: 3 }} />
                        </View>
                        <TouchableOpacity style={{ justifyContent: "center" }} onPress={Onselect} >
                            <Text style={{ fontFamily: fonts.montserrat_regular, fontSize: normalize(15), left: 10, bottom: 5 }} >I want to change my phone number</Text>
                        </TouchableOpacity>
                    </View>
                    <View style={{ flexDirection: "row", marginLeft: normalize(20), marginTop: normalize(15), }} >
                        <View>
                            <TouchableOpacity onPress={Onselect}>
                                <Image source={round} style={{ height: normalize(15), width: normalize(15) }} />
                            </TouchableOpacity>
                            <View style={{ height: normalize(9), width: normalize(9), backgroundColor: fix ? "red" : "white", borderRadius: normalize(10), position: "absolute", alignSelf: "center", top: 3 }} />
                        </View>
                        <TouchableOpacity style={{ justifyContent: "center" }} onPress={Onselect} >
                            <Text style={{ fontFamily: fonts.montserrat_regular, fontSize: normalize(15), left: 10, bottom: 5 }} >Expected delivery time is very long</Text>
                        </TouchableOpacity>
                    </View>
                    <View style={{ flexDirection: "row", marginLeft: normalize(20), marginTop: normalize(15), }} >
                        <View>
                            <TouchableOpacity onPress={Onselect}>
                                <Image source={round} style={{ height: normalize(15), width: normalize(15) }} />
                            </TouchableOpacity>
                            <View style={{ height: normalize(9), width: normalize(9), backgroundColor: fix ? "red" : "white", borderRadius: normalize(10), position: "absolute", alignSelf: "center", top: 3 }} />
                        </View>
                        <TouchableOpacity style={{ justifyContent: "center" }} onPress={Onselect} >
                            <Text style={{ fontFamily: fonts.montserrat_regular, fontSize: normalize(15), left: 10, bottom: 5 }} >Price for the product has decreased</Text>
                        </TouchableOpacity>
                    </View>

                </View>
                <View style={{ marginTop:10,marginLeft:20}}>
                    <Text style={{fontFamily:fonts.inter_bold,fontSize:16}}>Refund Status</Text>
                    <Text>₹799/- will be transfer within 1 business day(Bank holiday not included).</Text>
                </View>
                <View style={{ marginTop: normalize(42) }} >
                    <Submitbutton voucher={true} bg={"#6854ED"} text={"Submit Request"} txtclr={"#ffffff"} onpress={() => navigation.navigate("RedeemedVoucher")} />
                </View>
            </View>
        </>

    )
}
