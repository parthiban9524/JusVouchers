import React, { useState } from "react";
import { FlatList, SafeAreaView, StatusBar, StyleSheet, Text, TouchableOpacity, View,Image } from "react-native";
import { normalize,fonts } from "../../../components/Utils";
import { sale1, rising} from "../../../components/Icons";

const DATA = [
  {
    id: "1",
    Date:"02.33.1111",
    Sale:'$2666'
  },
  {
    id: "2",
    Date:"02.33.1111",
    Sale:'$2666'
  },
  
];

const Item = ({ item, navigation}) => (
  <TouchableOpacity onPress={() => navigation.navigate("SalesDetails")} style={{}}>
    <View style={{flexDirection:'row',justifyContent:'space-around',marginTop:15}}>

    </View>
  </TouchableOpacity>
);

const SalesDetails = (navigation) => {
  const [selectedId, setSelectedId] = useState(null);

  const renderItem = ({ item }) => {
    const backgroundColor = item.id === selectedId ? "#6e3b6e" : "#f9c2ff";
    const color = item.id === selectedId ? 'white' : 'black';

    return (
      <Item
        item={item}
        onPress={() => setSelectedId(item.id)}
        backgroundColor={{ backgroundColor }}
        textColor={{ color }}
      />
    );
  };

  return (
    <SafeAreaView style={styles.container}>
        
        <TouchableOpacity style={{ borderRadius: 20, backgroundColor: '#FFDCAE99', width: 360, height: 95,margin:15 }} onPress={() => navigation.navigate("SalesDetails")} >
                    <View style={{ flexDirection: "row" ,alignSelf:"center",margin:15}}>
                        <Image source={sale1} style={{ height: normalize(50), width: normalize(50), resizeMode: "contain", alignSelf: "center", marginLeft: normalize(8), marginTop: 5 }} />
                        <Text style={{ fontSize: normalize(18), fontWeight: '500', marginLeft:10, marginTop: 10 }}  >Total Revenue</Text>
                        <View style={{ flexDirection: "row", marginTop: 10, }} >
                            <Text style={{ fontSize: normalize(17), fontWeight: '500',marginLeft:3,color:'#08D635',fontWeight:'800'}}>$6.45960.00</Text>
                            <Image source={rising} style={{ width: normalize(40), height: normalize(25), marginLeft: normalize(5), alignSelf: "center" }} />
                            <Text style={{ fontFamily: fonts.montserrat_regular, fontSize: normalize(16), color: "#08D635", top: normalize(20) }} >5.6%</Text>
                        </View>

                    </View>
                </TouchableOpacity>
                <Text style={{fontFamily:fonts.montserrat_bold,fontSize:normalize(19),fontWeight:'bold',alignSelf:'center',color:'#1d783a'}}>02 June 2022 Wednesday</Text>
                <View style={{flexDirection:"row",justifyContent:'space-around',backgroundColor:'#76c9cf',marginLeft:22,marginRight:22,borderRadius:5}}>
                    <Text  style={{fontSize:normalize(16),fontWeight:"600",marginLeft:45}}>Sales Details</Text>
                    
                </View>
              
      <FlatList
        data={DATA}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
        extraData={selectedId}
      />
    </SafeAreaView>
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
  title: {
    fontSize: 32,
  },
});

export default SalesDetails;