import React from "react";
import { View, Text, TouchableOpacity, Image, ScrollView } from "react-native"

import { normalize, fonts } from "../../components/Utils";
import { sale1, rising, order_cancel } from "../../components/Icons";
import SalesHeader from "../../components/SalesHeader";


export default function Saleperson({ navigation }) {
    return (
        <>
            <SalesHeader navigation={navigation} />
            <ScrollView style={{ flex: 1, backgroundColor: "#ffffff" }} >
                <View style={{ margin: 20 }} >
                    <Text style={{ fontSize: normalize(22), fontWeight: 'bold', color: "#000000" }}>Dashboard</Text>
                </View>
                <View style={{ marginLeft: 20 }} >
                    <Text style={{ fontSize: normalize(19), fontWeight: 'bold', color: '#348847' }}>15 June 2022 Wednesday</Text>
                </View>
                <TouchableOpacity style={{ borderRadius: 20, backgroundColor: '#FFDCAE99', width: normalize(340), height: normalize(83), marginTop: normalize(20), alignSelf: "center", justifyContent: "center" }} onPress={() => navigation.navigate("TodaySale")} >
                    <View style={{ flexDirection: "row", alignSelf: "center" }}>
                        <Image source={sale1} style={{ height: normalize(50), width: normalize(50), resizeMode: "contain", }} />
                        <Text style={{ fontSize: normalize(20), fontWeight: '500', marginLeft: 25, marginTop: 10 }}  >Today Target</Text>
                        <View style={{ flexDirection: "row", marginTop: 10, }} >
                            <Text style={{ fontSize: normalize(20), fontWeight: '500', marginLeft: normalize(15), color: "#00B028"}}>10</Text>
                            <Image source={rising} style={{ width: normalize(40), height: normalize(25), marginLeft: normalize(20), alignSelf: "center", }} />
                            <Text style={{ fontFamily: fonts.montserrat_regular, fontSize: normalize(16), color: "#08D635", top: normalize(20) }} >5.6%</Text>
                        </View>
                    </View>
                </TouchableOpacity>
                {/* <TouchableOpacity style={{ borderRadius: 20, backgroundColor: "#FD040421", width: normalize(340), height: normalize(83), marginTop: normalize(20), alignSelf: "center", justifyContent: "center" }}>
                    <View style={{ flexDirection: "row", alignSelf: "center", }}>
                        <Image source={order_cancel} style={{ height: normalize(50), width: normalize(50), resizeMode: "contain", }} />
                        <Text style={{ fontSize: normalize(20), fontWeight: '500', marginLeft: 25, marginTop: 10 }}  >8 Order Cancel</Text>
                        <View style={{ flexDirection: "row", marginTop: 10, }} >
                            <Image source={rising} style={{ width: normalize(40), height: normalize(25), marginLeft: normalize(20), alignSelf: "center", transform: [{ rotate: '90deg' }] }} />
                            <Text style={{ fontFamily: fonts.montserrat_regular, fontSize: normalize(16), color: "#08D635", top: normalize(20) }} >1.2%</Text>
                        </View>
                    </View>
                </TouchableOpacity> */}
                
                
            </ScrollView>
        </>

    )
}