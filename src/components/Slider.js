import React, { useRef, useState } from 'react'
import { View, Text, Dimensions, Image, TouchableOpacity } from 'react-native'
import Carousel from "react-native-snap-carousel";

import { arrow_left, arrow_right } from './Icon';
import { doctor1, doctor2 } from './Icons';
import { normalize } from './Utils';

export default function Swiper({ navigation, id = 1, }) {

    const carousel = useRef(null);
    const [activeIndex, setactiveIndex] = useState(0);

    const renderItem = ({ item, index }) => {
        return (
            <View style={{ alignSelf: "center", marginTop: normalize(40), }}>
                <Image source={{ uri: item.image }} style={{ height: normalize(150), width: normalize(270), resizeMode: "cover", borderRadius: 10 }} />
                <View style={{ marginTop: normalize(10), alignSelf: "center", flexDirection: "row", }} >
                    <View style={{ height: normalize(8), width: normalize(8), backgroundColor: "#F58220", borderRadius: normalize(8) }} />
                    <View style={{ height: normalize(8), width: normalize(8), backgroundColor: index[1] ? "#F58220" : "#C4C4C4", borderRadius: normalize(8), marginLeft: 5 }} />
                    <View style={{ height: normalize(8), width: normalize(8), backgroundColor: index[2] ? "#F58220" : "#C4C4C4", borderRadius: normalize(8), marginLeft: 5 }} />
                    <View style={{ height: normalize(8), width: normalize(8), backgroundColor: index[3] ? "#F58220" : "#C4C4C4", borderRadius: normalize(8), marginLeft: 5 }} />
                    <View style={{ height: normalize(8), width: normalize(8), backgroundColor: index[4] ? "#F58220" : "#C4C4C4", borderRadius: normalize(8), marginLeft: 5 }} />
                </View>
            </View>
        )
    }

    const renderItem1 = ({ item, index }) => {
        return (
            <View style={{ marginTop: normalize(20), }}>
                <Image source={{ uri: item.image }} style={{ height: normalize(83), width: normalize(175), resizeMode: "contain", borderRadius: 10 }} />
            </View>
        )
    }

    const data =
        [
            {
                "id": "1",
                "image": "https://jusvouchers.com/wp-content/uploads/2021/12/MamaEarth-Desktop-1639658454.png.webp"
            },
            {
                "id": "2",
                "image": "https://jusvouchers.com/wp-content/uploads/2021/12/derma-BANNER-23-DEC-2-1640324430.png.webp"
            },
            {
                "id": "3",
                "image": "https://jusvouchers.com/wp-content/uploads/2021/12/Dell-Desktop-20-12-2021-1640174421.png.webp"
            },
            {
                "id": "4",
                "image": "https://jusvouchers.com/wp-content/uploads/2021/12/1-CK-Ajio-Dekstop-08-12-2021-1-1640323686.png.webp"
            },
            {
                "id": "5",
                "image": "https://jusvouchers.com/wp-content/uploads/2021/12/BB-HPB-22-dec-2-1640161458.png"
            }
        ];

    const items = [
        {
            "id": 1,
            "image": "https://jusvouchers.com/wp-content/uploads/2021/12/health-plus-card-33.png.webp",
        },
        {
            "id": 2,
            "image": "https://jusvouchers.com/wp-content/uploads/2021/12/health-plus-card-37.png.webp",
        },
        {
            "id": 3,
            "image": "https://jusvouchers.com/wp-content/uploads/2021/12/health-plus-card-14.png",
        },
        {
            "id": 4,
            "image": "https://jusvouchers.com/wp-content/uploads/2021/12/health-plus-card-16.png",
        },
        {
            "id": 5,
            "image": "https://jusvouchers.com/wp-content/uploads/2021/12/health-plus-card-37.png.webp",
        }
    ];

    return (
        <>
            {
                id == 1 && (
                    <View style={{ flexDirection: "row", }} >
                        <View style={{ alignSelf: "center", justifyContent: "space-evenly", }} >
                            <Carousel
                                ref={carousel}
                                data={data}
                                sliderWidth={480}
                                itemWidth={350}
                                renderItem={renderItem}
                                onBeforeSnapToItem={index => setactiveIndex(index)}
                                enableSnap={true}
                            />
                        </View>
                    </View>
                )}
            {
                id == 2 && (
                    <View style={{ flexDirection: "row", }} >
                        <Carousel
                            ref={carousel}
                            data={items}
                            sliderWidth={250}
                            itemWidth={225}
                            renderItem={renderItem1}
                            onBeforeSnapToItem={index => setactiveIndex(index)}
                            enableSnap={true}
                        />
                    </View>
                )}

        </>
    )
}