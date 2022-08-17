import React, { useEffect } from 'react';
import { View, Animated, Easing } from 'react-native';
import { loader } from './Icons';

const Loading = () => {
    const spinValue = new Animated.Value(0)
    useEffect(() => {
        Imagerotation()
    })
    const Imagerotation = () => {
        spinValue.setValue(0);
        Animated.timing(
            spinValue,
            {
                toValue: 1,
                duration: 1500,
                easing: Easing.linear,
                useNativeDriver: false
            }
        ).start(() => Imagerotation())
    }
    const spin = spinValue.interpolate({
        inputRange: [0, 1],
        outputRange: ['0deg', '360deg']
    })
    return (
        <View>
            <Animated.Image source={loader} style={[{ height: 24, width: 24, alignSelf: 'center', transform: [{ rotate: spin }] }]} />
        </View>
    )
}

export default Loading;