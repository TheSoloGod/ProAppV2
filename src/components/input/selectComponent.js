import { View, TextInput, TouchableOpacity } from 'react-native';
import * as Theme from '../../config/theme';
import { WIDTH, HEIGHT, HEIGHT_INPUT } from '../../utils/constant';
import React, { Component, useState } from "react";
import { Container, Header, Button, Content, ActionSheet, Text } from "native-base";
var BUTTONS = ["Nam", "Nữ", "Huỷ"];
var DESTRUCTIVE_INDEX = 9;
var CANCEL_INDEX = 2;

export default function SelectComponent({ value, _onChangeValue, title, initValue, show, ...rest }) {
    if (value == null) {
        // chuyển về giá trị mặc định khi chưa chọn gì
        value = -1;
    }
    if (!show) {
        initValue = '';
    }
    return (
        <View style={{
            width: WIDTH,
            backgroundColor: 'white',
            alignItems: 'center',
        }}>
            <View
                style={{
                    width: WIDTH * 0.95,
                    height: HEIGHT_INPUT,
                    flexDirection: 'row',
                    alignItems: 'center',
                }}>
                <Text
                    style={{
                        color: '#c2c2c2',
                        fontSize: Theme.fontMedium,
                        width: WIDTH * 0.38,
                    }}>
                    {title}
                </Text>

                <TouchableOpacity onPress={() => {
                    if (show) {
                        ActionSheet.show(
                            {
                                options: BUTTONS,
                                cancelButtonIndex: CANCEL_INDEX,
                                destructiveButtonIndex: DESTRUCTIVE_INDEX,
                            },
                            (buttonIndex) => {
                                if (buttonIndex !== CANCEL_INDEX) {
                                    _onChangeValue(buttonIndex);
                                }
                            }
                        )
                    }
                }}>
                    <View style={{ width: WIDTH * 0.57, height: '100%', alignItems: 'flex-end', justifyContent: 'center' }} >
                        <Text style={{ fontSize: Theme.fontMedium, color: (value >= 0 ? '#000000' : '#c2c2c2') }}>{value >= 0 ? BUTTONS[value] : initValue}</Text>

                    </View>
                </TouchableOpacity>
            </View>
        </View>
    );
}
