import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity } from 'react-native';
import * as Theme from '../../config/theme';
import { WIDTH, HEIGHT, HEIGHT_INPUT } from '../../utils/constant';
import IonIcon from 'react-native-vector-icons/Ionicons';

export default function SearchInputComponent({ value, _onChangeValue, ...rest }) {
    return (
        <View style={{
            width: WIDTH * 0.94,
            justifyContent: 'center',
        }}>
            <TextInput
                {...rest}
                placeholderTextColor={'white'}
                style={{
                    backgroundColor: Theme.colorSub,
                    borderRadius: WIDTH * 0.04,
                    paddingLeft: WIDTH * 0.08,
                    paddingRight: WIDTH * 0.02,
                    color: 'white',
                    height: 40
                }}
                defaultValue={`${value}`}
                onChangeText={value => {
                    _onChangeValue?.(value);
                }}
            />
            <IonIcon
                name={'search-outline'}
                color={'white'}
                size={18}
                style={{
                    position: 'absolute',
                    marginLeft: WIDTH * 0.02
                }}
            />
            <TouchableOpacity style={{
                position: 'absolute',
                alignSelf: 'flex-end',
                paddingRight: WIDTH * 0.02
            }} onPress={() => {
                _onChangeValue?.('');
            }}>
                <IonIcon
                    name={'close-outline'}
                    color={'white'}
                    size={20}
                    style={{
                        color: 'white',
                    }}
                />
            </TouchableOpacity>
        </View>
    );
}
