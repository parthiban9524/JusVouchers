import React from "react";
import { View, Text, TextInput, StyleSheet, Image } from "react-native";
import { Colors } from "react-native/Libraries/NewAppScreen";
import AdminHeader from "../../../components/AdminHeader";
import { fonts, normalize } from "../../../components/Utils";
import Submitbutton from "../../../components/Submitbutton";
import { FileUploader } from "react-drag-drop-file";
import { lines } from "../../../components/Icons";

const fileTypes = ["JPEG", "PNG", "GIF"];

export default function VenderAddVoucher({ navigation }) {

    const [voucher, addVoucher] = React.useState(null);
    const [voucherCategory, addVoucherCategory] = React.useState(null);
    const [voucherupload, addVoucherupload] = React.useState(null);
    const [file, setfile] = React.useState(null);

    return (
        <>
            <AdminHeader navigation={navigation} />
            <View style={{ flex: 1, backgroundColor: "#ffffff" }} >
                <View>
                    <Text style={{ fontSize: normalize(20), fontFamily: fonts.montserrat_semibold, alignSelf: 'center', marginTop: normalize(20), color : "#000000" }}>Add Voucher</Text>
                </View>
                <View style={{ marginTop: 20 }}>
                    <Text style={{ marginLeft: normalize(65), fontSize: normalize(15), fontWeight: '700', color: '#2958c4' }}>Voucher Name</Text>
                    <TextInput
                        style={styles.input}
                        onChangeText={addVoucher}
                        value={voucher}
                        placeholder="Enter Voucher Name"

                    />
                </View>
                <View style={{ marginTop: 20, }}>
                    <Text style={{ marginLeft: normalize(65), fontSize: normalize(15), fontWeight: '700', color: '#2958c4' }}>Voucher Category</Text>
                    <TextInput
                        style={styles.input}
                        onChangeText={addVoucherCategory}
                        value={voucherCategory}
                        placeholder="Enter Voucher Category"

                    />
                </View>
                <View style={{ marginTop: normalize(20), }}>
                    <Text style={{ marginLeft: normalize(70), fontSize: normalize(15), fontWeight: '700', color: '#2958c4', }}>Upload Voucher</Text>
                    <Image source={lines} style={{ height: normalize(90), width: normalize(270), alignSelf: "center", top: 5 }} />
                    <View style={{ position: "absolute", alignSelf: "center", marginTop: normalize(45) }} >
                        <TextInput
                            style={styles.input_one}
                            onChangeText={addVoucherupload}
                            value={voucherupload}
                            placeholder="Drag here from Upload"
                        />
                    </View>
                </View>
                <View style={{ marginTop: normalize(46) }} >
                    <Submitbutton voucher={true} bg={"#F58220"} text={"Upload"} txtclr={"#ffffff"} onpress={() => navigation.navigate("VenderVoucherUpload")} />
                </View>
            </View>
        </>

    )
}
const styles = StyleSheet.create({
    input: {
        height: normalize(35),
        width: normalize(270),
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
        fontFamily: fonts.lato_regular,
        fontSize: normalize(12),
        fontWeight: "500"
    },
});