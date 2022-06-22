import React from "react";
import { View, Text, Image, StyleSheet } from "react-native"
import { card,user } from "../../components/Icons";
import { normalize, fonts } from "../../components/Utils";
import { Card } from 'react-native-paper';
export default function Demp() {
    return (
        <>
            <View style={{ margin: 20 }} >
                <Text style={{ fontSize: normalize(22), fontWeight: 'bold' }}>Dashboard</Text>
            </View>
            <View style={{ marginLeft: 20 }} >
                <Text style={{ fontSize: normalize(19), fontWeight: 'bold',color:'green' }}>15 June 2022 Wednesday</Text>
            </View>
            <View style={{flexDirection:"row",justifyContent:"space-evenly",marginTop:12}}>
                <Card style={{borderRadius:10,backgroundColor:'#F9AA44',width:150,height:95}}>
                    <View style={{flexDirection:"row",flexWrap:"wrap"}}>
                    <Image source={card} style={{ height: normalize(55), width: normalize(55), resizeMode: "contain", alignSelf: "center" }} />
                        <Text style={{fontSize: normalize(16),fontWeight:'500',margin:5}} >
                            Today Sale
                        </Text>
                        <Text style={{fontSize: normalize(16),fontWeight:'500',margin:5}}>$6960</Text>
                    </View>
                </Card>  
                <Card style={{borderRadius:10,backgroundColor:'#F9AA44',width:150,height:95}}>
                    <View style={{flexDirection:"row",flexWrap:"wrap"}}>
                    <Image source={card} style={{ height: normalize(55), width: normalize(55), resizeMode: "contain", alignSelf: "center" }} />
                        <Text style={{fontSize: normalize(16),fontWeight:'500',margin:5}} >
                      New Vender
                        </Text>
                        <Text style={{fontSize: normalize(16),fontWeight:'500',margin:5}}>16 Venders</Text>
                    </View>
                </Card>  
            </View>
            <View style={{flexDirection:"row",justifyContent:"space-evenly",marginTop:22}}>
                <Card style={{borderRadius:10,backgroundColor:'#F9AA44',width:150,height:95}}>
                    <View style={{flexDirection:"row",flexWrap:"wrap"}}>
                    <Image source={card} style={{ height: normalize(55), width: normalize(55), resizeMode: "contain", alignSelf: "center" }} />
                        <Text style={{fontSize: normalize(16),fontWeight:'500',marginTop:10}} >
                        Order Cancel
                        </Text>
                        <Text style={{fontSize: normalize(16),fontWeight:'500',margin:5}}>8 cancle</Text>
                    </View>
                </Card>  
                <Card style={{borderRadius:10,backgroundColor:'#F9AA44',width:150,height:95}}>
                    <View style={{flexDirection:"row",flexWrap:"wrap"}}>
                    <Image source={user} style={{ height: normalize(55), width: normalize(55), resizeMode: "contain", alignSelf: "center" }} />
                        <Text style={{fontSize: normalize(16),fontWeight:'500',margin:5}} >
                            New User
                        </Text>
                        <Text style={{fontSize: normalize(16),fontWeight:'500',margin:5}}>577 User</Text>
                    </View>
                </Card>  
            </View>
            <View>
            <Image source={card} style={{ height: normalize(230), width: normalize(290), alignSelf: "center",marginTop:40 }} />
            </View>
        </> 
    )
}
const styles = StyleSheet.create({

    paragraph: {
        fontSize: 18,
        fontWeight: 'bold',
        textAlign: 'center',
        padding: 20
        , backgroundColor: "#F9AA44",
        borderRadius: 3
    },
});