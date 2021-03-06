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
import LoginotpAuth from "./src/screens/Setup/LoginotpAuth";
import InputOTPScreen from "./src/screens/Setup/InputOTPScreen";
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
import Vouchers_detail from "./src/screens/Dashboard/Vouchers/Vouchers_detail";
import PaymentType from "./src/screens/Dashboard/Payment/PaymentType";
import PaymentOption from "./src/screens/Dashboard/Payment/PaymentOption";
import Payment from "./src/screens/Dashboard/Payment/Payment";
import RedeemedVoucher from "./src/screens/Dashboard/Vouchers/RedeemedVoucher";
import Sales from "./src/screens/Admin/Sales/Sales";
import SalesDetails from "./src/screens/Admin/Sales/SalesDetails";
import Favorites from "./src/screens/Dashboard/Profile/Favorites";
import OrderHistory from "./src/screens/Dashboard/Profile/OrderHistory";
import QrCodePayment from "./src/screens/Dashboard/Payment/QrCodePayment";
import HealthForm from "./src/screens/Dashboard/Vouchers/HealthForm";

import DashboardHome from "./src/screens/Admin/DashboardHome";
import AddVoucher from "./src/screens/Admin/AdminVoucher/AddVoucher";
import UserDetails from "./src/screens/Admin/User/UserDetails";
import User from "./src/screens/Admin/User/User";
import Venders from "./src/screens/Admin/Venders/Venders";
import VendersDetails from "./src/screens/Admin/Venders/VendersDetails";
import BlogUpload from "./src/screens/Admin/AdminBlog/BlogUpload";
import AdminBlog from "./src/screens/Admin/AdminBlog/AdminBlog";
import AdminUpload from "./src/screens/Admin/AdminVoucher/Adminupload";
import VenderDash from "./src/screens/Vender/VenderDash";
import VenderSale from "./src/screens/Vender/VenderSale/VenderSale";
import VenderSaleDetails from "./src/screens/Vender/VenderSale/VenderSaleDetails";
import Details from "./src/screens/Vender/VenderSale/Details";
import VenderSignup from "./src/screens/Setup/VenderSignup";
import Exclusive from "./src/screens/Dashboard/Menu/Exclusive";


import Saleperson from "./src/screens/SalesPerson/saleperson";
import CustomerForm from "./src/screens/SalesPerson/CustomerForm";
import TodaySale from "./src/screens/SalesPerson/TodaySale";
import TodayTargetDetails from "./src/screens/SalesPerson/TodayTargetDetails";
import SalesPersonSignup from "./src/screens/Setup/SalesPersonSignup";
import CustomerInfo from "./src/screens/SalesPerson/CustomerInfo";
import Approve from "./src/screens/Vender/Approve";
import CustomerData from "./src/screens/SalesPerson/CustomerData";

import OrderCancellation from "./src/screens/Dashboard/Vouchers/OrderCancellation";
import VoucherQuantity from "./src/screens/Vender/VoucherQuantity";
import QuantityDetails from "./src/screens/Vender/QuantityDetails";
import BlogDetails from "./src/screens/Dashboard/Menu/BlogDetails";

import DigitalMarketing from "./src/screens/Dashboard/Menu/DigitalMarketing";
import CheckOut from "./src/screens/Dashboard/Vouchers/CheckOut";
import MSVouchers from "./src/screens/Admin/MSVouchers";
import VouchersHandling from "./src/screens/Admin/VoucherHandling";
import RemoveVoucher from "./src/screens/Admin/RemoveVoucher";
import PaymentDetails from "./src/screens/Admin/PaymentDetails";
import Privacy from "./src/screens/Dashboard/Menu/Privacy";
import Terms from "./src/screens/Dashboard/Menu/Terms";
import AdminSignup from "./src/screens/Setup/AdminSignup";
import OfflineMarketing from "./src/screens/Dashboard/Menu/OfflineMarketing";
export default function App() {

  const Stack = createStackNavigator();
  const AuthNavigator = createStackNavigator();
  const HomeNavigator = createStackNavigator();
  const VouchersNavigator = createStackNavigator();
  const AdminNavigator = createStackNavigator();
  const VenderNavigator = createStackNavigator();
  const SalesNavigator = createStackNavigator();


  function HomeScreen() {
    return (
      <HomeNavigator.Navigator initialRouteName="Home" screenOptions={{ headerShown: false }} >
        <HomeNavigator.Screen name="Home" component={Home} />
        <HomeNavigator.Screen name="AboutUs" component={AboutUs} />
        <HomeNavigator.Screen name="Blog" component={Blog} />
        <HomeNavigator.Screen name="BlogDetails" component={BlogDetails} />
        <HomeNavigator.Screen name="Favorites" component={Favorites} />
        <HomeNavigator.Screen name="OrderHistory" component={OrderHistory} />
        <HomeNavigator.Screen name="Profile" component={Profile} />
        <HomeNavigator.Screen name="Exclusive" component={Exclusive} />
        <HomeNavigator.Screen name="DigitalMarketing" component={DigitalMarketing} />
        <HomeNavigator.Screen name="OfflineMarketing" component={OfflineMarketing} />
        <HomeNavigator.Screen name="Privacy" component={Privacy} />
        <HomeNavigator.Screen name="Terms" component={Terms} />
      </HomeNavigator.Navigator>
    )
  }

  function VouchersScreen() {
    return (
      <VouchersNavigator.Navigator initialRouteName="Vouchers" screenOptions={{ headerShown: false }} >
        <VouchersNavigator.Screen name="Vouchers" component={Vouchers} />
        <VouchersNavigator.Screen name="HealthForm" component={HealthForm} />
        <VouchersNavigator.Screen name="Vouchers_detail" component={Vouchers_detail} />
        <VouchersNavigator.Screen name="PaymentType" component={PaymentType} />
        <VouchersNavigator.Screen name="PaymentOption" component={PaymentOption} />
        <VouchersNavigator.Screen name="Payment" component={Payment} />
        <VouchersNavigator.Screen name="QrCodePayment" component={QrCodePayment} />
        <VouchersNavigator.Screen name="RedeemedVoucher" component={RedeemedVoucher} />
        <VouchersNavigator.Screen name="CheckOut" component={CheckOut} />
      </VouchersNavigator.Navigator>
    )
  }

  function AuthScreen() {
    return (
      <AuthNavigator.Navigator initialRouteName="Welcome" screenOptions={{ headerShown: false }} >
        <AuthNavigator.Screen name="Welcome" component={Welcome} />
        <AuthNavigator.Screen name="Login" component={Login} />
        <AuthNavigator.Screen name="Signup" component={Signup} />
        <AuthNavigator.Screen name="AdminSignup" component={AdminSignup} />
        <AuthNavigator.Screen name="VenderSignup" component={VenderSignup} />
        <AuthNavigator.Screen name="SalesPersonSignup" component={SalesPersonSignup} />
        <AuthNavigator.Screen name="ForgotPassword" component={ForgotPassword} />
        <AuthNavigator.Screen name="ResetPassword" component={ResetPassword} />
        <AuthNavigator.Screen name="ContactUs" component={ContactUs} />
        <AuthNavigator.Screen name="LoginotpAuth" component={LoginotpAuth} />
        <AuthNavigator.Screen name="InputOTPScreen" component={InputOTPScreen} />

      </AuthNavigator.Navigator>
    )
  }

  function AdminScreen() {
    return (
      <AdminNavigator.Navigator initialRouteName="DashboardHome" screenOptions={{ headerShown: false }} >
        <AdminNavigator.Screen name="DashboardHome" component={DashboardHome} />
        <AdminNavigator.Screen name="SalesDetails" component={SalesDetails} />
        <AdminNavigator.Screen name="Sales" component={Sales} />
        <AdminNavigator.Screen name="UserDetails" component={UserDetails} />
        <AdminNavigator.Screen name="User" component={User} />
        <AdminNavigator.Screen name="Venders" component={Venders} />
        <AdminNavigator.Screen name="VendersDetails" component={VendersDetails} />
        <AdminNavigator.Screen name="AddVoucher" component={AddVoucher} />
        <AdminNavigator.Screen name="AdminUpload" component={AdminUpload} />
        <AdminNavigator.Screen name="AdminBlog" component={AdminBlog} />
        <AdminNavigator.Screen name="BlogUpload" component={BlogUpload} />
        <AdminNavigator.Screen name="MSVouchers" component={MSVouchers} />
        <AdminNavigator.Screen name="VoucherHandling" component={VouchersHandling} />
        <AdminNavigator.Screen name="RemoveVoucher" component={RemoveVoucher} />
        <AdminNavigator.Screen name="PaymentDetails" component={PaymentDetails} />
      </AdminNavigator.Navigator>
    )
  }

  function VenderScreen() {
    return (
      <VenderNavigator.Navigator initialRouteName="VenderDash" screenOptions={{ headerShown: false }} >
        <VenderNavigator.Screen name="VenderDash" component={VenderDash} />
        <VenderNavigator.Screen name="VenderSale" component={VenderSale} />
        <VenderNavigator.Screen name="VenderSaleDetails" component={VenderSaleDetails} />
        <VenderNavigator.Screen name="Details" component={Details} />
        <VenderNavigator.Screen name="Approve" component={Approve} />
        <VenderNavigator.Screen name="VoucherQuantity" component={VoucherQuantity} />
        <VenderNavigator.Screen name="QuantityDetails" component={QuantityDetails} />
      </VenderNavigator.Navigator>

    )
  }

  function SalesScreen() {
    return (
      <SalesNavigator.Navigator initialRouteName="SalePerson" screenOptions={{ headerShown: false }} >
        <SalesNavigator.Screen name="SalePerson" component={Saleperson} />
        <SalesNavigator.Screen name="TodaySale" component={TodaySale} />
        <SalesNavigator.Screen name="TodayTargetDetails" component={TodayTargetDetails} />
        <SalesNavigator.Screen name="CustomerForm" component={CustomerForm} />
        <SalesNavigator.Screen name="CustomerInfo" component={CustomerInfo} />
        <SalesNavigator.Screen name="CustomerData" component={CustomerData} />
      </SalesNavigator.Navigator>

    )
  }

  const Tab = createBottomTabNavigator();

  function DashboardNavigation() {
    return (
      <Tab.Navigator screenOptions={{ headerShown: false, tabBarShowLabel: false, tabBarHideOnKeyboard: true, tabBarStyle: { height: normalize(50), backgroundColor: "#F9AA44" } }} initialRouteName="HomeScreen"  >
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
                <Text style={{ textAlign: 'center', fontSize: normalize(12), fontFamily: fonts.inter_bold, color: "#ffffff",letterSpacing : 1 }}>{"Home"}</Text>
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
                  style={{ width: normalize(35), height: normalize(35),marginLeft:7 }}
                />
                <Text style={{ textAlign: 'center', fontSize: normalize(12), fontFamily: fonts.inter_bold, color: "#ffffff", letterSpacing : 1 }}>{"Voucher"}</Text>
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
                  style={{ width: normalize(35), height: normalize(35), marginLeft:2}}
                />
                <Text style={{ textAlign: 'center', fontSize: normalize(12), fontFamily: fonts.inter_bold, color: "#ffffff", letterSpacing : 1 }}>{"Cart"}</Text>
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
                <Text style={{ textAlign: 'center', fontSize: normalize(12), fontFamily: fonts.inter_bold, color: "#ffffff", right: 15, letterSpacing : 1 }}>{"Notification"}</Text>
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
        <Stack.Navigator initialRouteName="AuthScreen" screenOptions={{ headerShown: false }} >
          <Stack.Screen name="AuthScreen" component={AuthScreen} />
          <Stack.Screen name="DashboardNavigation" component={DashboardNavigation} />
          <Stack.Screen name="Profile" component={Profile} />
          <Stack.Screen name="AdminScreen" component={AdminScreen} />
          <Stack.Screen name="VenderScreen" component={VenderScreen} />
          <Stack.Screen name="SalesScreen" component={SalesScreen} />
        </Stack.Navigator>
      </Provider>
    </NavigationContainer>
  )
}