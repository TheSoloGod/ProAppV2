import SkeletonPlaceholder from 'react-native-skeleton-placeholder';
import {View} from 'react-native';
import React from 'react';
import {WIDTH} from '../../../utils/constant';

export default function LoadingProductPromotionComponent() {
    return (
        <SkeletonPlaceholder>
            <View style={{
                flexDirection: 'row',
            }}>
                <View>
                    <View
                        style={{
                            width: WIDTH * 0.48,
                            height: WIDTH * 0.48,
                            borderRadius: WIDTH * 0.02,
                        }}
                    />
                    <View
                        style={{
                            width: WIDTH * 0.48,
                            height: WIDTH * 0.03,
                            borderRadius: WIDTH * 0.01,
                            marginTop: WIDTH * 0.02
                        }}
                    />
                    <View style={{
                        flexDirection: 'row',
                        justifyContent: 'space-between'
                    }}>
                        <View>
                            <View
                                style={{
                                    width: WIDTH * 0.35,
                                    height: WIDTH * 0.03,
                                    borderRadius: WIDTH * 0.01,
                                    marginTop: WIDTH * 0.02
                                }}
                            />
                            <View
                                style={{
                                    width: WIDTH * 0.35,
                                    height: WIDTH * 0.03,
                                    borderRadius: WIDTH * 0.01,
                                    marginTop: WIDTH * 0.02
                                }}
                            />
                        </View>
                        <View
                            style={{
                                width: WIDTH * 0.08,
                                height: WIDTH * 0.08,
                                borderRadius: WIDTH * 0.08,
                                marginTop: WIDTH * 0.02
                            }}
                        />
                    </View>
                </View>
                <View style={{
                    marginLeft: WIDTH * 0.05
                }}>
                    <View
                        style={{
                            width: WIDTH * 0.48,
                            height: WIDTH * 0.48,
                            borderRadius: WIDTH * 0.02,
                        }}
                    />
                    <View
                        style={{
                            width: WIDTH * 0.48,
                            height: WIDTH * 0.03,
                            borderRadius: WIDTH * 0.01,
                            marginTop: WIDTH * 0.02
                        }}
                    />
                    <View style={{
                        flexDirection: 'row',
                        justifyContent: 'space-between'
                    }}>
                        <View>
                            <View
                                style={{
                                    width: WIDTH * 0.35,
                                    height: WIDTH * 0.03,
                                    borderRadius: WIDTH * 0.01,
                                    marginTop: WIDTH * 0.02
                                }}
                            />
                            <View
                                style={{
                                    width: WIDTH * 0.35,
                                    height: WIDTH * 0.03,
                                    borderRadius: WIDTH * 0.01,
                                    marginTop: WIDTH * 0.02
                                }}
                            />
                        </View>
                        <View
                            style={{
                                width: WIDTH * 0.08,
                                height: WIDTH * 0.08,
                                borderRadius: WIDTH * 0.08,
                                marginTop: WIDTH * 0.02
                            }}
                        />
                    </View>
                </View>
            </View>
        </SkeletonPlaceholder>
    );
}
