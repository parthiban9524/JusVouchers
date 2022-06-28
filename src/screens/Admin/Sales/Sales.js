import React, { useState } from "react";
import { FlatList, SafeAreaView, StatusBar, StyleSheet, Text, TouchableOpacity, View, Image } from "react-native";
import { normalize, fonts } from "../../../components/Utils";
import { sale1, rising } from "../../../components/Icons";
import { left } from "../../../components/Icons";
import AdminHeader from "../../../components/AdminHeader";

const DATA = [
  {
    id: "1",
    Date: "02.33.1111",
    Sale: '$2666'
  },
  {
    id: "2",
    Date: "02.33.1111",
    Sale: '$2666'
  },
  {
    id: "3",
    Date: "02.33.1111",
    Sale: '$2666'
  },
  {
    id: "4",
    Date: "02.33.1111",
    Sale: '$2666'
  },
  {
    id: "5",
    Date: "02.33.1111",
    Sale: '$2666'
  },
  {
    id: "6",
    Date: "02.33.1111",
    Sale: '$2666'
  },
  {
    id: "7",
    Date: "02.33.1111",
    Sale: '$2666'
  },
  {
    id: "8",
    Date: "02.33.1111",
    Sale: '$2666'
  }, {
    id: "9",
    Date: "02.33.1111",
    Sale: '$2666'
  }, {
    id: "10",
    Date: "02.33.1111",
    Sale: '$2666'
  }, {
    id: "11",
    Date: "02.33.1111",
    Sale: '$2666'
  }, {
    id: "12",
    Date: "02.33.1111",
    Sale: '$2666'
  }, {
    id: "13",
    Date: "02.33.1111",
    Sale: '$2666'
  }, {
    id: "14",
    Date: "02.33.1111",
    Sale: '$2666'
  }, {
    id: "15",
    Date: "02.33.1111",
    Sale: '$2666'
  }, {
    id: "16",
    Date: "02.33.1111",
    Sale: '$2666'
  }, {
    id: "17",
    Date: "02.33.1111",
    Sale: '$2666'
  }, {
    id: "18",
    Date: "02.33.1111",
    Sale: '$2666'
  }, {
    id: "19",
    Date: "02.33.1111",
    Sale: '$2666'
  }, {
    id: "20",
    Date: "02.33.1111",
    Sale: '$2666'
  }, {
    id: "21",
    Date: "02.33.1111",
    Sale: '$2666'
  }, {
    id: "22",
    Date: "02.33.1111",
    Sale: '$2666'
  }, {
    id: "23",
    Date: "02.33.1111",
    Sale: '$2666'
  }
];

const Item = ({ item, navigation }) => (
  <TouchableOpacity onPress={() => navigation.navigate("SalesDetails")} style={{ backgroundColor: '#03cffc', marginRight: 12, marginLeft: 12, borderRadius: 4 }}>
    <View style={{ flexDirection: 'row', justifyContent: 'space-around', marginTop: 15 }}>
      <Text style={{ fontSize: normalize(16), fontWeight: "400" }}>{item.Date}</Text>
      <Text style={{ fontSize: normalize(16), fontWeight: "400" }}>{item.Sale}</Text>
    </View>
  </TouchableOpacity>
);

const Sales = (navigation) => {
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
    <>
      <AdminHeader navigation={navigation} />
      <SafeAreaView style={styles.container}>
        <View style={{ flexDirection: "row" }}>
          <TouchableOpacity style={{ marginTop: normalize(20), marginLeft: normalize(20) }} onPress={() => navigation.goBack()} >
            <Image source={left} style={{ height: normalize(30), width: normalize(30) }} />
          </TouchableOpacity>
          <Text style={{ fontFamily: fonts.montserrat_bold, fontSize: normalize(22), fontWeight: 'bold', marginLeft: normalize(120), marginTop: normalize(20) }}>Sales</Text>
        </View>
        <TouchableOpacity style={{ borderRadius: 20, backgroundColor: '#FFDCAE99', width: normalize(340), height: normalize(83), marginTop: normalize(20), alignSelf: "center", justifyContent: "center" }} onPress={() => navigation.navigate("SalesDetails")} >
          <View style={{ flexDirection: "row", alignSelf: "center" }}>
            <Image source={sale1} style={{ height: normalize(50), width: normalize(50), resizeMode: "contain", }} />
            <Text style={{ fontSize: normalize(18), fontWeight: '500', marginLeft: 25, marginTop: 10 }}  >Today Sale</Text>
            <View style={{ flexDirection: "row", marginTop: 10, }} >
              <Text style={{ fontSize: normalize(19), fontWeight: '500', marginLeft: normalize(15), }}>$6960</Text>
              <Image source={rising} style={{ width: normalize(40), height: normalize(25), marginLeft: normalize(20), alignSelf: "center", }} />
              <Text style={{ fontFamily: fonts.montserrat_regular, fontSize: normalize(16), color: "#08D635", top: normalize(20) }} >5.6%</Text>
            </View>
          </View>
        </TouchableOpacity>
        <View style={{ height: normalize(500), width: normalize(340), borderRadius: normalize(10), backgroundColor: "#D0E3FFB0", marginTop: normalize(20), alignSelf : "center" }}>
           <View style = {{flexDirection : "row"}}>
<Text>Date</Text>
<Text>Sales in Day</Text>

           </View>
        </View>
        {/* <View style={{ flexDirection: "row", justifyContent: 'space-around', backgroundColor: '#5ad1b9', marginLeft: 12, marginRight: 12, borderTopEndRadius: 6, borderTopLeftRadius: 6 }}>
          <Text style={{ fontSize: normalize(16), fontWeight: "600", marginLeft: 45 }}>Date</Text>
          <Text style={{ fontSize: normalize(16), fontWeight: "600", marginLeft: 70 }}>Sales in Days</Text>

        </View>

        <FlatList
          data={DATA}
          renderItem={renderItem}
          keyExtractor={(item) => item.id}
          extraData={selectedId}
        /> */}
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
});

export default Sales;