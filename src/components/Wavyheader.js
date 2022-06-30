import React from 'react';
import { View, StatusBar, Image, Text, TouchableOpacity, } from 'react-native';
import Svg, { Path } from 'react-native-svg';
import { StackActions } from '@react-navigation/native';

import { logo, left } from './Icons';
import { fonts, normalize } from './Utils';

export default function WavyHeader({ customStyles, firstTxt = "Welcome", secTxt = "Back", navigation, dash }) {
 
    const popAction = StackActions.pop(1);
    
    return (
        <>
            <StatusBar backgroundColor={"#FA9C22"} translucent={false} />
            <View style={customStyles}>
                <View style={{ backgroundColor: '#FA9C22', height: 200 }}>
                    <Svg
                        height="60%"
                        width="100%"
                        viewBox="110 0 1140 220"
                        style={{ position: 'absolute', top: 170}}
                    >
                        <Path
                            fill="#FA9C22"
                            d="M0,160L60,138.7C120,117,240,75,360,74.7C480,75,600,117,720,154.7C840,192,960,224,1080,197.3C1200,171,1320,85,1380,42.7L1440,0L1440,0L1380,0C1320,0,1200,0,1080,0C960,0,840,0,720,0C600,0,480,0,360,0C240,0,120,0,60,0L0,0Z"
                        />
                    </Svg>
                </View>
            </View>
            <TouchableOpacity style={{ position : "absolute", marginTop: normalize(30), marginLeft: normalize(20), }} onPress={ dash ? () => navigation.navigate('DashboardNavigation')  : () => navigation.goBack()} >
                <Image source={left} style={{ height: normalize(30), width: normalize(30), tintColor : "#ffffff" }} />
            </TouchableOpacity>
            <View style={{ position: "absolute", alignSelf: "center", marginTop: normalize(30) }} >
                <View style={{ height: normalize(46), width: normalize(105), backgroundColor: "#ffffff", borderBottomLeftRadius: normalize(40), borderTopRightRadius: normalize(40), justifyContent: "center", }} >
                    <Image source={logo} style={{ height: normalize(35), width: normalize(65), alignSelf: "center" }} />
                </View>
            </View>
            <View style={{ position: "absolute", marginTop: normalize(90), marginHorizontal: normalize(32) }}>
                <Text style={{ fontSize: normalize(40), fontFamily: fonts.montserrat_semibold, fontWeight: "600", color: "#ffffff" }} >{firstTxt}</Text>
                <Text style={{ fontSize: normalize(40), fontFamily: fonts.montserrat_semibold, fontWeight: "600", color: "#ffffff" }} >{secTxt}</Text>
            </View>
        </>
    );
}