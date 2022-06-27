import React from "react";
import { View, Text, Image } from "react-native";
import { NavigationContainer } from "@react-navigation/native"
import { createStackNavigator } from "@react-navigation/stack"
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Provider } from 'react-redux';

import Welcome from "./src/screens/Setup/Welcome";
import Login from "./src/screens/Setup/Login";
import Signup from "./src/screens/Setup/Signup";
import ForgotPassword from "./src/screens/Setup/ForgotPassword";
import ResetPassword from "./src/screens/Setup/ResetPasssword";
import Store from "./src/components/Store";
import Home from "./src/screens/Dashboard/Home";

import { home, cart, voucher, notification } from "./src/components/Icons";
import Vouchers from "./src/screens/Dashboard/Vouchers/Vouchers";
import Cart from "./src/screens/Dashboard/Cart";
import Notification from "./src/screens/Dashboard/Notification";
import { fonts, normalize } from "./src/components/Utils";
import Profile from "./src/screens/Dashboard/Profile/Profile";
import ContactUs from "./src/screens/Dashboard/Menu/ContactUs";
import AboutUs from "./src/screens/Dashboard/Menu/AboutUs";
import Blog from "./src/screens/Dashboard/Menu/Blog"
import AdminDash from "./src/screens/Admin/AdminDash";
import Vouchers_detail from "./src/screens/Dashboard/Vouchers/Vouchers_detail";
import PaymentType from "./src/screens/Dashboard/Payment/PaymentType";
import PaymentOption from "./src/screens/Dashboard/Payment/PaymentOption";
import Payment from "./src/screens/Dashboard/Payment/Payment";
import RedeemedVoucher from "./src/screens/Dashboard/Vouchers/RedeemedVoucher";
import Sales from "./src/screens/Admin/Sales/Sales";
import SalesDetails from "./src/screens/Admin/Sales/SalesDetails";
import Favorites from "./src/screens/Dashboard/Profile/Favorites";
import OrderHistory from "./src/screens/Dashboard/Profile/OrderHistory";

export default function App() {

  const Stack = createStackNavigator();
  const AuthNavigator = createStackNavigator();
  const HomeNavigator = createStackNavigator();
  const VouchersNavigator = createStackNavigator();


  function HomeScreen() {
    return (
      <HomeNavigator.Navigator initialRouteName="Home" screenOptions={{ headerShown: false }} >
        <HomeNavigator.Screen name="Home" component={Home} />
        <HomeNavigator.Screen name="ContactUs" component={ContactUs} />
        <HomeNavigator.Screen name="AboutUs" component={AboutUs} />
        <HomeNavigator.Screen name="Blog" component={Blog} />
        <HomeNavigator.Screen name="Favorites" component={Favorites} />
        <HomeNavigator.Screen name="OrderHistory" component={OrderHistory} />

      </HomeNavigator.Navigator>
    )
  }

  function VouchersScreen() {
    return (
      <VouchersNavigator.Navigator initialRouteName="Vouchers" screenOptions={{ headerShown: false }} >
        <VouchersNavigator.Screen name="Vouchers" component={Vouchers} />
        <VouchersNavigator.Screen name="Vouchers_detail" component={Vouchers_detail} />
        <VouchersNavigator.Screen name="PaymentType" component={PaymentType} />
        <VouchersNavigator.Screen name="PaymentOption" component={PaymentOption} />
        <VouchersNavigator.Screen name="Payment" component={Payment} />
        <VouchersNavigator.Screen name="RedeemedVoucher" component={RedeemedVoucher} />
      </VouchersNavigator.Navigator>
    )
  }

  function AuthScreen() {
    return (
      <AuthNavigator.Navigator initialRouteName="Welcome" screenOptions={{ headerShown: false }} >
        <AuthNavigator.Screen name="Welcome" component={Welcome} />
        <AuthNavigator.Screen name="Login" component={Login} />
        <AuthNavigator.Screen name="Signup" component={Signup} />
        <AuthNavigator.Screen name="ForgotPassword" component={ForgotPassword} />
        <AuthNavigator.Screen name="ResetPassword" component={ResetPassword} />
      </AuthNavigator.Navigator>
    )
  }

  const Tab = createBottomTabNavigator();

  function DashboardNavigation() {
    return (
      <Tab.Navigator screenOptions={{ headerShown: false, tabBarShowLabel: false, tabBarHideOnKeyboard: true, tabBarStyle: { height: normalize(50), backgroundColor: "#F9AA44" } }} initialRouteName = "HomeScreen"  >
        <Tab.Screen name="HomeScreen" component={HomeScreen}
          listeners={({ navigation }) => ({
            tabPress: e => {
              e.preventDefault();
              navigation.navigate('HomeScreen', { screen: 'Home' })
            },
          })}
          options={{
            tabBarIcon: ({ focused }) => (
              <View>
                <Image source={home}
                  resizeMode='contain'
                  style={{ width: normalize(35), height: normalize(35), }}
                />
                <Text style={{ textAlign: 'center', fontSize: normalize(12), fontFamily: fonts.inter_bold, color: "#ffffff" }}>{"Home"}</Text>
              </View>
            )
          }}
        />
        <Tab.Screen name="VouchersScreen" component={VouchersScreen}
          listeners={({ navigation }) => ({
            tabPress: e => {
              e.preventDefault();
              navigation.navigate('VouchersScreen', { screen: 'Vouchers' })
            },
          })}
          options={{
            tabBarIcon: ({ focused }) => (
              <View>
                <Image source={voucher}
                  resizeMode='contain'
                  style={{ width: normalize(35), height: normalize(35), }}
                />
                <Text style={{ textAlign: 'center', fontSize: normalize(12), fontFamily: fonts.inter_bold, color: "#ffffff", right: 10 }}>{"Voucher"}</Text>
              </View>
            )
          }}
        />
        <Tab.Screen name="Cart" component={Cart}
          listeners={({ navigation }) => ({
            tabPress: e => {
              e.preventDefault();
              navigation.navigate('Cart', { screen: 'Cart' })
            },
          })}
          options={{
            tabBarIcon: ({ focused }) => (
              <View>
                <Image source={cart}
                  resizeMode='contain'
                  style={{ width: normalize(35), height: normalize(35), }}
                />
                <Text style={{ textAlign: 'center', fontSize: normalize(12), fontFamily: fonts.inter_bold, color: "#ffffff" }}>{"Cart"}</Text>
              </View>
            )
          }}
        />
        <Tab.Screen name="Notification" component={Notification}
          listeners={({ navigation }) => ({
            tabPress: e => {
              e.preventDefault();
              navigation.navigate('Notification', { screen: 'Notification' })
            },
          })}
          options={{
            tabBarIcon: ({ focused }) => (
              <View>
                <Image source={notification}
                  resizeMode='contain'
                  style={{ width: normalize(35), height: normalize(35), }}
                />
                <Text style={{ textAlign: 'center', fontSize: normalize(12), fontFamily: fonts.inter_bold, color: "#ffffff", right: 15 }}>{"Notification"}</Text>
              </View>
            )
          }}
        />
      </Tab.Navigator>
    )
  }

  return (
    <NavigationContainer>
      <Provider store={Store}>
        {/* <Stack.Navigator initialRouteName="AuthScreen" screenOptions={{ headerShown: false }} >
          <Stack.Screen name="AuthScreen" component={AuthScreen} />
          <Stack.Screen name="DashboardNavigation" component={DashboardNavigation} />
          <Stack.Screen name="Profile" component={Profile} />
          <Stack.Screen name="AdminDash" component={AdminDash} />
          <Stack.Screen name="Sales" component={Sales} />
          <Stack.Screen name="SalesDetails" component={SalesDetails} />

        </Stack.Navigator> */}
        <AdminDash/>
      </Provider>
    </NavigationContainer>
  )
}