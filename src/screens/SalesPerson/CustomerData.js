import React, { useState } from "react";
import { FlatList, SafeAreaView, StatusBar, StyleSheet, Text, TouchableOpacity, View, Image } from "react-native";
import { normalize, fonts } from "../../components/Utils";
import { sale1, rising } from "../../components/Icons";
import { left } from "../../components/Icons";
import SalesHeader from "../../components/SalesHeader";

const DATA = [
  {
    id: "1",
     Email: "rahul@gmail.com",
    "voucher": [
      {"name": "Rahul Rajput",
      "email": "rahul@123gmail.com",
      "phone": "9450736252",
      "address": "133 M Block Kanpur",
        "Vname": "Doctor Voucher",
        "shopName": "Dr.Rohit",
        "Vprice": "500/-"
      },
    ],
Name : 'Rahul Rajput'

  },
  {
    id: "2",
    "voucher": [
        {"name": "Rahul Rajput",
        "email": "rahul@123gmail.com",
        "phone": "9450736252",
        "address": "133 M Block Kanpur",
          "Vname": "Doctor Voucher",
          "shopName": "Dr.Rohit",
          "Vprice": "500/-"
        },
      ],
    Email: "raman@gmail.com",
    Name : 'Raman Kumar'
  },
  {
    id: "3",
    Email: "priya@gmail.com",
    "voucher": [
        {"name": "Rahul Rajput",
        "email": "rahul@123gmail.com",
        "phone": "9450736252",
        "address": "133 M Block Kanpur",
          "Vname": "Doctor Voucher",
          "shopName": "Dr.Rohit",
          "Vprice": "500/-"
        },
      ],
       Name : 'Priya Singh'
  },
  {
    id: "4",
    Email: "amit@gmail.com",
    "voucher": [
        {"name": "Rahul Rajput",
        "email": "rahul@123gmail.com",
        "phone": "9450736252",
        "address": "133 M Block Kanpur",
          "Vname": "Doctor Voucher",
          "shopName": "Dr.Rohit",
          "Vprice": "500/-"
        },
      ],
    Name : 'Amit Kumar'
  },
  {
    id: "5",
    Email: "vivek@gmail.com",
    "voucher": [
        {"name": "Rahul Rajput",
        "email": "rahul@123gmail.com",
        "phone": "9450736252",
        "address": "133 M Block Kanpur",
          "Vname": "Doctor Voucher",
          "shopName": "Dr.Rohit",
          "Vprice": "500/-"
        },
      ],
    Name : 'Vivek Rajput'
  },
];

const CustomerData = ({ navigation }) => {

  const [selectedId, setSelectedId] = useState(null);

  const onEmail = (data) => {
    setSelectedId(data.id);
    navigation.navigate("CustomerInfo", { data: data })
  }

  const renderItem = ({ item }) => {
    const backgroundColor = item.id === selectedId ? "#FB8B0766" : null;
    const color = item.id === selectedId ? 'white' : 'black';

    return (
      <TouchableOpacity style={[styles.data_container, { backgroundColor: backgroundColor }]} onPress={() => onEmail(item)} >
        <View style={{ justifyContent: "center" }}>
          <Text style={styles.data_text}>{item.Name}</Text>
        </View>
        <View style={{ justifyContent: "center" }}>
          <Text style={styles.data_text} >{item.Email}</Text>
        </View>
      </TouchableOpacity>
    );
  };

  return (
    <>
      <SalesHeader navigation={navigation} />
      <SafeAreaView style={styles.container}>
        <View style={{ flexDirection: "row" }}>
          <TouchableOpacity style={{ marginTop: normalize(20), marginLeft: normalize(20) }} onPress={() => navigation.goBack()} >
            <Image source={left} style={{ height: normalize(30), width: normalize(30) }} />
          </TouchableOpacity>
          <Text style={{ fontFamily: fonts.montserrat_bold, fontSize: normalize(22), fontWeight: 'bold', marginLeft: normalize(80), marginTop: normalize(20) }}>Customer Details</Text>
        </View>
        <View style={{ borderRadius: normalize(20), backgroundColor: '#FFDCAE99', width: normalize(340), height: normalize(83), alignSelf: "center", marginTop: normalize(15) }}>
          <View style={{ flexDirection: "row", alignSelf: "center", marginTop: normalize(15) }}>
            <Image source={sale1} style={{ height: normalize(50), width: normalize(50), resizeMode: "contain", alignSelf: "center", marginLeft: normalize(8), marginTop: 5 }} />
            <Text style={{ fontSize: normalize(18), fontWeight: '500', marginLeft: 25, marginTop: 10, color: "#000000" }}  >Total Customer <Text style={{ fontSize: normalize(17), fontWeight: '500', marginLeft: 5, color: '#08D635', fontWeight: '800', fontFamily: fonts.montserrat_regular }}>960</Text></Text>
            <View style={{ flexDirection: "row", marginTop: normalize(10), }} >
              <Image source={rising} style={{ width: normalize(40), height: normalize(25), marginLeft: normalize(10), alignSelf: "center" }} />
              <Text style={{ fontFamily: fonts.montserrat_regular, fontSize: normalize(16), color: "#08D635", top: normalize(20) }} >5.6%</Text>
            </View>
          </View>
        </View>
        <View style={{ width: normalize(340), borderRadius: normalize(10), backgroundColor: "#D0E3FFB0", marginVertical: normalize(20), alignSelf: "center" }}>
          <View style={{ flexDirection: "row", justifyContent: "space-around", marginTop: normalize(20), marginLeft: normalize(20) }}>
            <Text style={styles.data_text}>Customer Name</Text>
            <Text style={styles.data_text} >Customer Email</Text>
          </View>
          <View style={{ width: normalize(340), borderColor: "#797877", borderBottomWidth: 1.2, alignSelf: "center", marginTop: normalize(10) }} />
          <FlatList
            data={DATA}
            renderItem={renderItem}
            keyExtractor={(item) => item.id}
            extraData={selectedId}
            style={{marginLeft:30}}
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
  title: {
    fontSize: 32,
  },
  data_text: {
    fontFamily: fonts.montserrat_semibold,
    fontSize: normalize(16),
    color: "#000000",
  },
  data_container: {
    flexDirection: "row",
    justifyContent: "space-around",
    marginTop: normalize(10),
    height: normalize(30),
    width: normalize(320),
    borderRadius: normalize(25),
    alignSelf: "center"
  }
});

export default CustomerData;