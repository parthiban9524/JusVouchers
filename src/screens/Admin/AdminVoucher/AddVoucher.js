import React from "react";
import { View, Text, TextInput, StyleSheet,TouchableOpacity } from "react-native";
import { Colors } from "react-native/Libraries/NewAppScreen";
import AdminHeader from "../../../components/AdminHeader";
import { fonts, normalize } from "../../../components/Utils";
import {FileUploader} from "react-drag-drop-file";

const fileTypes = ["JPEG","PNG","GIF"];

export default function AddVoucher(navigation) {
    const [voucher, addVoucher] = React.useState(null);
    const [voucherCategory, addVoucherCategory] = React.useState(null);
    const [voucherupload, addVoucherupload] = React.useState(null);
    const [file,setfile] =React.useState(null);
    return (
        <>
            <AdminHeader navigation={navigation} />
            <View>
                <Text style={{ fontSize: normalize(20), fontFamily: fonts.inter_bold, alignSelf: 'center', marginTop: 10 }}>Add Voucher</Text>
            </View>
            <View style={{ marginTop: 20, marginLeft: 25, marginRight: 25, }}>
                <Text style={{ marginLeft: 27, fontSize: normalize(15), fontWeight: '700', color: '#2958c4' }}>Voucher Name</Text>
                <TextInput
                    style={styles.input}
                    onChangeText={addVoucher}
                    value={voucher}
                    placeholder="Enter Voucher Name"

                />
            </View>
            <View style={{ marginTop: 20, marginLeft: 25, marginRight: 25, }}>
                <Text style={{ marginLeft: 27, fontSize: normalize(15), fontWeight: '700', color: '#2958c4' }}>Voucher Category</Text>
                <TextInput
                    style={styles.input}
                    onChangeText={addVoucherCategory}
                    value={voucherCategory}
                    placeholder="Enter Voucher Category"

                />
            </View>
            <View style={{ marginTop: 20, marginLeft: 25, marginRight: 25, }}>
                <Text style={{ marginLeft: 27, fontSize: normalize(15), fontWeight: '700', color: '#2958c4' }}>Upload Voucher</Text>
                <TextInput
                    style={{
                        height: 85,
                        marginTop: 1,
                        marginLeft: 15,
                        marginRight: 15,
                        borderWidth: 1,
                        padding: 10,
                        borderRadius: 18,
                        borderColor: '#c7c1b1',
                    }}
                    onChangeText={addVoucherupload}
                    value={voucherupload}
                    placeholder="Drag here from"

                />
            </View>
            <View>
            <TouchableOpacity style={{ height: normalize(50), width: normalize(340), backgroundColor:"#F9AA44", justifyContent: "center", borderRadius: normalize(10), alignSelf: "center",marginTop:30  }} onPress={() => alert("data upload")} >
                    <Text style={{ color:'white', alignSelf: "center", fontSize: normalize(18), fontWeight: "600", fontFamily: fonts.montserrat_semibold }}>Upload</Text>
                </TouchableOpacity>
            </View>
        </>

    )
}
const styles = StyleSheet.create({
    input: {
        height: 40,
        marginTop: 1,
        marginLeft: 15,
        marginRight: 15,
        borderWidth: 1,
        padding: 10,
        borderRadius: 18,
        borderColor: '#c7c1b1'
    },
});
