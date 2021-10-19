import React, { memo, useCallback, useState } from 'react'
import { Button, View, Text, TouchableOpacity } from "react-native";
import DateTimePicker from "react-native-modal-datetime-picker";
import * as Theme from '../../config/theme';
import { WIDTH, HEIGHT, HEIGHT_INPUT } from '../../utils/constant';
import Moment from 'moment';

export default function DateTimePickerModal({ value, initValue, _onChangeValue, title, show, ...rest }) {
    const [isDatePickerVisible, setDatePickerVisibility] = useState(false);

    const showDatePicker = () => {
        if (show) {
            setDatePickerVisibility(true);
        }
    };

    const hideDatePicker = () => {
        setDatePickerVisibility(false);
    };

    const handleConfirm = (date) => {
        // console.log("A date has been picked: ", Moment(date).format('L'));
        hideDatePicker();
        _onChangeValue(date);
    };

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

                <TouchableOpacity onPress={showDatePicker}>
                    <View style={{ width: WIDTH * 0.57, height: '100%', alignItems: 'flex-end', justifyContent: 'center' }} onPress={showDatePicker}>
                        {/* <Button title="Show Date Picker" onPress={showDatePicker} /> */}
                        <Text style={{ fontSize: Theme.fontMedium, }}>{value ? Moment(value).format('L') : initValue}</Text>
                        <DateTimePicker
                            {...rest}
                            isVisible={isDatePickerVisible}
                            mode="date"
                            onConfirm={handleConfirm}
                            onCancel={hideDatePicker}
                            cancelTextIOS={'Huỷ'}
                            confirmTextIOS={'Xác nhận'}
                            headerTextIOS={'Chọn ngày bắt đầu'}
                        />
                    </View>

                </TouchableOpacity>
            </View>
        </View>
    );
}
