import React from "react";
import { View, Text, TextInput, StyleSheet, TouchableOpacity, ScrollView } from "react-native";
import { Colors } from "react-native/Libraries/NewAppScreen";
import AdminHeader from "../../../components/AdminHeader";
import { fonts, normalize } from "../../../components/Utils";
import { FileUploader } from "react-drag-drop-file";

const fileTypes = ["JPEG", "PNG", "GIF"];

export default function AdminBlog(navigation) {
    const [Blog, setBlog] = React.useState(null);
    const [Blogcategory, setBlogCategory] = React.useState(null);
    const [BlogUpload, setBlogUpload] = React.useState(null);
    const [file, setfile] = React.useState(null);

    return (
        <>
            <AdminHeader navigation={navigation} />
            <ScrollView>
                <View>
                    <Text style={{ fontSize: normalize(20), fontFamily: fonts.inter_bold, alignSelf: 'center', marginTop: 10 }}>Add Blog</Text>
                </View>
                <View style={{ marginTop: 20, marginLeft: 25, marginRight: 25, }}>
                    <Text style={{ marginLeft: 27, fontSize: normalize(15), fontWeight: '700', color: '#2958c4' }}>Blog Name</Text>
                    <TextInput
                        style={styles.input}
                        onChangeText={setBlog}
                        value={Blog}
                        placeholder="Enter Blog Name"

                    />
                </View>
                <View style={{ marginTop: 20, marginLeft: 25, marginRight: 25, }}>
                    <Text style={{ marginLeft: 27, fontSize: normalize(15), fontWeight: '700', color: '#2958c4' }}>Blog Category</Text>
                    <TextInput
                        style={styles.input}
                        onChangeText={Blogcategory}
                        value={setBlogCategory}
                        placeholder="Enter Blog Category"

                    />
                </View>
                <View style={{ marginTop: 20, marginLeft: 25, marginRight: 25, }}>
                    <Text style={{ marginLeft: 27, fontSize: normalize(15), fontWeight: '700', color: '#2958c4' }}>Upload Blog Image</Text>
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
                        onChangeText={setBlogUpload}
                        value={BlogUpload}
                        placeholder="Drag here from"

                    />
                </View>
                <View style={{ marginTop: 20, marginLeft: 25, marginRight: 25, }}>
                    <Text style={{ marginLeft: 27, fontSize: normalize(15), fontWeight: '700', color: '#2958c4' }}>Blog Content</Text>
                    <TextInput
                        style={{
                            height: 180,
                            marginTop: 1,
                            marginLeft: 15,
                            marginRight: 15,
                            borderWidth: 1,
                            borderRadius: 18,
                            borderColor: '#c7c1b1',
                        }}
                        onChangeText={setBlogUpload}
                        value={BlogUpload}
                        placeholder="Enter Blog Content"

                    />
                </View>
                <View>
                    <TouchableOpacity style={{ height: normalize(50), width: normalize(300), backgroundColor: "#F9AA44", justifyContent: "center", borderRadius: normalize(10), alignSelf: "center", marginTop: 30 }} onPress={() => alert("data upload")} >
                        <Text style={{ color: 'white', alignSelf: "center", fontSize: normalize(18), fontWeight: "600", fontFamily: fonts.montserrat_semibold }}>Upload</Text>
                    </TouchableOpacity>
                </View>
            </ScrollView>
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
