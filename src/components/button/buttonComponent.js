import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity } from 'react-native';
import * as Theme from '../../config/theme';
import { WIDTH, HEIGHT, HEIGHT_INPUT } from '../../utils/constant';
import IonIcon from 'react-native-vector-icons/Ionicons';
import FontAwesome5Icon from 'react-native-vector-icons/FontAwesome5';

export default function ButtonComponent({onPress = () => {}, title = 'TIẾP TỤC', icon, otherButtonStyle,}) {
    return (
        <TouchableOpacity
            style={[{
                flexDirection: 'row',
                backgroundColor: Theme.colorMain,
                alignItems: 'center',
                justifyContent: 'center',
                paddingVertical: WIDTH * 0.05,
                width: WIDTH,
            }, otherButtonStyle]}
            onPress={() => { onPress?.() }}>
            {icon &&
                <FontAwesome5Icon name={icon} color={'white'} size={20} style={{
                    marginRight: WIDTH * 0.03
                }}/>
            }
            <Text style={{
                color: 'white',
                fontSize: Theme.fontLarge + 2,
                fontWeight: '600'
            }}>
                {title}
            </Text>
        </TouchableOpacity>
    );
}
