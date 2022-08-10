import React from "react";
import { createStackNavigator } from "@react-navigation/stack"

import Vouchers from "../screens/Dashboard/Vouchers/Vouchers";
import HealthForm from "../screens/Dashboard/Vouchers/HealthForm";
import Vouchers_detail from "../screens/Dashboard/Vouchers/Vouchers_detail";
import PaymentType from "../screens/Dashboard/Payment/PaymentType";
import PaymentOption from "../screens/Dashboard/Payment/PaymentOption";
import Payment from "../screens/Dashboard/Payment/Payment";
import QrCodePayment from "../screens/Dashboard/Payment/QrCodePayment";
import RedeemedVoucher from "../screens/Dashboard/Vouchers/RedeemedVoucher";
import CheckOut from "../screens/Dashboard/Vouchers/CheckOut";




export default function VoucherScreenNavigation() {

    const VouchersNavigator = createStackNavigator();

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
