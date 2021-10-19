import * as Theme from '../../config/theme';
import {navigationName} from '../../navigation/navigationName';
import {Text, View} from 'react-native';
import IonIcon from 'react-native-vector-icons/Ionicons';
import {Card, Fab} from 'native-base';
import React from 'react';
import {useNavigation} from '@react-navigation/native';
import {WIDTH} from '../../utils/constant';

export default function FabCartComponent(props) {
    const navigation = useNavigation();

    return (
        <Fab
            active={false}
            direction="up"
            containerStyle={{ }}
            style={{ backgroundColor: Theme.colorMain }}
            position="bottomRight"
            onPress={() => navigation.navigate(navigationName.storeStack.CART)}>
            <View>
                <IonIcon name="cart" size={24} color={'white'}/>
                <Card style={{
                    position: 'absolute',
                    backgroundColor: 'red',
                    alignItems: 'center',
                    justifyContent: 'center',
                    borderRadius: WIDTH * 0.06,
                    top: -25,
                    right: -25,
                    borderColor: 'white',
                    paddingHorizontal: 3,
                    paddingVertical: 2
                }}>
                    <Text style={{
                        color: 'white'
                    }}>
                        10
                    </Text>
                </Card>
            </View>
        </Fab>
    );
}
