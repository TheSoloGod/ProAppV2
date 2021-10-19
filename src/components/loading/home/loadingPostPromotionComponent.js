import SkeletonPlaceholder from 'react-native-skeleton-placeholder';
import {View} from 'react-native';
import React from 'react';
import {WIDTH} from '../../../utils/constant';

export default function LoadingPostPromotionComponent() {
    return (
        <SkeletonPlaceholder>
            <View style={{
                flexDirection: 'row'
            }}>
                <View>
                    <View
                        style={{
                            width: WIDTH * 0.7,
                            height: WIDTH * 0.3,
                            borderRadius: WIDTH * 0.02
                        }}
                    />
                    <View
                        style={{
                            width: WIDTH * 0.3,
                            height: WIDTH * 0.03,
                            borderRadius: WIDTH * 0.01,
                            marginTop: WIDTH * 0.03
                        }}
                    />
                    <View
                        style={{
                            width: WIDTH * 0.7,
                            height: WIDTH * 0.03,
                            borderRadius: WIDTH * 0.01,
                            marginTop: WIDTH * 0.03
                        }}
                    />
                </View>
                <View style={{
                    marginLeft: WIDTH * 0.05
                }}>
                    <View
                        style={{
                            width: WIDTH * 0.7,
                            height: WIDTH * 0.3,
                            borderRadius: WIDTH * 0.02
                        }}
                    />
                    <View
                        style={{
                            width: WIDTH * 0.3,
                            height: WIDTH * 0.03,
                            borderRadius: WIDTH * 0.01,
                            marginTop: WIDTH * 0.03
                        }}
                    />
                    <View
                        style={{
                            width: WIDTH * 0.7,
                            height: WIDTH * 0.03,
                            borderRadius: WIDTH * 0.01,
                            marginTop: WIDTH * 0.03
                        }}
                    />
                </View>
            </View>
        </SkeletonPlaceholder>
    );
}
