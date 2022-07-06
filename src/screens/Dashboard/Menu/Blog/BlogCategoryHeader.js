import { View, Text,TouchableOpacity ,ScrollView} from 'react-native'
import React from 'react'
import { normalize ,fonts} from '../../../../components/Utils';
const AllBlog = () => {
  return (
    <>
    <ScrollView horizontal={true}>
    <View>
      <TouchableOpacity style={{ height: normalize(30), width: normalize(90), backgroundColor: "#FFDCAE", borderRadius: normalize(20), justifyContent: "center", margin:10 }}  onpress={() => alert("hello")} >
                    <Text style={{ fontSize: normalize(18), fontFamily: fonts.montserrat_regular, fontWeight: "500", textAlign: "center" }} >All</Text>
                </TouchableOpacity>
    </View>
    <View>
      <TouchableOpacity style={{ height: normalize(30), width: normalize(90), backgroundColor: "#FFDCAE", borderRadius: normalize(20), justifyContent: "center", margin:10}} >
                    <Text style={{ fontSize: normalize(18), fontFamily: fonts.montserrat_regular, fontWeight: "500", textAlign: "center" }} >Beauty</Text>
                </TouchableOpacity>
    </View>
    <View>
      <TouchableOpacity style={{ height: normalize(30), width: normalize(90), backgroundColor: "#FFDCAE", borderRadius: normalize(20), justifyContent: "center", margin:10 }} >
                    <Text style={{ fontSize: normalize(18), fontFamily: fonts.montserrat_regular, fontWeight: "500", textAlign: "center" }} >Saloon</Text>
                </TouchableOpacity>
    </View>
    <View>
      <TouchableOpacity style={{ height: normalize(30), width: normalize(90), backgroundColor: "#FFDCAE", borderRadius: normalize(20), justifyContent: "center", margin:10 }} >
                    <Text style={{ fontSize: normalize(18), fontFamily: fonts.montserrat_regular, fontWeight: "500", textAlign: "center" }} >Health</Text>
                </TouchableOpacity>
    </View>
    <View>
      <TouchableOpacity style={{ height: normalize(30), width: normalize(90), backgroundColor: "#FFDCAE", borderRadius: normalize(20), justifyContent: "center", margin:10 }} >
                    <Text style={{ fontSize: normalize(18), fontFamily: fonts.montserrat_regular, fontWeight: "500", textAlign: "center" }} >Yoga</Text>
                </TouchableOpacity>
    </View>
    <View>
      <TouchableOpacity style={{ height: normalize(30), width: normalize(90), backgroundColor: "#FFDCAE", borderRadius: normalize(20), justifyContent: "center", margin:10 }} >
                    <Text style={{ fontSize: normalize(18), fontFamily: fonts.montserrat_regular, fontWeight: "500", textAlign: "center" }} >Gym</Text>
                </TouchableOpacity>
    </View>
    </ScrollView>
    </>
  )
}

export default AllBlog;