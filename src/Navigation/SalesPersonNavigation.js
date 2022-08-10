import React from "react"
import { createStackNavigator } from "@react-navigation/stack"

import Saleperson from "../screens/SalesPerson/saleperson";
import TodaySale from "../screens/SalesPerson/TodaySale";
import TodayTargetDetails from "../screens/SalesPerson/TodayTargetDetails";
import CustomerForm from "../screens/SalesPerson/CustomerForm";
import CustomerInfo from "../screens/SalesPerson/CustomerInfo";


export default function SalePersonNavigation() {

    const SalesNavigator = createStackNavigator();

    return (
        <SalesNavigator.Navigator initialRouteName="SalePerson" screenOptions={{ headerShown: false }} >
            <SalesNavigator.Screen name="SalePerson" component={Saleperson} options={{ gestureEnabled: false }} />
            <SalesNavigator.Screen name="TodaySale" component={TodaySale} />
            <SalesNavigator.Screen name="TodayTargetDetails" component={TodayTargetDetails} />
            <SalesNavigator.Screen name="CustomerForm" component={CustomerForm} />
            <SalesNavigator.Screen name="CustomerInfo" component={CustomerInfo} />
            <SalesNavigator.Screen name="CustomerData" component={CustomerInfo} />
        </SalesNavigator.Navigator>
    )
}