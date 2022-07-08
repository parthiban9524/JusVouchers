import React from 'react'
import { useState, useEffect } from 'react';

import { View, Text } from "react-native"
import { fonts, normalize } from './Utils';

const Timer = (props) => {
    const { initialSeconds = 30 } = props;

    const [seconds, setSeconds] = useState(initialSeconds);
    useEffect(() => {
        let myInterval = setInterval(() => {
            if (seconds > 0) {
                setSeconds(seconds - 1);
            }
        }, 1000)

        return () => {
            clearInterval(myInterval);
        };
    });

    return (
        <View>
            <Text style={{ fontFamily: fonts.lato_bold, fontSize: normalize(15), top: 3 }} >{seconds}</Text>
        </View>
    )
}

export default Timer;