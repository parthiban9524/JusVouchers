import React from "react";
import { createStackNavigator } from "@react-navigation/stack"

import VenderDash from "../screens/Vender/VenderDash";
import VenderSale from "../screens/Vender/VenderSale/VenderSale";
import VenderSaleDetails from "../screens/Vender/VenderSale/VenderSaleDetails";
import Details from "../screens/Vender/VenderSale/Details";
import Approve from "../screens/Vender/Approve";
import VoucherQuantity from "../screens/Vender/VoucherQuantity";
import QuantityDetails from "../screens/Vender/QuantityDetails";

export default function VendorNavigation() {

    const VenderNavigator = createStackNavigator();

    return (
        <VenderNavigator.Navigator initialRouteName="VenderDash" screenOptions={{ headerShown: false }} >
            <VenderNavigator.Screen name="VenderDash" component={VenderDash} options={{ gestureEnabled: true }} />
            <VenderNavigator.Screen name="VenderSale" component={VenderSale} />
            <VenderNavigator.Screen name="VenderSaleDetails" component={VenderSaleDetails} />
            <VenderNavigator.Screen name="Details" component={Details} />
            <VenderNavigator.Screen name="Approve" component={Approve} />
            <VenderNavigator.Screen name="VoucherQuantity" component={VoucherQuantity} />
            <VenderNavigator.Screen name="QuantityDetails" component={QuantityDetails} />
        </VenderNavigator.Navigator>
    )
}