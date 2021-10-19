import React from 'react';
import {View} from 'react-native';
import {Input, Item, Label} from 'native-base';
import * as AppConst from '../../utils/constant';
import * as Theme from '../../config/theme';

export default function BorderInputComponent(props) {
    const {WIDTH} = AppConst;

    const backgroundColor = () => {
        if (props.editable === false) {
            return '#dedede';
        }

        if (props.focusField === props.title) {
            return '#dedede';
        } else {
            return Theme.colorBackground;
        }
    };

    return (
        <View style={{
            paddingVertical: WIDTH * 0.03,
            paddingHorizontal: WIDTH * 0.03,
            marginVertical: WIDTH * 0.03,
            marginHorizontal: WIDTH * 0.03,
            borderRadius: WIDTH * 0.03,
            width: WIDTH * 0.9,
            borderWidth: 1,
            borderColor: props.focusField == props.title ? Theme.colorMain : '#dedede',
            alignSelf: 'center',
            backgroundColor: backgroundColor(),
        }}>
            <Item floatingLabel style={{
                borderBottomWidth: 0
            }}>
                <Label>{props.title ?? ''}</Label>
                <Input
                    value={props.value ?? ''}
                    onChangeText={(text) => {
                        props.onChangeText(text)
                    }}
                    onFocus={() => {props.onFocus()}}
                    onBlur={() => {props.onBlur()}}
                    editable={props.editable ?? true}
                />
            </Item>
        </View>
    );
};
