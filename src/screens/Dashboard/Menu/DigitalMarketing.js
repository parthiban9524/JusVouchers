import { View, Text, Image, ScrollView, TouchableOpacity } from 'react-native'
import { PermissionsAndroid, Alert } from "react-native";
import React from 'react'
import { Arrow, BronzePackage, DigitalMarketingHome, GoldPackage, left, SilverPackage } from '../../../components/Icons'
import { normalize, fonts } from '../../../components/Utils'
import Header from '../../../components/Header'
import download from "../../../assest/images/download.png"


const DigitalMarketing = ({ navigation }) => {

    const historyDownload = async () => {
        //Function to check the platform
        //If iOS the start downloading
        //If Android then ask for runtime permission
        if (Platform.OS === 'ios') {
            downloadHistory();
        } else {
            try {
                PermissionsAndroid.request(
                    PermissionsAndroid.PERMISSIONS.WRITE_EXTERNAL_STORAGE,
                    {
                        title: 'storage title',
                        message: 'storage_permission',
                    },
                ).then(granted => {
                    if (granted === PermissionsAndroid.RESULTS.GRANTED) {
                        //Once user grant the permission start downloading
                        console.log('Storage Permission Granted.');
                        downloadHistory();
                    } else {
                        //If permission denied then show alert 'Storage Permission Not Granted'
                        Alert.alert('storage_permission');
                    }
                });
            } catch (err) {
                //To handle permission related issue
                console.log('error', err);
            }
        }
    }

    const downloadHistory = async () => {
        const { config, fs } = RNFetchBlob;
        let PictureDir = fs.dirs.PictureDir;
        let date = new Date();
        let options = {
            fileCache: true,
            addAndroidDownloads: {
                //Related to the Android only
                useDownloadManager: true,
                notification: true,
                path:
                    PictureDir +
                    '/Report_Download' +
                    Math.floor(date.getTime() + date.getSeconds() / 2),
                description: 'Risk Report Download',
            },
        };
        config(options)
            .fetch('GET', 'http://www.africau.edu/images/default/sample.pdf', {})
            .then((res) => {
                //Showing alert after successful downloading
                console.log('res -> ', JSON.stringify(res));
                alert('Report Downloaded Successfully.');
            });
    }

    return (
        <>

            <Header navigation={navigation} />
            <ScrollView style={{ backgroundColor: "#ffffff" }}>
            <View style={{ alignSelf: "center" }}>
                <Text style={{ fontSize: normalize(22), color: "#000000", fontFamily: fonts.montserrat_regular, fontWeight: "800", marginTop: 6 }}>Online Marketing</Text>
            </View>
                <View  style={{ flex: 1, backgroundColor: "#f2d77c", borderRadius: 18, height: normalize(220), flexDirection: "row", marginTop: normalize(20)  }}>
                    <Text style={{
                        fontFamily: fonts.inter_regular, fontSize: 14,
                        fontWeight: '400',marginLeft:15,marginTop:10
                    }}>Jus Vouchers marketing solution partners offer free account management assistance and
                        expert advice.In the early stages of your company's life, you want to get your
                        name out there and begin to expand. You can't expect this to happen right away
                        , of course.Hard work, patience, and perseverance are necessary for growth.
                        There isn't a step or secret to getting ahead of the competition or seeing
                        rapid success in your sector. Website is the #2 channel used in marketing,
                        behind social media.
                        75% of marketers increased their company’s credibility and trust with digital
                        marketing tactics. Source: Content Marketing Institute, 2020</Text>
                </View>
                
                <View style={{ marginTop: normalize(30), }}>
                    <Text style={{ fontFamily: fonts.montserrat_semibold,
            color: "#000000",
            fontSize: normalize(18),
            alignSelf: "center"}} >Who We Are</Text>
                    <Text style={{ fontFamily: fonts.montserrat_semibold, color: 'blue', fontSize: normalize(16), marginTop: normalize(10), textAlign: "center" }} onPress={() => Linking.openURL('https://jusvouchers.com')}> See Our website : https://jusvouchers.com </Text>
                </View>

                <View style={{  marginTop: normalize(25), marginLeft: normalize(10), }}>
                    <Text style={{ fontSize: normalize(17), fontFamily: fonts.lato_regular, color: 'black', textDecorationLine: "underline", alignSelf: "center" }} >FOR MORE INFORMATION -:</Text>
                    <TouchableOpacity style={{ width: normalize(130), height: normalize(40), borderRadius: 15, backgroundColor: '#fa5502', flexDirection: "row", marginLeft: normalize(20),marginTop:20,alignSelf:'center' }} onPress={() => historyDownload()} >
                        <View style={{ justifyContent: "center", marginLeft: normalize(20) }} >
                            <Text style={{ color: "#ffffff", alignItems: 'center', fontFamily: fonts.lato_bold, fontSize: normalize(17) }}>Brochure  </Text>
                        </View>
                        <View style={{ justifyContent: "center", left: normalize(5) }} >
                            <Image source={download} style={{ height: normalize(23), width: normalize(23), tintColor: "#ffffff", resizeMode: "contain", justifyContent: "center" }} />
                        </View>
                    </TouchableOpacity>
                </View>
                <View style={{ flex: 1, backgroundColor: "#f2d77c", borderRadius: 18, height: normalize(250), flexDirection: "row", marginTop: normalize(20) }}>
                    <Image source={DigitalMarketingHome} style={{ height: normalize(250), width: normalize(140), resizeMode: 'contain', left: 10 }} />
                    <View style={{ marginTop: 30, marginLeft: normalize(20) }}>
                        <Text style={{ fontSize: normalize(18), fontFamily: fonts.montserrat_semibold, marginLeft: normalize(10), color: 'black', }}>Our Internet Marketing</Text>
                        <Text style={{ fontSize: normalize(18), fontFamily: fonts.montserrat_semibold, marginLeft: normalize(10), color: 'black', alignSelf: "center" }}>Sevices</Text>
                        <View style={{ flexDirection: 'row', marginTop: normalize(20) }}>
                            <Image source={Arrow} style={{ height: normalize(18), width: normalize(18), resizeMode: 'contain', left: normalize(5) }} />
                            <Text style={{ fontSize: normalize(14), fontFamily: fonts.montserrat_regular, fontWeight: "700", textAlign: "center", color: 'black', left: normalize(10) }} >DIGITAL COMPETITIVE ANALYSIS</Text>
                        </View>
                        <View style={{ flexDirection: 'row', marginTop: normalize(20) }}>
                            <Image source={Arrow} style={{ height: normalize(18), width: normalize(18), resizeMode: 'contain', left: normalize(5) }} />
                            <Text style={{ fontSize: normalize(14), fontFamily: fonts.montserrat_regular, fontWeight: "700", textAlign: "center", color: 'black', left: normalize(10) }} >WEBSITE DESIGN </Text>
                        </View>
                        <View style={{ flexDirection: 'row', marginTop: normalize(20) }}>
                            <Image source={Arrow} style={{ height: normalize(18), width: normalize(18), resizeMode: 'contain', left: normalize(5) }} />
                            <Text style={{ fontSize: normalize(14), fontFamily: fonts.montserrat_regular, fontWeight: "700", textAlign: "center", color: 'black', left: normalize(10) }} >SEARCH ENGINE OPTIMIZATION </Text>
                        </View>
                        <View style={{ flexDirection: 'row', marginTop: normalize(20) }}>
                            <Image source={Arrow} style={{ height: normalize(18), width: normalize(18), resizeMode: 'contain', left: normalize(5) }} />
                            <Text style={{ fontSize: normalize(14), fontFamily: fonts.montserrat_regular, fontWeight: "700", textAlign: "center", color: 'black', left: normalize(10) }} >GOOGLE MY BUSINESS</Text>
                        </View>
                        <View style={{ flexDirection: 'row', marginTop: normalize(20) }}>
                            <Image source={Arrow} style={{ height: normalize(18), width: normalize(18), resizeMode: 'contain', left: normalize(5) }} />
                            <Text style={{ fontSize: normalize(14), fontFamily: fonts.montserrat_regular, fontWeight: "700", textAlign: "center", color: 'black', left: normalize(10) }} >GOOGLE LOCAL SERVICES </Text>
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

            </ScrollView>
        </>
    )
}

export default DigitalMarketing