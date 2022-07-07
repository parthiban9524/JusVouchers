import React from 'react'
import { View, Text, Button, StyleSheet, KeyboardAvoidingView, TextInput,TouchableOpacity } from 'react-native'
import Submitbutton from '../../components/Submitbutton';
import { normalize } from '../../components/Utils';



const InputOTPScreen = ({navigation}) => {
    let textInput = React.useRef(null);
    const lengthInput = 6;
    const defaultCountDown = 30;
    let clockCall = null;
    const [internalVal, setInternalVal] = React.useState("");
    const [countdown,setCountDown] = React.useState(defaultCountDown);
    const [enableresend,setEnableResend] = React.useState(false);
    const onChangeText = (val) => {
        setInternalVal(val)
    }
    React.useEffect(()=>{
        clockCall = setInterval(()=>{
            decrementClock();
        },1000)
        return ()=>{
            clearInterval(clockCall)
        }
    },[])

    const decrementClock=()=>{
        if(countdown === 0){
            setEnableResend(true)
            setCountDown(0)
            clearInterval(clockCall)
        }else{
            setCountDown(countdown -1)
        }
       
    }

    const onResendOTP = ()=>{
        if(enableresend){
            setCountDown(defaultCountDown)
            setEnableResend(false)
            clearInterval(clockCall)
            clockCall = setInterval(()=>{
                decrementClock(0)
            },1000)
        }
    }
     
    const onChangeNumber = ()=>{
        setInternalVal("")
    }

    React.useEffect(() => { textInput.focus() }, [])
    return (
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
                                <View key ={index} style={[styles.callView,{
                                    borderBottomColor: index === internalVal.length ? '#FB6C6A' : '#234DB7'
                                }
                                ]}>
                                    <Text style={styles.cellText}
                                        onPress={() => textInput.focus()}>{internalVal && internalVal.length > 0 ? internalVal[index] : ""}</Text>
                                </View>
                            ))
                        }
                    </View>
                    <View style={styles.bottomView}>
                    <TouchableOpacity  onPress={onChangeNumber}>
                        <View style={styles.btnChangeNumber}><Text style={styles.textChange}>Change Number</Text></View>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={onResendOTP}>
                        <View style={styles.btnResend}><Text style={[styles.textResend,{
                            color: enableresend  ? '#234DB7' : 'gray' 
                        }]}>Resend OTP ({countdown})</Text></View>
                    </TouchableOpacity>
                  
                </View>
                
                </View>
                <View style={{ marginTop: normalize(100) }} >
                <Submitbutton bg={"#f69632"} text={"Verify OTP"} txtclr={"#ffffff"} onpress={() => navigation.navigate("ResetPassword")} big={true} />
              </View>
            </KeyboardAvoidingView>
        </View>
    )
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    containerAvoiddingView: {
        flex: 1,
        alignItems: "center",
        padding: 5
    },
    textTitle: {
         marginTop: 50,
        fontSize: 20
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
    bottomView:{
        flexDirection:'row',
        flex:1,
        marginBottom:100,
        alignItems:'flex-end',
       
    },
    btnChangeNumber :{
        width:150,
        height:50,
        borderRadius:10,
        alignItems:'flex-start',
        justifyContent:'center',
        marginLeft:20,
    },
    textChange:{
        color:'#234DB7',
        alignItems:'center',
        fontSize:18
    },
    btnResend :{
        width:150,
        height:50,
        borderRadius:10,
        alignItems:'flex-start',
        justifyContent:'center',
        marginLeft:40,
        marginRight:10,
    },
    textResend:{
        alignItems:'center',
        fontSize:18
    }
})
export default InputOTPScreen