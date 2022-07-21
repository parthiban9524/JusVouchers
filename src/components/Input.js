import React, { useEffect, useState } from "react";
import { View, Text, TextInput, Image } from "react-native"

import { fonts, normalize } from "./Utils";
import { mail, } from "./Icons";

export default function Input(props) {

    const [values, setvalues] = useState(value || initValue || "");
    const [valueEntered, setvalueEntered] = useState((value || initValue) ? true : false);
    const [isFocused, setisFocused] = useState(false)

    const { label, img, id, wid, secureTextEntry, meta: { touched, error }, input: { value }, initValue, serverError } = props;

    useEffect(() => {
        setvalueEntered(initValue !== "" ? true : false)
        setvalues(initValue)
    }, [initValue])

    useEffect(() => {
        setvalueEntered(value ? true : false)
        setvalues(value)
    }, [value])

    const onChangeHandler = (value) => {
        const { input: { onChange } } = props;
        onChange(value);
        setvalues(value);
    }
    const onBlurHandler = () => {
        setisFocused(false);
    }
    const handleFocus = () => {
        setisFocused(true);
    }

    return (
        <View>
            {
                id == 1 && (
                    <>
                        <TextInput
                            style={{ width: normalize(300), borderColor: "#938C8C", borderBottomWidth: 1, alignSelf: "center", fontFamily: fonts.lato_regular, fontSize: normalize(20), paddingLeft: normalize(30), top: 10, }}
                            placeholder={label}
                            autoCapitalize="none"
                            secureTextEntry={secureTextEntry}
                            onBlur={onBlurHandler}
                            value={values}
                            onFocus={handleFocus}
                            onChangeText={onChangeHandler}
                            autoCorrect={false}
                            {...props}
                        />
                        <Image source={img} style={{ height: normalize(25), width: normalize(25), left: normalize(40), bottom: normalize(28) }} />
                        {
                            touched && (error || serverError) && (
                                <View style={{ paddingHorizontal: 40 }}>
                                    <Text>{serverError ? serverError : error}</Text>
                                </View>
                            )
                        }
                    </>
                )}
            {
                id == 2 && (
                    <View>
                        <TextInput
                            style={{ width: normalize(wid), height: normalize(50), borderColor: "#9A9393", borderWidth: 1, alignSelf: "center", fontFamily: fonts.montserrat_regular, fontSize: normalize(15), paddingLeft: normalize(20), top: 10, }}
                            onChangeText={onChangeHandler}
                            placeholder={label}
                            secureTextEntry={secureTextEntry}

                        />
                    </View>
                )
            }
            {
                id == 3 && (
                    <>
                        <TextInput
                            style={{ width: normalize(wid), borderColor: "#000000", borderBottomWidth: 1, marginLeft: normalize(10), fontFamily: fonts.lato_regular, fontSize: normalize(20) }}
                            onChangeText={onChangeHandler}
                            placeholder={label}
                            placeholderTextColor={"#000000"}
                            secureTextEntry={secureTextEntry}

                        />
                    </>
                )
            }
        </View>
    )
}