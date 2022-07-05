import React, { useState } from "react";
import { FlatList, SafeAreaView, StatusBar, StyleSheet, Text, TouchableOpacity, View, Image } from "react-native";
import { normalize, fonts } from "../../components/Utils";
import { sale1, rising } from "../../components/Icons";
import { left } from "../../components/Icons";
import SalesHeader from "../../components/SalesHeader";

const DATA = [
  {
    id: "1",
    Date: "24.06.2022",
    "voucher": [
      {
        "name": "Doctor Voucher",
        "shop": "Dr.Rohit",
        "price": "50/-"
      },
      {
        "name": "Saloon voucher",
        "shop": "abc saloon",
        "price": "32/-",
      },
      {
        "name": "Gym voucher",
        "shop": "abc Gym",
        "price": "74/-",
      },
      {
        "name": "Yoga voucher",
        "shop": "abc yoga class",
        "price": "32/-",
      },
      {
        "name": "Beauty voucher",
        "shop": "abc Beauty saloon",
        "price": "25/-",
      },
    ],
    Sale: '33',

  },
  {
    id: "2",
    "voucher": [
      {
        "name": "Doctor Voucher",
        "shop": "Dr.Rohit",
        "price": "65/-"
      },
      {
        "name": "Saloon voucher",
        "shop": "abc saloon",
        "price": "32/-",
      },
      {
        "name": "Gym voucher",
        "shop": "abc Gym",
        "price": "75/-",
      },
      {
        "name": "Yoga voucher",
        "shop": "abc yoga class",
        "price": "45/-",
      },
      {
        "name": "Beauty voucher",
        "shop": "abc Beauty saloon",
        "price": "36/-",
      },
    ],
    Date: "25.06.2022",
    Sale: '30'
  },
  {
    id: "3",
    Date: "26.06.2022",
    "voucher": [
      {
        "name": "Doctor Voucher",
        "shop": "Dr.Rohit",
        "price": "32/-"
      },
      {
        "name": "Saloon voucher",
        "shop": "abc saloon",
        "price": "52/-",
      },
      {
        "name": "Gym voucher",
        "shop": "abc Gym",
        "price": "45/-",
      },
      {
        "name": "Yoga voucher",
        "shop": "abc yoga class",
        "price": "63/-",
      },
      {
        "name": "Beauty voucher",
        "shop": "abc Beauty saloon",
        "price": "75/-",
      },
    ],
    Sale: '78'
  },
  {
    id: "4",
    Date: "27.06.2022",
    "voucher": [
      {
        "name": "Doctor Voucher",
        "shop": "Dr.Rohit",
        "price": "65/-"
      },
      {
        "name": "Saloon voucher",
        "shop": "abc saloon",
        "price": "45/-",
      },
      {
        "name": "Gym voucher",
        "shop": "abc Gym",
        "price": "65/-",
      },
      {
        "name": "Yoga voucher",
        "shop": "abc yoga class",
        "price": "36/-",
      },
      {
        "name": "Beauty voucher",
        "shop": "abc Beauty saloon",
        "price": "74/-",
      },
    ],
    Sale: '45'
  },
  {
    id: "5",
    Date: "28.06.2022",
    "voucher": [
      {
        "name": "Doctor Voucher",
        "shop": "Dr.Rohit",
        "price": "47/-"
      },
      {
        "name": "Saloon voucher",
        "shop": "abc saloon",
        "price": "36/-",
      },
      {
        "name": "Gym voucher",
        "shop": "abc Gym",
        "price": "45/-",
      },
      {
        "name": "Yoga voucher",
        "shop": "abc yoga class",
        "price": "85/-",
      },
      {
        "name": "Beauty voucher",
        "shop": "abc Beauty saloon",
        "price": "25/-",
      },
    ],
    Sale: '45'
  },
];

const TodaySale = ({ navigation }) => {

  const [selectedId, setSelectedId] = useState(null);

  const onDate = (data) => {
    setSelectedId(data.id);
    navigation.navigate("TodayTargetDetails", { data: data })
  }

  const renderItem = ({ item }) => {
    const backgroundColor = item.id === selectedId ? "#FB8B0766" : null;
    const color = item.id === selectedId ? 'white' : 'black';

    return (
      <TouchableOpacity style={[styles.data_container, { backgroundColor: backgroundColor }]} onPress={() => onDate(item)} >
        <View style={{ justifyContent: "center" }}>
          <Text style={styles.data_text}>{item.Date}</Text>
        </View>
        <View style={{ justifyContent: "center" }}>
          <Text style={styles.data_text} >{item.Sale}</Text>
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
          <Text style={{ fontFamily: fonts.montserrat_bold, fontSize: normalize(22), fontWeight: 'bold', marginLeft: normalize(100), marginTop: normalize(20) }}>Total Target</Text>
        </View>
        <View style={{ borderRadius: 20, backgroundColor: '#FFDCAE99', width: normalize(340), height: normalize(83), marginTop: normalize(20), alignSelf: "center", justifyContent: "center" }} >
          <View style={{ flexDirection: "row", alignSelf: "center" }}>
            <Image source={sale1} style={{ height: normalize(50), width: normalize(50), resizeMode: "contain", }} />
            <Text style={{ fontSize: normalize(20), fontWeight: '500', marginLeft: 25, marginTop: 10 }}  >Total Target</Text>
            <View style={{ flexDirection: "row", marginTop: 10, }} >
              <Text style={{ fontSize: normalize(20), fontWeight: '500', marginLeft: normalize(15), color: "#00B028" }}>50</Text>
              <Image source={rising} style={{ width: normalize(40), height: normalize(25), marginLeft: normalize(20), alignSelf: "center", }} />
              <Text style={{ fontFamily: fonts.montserrat_regular, fontSize: normalize(16), color: "#08D635", top: normalize(20) }} >5.6%</Text>
            </View>
          </View>
        </View>
        <View style={{ width: normalize(340), borderRadius: normalize(10), backgroundColor: "#D0E3FFB0", marginVertical: normalize(20), alignSelf: "center" }}>
          <View style={{ flexDirection: "row", justifyContent: "space-around", marginTop: normalize(20), marginLeft: normalize(20) }}>
            <Text style={styles.data_text}>Date</Text>
            <Text style={styles.data_text} >Target Complete</Text>
          </View>
          <View style={{ width: normalize(340), borderColor: "#797877", borderBottomWidth: 1.2, alignSelf: "center", marginTop: normalize(10) }} />
          <FlatList
            data={DATA}
            renderItem={renderItem}
            keyExtractor={(item) => item.id}
            extraData={selectedId}
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

export default TodaySale;