import React from "react";
import { View, Text, StatusBar, ScrollView,TouchableOpacity,Image} from "react-native";
import { connect } from "react-redux";
import { Field, reduxForm } from "redux-form";

import { fonts, normalize } from "../../components/Utils";
import {  mail, phone, user, left, Address, Price, VName } from "../../components/Icons"
import Input from "../../components/Input";
import Submitbutton from "../../components/Submitbutton"
import SalesHeader from "../../components/SalesHeader"
import AddVoucher from "../Admin/AdminVoucher/AddVoucher";

function CustomerForm({ navigation }) {
    return (

        <ScrollView style={{ flex: 1, backgroundColor: "#ffffff" }} >
            <StatusBar backgroundColor={"#F9AA44"} translucent={false} />
            <SalesHeader navigation={navigation} />
            <TouchableOpacity style={{ marginTop: normalize(20),marginLeft:normalize(20) }} onPress={() => navigation.navigate("SalePerson")} >
            <Image source={left} style={{ height: normalize(30), width: normalize(30) }} />
          </TouchableOpacity>
            <View style={{alignSelf:'center' }} >
          
                <Text style={{ fontSize: normalize(24), fontWeight: 'bold' }}>Get Customer Details</Text>
            </View>
            <View style={{ marginTop: normalize(25) }} >
                <Field
                    label="Customer Full Name"
                    name="Full name"
                    component={Input}
                    img={user}
                    id={1}

                />
            </View>
            <View >
                <Field
                    label="Phone"
                    name="phone"
                    component={Input}
                    img={phone}
                    id={1}
                    
                />
            </View>
            <View  >
                <Field
                    label="Email"
                    name="email"
                    component={Input}
                    img={mail}
                    id={1}
                    tint color


                />
            </View>
            <View  >
                <Field
                    label="Address"
                    name="Address"
                    component={Input}
                    img={Address}
                    id={1}
                />
            </View>

            <View  >
                <Field
                    label="Voucher Name"
                    name="VName"
                    component={Input}
                    img={VName}
                    id={1}
                />
            </View>
            <View  >
                <Field
                    label="Voucher Price"
                    name="VPrice"
                    component={Input}
                    img={Price}
                    id={1}
                />
            </View>
            <View style={{ marginTop: normalize(13) }} >
                <Submitbutton bg={"#f69632"} text={"Submit"} txtclr={"#ffffff"} onpress={() => alert("Form Submit")} big={true} />
            </View>

        </ScrollView>
    )
}
export default connect(null, null)(reduxForm({
    form: 'CustomerForm',
    enableReinitialize: true
})(CustomerForm));