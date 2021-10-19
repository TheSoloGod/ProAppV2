import SkeletonPlaceholder from 'react-native-skeleton-placeholder';
import {View} from 'react-native';
import React from 'react';
import {WIDTH} from '../../../utils/constant';

export default function LoadingBannerComponent() {
    return (
        <SkeletonPlaceholder>
            <View
                style={{
                    width: WIDTH * 0.9,
                    height: WIDTH * 0.5,
                    alignSelf: 'center',
                    borderRadius: WIDTH * 0.02
                }}
            />
        </SkeletonPlaceholder>
    );
}
