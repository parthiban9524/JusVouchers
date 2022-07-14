import React, { useRef, useState } from 'react'
import { View, Text, Dimensions, Image, } from 'react-native'
import Carousel from "react-native-snap-carousel";

import { arrow_left, arrow_right } from './Icon';
import { doctor1, doctor2 } from './Icons';
import { normalize } from './Utils';
import beauty1 from "../assest/images/beauty1.png"
import beauty2 from "../assest/images/beauty2.png"
import saloon1 from "../assest/images/saloon1.png"
import health_card from "../assest/images/health_card.png"
import perfection from "../assest/images/perfection.png"
import offer from "../assest/images/offer.png"
import voucher1 from "../assest/images/voucher1.png"
import skin from "../assest/images/skin.png"
import beauty from "../assest/images/beauty.png"

export default function Swiper({ navigation, id = 1,set = false}) {

    const carousel = useRef(null);
    const [activeIndex, setactiveIndex] = useState(0);

    const renderItem = ({ item, index }) => {
        return (
            <View style={{ alignSelf: "center", marginTop: normalize(40), }}>
                <Image source={item.image} style={{ height: normalize(150), width: normalize(270), resizeMode: "contain", borderRadius: 10 }} />
                <View style={{ marginTop: normalize(10), alignSelf: "center", flexDirection: "row", }} >
                    <View style={{ height: normalize(8), width: normalize(8), backgroundColor: item.id == 1 ? "#F58220" : "#C4C4C4", borderRadius: normalize(8), left : 5 }} />
                    <View style={{ height: normalize(8), width: normalize(8), backgroundColor: item.id == 2 ? "#F58220" : "#C4C4C4", borderRadius: normalize(8), left: 10 }} />
                    <View style={{ height: normalize(8), width: normalize(8), backgroundColor: item.id == 3 ? "#F58220" : "#C4C4C4", borderRadius: normalize(8), left: 15 }} />
                    <View style={{ height: normalize(8), width: normalize(8), backgroundColor: item.id == 4? "#F58220" : "#C4C4C4", borderRadius: normalize(8), left: 20 }} />
                    <View style={{ height: normalize(8), width: normalize(8), backgroundColor: item.id == 5 ? "#F58220" : "#C4C4C4", borderRadius: normalize(8), left: 25 }} />
                </View>
            </View>
        )
    }

    const renderItem1 = ({ item, index }) => {
        return (
            <View style={{ marginTop: normalize(20),alignSelf : "center" }}>
                <Image source={{ uri: item.image }} style={{ height: normalize(83), width: normalize(175), resizeMode: "contain", borderRadius: 10 }} />
            </View>
        )
    }

    const data =
        [
            {
                "id": "1",
                "image": offer 
            },
            {
                "id": "2",
                "image": voucher1
            },
            {
                "id": "3",
                "image": skin
            },
            {
                "id": "4",
                "image": beauty
            },
        ];

     const  val =    
     [
        {
            "id": "1",
            "image": saloon1
        },
        {
            "id": "2",
            "image":  health_card
        },
        {
            "id": "3",
            "image": beauty1
        },
        {
            "id": "4",
            "image": beauty2
        },
        {
            "id": "5",
            "image": perfection
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
                                data={ set ? data : val}
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