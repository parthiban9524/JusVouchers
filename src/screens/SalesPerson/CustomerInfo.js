import React, { useEffect, useState } from "react";
import { FlatList, SafeAreaView, StatusBar, StyleSheet, Text, TouchableOpacity, View, Image } from "react-native";

import { normalize, fonts } from "../../components/Utils";
import { sale1, rising, left } from "../../components/Icons";
import SalesHeader from "../../components/SalesHeader";

const CustomerInfo = ({ navigation }) => {

  const [selectedId, setSelectedId] = useState(null);
  const DATA = navigation.getState().routes[2].params.data.voucher
  const total = navigation.getState().routes[2].params.data.Sale



  const renderItem = ({ item }) => {
    console.log("item", item)
    return (
      <View >
        <View style={{  marginLeft: normalize(20),marginRight:normalize(60) ,flexDirection:'row',justifyContent:'space-between',marginTop:10}}>
            <Text style={styles.data_name}>Customer Name:</Text>
          <Text style={styles.data_text}>{item.name}</Text>
        </View>
        <View style={{  marginLeft: normalize(20) ,flexDirection:'row',justifyContent:'space-between',marginTop:10}}>
            <Text style={styles.data_name}>Email:</Text>
          <Text style={styles.data_text}>{item.email}</Text>
        </View>
        <View style={{  marginLeft: normalize(20),marginRight:normalize(67) ,flexDirection:'row',justifyContent:'space-between',marginTop:10}}>
            <Text style={styles.data_name}>Phone Number:</Text>
          <Text style={styles.data_text}>{item.phone}</Text>
        </View>
        <View style={{  marginLeft: normalize(20),marginRight:normalize(10) ,flexDirection:'row',justifyContent:'space-between',marginTop:10}}>
            <Text style={styles.data_name}>Address:</Text>
          <Text style={styles.data_text}>{item.address}</Text>
        </View>
        <View style={{  marginLeft: normalize(20),marginRight:normalize(40) ,flexDirection:'row',justifyContent:'space-between',marginTop:10}}>
            <Text style={styles.data_name}>Voucher Name:</Text>
          <Text style={styles.data_text}>{item.Vname}</Text>
        </View>
        <View style={{  marginLeft: normalize(20),marginRight:normalize(80) ,flexDirection:'row',justifyContent:'space-between',marginTop:10}}>
            <Text style={styles.data_name}>Vpucher Price:</Text>
          <Text style={styles.data_text}>{item.Vprice}</Text>
        </View>
        <View style={{  marginLeft: normalize(20) ,marginRight:normalize(70),marginBottom:normalize(20),flexDirection:'row',justifyContent:'space-between',marginTop:10}}>
            <Text style={styles.data_name}>Shop Name:</Text>
          <Text style={styles.data_text}>{item.shopName}</Text>
        </View>
       
      </View>
    )
  }

  return (
    <>
      <SalesHeader navigation={navigation} />
      <SafeAreaView style={styles.container}>
        <TouchableOpacity style={{ marginTop: normalize(20), marginLeft: normalize(20) }} onPress={() => navigation.goBack()} >
          <Image source={left} style={{ height: normalize(30), width: normalize(30) }} />
        </TouchableOpacity>
     
        
        <View style={{ width: normalize(340), borderRadius: normalize(10), backgroundColor: "#D0E3FFB0", marginVertical: normalize(20), alignSelf: "center" }}>
          <View style={{ flexDirection: "row", justifyContent: "space-around", marginTop: normalize(20), marginLeft: normalize(20) }}>
            <Text style={{ fontFamily: fonts.montserrat_semibold, fontSize: normalize(16), color: "#000000" }}>Customer Details</Text>
          </View>
          <View style={{ width: normalize(340), borderColor: "#797877", borderBottomWidth: 1.2, alignSelf: "center", marginTop: normalize(10) }} />
          <FlatList
            data={DATA}
            renderItem={renderItem}
            keyExtractor={(item) => item.id}
            
          />
         </View>
      </SafeAreaView>
    </>
  );
};


const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  item: {
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 16,
  },
  
  data_text: {
    fontFamily: fonts.montserrat_semibold,
    fontSize: normalize(16),
    color: "#000000",
    
    
  },
  data_name:{
    fontFamily: fonts.montserrat_semibold,
    fontSize: normalize(17),
    color: "#000000",
  }
});

export default CustomerInfo;