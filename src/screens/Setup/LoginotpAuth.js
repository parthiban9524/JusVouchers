import React from 'react'
import { View, Text, StyleSheet, KeyboardAvoidingView, Image, TextInput, TouchableOpacity } from 'react-native'

import { fonts, normalize } from '../../components/Utils';
import WavyHeader from '../../components/Wavyheader';
import Submitbutton from '../../components/Submitbutton';

export default function LoginotpAuth({ navigation }) {
    let textInput = React.useRef(null);
    const [phoneNumber, setPhoneNumber] = React.useState();
    const [focusInput, setFocusinput] = React.useState(true);

    const onChangePhone = (Number) => {
        setPhoneNumber(Number)
    }

    const onChangeFocus = () => {
        setFocusinput(true)
    }

    const onChangeBlur = () => {
        setFocusinput(false)
    }

    React.useEffect(() => {
        textInput.focus()
    }, [])

    return (
        <>
            <WavyHeader firstTxt={"OTP Login"} secTxt={""} navigation={navigation} />
            <View style={styles.container} >
                <KeyboardAvoidingView
                    keyboardVerticalOffset={50}
                    behavior={'padding'}
                    style={styles.containerAvoiddingView}>
                    <Text style={styles.textTitle}>{"Please input mobile number"}</Text>

                    <View style={styles.containerInput}>
                        <View style={styles.openDialogView}>
                            <Text style={{ fontSize: normalize(18) }}>{"+91 "}</Text>
                        </View>
                        <TextInput
                            ref={(input) => textInput = input}
                            style={styles.phoneInputtext}
                            placeholder='98 98 87 45 21'
                            keyboardType='numeric'
                            value={Number}
                            onChange={onChangePhone}
                            secureTextEntry={false}
                            onFocus={onChangeFocus}
                            onBlur={onChangeBlur}
                        />
                    </View>
                    <View style={{ marginTop: normalize(80) }} >
                        <Submitbutton voucher={true} bg={phoneNumber ? "#f69632" : 'gray'} text={"Confirm"} txtclr={"#ffffff"} onpress={() => navigation.navigate("InputOTPScreen")} />
                    </View>
                </KeyboardAvoidingView>
            </View>
        </>
    )
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginTop: normalize(50)
    },
    containerAvoiddingView: {
        flex: 1,
        alignItems: "center",
        padding: 10
    },
    textTitle: {
        marginVertical: normalize(50),
        fontSize: normalize(20),
        color: "#000000",
        fontFamily: fonts.lato_bold,

    },
    containerInput: {
        flexDirection: 'row',
        paddingHorizontal: 12,
        borderRadius: 10,
        backgroundColor: 'white',
        alignItems: 'center',
        width: normalize(320),
        elevation: 5
    },
    openDialogView: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',

    }, phoneInputtext: {
        marginLeft: 10,
        flex: 1,
        height: normalize(50),
        fontSize: normalize(18),
        width: 10
    },
})