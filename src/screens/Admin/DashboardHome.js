import React from "react";
import { View, Text, Image, StyleSheet, TouchableOpacity ,ScrollView} from "react-native"
import GraphSales from "../../components/GraphSales";
import GraphVender from "../../components/GraphVender";
import GraphUser from "../../components/GraphUser";
import GraphOrderCancel from "../../components/GraphOrderCancel"
import { card, leader, new_user, order_cancel, rising, sale1, user } from "../../components/Icons";
import { normalize, fonts } from "../../components/Utils";
import AdminHeader from "../../components/AdminHeader";

export default function DashboardHome({navigation}) {
    return (
        <>
        <AdminHeader navigation={navigation} />
        <ScrollView>
            <View style={{ margin: 20 }} >
                <Text style={{ fontSize: normalize(22), fontWeight: 'bold', color: "#000000" }}>Dashboard</Text>
            </View>
            <View style={{ marginLeft: 20 }} >
                <Text style={{ fontSize: normalize(19), fontWeight: 'bold', color: 'green' }}>15 June 2022 Wednesday</Text>
            </View>
            <View style={{ flexDirection: "row", justifyContent: "space-evenly", marginTop: 12 }}>
                <TouchableOpacity style={{ borderRadius: 10, backgroundColor: '#FFDCAE99', width: 155, height: 95 }} onPress={() => navigation.navigate("Sales")} >
                    <View style={{ flexDirection: "row", flexWrap: "wrap" }}>
                        <Image source={sale1} style={{ height: normalize(35), width: normalize(35), resizeMode: "contain", alignSelf: "center", marginLeft: normalize(8), marginTop: 5 }} />
                        <Text style={{ fontSize: normalize(14), fontWeight: '500', marginLeft: 5, marginTop: 10 }}  >Today Sale</Text>
                        <View style={{ flexDirection: "row", marginTop: 10, }} >
                            <Text style={{ fontSize: normalize(16), fontWeight: '500', marginLeft: normalize(12), }}>$6960</Text>
                            <Image source={rising} style={{ width: normalize(20), height: normalize(15), marginLeft: normalize(20), alignSelf: "center" }} />
                            <Text style={{ fontFamily: fonts.montserrat_regular, fontSize: normalize(12), color: "#08D635", top: normalize(10) }} >5.6%</Text>
                        </View>

                    </View>
                </TouchableOpacity>
                <TouchableOpacity style={{ borderRadius: 10, backgroundColor: '#FFDCAE99', width: 155, height: 95 }}>
                    <View style={{ flexDirection: "row", flexWrap: "wrap" }}>
                        <Image source={leader} style={{ height: normalize(35), width: normalize(35), resizeMode: "contain", alignSelf: "center", marginLeft: normalize(8), marginTop: 5 }} />
                        <Text style={{ fontSize: normalize(14), fontWeight: '500', marginLeft: 5, marginTop: 10 }} >New Vender</Text>
                        <View style={{ flexDirection: "row", marginTop: 10, }} >
                            <Text style={{ fontSize: normalize(14), fontWeight: '500', marginLeft: normalize(10), }}>16 Venders</Text>
                            <Image source={rising} style={{ width: normalize(20), height: normalize(15), marginLeft: normalize(8), alignSelf: "center" }} />
                            <Text style={{ fontFamily: fonts.montserrat_regular, fontSize: normalize(12), color: "#08D635", top: normalize(10) }} >1.5%</Text>
                        </View>

                    </View>
                </TouchableOpacity>
            </View>
            <View style={{ flexDirection: "row", justifyContent: "space-evenly", marginTop: 22 }}>
                <TouchableOpacity style={{ borderRadius: 10, backgroundColor: "#FD040421", width: 155, height: 95 }}>
                    <View style={{ flexDirection: "row", flexWrap: "wrap" }}>
                        <Image source={order_cancel} style={{ height: normalize(30), width: normalize(30), resizeMode: "contain", alignSelf: "center", marginLeft: normalize(8), marginTop: 5 }} />
                        <Text style={{ fontSize: normalize(14), fontWeight: '500', marginLeft: 5, marginTop: 10 }} >Order Cancel</Text>
                        <View style={{ flexDirection: "row", marginTop: 10, }} >
                            <Text style={{ fontSize: normalize(14), fontWeight: '500', marginLeft: normalize(10), }}>8 cancel</Text>
                            <Image source={rising} style={{ width: normalize(20), height: normalize(15), marginLeft: normalize(15), alignSelf: "center", transform: [{ rotate: '90deg' }] }} />
                            <Text style={{ fontFamily: fonts.montserrat_regular, fontSize: normalize(12), color: "#08D635", top: normalize(10) }} >1.2%</Text>
                        </View>

                    </View>
                </TouchableOpacity>
                <TouchableOpacity style={{ borderRadius: 10, backgroundColor: '#FFDCAE99', width: 155, height: 95 }}>
                    <View style={{ flexDirection: "row", flexWrap: "wrap" }}>
                        <Image source={new_user} style={{ height: normalize(35), width: normalize(35), resizeMode: "contain", alignSelf: "center", marginLeft: normalize(8), marginTop: 5 }} />
                        <Text style={{ fontSize: normalize(14), fontWeight: '500', marginLeft: 5, marginTop: 10 }} >New User</Text>
                        <View style={{ flexDirection: "row", marginTop: 10, }} >
                            <Text style={{ fontSize: normalize(14), fontWeight: '500', marginLeft: normalize(10), }}>572 User</Text>
                            <Image source={rising} style={{ width: normalize(20), height: normalize(15), marginLeft: normalize(15), alignSelf: "center" }} />
                            <Text style={{ fontFamily: fonts.montserrat_regular, fontSize: normalize(12), color: "#08D635", top: normalize(10) }} >16.5%</Text>
                        </View>

                    </View>
                </TouchableOpacity>
            </View>
            <View>
                <GraphSales />
                <GraphVender/>
                <GraphUser/>
                <GraphOrderCancel/>
            </View>
        </ScrollView>
        </>
    )
}
const styles = StyleSheet.create({

    paragraph: {
        fontSize: 18,
        fontWeight: 'bold',
        textAlign: 'center',
        padding: 20
        , backgroundColor: "#F9AA44",
        borderRadius: 3
    },
});