import React from "react";
import { View, Text, Image } from "react-native";
import { createStackNavigator } from "@react-navigation/stack"
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import { home, cart, voucher, notification } from "../components/Icons";
import { fonts, normalize } from "../components/Utils";

import HomeScreenNavigation from "./HomeScreenNavigation";
import VoucherScreenNavigation from "./VoucherScreenNavigation";
import Cart from "../screens/Dashboard/Cart";
import Notification from "../screens/Dashboard/Notification";



export default function BottomTabNavigation() {

    const Tab = createBottomTabNavigator();
    const Stack = createStackNavigator();

    function DashboardNavigation() {
        return (
            <Tab.Navigator screenOptions={{ headerShown: false, tabBarShowLabel: false, tabBarHideOnKeyboard: true, tabBarStyle: { height: normalize(50), backgroundColor: "#F9AA44" } }} initialRouteName="HomeScreen"  >
                <Tab.Screen name="HomeScreen" component={HomeScreenNavigation}
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
                                <Text style={{ textAlign: 'center', fontSize: normalize(12), fontFamily: fonts.inter_bold, color: "#ffffff", letterSpacing: 1 }}>{"Home"}</Text>
                            </View>
                        )
                    }}
                />
                <Tab.Screen name="VouchersScreen" component={VoucherScreenNavigation}
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
                                    style={{ width: normalize(35), height: normalize(35), marginLeft: 7 }}
                                />
                                <Text style={{ textAlign: 'center', fontSize: normalize(12), fontFamily: fonts.inter_bold, color: "#ffffff", letterSpacing: 1 }}>{"Voucher"}</Text>
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
                                    style={{ width: normalize(35), height: normalize(35), marginLeft: 2 }}
                                />
                                <Text style={{ textAlign: 'center', fontSize: normalize(12), fontFamily: fonts.inter_bold, color: "#ffffff", letterSpacing: 1 }}>{"Cart"}</Text>
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
                                <Text style={{ textAlign: 'center', fontSize: normalize(12), fontFamily: fonts.inter_bold, color: "#ffffff", right: 15, letterSpacing: 1 }}>{"Notification"}</Text>
                            </View>
                        )
                    }}
                />
            </Tab.Navigator>
        )
    }


    return (
        <Stack.Navigator initialRouteName="DashboardNavigation" screenOptions={{ headerShown: false }} >
            <Stack.Screen name="DashboardNavigation" component={DashboardNavigation} options={{ gestureEnabled: false }} />
        </Stack.Navigator>
    )
}