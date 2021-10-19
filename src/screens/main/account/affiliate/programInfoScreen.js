import React from 'react';
import {SafeAreaView, Text, View} from 'react-native';
import {HEIGHT, WIDTH} from '../../../../utils/constant';
import * as Theme from '../../../../config/theme';

export default function ProgramInfoScreen(props) {
    return (
        <SafeAreaView style={{
            flex: 1,
            backgroundColor: Theme.colorBackground,
        }}>
            <View style={{
                paddingHorizontal: WIDTH * 0.05,
                marginVertical: WIDTH * 0.05
            }}>
                <Text style={{
                    textAlign: 'justify'
                }}>
                    Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
                </Text>
            </View>
        </SafeAreaView>
    );
}
