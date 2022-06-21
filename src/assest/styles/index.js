import { StyleSheet } from "react-native";
import { colors, fonts, size, screenWidth, screenHeight, normalize } from '../../components/Utils';

const styles = StyleSheet.create({

    price_amount: {
        textAlign: "center",
        fontFamily: fonts.montserrat_semibold,
        fontSize: normalize(20),
        fontWeight: "600",
        color: "#000000"
    },
    price_text: {
        textAlign: "center",
        fontFamily: fonts.montserrat_semibold,
        fontSize: normalize(15),
        fontWeight: "600"
    },
    profile_text: {
        fontFamily: fonts.montserrat_semibold,
        fontSize: normalize(20),
        fontWeight: "600",
        color: "#F58220",
        marginLeft: normalize(7)
    },
    price_box: {
        height: normalize(57),
        width: normalize(157),
        backgroundColor: "#ffffff",
        borderRadius: normalize(10),
        marginLeft: normalize(20),
        justifyContent: "center",
        elevation: normalize(5),
        borderColor: "#000000"
    },
    profile_white: {
        marginTop: normalize(50),
        height: "100%",
        width: "100%",
        backgroundColor: "#ffffff",
        borderTopLeftRadius: 50,
        borderTopRightRadius: 50,
        elevation: normalize(5)
    }

})
export default styles;