import React from 'react';
import { View } from 'react-native';
import * as Theme from '../../config/theme';
import {WIDTH} from '../../utils/constant';

export default function SpaceComponent({width, height = WIDTH * 0.03, otherSpaceStyle,}) {
    return (
        <View style={[{
            width: width,
            height: height,
        }, otherSpaceStyle]}/>
    );
}
