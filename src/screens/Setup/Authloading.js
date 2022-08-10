import React, { useEffect } from 'react';
import { View } from 'react-native';

import Loading from "../../components/Loading"
import { LoginData } from '../../components/Authconst';

const AuthLoading = ({ navigation }) => {
    useEffect(() => {
        const User = LoginData.data
        const UserRole = User.userrole
    
       if(UserRole){
        if(UserRole == 1)
        {
            navigation.navigate('DashboardNavigation');
        }
        if(UserRole == 2)
        {
            navigation.navigate('AdminScreen');
        }if(UserRole == 3)
        {
            navigation.navigate('VenderScreen');
        }if(UserRole == 4)
        {
          navigation.navigate('SalesScreen');
        }
       }
       else{
        navigation.navigate('AuthScreen');
       }
        
    }, [])
    return (
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
            <Loading />
        </View>
    )
}
export default AuthLoading;