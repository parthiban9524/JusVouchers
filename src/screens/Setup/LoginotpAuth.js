
import { View, Text,StyleSheet ,KeyboardAvoidingView,Image,TextInput,TouchableOpacity} from 'react-native'
import React from 'react'
import { fonts, normalize } from '../../components/Utils';
import { left } from '../../components/Icons';
import { connect } from "react-redux";
import { Field, reduxForm } from "redux-form";
const LoginotpAuth = ({navigation}) => {
    let textInput = React.useRef(null);
    const [phoneNumber,setPhoneNumber] = React.useState();
    const [focusInput,setFocusinput] = React.useState(true);

    const onChangePhone = (Number)=>{
        setPhoneNumber(Number)
    }
    
    const onChangeFocus = ()=>{
        setFocusinput(true)
    }

    const onChangeBlur = () =>{
        setFocusinput(false)
    }
   
    React.useEffect(()=>{
        textInput.focus()
    },[])

  return (
    <View style={styles.container} >
          <TouchableOpacity style={{ marginTop: normalize(20), marginLeft: normalize(20) }} onPress={() => navigation.goBack()} >
            <Image source={left} style={{ height: normalize(30), width: normalize(30) }} />
          </TouchableOpacity>
<KeyboardAvoidingView 
keyboardVerticalOffset={50}
behavior={'padding'}
style={styles.containerAvoiddingView}>
<Text style={styles.textTitle}>{"Please input mobile number"}</Text>

<View style={styles.containerInput}>
    <View style={styles.openDialogView}>
        <Text style={{fontSize:18}}>{"+91 |"}</Text>
    </View>
    <TextInput
    ref={(input)=> textInput = input}
    style={styles.phoneInputtext}
    placeholder='98 98 87 45 21'
    keyboardType='numeric'
    value={Number}
    onChange={onChangePhone}
    secureTextEntry={false}
    onFocus = {onChangeFocus}
    onBlur = {onChangeBlur}
    />
</View>
<View style={styles.viewButtom}>
    <TouchableOpacity onpress={() => navigation.navigate("InputOTPScreen")} big={true}>
        <View style={[styles.btnContinue,{
            backgroundColor:phoneNumber?"#f69632" :'gray'
        }]}>
            <Text style={styles.textContinue}>Continue</Text>
        </View>
    </TouchableOpacity>
</View>
</KeyboardAvoidingView>
    </View>
  )
}
 const styles = StyleSheet.create({
    container:{
        flex: 1,
    },
    containerAvoiddingView:{
        flex: 1,
        alignItems:"center",
        padding:10
    },
    textTitle:{
        marginBottom:50,
        marginTop:50,
        fontSize:20,
        fontFamily:fonts.inter_bold
    
    },
    containerInput:{
        flexDirection:'row',
        paddingHorizontal:12,
        borderRadius:10,
        backgroundColor:'white',
        alignItems:'center',
        borderBottomWidth:2
    },
    openDialogView:{
        flexDirection:'row',
        alignItems:'center',
        justifyContent:'center',
        
    },phoneInputtext:{
        marginLeft:10,
        flex:1,
        height:60,
        fontSize:20
    },viewButtom:{
        flex:1,
        justifyContent:"flex-end",
        marginBottom:30,
        marginTop:80,
        alignItems:"center"
    },
    btnContinue:{
        width:330,
        height:50,
        borderRadius:10,
        alignItems:"center",
        justifyContent:'center',
    },
    textContinue:{
        color:'#ffffff',
        alignItems:'center',
        fontStyle:fonts.inter_regular,
        fontSize:20
    }
 })

export default connect(null, null)(reduxForm({
    form: 'LoginotpAuth',
    enableReinitialize: true
})(LoginotpAuth));