import React, { useState } from 'react';
import { View, Text, TextInput } from 'react-native';

export default function InputUnderLine(props) {

    const [isFocus, setIsFocus] = useState(false);
    const [textContent, setTextContent] = useState('')

    const handleFocus = () => {
        setIsFocus(true)
    }
    const handleBlur = () => {
        if (textContent === '') {
            setIsFocus(false)
        }
    }
    const handleChangeText = (text) => {
        setTextContent(text);
        props.onChangeText(text)
    }

    return (
        <View style={{
            marginBottom: 15
        }}>
            {isFocus ?
                <Text style={{
                    color: '#ccc'
                }}>{props.placeholder}</Text>
                : null}
            <TextInput
                style={{
                    paddingVertical: 11,
                    borderBottomWidth: 1,
                    borderBottomColor: '#ccc'
                }}
                placeholder={!isFocus ? props.placeholder : ''}
                onFocus={handleFocus}
                onBlur={handleBlur}
                onChangeText={handleChangeText}
                keyboardType={props.keyboardType || "default"}
            />
        </View>
    )
}