import React from "react";
import { View, Text, TextInput, StyleSheet, ScrollView, Image } from "react-native";
import { Colors } from "react-native/Libraries/NewAppScreen";
import AdminHeader from "../../../components/AdminHeader";
import { fonts, normalize } from "../../../components/Utils";
import { lines } from "../../../components/Icons";
import { FileUploader } from "react-drag-drop-file";
import Submitbutton from "../../../components/Submitbutton";

const fileTypes = ["JPEG", "PNG", "GIF"];

export default function AdminBlog({ navigation }) {
    const [Blog, setBlog] = React.useState(null);
    const [Blogcategory, setBlogCategory] = React.useState(null);
    const [BlogUpload, setBlogUpload] = React.useState(null);
    const [file, setfile] = React.useState(null);

    return (
        <>
            <AdminHeader navigation={navigation} />
            <ScrollView style = {{flex : 1, backgroundColor : "#ffffff"}} >
                <View style={{ marginTop: normalize(10) }} >
                    <Text style={{ fontSize: normalize(20), fontFamily: fonts.montserrat_semibold, alignSelf: 'center', marginTop: 10 }}>Add Blog</Text>
                </View>
                <View style={{ marginTop: 20, }}>
                    <Text style={{ marginLeft: normalize(65), fontSize: normalize(15), fontWeight: '700', color: '#2958c4' }}>Blog Name</Text>
                    <TextInput
                        style={styles.input}
                        onChangeText={setBlog}
                        value={Blog}
                        placeholder="Enter Blog Name"

                    />
                </View>
                <View style={{ marginTop: 20,  }}>
                    <Text style={{ marginLeft: normalize(65), fontSize: normalize(15), fontWeight: '700', color: '#2958c4' }}>Blog Category</Text>
                    <TextInput
                        style={styles.input}
                        onChangeText={Blogcategory}
                        value={setBlogCategory}
                        placeholder="Enter Blog Category"

                    />
                </View>
                <View style={{ marginTop: normalize(20), }}>
                    <Text style={{ marginLeft: normalize(65), fontSize: normalize(15), fontWeight: '700', color: '#2958c4', }}>Upload Blog Image</Text>
                    <Image source={lines} style={{ height: normalize(90), width: normalize(270), alignSelf: "center", top: 5 }} />
                    <View style={{ position: "absolute", alignSelf: "center", marginTop: normalize(45) }} >
                        <TextInput
                            style={styles.input_one}
                            placeholder="Drag here from Upload"
                        />
                    </View>
                </View>
                <View style={{ marginTop: 20, }}>
                    <Text style={{ marginLeft: normalize(65), fontSize: normalize(15), fontWeight: '700', color: '#2958c4' }}>Blog Content</Text>
                    <TextInput
                        style={styles.input_two}
                        onChangeText={setBlogUpload}
                        value={BlogUpload}
                        placeholder="Enter Blog Content"

                    />
                </View>
                <View style={{ marginTop: normalize(30) }} >
                    <Submitbutton voucher={true} bg={"#F58220"} text={"Upload"} txtclr={"#ffffff"} onpress={() => navigation.navigate("BlogUpload")} />
                </View>
            </ScrollView>
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
    input_two: {
        height: normalize(275),
        width: normalize(270),
        elevation: 5,
        backgroundColor: "#ffffff",
        borderRadius: normalize(18),
        alignSelf : "center",
        paddingBottom : normalize(240),
        paddingLeft: normalize(15),
        marginTop: 5,
        fontFamily: fonts.lato_regular,
        fontSize: normalize(12),
        fontWeight: "500"
    },
});
