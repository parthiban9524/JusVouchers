import { View, Text, Image, ScrollView, TouchableOpacity } from 'react-native'
import React from 'react'
import { Arrow, BronzePackage, DigitalMarketingHome, GoldPackage, left, SilverPackage } from '../../../components/Icons'
import { normalize, fonts } from '../../../components/Utils'
import Header from '../../../components/Header'
import Submitbutton from '../../../components/Submitbutton'
const DigitalMarketing = ({ navigation }) => {
    return (
        <>

            <Header navigation={navigation} />
            <ScrollView style={{ backgroundColor: "#ffffff" }}>
                <View style={{ flex: 1, backgroundColor: "#f2d77c", borderRadius: 18 }}>
                    <Image source={DigitalMarketingHome} style={{ height: normalize(500), width: normalize(350), resizeMode: 'contain', left: normalize(15) }} />
                    <View style={{ marginTop: 30, marginLeft: 20 }}>
                        <Text style={{ fontSize: normalize(28), fontFamily: fonts.montserrat_regular, fontWeight: "800", marginLeft: normalize(10), color: 'black', }}>Our Internet Marketing</Text>
                        <Text style={{ fontSize: normalize(28), fontFamily: fonts.montserrat_regular, fontWeight: "800", marginLeft: normalize(10), color: 'black', }}>Sevices</Text>
                    </View>
                    <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginTop: 30 }}>
                        <Image source={Arrow} style={{ height: normalize(22), width: normalize(22), resizeMode: 'contain', left: normalize(25) }} />
                        <Text style={{ fontSize: normalize(17), fontFamily: fonts.montserrat_regular, fontWeight: "700", textAlign: "center", marginRight: 22, color: 'black' }} >DIGITAL COMPETITIVE ANALYSIS</Text>
                    </View>
                    <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginTop: 10 }}>
                        <Image source={Arrow} style={{ height: normalize(22), width: normalize(22), resizeMode: 'contain', left: normalize(25) }} />
                        <View>
                            <Text style={{ fontSize: normalize(17), fontFamily: fonts.montserrat_regular, fontWeight: "700", textAlign: "center", marginRight: 10, color: 'black' }} >WEBSITE DESIGN & DEVELOPMENT</Text>
                            <Text style={{ fontSize: normalize(17), fontFamily: fonts.montserrat_regular, fontWeight: "700", textAlign: "center", marginRight: 190, color: 'black' }} >SERVICES</Text>
                        </View>
                    </View>
                    <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginTop: 10 }}>
                        <Image source={Arrow} style={{ height: normalize(22), width: normalize(22), resizeMode: 'contain', left: normalize(25) }} />
                        <View>
                            <Text style={{ fontSize: normalize(17), fontFamily: fonts.montserrat_regular, fontWeight: "700", textAlign: "center", marginRight: 27, color: 'black' }} >SEARCH ENGINE OPTIMIZATION</Text>
                            <Text style={{ fontSize: normalize(17), fontFamily: fonts.montserrat_regular, fontWeight: "700", textAlign: "center", marginRight: 220, color: 'black' }} >(SEO)</Text>
                        </View>
                    </View>
                    <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginTop: 10 }}>
                        <Image source={Arrow} style={{ height: normalize(22), width: normalize(22), resizeMode: 'contain', left: normalize(25) }} />
                        <View>
                            <Text style={{ fontSize: normalize(17), fontFamily: fonts.montserrat_regular, fontWeight: "700", textAlign: "center", marginRight: 70, color: 'black' }} >GOOGLE LOCAL SERVICES</Text>
                            <Text style={{ fontSize: normalize(17), fontFamily: fonts.montserrat_regular, fontWeight: "700", textAlign: "center", marginRight: 155, color: 'black' }} >ADVERTISING</Text>
                        </View>
                    </View>
                    <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginTop: 10 }}>
                        <Image source={Arrow} style={{ height: normalize(22), width: normalize(22), resizeMode: 'contain', left: normalize(25) }} />
                        <View>
                            <Text style={{ fontSize: normalize(17), fontFamily: fonts.montserrat_regular, fontWeight: "700", textAlign: "center", marginRight: 93, color: 'black', marginBottom: 15 }} >GOOGLE MY BUSINESS</Text>

                        </View>
                    </View>
                </View>
                <View style={{ margin: 30, alignItems: 'center' }}>
                    <Text style={{ fontSize: normalize(28), fontFamily: fonts.montserrat_regular, fontWeight: "800", marginLeft: normalize(10), color: 'black', }}>Our Packages</Text>
                </View>
                <View>
                    <Image source={BronzePackage} style={{ height: normalize(500), width: normalize(350), resizeMode: 'contain', left: normalize(15) }} />
                    <Text style={{ fontSize: normalize(20), fontFamily: fonts.montserrat_regular, fontWeight: "700", textAlign: "center", color: 'black', margin: 20 }} >Bronze Package</Text>
                </View>
                <View>
                    <Image source={SilverPackage} style={{ height: normalize(500), width: normalize(350), resizeMode: 'contain', left: normalize(15) }} />
                    <Text style={{ fontSize: normalize(20), fontFamily: fonts.montserrat_regular, fontWeight: "700", textAlign: "center", color: 'black', margin: 20 }} >Silver Package</Text>
                </View>
                <View>
                    <Image source={GoldPackage} style={{ height: normalize(500), width: normalize(350), resizeMode: 'contain', left: normalize(15) }} />
                    <Text style={{ fontSize: normalize(20), fontFamily: fonts.montserrat_regular, fontWeight: "700", textAlign: "center", color: 'black', margin: 20 }} >Gold Package</Text>
                </View>
                <View style={{ margin: 20 }}>
                    <Text style={{ fontSize: normalize(20), fontFamily: fonts.montserrat_regular, fontWeight: "600", textAlign: "center", color: 'black', margin: 20, borderBottomWidth: 1.5 }} >FOR MORE INFORMATION -:</Text>
                </View>
                <View style={{ margin: normalize(20) ,alignItems:'center'}}>
                    <TouchableOpacity style={{
                        width: 200,
                        height: 50,
                        borderRadius: 15,
                        alignItems: "center",
                        justifyContent: 'center',
                        backgroundColor: '#fa5502',
                    }} onpress={() => navigation.navigate("InputOTPScreen")} big={true}>
                        <Text style={{
                            color: "#ffffff",
                            alignItems: 'center',
                            fontStyle: fonts.inter_regular,
                            fontSize: 20
                        }}>Brochure  <Image source={left} style={{ height: normalize(30), width: normalize(30) }} />
                        </Text>

                    </TouchableOpacity>
                </View>
            </ScrollView>
        </>
    )
}

export default DigitalMarketing