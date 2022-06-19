import React, { Component, useState } from "react";
import { StyleSheet, Text, View } from "react-native";

import { SliderBox } from "react-native-image-slider-box";
import { normalize } from "./Utils";

export default function Slider() {

    const img = ["https://jusvouchers.com/wp-content/uploads/2021/12/derma-BANNER-23-DEC-2-1640324430.png.webp",
        "https://jusvouchers.com/wp-content/uploads/2021/12/HealthGlow-Desktop-1639719376.png.webp",
        "https://img.freepik.com/free-psd/horizontal-fitness-youtube-video-thumbnail-web-banner-template_475351-83.jpg",
        "https://jusvouchers.com/wp-content/uploads/2021/12/MamaEarth-Desktop-1639658454.png.webp"]


    return (
        <View style={styles.container}>
            <SliderBox
                dotColor={"#F58220"}
                images={img}
                onCurrentImagePressed={index =>
                    console.warn(`image ${index} pressed`)
                }
                parentWidth={normalize(251)}
                sliderBoxHeight={normalize(136)}            />
        </View>
    );
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignSelf: "center"
    }
});