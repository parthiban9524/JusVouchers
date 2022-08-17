import React from "react";
import { createStackNavigator } from "@react-navigation/stack"

import Welcome from "../screens/Setup/Welcome";
import Login from "../screens/Setup/Login";
import Signup from "../screens/Setup/Signup";
import AdminSignup from "../screens/Setup/AdminSignup";
import VenderSignup from "../screens/Setup/VenderSignup";
import SalesPersonSignup from "../screens/Setup/SalesPersonSignup";
import ForgotPassword from "../screens/Setup/ForgotPassword";
import ResetPasssword from "../screens/Setup/ResetPasssword";
import ContactUs from "../screens/Dashboard/Menu/ContactUs";
import LoginotpAuth from "../screens/Setup/LoginotpAuth";
import InputOTPScreen from "../screens/Setup/InputOTPScreen";

export default function AuthNavigation() {

    const AuthNavigator = createStackNavigator();

    return (
        <AuthNavigator.Navigator initialRouteName="Welcome" screenOptions={{ headerShown: false }} >
            <AuthNavigator.Screen name="Welcome" component={Welcome} />
            <AuthNavigator.Screen name="Login" component={Login} />
            <AuthNavigator.Screen name="Signup" component={Signup} />
            <AuthNavigator.Screen name="AdminSignup" component={AdminSignup} />
            <AuthNavigator.Screen name="VenderSignup" component={VenderSignup} />
            <AuthNavigator.Screen name="SalesPersonSignup" component={SalesPersonSignup} />
            <AuthNavigator.Screen name="ForgotPassword" component={ForgotPassword} />
            <AuthNavigator.Screen name="ResetPassword" component={ResetPasssword} />
            <AuthNavigator.Screen name="ContactUs" component={ContactUs} />
            <AuthNavigator.Screen name="LoginotpAuth" component={LoginotpAuth} />
            <AuthNavigator.Screen name="InputOTPScreen" component={InputOTPScreen} />
        </AuthNavigator.Navigator>
    )
}
