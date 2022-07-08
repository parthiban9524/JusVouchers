import React, { useEffect, useState } from 'react'
import { View, Text, Button, StyleSheet, KeyboardAvoidingView, TextInput, TouchableOpacity } from 'react-native'
import Submitbutton from '../../components/Submitbutton';
import Timer from '../../components/Timer';
import { fonts, normalize } from '../../components/Utils';
import WavyHeader from '../../components/Wavyheader';



const InputOTPScreen = ({ navigation }) => {
    let textInput = React.useRef(null);
    const lengthInput = 6;
    let clockCall = null;
    const [internalVal, setInternalVal] = React.useState("");
    const [enableresend, setEnableResend] = React.useState(false);
    const [seconds, setSeconds] = useState(30);

    const onChangeText = (val) => {
        setInternalVal(val)
    }



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

    const onResendOTP = () => {
        if (seconds === 0) {
            setSeconds(30)
        }
    }

    const onChangeNumber = () => {
        setInternalVal("")
    }

    React.useEffect(() => { textInput.focus() }, [])
    return (
        <>
            <WavyHeader navigation={navigation} firstTxt={"Enter OTP "} secTxt={""} />
            <View style={styles.container}>
                <KeyboardAvoidingView
                    keyboardVerticalOffset={50}
                    behavior={'padding'}
                    style={styles.containerAvoiddingView}
                >
                    <Text style={styles.textTitle}>{"Input your OTP code send via message"}</Text>
                    <View>
                        <TextInput
                            ref={(input) => textInput = input}
                            onChangeText={onChangeText}
                            style={{ width: 8, height: 8 }}
                            value={internalVal}
                            maxLength={lengthInput}
                            returnKeyType='done'
                            keyboardType='numeric'
                        />
                        <View style={styles.containerInput}>
                            {
                                Array(lengthInput).fill().map((data, index) => (
                                    <View key={index} style={[styles.callView, {
                                        borderBottomColor: index === internalVal.length ? '#FB6C6A' : '#234DB7'
                                    }
                                    ]}>
                                        <Text style={styles.cellText}
                                            onPress={() => textInput.focus()}>{internalVal && internalVal.length > 0 ? internalVal[index] : ""}</Text>
                                    </View>
                                ))
                            }
                        </View>
                        <View style={{ marginTop: normalize(100) }} >
                            <Submitbutton voucher={true} bg={"#f69632"} text={"Confirm"} txtclr={"#ffffff"} onpress={() => navigation.navigate("DashboardNavigation")} />
                        </View>
                        <View style={styles.bottomView}>
                            <TouchableOpacity onPress={onChangeNumber}>
                                <View style={styles.btnChangeNumber}><Text style={styles.textChange}>Change Number</Text></View>
                            </TouchableOpacity>
                            <TouchableOpacity onPress={onResendOTP}>
                                <View style={styles.btnResend}>
                                    <Text style={[styles.textResend, { color: seconds === 0 ? '#234DB7' : 'gray' }]}> Resend OTP({seconds})</Text>
                                </View>
                            </TouchableOpacity>
                        </View>
                    </View>
                </KeyboardAvoidingView >
            </View >
        </>
    )
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginTop: normalize(80),
    },
    containerAvoiddingView: {
        flex: 1,
        alignItems: "center",
        padding: 5
    },
    textTitle: {
        marginTop: 50,
        fontSize: normalize(20),
        fontFamily: fonts.lato_bold,
        color: "#000000"
    }, containerInput: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center'
    },
    callView: {
        paddingVertical: 11,
        width: 40,
        margin: 5,
        justifyContent: 'center',
        borderBottomWidth: 1.5
    },
    cellText: {
        textAlign: 'center',
        fontSize: 18
    },
    bottomView: {
        flexDirection: 'row',
        flex: 1,
        marginBottom: normalize(100),
        alignItems: 'flex-end',

    },
    btnChangeNumber: {
        width: 150,
        height: 50,
        borderRadius: 10,
        alignItems: 'flex-start',
        justifyContent: 'center',
        marginLeft: 20,
    },
    textChange: {
        color: '#234DB7',
        alignItems: 'center',
        fontSize: 18
    },
    btnResend: {
        width: 150,
        height: 50,
        borderRadius: 10,
        alignItems: 'flex-start',
        justifyContent: 'center',
        marginLeft: 40,
        marginRight: 10,
    },
    textResend: {
        alignItems: 'center',
        fontSize: 18
    }
})
export default InputOTPScreen;