import { View, Text ,TouchableOpacity,Image} from 'react-native'
import React from 'react'
import { fonts, normalize } from '../../components/Utils'
import SalesHeader from '../../components/SalesHeader'
import { left } from '../../components/Icons'
const CustomerInfo = ({navigation}) => {
  return (
    <>
 <SalesHeader navigation={navigation} />
 <TouchableOpacity style={{ marginTop: normalize(20),marginLeft:normalize(20) }} onPress={() => navigation.goBack()} >
            <Image source={left} style={{ height: normalize(30), width: normalize(30) }} />
          </TouchableOpacity>
    <View style={{alignSelf:'center' }} >
          <Text style={{ fontSize: normalize(24), fontWeight: 'bold', color: "#000000" }}>Customer Details</Text>
      </View>
      <View style={{backgroundColor:'#dbca9a',borderRadius:10,margin:normalize(10),marginTop:25}}>
    <View style={{flexDirection:'row',justifyContent:'space-around',marginTop:20}}>
      <Text style={{fontFamily:fonts.lato_bold,fontSize:normalize(20),marginLeft:25}}>Customer Name :</Text>
      <Text style={{fontFamily:fonts.lato_regular,fontSize:normalize(18),color:'#47370b',marginRight:20}}>Rajat Mishra</Text>
    </View>
    <View style={{flexDirection:'row',justifyContent:'space-around',marginTop:30}}>
      <Text style={{fontFamily:fonts.lato_bold,fontSize:normalize(20),marginLeft:25}}>Phone Number :</Text>
      <Text style={{fontFamily:fonts.lato_regular,fontSize:normalize(18),color:'#47370b',marginRight:20}}>9450736252</Text>
   
    </View>
    <View style={{flexDirection:'row',justifyContent:'space-around',marginTop:30}}>
      <Text style={{fontFamily:fonts.lato_bold,fontSize:normalize(20)}}> Email :</Text>
      <Text style={{fontFamily:fonts.lato_regular,fontSize:normalize(18),color:'#47370b'}}>rajat@gmail.com</Text>
   
    </View>
    <View style={{flexDirection:'row',justifyContent:'space-around',marginTop:30}}>
      <Text style={{fontFamily:fonts.lato_bold,fontSize:normalize(20),marginLeft:25}}> Address :</Text>
      <Text style={{fontFamily:fonts.lato_regular,fontSize:normalize(18),color:'#47370b'}}>133/707 M block Kanpur</Text>
   
    </View>
    <View style={{flexDirection:'row',justifyContent:'space-around',marginTop:30}}>
      <Text style={{fontFamily:fonts.lato_bold,fontSize:normalize(20),marginLeft:10}}>Voucher Name :</Text>
      <Text style={{fontFamily:fonts.lato_regular,fontSize:normalize(18),color:'#47370b'}}>Pathology</Text>
   
    </View>
    <View style={{flexDirection:'row',justifyContent:'space-around',marginTop:30,marginBottom:20}}>
      <Text style={{fontFamily:fonts.lato_bold,fontSize:normalize(20),}}>Voucher Price :</Text>
      <Text style={{fontFamily:fonts.lato_regular,fontSize:normalize(18),color:'#47370b'}}>₹799/-</Text>
      </View>
    </View>
    </>
  )
}

export default CustomerInfo