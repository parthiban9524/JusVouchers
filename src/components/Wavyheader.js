import React from 'react';
import { View, StatusBar, Image, Text } from 'react-native';
import Svg, { Path } from 'react-native-svg';

import { logo } from './Icons';
import { fonts, normalize } from './Utils';

export default function WavyHeader({ customStyles, firstTxt = "Welcome", secTxt = "Back" }) {
    return (
        <>
            <StatusBar backgroundColor={"#FA9C22"} translucent={false} />
            <View style={customStyles}>
                <View style={{ backgroundColor: '#FA9C22', height: 300 }}>
                    <Svg
                        height="60%"
                        width="100%"
                        viewBox="90 0 1140 220"
                        style={{ position: 'absolute', top: 230 }}
                    >
                        <Path
                            fill="#FA9C22"
                            d="M0,160L60,138.7C120,117,240,75,360,74.7C480,75,600,117,720,154.7C840,192,960,224,1080,197.3C1200,171,1320,85,1380,42.7L1440,0L1440,0L1380,0C1320,0,1200,0,1080,0C960,0,840,0,720,0C600,0,480,0,360,0C240,0,120,0,60,0L0,0Z"
                        />
                    </Svg>
                </View>
            </View>
            <View style={{ position: "absolute", alignSelf: "center", marginTop: normalize(10) }} >
                <View style={{ height: normalize(46), width: normalize(105), backgroundColor: "#ffffff", borderBottomLeftRadius: normalize(40), borderTopRightRadius: normalize(40), justifyContent: "center", }} >
                    <Image source={logo} style={{ height: normalize(35), width: normalize(65), alignSelf: "center" }} />
                </View>
            </View>
            <View style={{ position: "absolute", marginTop: normalize(110), marginHorizontal: normalize(32) }}>
                <Text style={{ fontSize: normalize(40), fontFamily: fonts.montserrat_semibold, fontWeight: "600", color: "#ffffff" }} >{firstTxt}</Text>
                <Text style={{ fontSize: normalize(40), fontFamily: fonts.montserrat_semibold, fontWeight: "600", color: "#ffffff" }} >{secTxt}</Text>
            </View>
        </>
    );
}