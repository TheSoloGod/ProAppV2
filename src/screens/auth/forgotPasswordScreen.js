import * as React from 'react';
import { View, Text } from 'react-native';
import {navigationName} from '../../navigation/navigationName';

export default function ForgotPasswordScreen({navigation}) {
    return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            <Text>Forgot password Screen</Text>
            <Text onPress={() =>{navigation.navigate(navigationName.authStack.REGISTER)}}>Register</Text>
        </View>
    );
}
