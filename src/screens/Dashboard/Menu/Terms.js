import React from "react";
import { View, Text, Image, StyleSheet, ScrollView } from "react-native"

import { logo } from "../../../components/Icons";
import Header from "../../../components/Header";
import { fonts, normalize } from "../../../components/Utils";
import term from "../../../assest/images/term.png"
import { create } from "react-test-renderer";

export default function Terms({ navigation }) {
    return (
        <>
            <Header navigation={navigation} />
            <ScrollView style={{ flex: 1, backgroundColor: "#ffffff" }} showsVerticalScrollIndicator={false} >
                <View style={{ alignSelf: "center", marginTop: normalize(20) }} >
                    <Text style={{ fontFamily: fonts.montserrat_semibold, color: "#000000", fontSize: normalize(22) }} >Terms And Conditions</Text>
                </View>
                <View style={{ height: normalize(96), width: normalize(320), backgroundColor: "#FFDCAE", borderRadius: normalize(10), alignSelf: "center", marginTop: normalize(20), flexDirection: "row" }} >
                    <View style={{ justifyContent: "center", marginLeft: normalize(50) }} >
                        <Image source={logo} style={{ height: normalize(62), width: normalize(104), resizeMode: "contain", marginLeft: 10, }} />
                    </View>
                    <View style={{ justifyContent: "center", marginLeft: normalize(30) }} >
                        <Image source={term} style={{ height: normalize(62), width: normalize(104), resizeMode: "contain", marginLeft: 10, }} />
                    </View>
                </View>
                <View style={{ marginTop: normalize(30), }}>
                    <Text style={styles.header_text} >Who We Are</Text>
                    <Text style={{ fontFamily: fonts.montserrat_semibold, color: 'blue', fontSize: normalize(16), marginTop: normalize(10), textAlign: "center" }} onPress={() => Linking.openURL('https://jusvouchers.com')}> See Our website : https://jusvouchers.com </Text>
                </View>
                <View style={{ marginTop: normalize(30), }} >
                    <Text style={styles.header_text} >Comments</Text>
                    <Text style={styles.footer_text} >When visitors leave comments on the site we collect the data shown in the comments form, and also the visitor’s IP address and browser user agent string to help spam detection.</Text>
                    <Text style={styles.footer_text} >An anonymized string created from your email address (also called a hash) may be provided to the Gravatar service to see if you are using it. The Gravatar service privacy policy is available here: https://automattic.com/privacy/. After approval of your comment, your profile picture is visible to the public in the context of your comment.</Text>
                </View>
                <View style={{ marginTop: normalize(20) }} >
                    <Text style={styles.header_text} >Media</Text>
                    <Text style={styles.footer_text} >If you upload images to the website, you should avoid uploading images with embedded location data (EXIF GPS) included. Visitors to the website can download and extract any location data from images on the website.</Text>
                </View>
                <View style={{ marginTop: normalize(20) }} >
                    <Text style={styles.header_text} >Cookies</Text>
                    <Text style={styles.footer_text} > If you leave a comment on our site you may opt-in to saving your name, email address and website in cookies. These are for your convenience so that you do not have to fill in your details again when you leave another comment. These cookies will last for one year.</Text>
                    <Text style={styles.footer_text} > If you visit our login page, we will set a temporary cookie to determine if your browser accepts cookies. This cookie contains no personal data and is discarded when you close your browser.</Text>
                    <Text style={styles.footer_text} > When you log in, we will also set up several cookies to save your login information and your screen display choices. Login cookies last for two days, and screen options cookies last for a year. If you select "Remember Me", your login will persist for two weeks. If you log out of your account, the login cookies will be removed.</Text>
                </View>
                <View style={{ marginTop: normalize(20) }} >
                    <Text style={styles.header_text} >Embedded content from other websites</Text>
                    <Text style={styles.footer_text} > Articles on this site may include embedded content (e.g. videos, images, articles, etc.). Embedded content from other websites behaves in the exact same way as if the visitor has visited the other website.</Text>
                    <Text style={styles.footer_text} > These websites may collect data about you, use cookies, embed additional third-party tracking, and monitor your interaction with that embedded content, including tracking your interaction with the embedded content if you have an account and are logged in to that website.</Text>
                </View>
                <View style={{ marginTop: normalize(20) }} >
                    <Text style={styles.header_text} >Who we share your data with</Text>
                    <Text style={styles.footer_text} >If you request a password reset, your IP address will be included in the reset email.</Text>
                </View>
                <View style={{ marginTop: normalize(20) }} >
                    <Text style={styles.header_text} >How long we retain your data</Text>
                    <Text style={styles.footer_text} > If you leave a comment, the comment and its metadata are retained indefinitely. This is so we can recognize and approve any follow-up comments automatically instead of holding them in a moderation queue.</Text>
                    <Text style={styles.footer_text} > For users that register on our website (if any), we also store the personal information they provide in their user profile. All users can see, edit, or delete their personal information at any time (except they cannot change their username). Website administrators can also see and edit that information.</Text>
                </View>
                <View style={{ marginTop: normalize(20) }} >
                    <Text style={styles.header_text} >What rights you have over your data</Text>
                    <Text style={styles.footer_text} > If you have an account on this site, or have left comments, you can request to receive an exported file of the personal data we hold about you, including any data you have provided to us. You can also request that we erase any personal data we hold about you. This does not include any data we are obliged to keep for administrative, legal, or security purposes.</Text>
                </View>
                <View style={{ marginTop: normalize(20) }} >
                    <Text style={styles.header_text} >Where we send your data</Text>
                    <Text style={styles.footer_text} >Visitor comments may be checked through an automated spam detection service.</Text>
                </View>
                <View style={{ marginBottom: normalize(30) }} />
            </ScrollView>
        </>
    )
}

const styles = StyleSheet.create(
    {
        header_text: {
            fontFamily: fonts.montserrat_semibold,
            color: "#000000",
            fontSize: normalize(18),
            alignSelf: "center"
        },
        footer_text: {
            fontFamily: fonts.montserrat_regular,
            color: '#000000',
            fontSize: normalize(15),
            marginTop: normalize(10),
            marginHorizontal: normalize(30)
        }

    }
)
