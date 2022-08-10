import React, { useState } from "react";
import { View, Text, TextInput, StyleSheet, Image, TouchableOpacity } from "react-native";
import { connect } from "react-redux";
import { Field, reduxForm } from "redux-form";
import { required, email } from 'redux-form-validators';
import { launchImageLibrary } from 'react-native-image-picker'


import AdminHeader from "../../../components/AdminHeader";
import { fonts, normalize } from "../../../components/Utils";
import Submitbutton from "../../../components/Submitbutton";
import Input from "../../../components/Input";
import { LoginData } from "../../../components/Authconst";

import { submitVoucher } from "../../../actions";

 function AddVoucher(props) {

    const {navigation ,submitVoucher, handleSubmit, serverError} = props;
    const fileTypes = ["JPEG", "PNG", "GIF"];
    const submit = value => {
        const userVal = LoginData.data
        console.log("UserVal",userVal)
        const val1 = value;
        const val2 = { "UPLOAD_VOUCHER": filePath.uri };
        const data = Object.assign(val1, val2)
        const user = { "USER_ID" : userVal.userrole}
        console.log("user",user)
        const val = Object.assign(data, user)
        console.log("val",val)
        submitVoucher(val);
    }

    const [voucher, addVoucher] = React.useState(null);
    const [voucherCategory, addVoucherCategory] = React.useState(null);
    const [filePath, setFilePath] = useState({});
    

    const chooseFile = (type) => {
        let options = {
            mediaType: type,
            maxWidth: 300,
            maxHeight: 550,
            quality: 1,
        };
        launchImageLibrary(options, (response) => {
            console.log('Response = ', response);

            if (response.didCancel) {
                alert('User cancelled camera picker');
                return;
            } else if (response.errorCode == 'camera_unavailable') {
                alert('Camera not available on device');
                return;
            } else if (response.errorCode == 'permission') {
                alert('Permission not satisfied');
                return;
            } else if (response.errorCode == 'others') {
                alert(response.errorMessage);
                return;
            }
            console.log('base64 -> ', response.base64);
            console.log('uri -> ', response.uri);
            console.log('width -> ', response.width);
            console.log('height -> ', response.height);
            console.log('fileSize -> ', response.fileSize);
            console.log('type -> ', response.type);
            console.log('fileName -> ', response.fileName);
            setFilePath(response.assets[0]);
        });
    };

    const upload = () => {
        chooseFile('photo')
    }



    return (
        <>
            <AdminHeader navigation={navigation} />
            <View style={{ flex: 1, backgroundColor: "#ffffff" }} >
                <View>
                    <Text style={{ fontSize: normalize(20), fontFamily: fonts.montserrat_semibold, alignSelf: 'center', marginTop: normalize(20), color: "#000000" }}>Add Voucher</Text>
                </View>
                <View style={{ marginTop: 20 }}>
                    <Text style={{ marginLeft: normalize(45), fontSize: normalize(19), fontWeight: '700', color: '#2958c4' }}>Voucher Name</Text>
                    <Field
                    label="Enter Voucher Name"
                    name="VOUCHER_NAME"
                    component={Input}
                    id={4}
                    autoCapitalize={'none'}
                    validate={[required()]}
                />
                </View>
                <View style={{ marginTop: 20, }}>
                    <Text style={{ marginLeft: normalize(45), fontSize: normalize(19), fontWeight: '700', color: '#2958c4' }}>Voucher Category</Text>
                    <Field
                    label="Enter the Voucher Category"
                    name="VOUCHER_CATEGORY"
                    component={Input}
                    id={4}
                    autoCapitalize={'none'}
                    validate={[required()]}
                />
                </View>
                <View style={{ marginTop: normalize(20), }}>
                    <Text style={{ marginLeft: normalize(50), fontSize: normalize(19), fontWeight: '700', color: '#2958c4', }}>Upload Voucher</Text>
                    <TouchableOpacity style={styles.input_one} onPress={upload}>
                        <Text style={{ fontFamily: fonts.lato_regular, fontSize: normalize(14), bottom: normalize(20), textAlign: "center" }} >Click Here To Upload Image</Text>
                        <Image
                            source={{ uri: filePath.uri }}
                            style={{ width: normalize(250), height: normalize(150), margin: 5, alignSelf: "center", resizeMode: "contain" }}
                        />
                    </TouchableOpacity>
                </View>
                <View style={{ marginTop: normalize(46) }} >
                    <Submitbutton voucher={true} bg={"#F58220"} text={"Upload"} txtclr={"#ffffff"} onpress = {handleSubmit(submit)} />
                </View>
                <View style={{ marginTop: normalize(20) }} >
                    <Submitbutton voucher={true} bg={"#F58220"} text={"Manage Voucher"} txtclr={"#ffffff"} onpress={() => navigation.navigate("VoucherHandling")} />
                </View>
            </View>
        </>

    )
}

const mapStateToProps = (state) => {
    return {
        ...state.admin,
    };
}
const mapDispatchToProps = (dispatch) => {
    return {
        submitVoucher: (data) => { dispatch(submitVoucher(data)) },
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(reduxForm({
    form: 'AddVoucher',
})(AddVoucher));


const styles = StyleSheet.create({
    input: {
        height: normalize(50),
        width: normalize(300),
        elevation: 5,
        backgroundColor: "#ffffff",
        borderRadius: normalize(18),
        alignSelf: "center",
        paddingLeft: normalize(15),
        marginTop: 5,
        fontFamily: fonts.lato_regular,
        fontSize: normalize(12),
        fontWeight: "500"
    },
    input_one: {
        height: normalize(250),
        width: normalize(300),
        elevation: 5,
        backgroundColor: "#ffffff",
        borderRadius: normalize(18),
        alignSelf: "center",
        paddingLeft: normalize(15),
        alignSelf: "center",
        marginTop: normalize(15),
        justifyContent: "center"

    },
});


