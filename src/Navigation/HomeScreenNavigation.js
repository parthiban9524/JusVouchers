import React from "react";
import { createStackNavigator } from "@react-navigation/stack"

import Home from "../screens/Dashboard/Home";
import AboutUs from "../screens/Dashboard/Menu/AboutUs";
import Blog from "../screens/Dashboard/Menu/Blog";
import BlogDetails from "../screens/Dashboard/Menu/BlogDetails";
import Favorites from "../screens/Dashboard/Profile/Favorites";
import OrderHistory from "../screens/Dashboard/Profile/OrderHistory";
import Profile from "../screens/Dashboard/Profile/Profile";
import Exclusive from "../screens/Dashboard/Menu/Exclusive";
import DigitalMarketing from "../screens/Dashboard/Menu/DigitalMarketing";
import OfflineMarketing from "../screens/Dashboard/Menu/OfflineMarketing";
import Privacy from "../screens/Dashboard/Menu/Privacy";
import Terms from "../screens/Dashboard/Menu/Terms";


export default function HomeScreenNavigation() {

    const HomeNavigator = createStackNavigator();

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
