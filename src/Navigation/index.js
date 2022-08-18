import React from 'react'
import { NavigationContainer } from "@react-navigation/native"
import { createStackNavigator } from "@react-navigation/stack"

import AuthLoading from '../screens/Setup/Authloading';
import AuthNavigation from './AuthNavigation';
import BottomTabNavigation from './BottomTabNavigation';
import AdminNavigation from './AdminNavigation';
import VendorNavigation from './VendorNavigation';
import SalePersonNavigation from './SalesPersonNavigation';

export default function MainNavigation() {

    const Stack = createStackNavigator();

    return (
        <NavigationContainer>
                <Stack.Navigator initialRouteName="AuthScreen" screenOptions={{ headerShown: false }} >
                    <Stack.Screen name="AuthLoading" component={AuthLoading} />
                    <Stack.Screen name="AuthScreen" component={AuthNavigation} />
                    <Stack.Screen name="DashboardNavigation" component={BottomTabNavigation} options={{ gestureEnabled: false }} />
                    <Stack.Screen name="AdminScreen" component={AdminNavigation} options={{ gestureEnabled: false }} />
                    <Stack.Screen name="VenderScreen" component={VendorNavigation} options={{ gestureEnabled: false }} />
                    <Stack.Screen name="SalesScreen" component={SalePersonNavigation} options={{ gestureEnabled: false }} />
                </Stack.Navigator>
        </NavigationContainer>

    )
}
