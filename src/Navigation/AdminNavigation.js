import React from "react";
import { createStackNavigator } from "@react-navigation/stack"

import DashboardHome from "../screens/Admin/DashboardHome";
import SalesDetails from "../screens/Admin/Sales/SalesDetails";
import Sales from "../screens/Admin/Sales/Sales";
import UserDetails from "../screens/Admin/User/UserDetails";
import User from "../screens/Admin/User/User";
import Venders from "../screens/Admin/Venders/Venders";
import VendersDetails from "../screens/Admin/Venders/VendersDetails";
import AddVoucher from "../screens/Admin/AdminVoucher/AddVoucher";
import AdminUpload from "../screens/Admin/AdminVoucher/Adminupload";
import AdminBlog from "../screens/Admin/AdminBlog/AdminBlog";
import BlogUpload from "../screens/Admin/AdminBlog/BlogUpload";
import MSVouchers from "../screens/Admin/MSVouchers";
import VouchersHandling from "../screens/Admin/VoucherHandling";
import RemoveVoucher from "../screens/Admin/RemoveVoucher";
import PaymentDetails from "../screens/Admin/PaymentDetails";


export default function AdminNavigation() {

    const AdminNavigator = createStackNavigator();

    return (
        <AdminNavigator.Navigator initialRouteName="DashboardHome" screenOptions={{ headerShown: false }} >
            <AdminNavigator.Screen name="DashboardHome" component={DashboardHome} options={{ gestureEnabled: false }} />
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