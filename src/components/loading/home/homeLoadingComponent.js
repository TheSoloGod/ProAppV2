import React from 'react';
import {ImageBackground, SafeAreaView, ScrollView, View} from 'react-native';
import * as AppConst from '../../../utils/constant';
import SkeletonPlaceholder from "react-native-skeleton-placeholder";
import * as Theme from '../../../config/theme';
import {bgGradient} from '../../../assets/images';

export default function HomeLoadingComponent() {
    const {WIDTH, HEIGHT} = AppConst;

    return (
        <>
            <SafeAreaView style={{ flex: 0, backgroundColor: Theme.colorSub ? Theme.colorSub : Theme.colorMain }}/>
            <SafeAreaView style={{ flex: 1, backgroundColor: Theme.colorBackground }}>
                <ImageBackground source={bgGradient} style={{width: '100%', height: '100%'}}>
                <ScrollView>
                    <SkeletonPlaceholder>
                        <View>
                            <View style={{
                                flexDirection: 'row',
                                paddingHorizontal: WIDTH * 0.05,
                                paddingVertical: WIDTH * 0.02
                            }}>
                                <View style={{
                                    width: WIDTH * 0.76,
                                    height: WIDTH * 0.1,
                                    borderRadius: WIDTH * 0.1
                                }}/>
                                <View style={{
                                    width: WIDTH * 0.1,
                                    height: WIDTH * 0.1,
                                    borderRadius: WIDTH * 0.1,
                                    marginLeft: WIDTH * 0.04
                                }}/>
                            </View>
                        </View>
                        <View style={{
                            paddingHorizontal: WIDTH * 0.02,
                            paddingTop: WIDTH * 0.05,
                            flexDirection: 'row'
                        }}>
                            <View style={{
                                width: (WIDTH - 0.04 * WIDTH) / 4,
                                alignItems: 'center'
                            }}>
                                <View style={{
                                    width: WIDTH * 0.15,
                                    height: WIDTH * 0.15,
                                    borderRadius: WIDTH * 0.05,
                                }}/>
                                <View style={{
                                    width: WIDTH * 0.15,
                                    height: WIDTH * 0.03,
                                    borderRadius: WIDTH * 0.03,
                                    marginTop: WIDTH * 0.02
                                }}/>
                            </View>
                            <View style={{
                                width: (WIDTH - 0.04 * WIDTH) / 4,
                                alignItems: 'center'
                            }}>
                                <View style={{
                                    width: WIDTH * 0.15,
                                    height: WIDTH * 0.15,
                                    borderRadius: WIDTH * 0.05,
                                }}/>
                                <View style={{
                                    width: WIDTH * 0.15,
                                    height: WIDTH * 0.03,
                                    borderRadius: WIDTH * 0.03,
                                    marginTop: WIDTH * 0.02
                                }}/>
                            </View>
                            <View style={{
                                width: (WIDTH - 0.04 * WIDTH) / 4,
                                alignItems: 'center'
                            }}>
                                <View style={{
                                    width: WIDTH * 0.15,
                                    height: WIDTH * 0.15,
                                    borderRadius: WIDTH * 0.05,
                                }}/>
                                <View style={{
                                    width: WIDTH * 0.15,
                                    height: WIDTH * 0.03,
                                    borderRadius: WIDTH * 0.03,
                                    marginTop: WIDTH * 0.02
                                }}/>
                            </View>
                            <View style={{
                                width: (WIDTH - 0.04 * WIDTH) / 4,
                                alignItems: 'center'
                            }}>
                                <View style={{
                                    width: WIDTH * 0.15,
                                    height: WIDTH * 0.15,
                                    borderRadius: WIDTH * 0.05,
                                }}/>
                                <View style={{
                                    width: WIDTH * 0.15,
                                    height: WIDTH * 0.03,
                                    borderRadius: WIDTH * 0.03,
                                    marginTop: WIDTH * 0.02
                                }}/>
                            </View>
                            <View style={{
                                width: (WIDTH - 0.04 * WIDTH) / 4,
                                alignItems: 'center'
                            }}>
                                <View style={{
                                    width: WIDTH * 0.15,
                                    height: WIDTH * 0.15,
                                    borderRadius: WIDTH * 0.05,
                                }}/>
                                <View style={{
                                    width: WIDTH * 0.15,
                                    height: WIDTH * 0.03,
                                    borderRadius: WIDTH * 0.03,
                                    marginTop: WIDTH * 0.02
                                }}/>
                            </View>
                        </View>
                        <View style={{
                            paddingHorizontal: WIDTH * 0.02,
                            paddingVertical: WIDTH * 0.05,
                            flexDirection: 'row'
                        }}>
                            <View style={{
                                width: (WIDTH - 0.04 * WIDTH) / 4,
                                alignItems: 'center'
                            }}>
                                <View style={{
                                    width: WIDTH * 0.15,
                                    height: WIDTH * 0.15,
                                    borderRadius: WIDTH * 0.05,
                                }}/>
                                <View style={{
                                    width: WIDTH * 0.15,
                                    height: WIDTH * 0.03,
                                    borderRadius: WIDTH * 0.03,
                                    marginTop: WIDTH * 0.02
                                }}/>
                            </View>
                            <View style={{
                                width: (WIDTH - 0.04 * WIDTH) / 4,
                                alignItems: 'center'
                            }}>
                                <View style={{
                                    width: WIDTH * 0.15,
                                    height: WIDTH * 0.15,
                                    borderRadius: WIDTH * 0.05,
                                }}/>
                                <View style={{
                                    width: WIDTH * 0.15,
                                    height: WIDTH * 0.03,
                                    borderRadius: WIDTH * 0.03,
                                    marginTop: WIDTH * 0.02
                                }}/>
                            </View>
                            <View style={{
                                width: (WIDTH - 0.04 * WIDTH) / 4,
                                alignItems: 'center'
                            }}>
                                <View style={{
                                    width: WIDTH * 0.15,
                                    height: WIDTH * 0.15,
                                    borderRadius: WIDTH * 0.05,
                                }}/>
                                <View style={{
                                    width: WIDTH * 0.15,
                                    height: WIDTH * 0.03,
                                    borderRadius: WIDTH * 0.03,
                                    marginTop: WIDTH * 0.02
                                }}/>
                            </View>
                            <View style={{
                                width: (WIDTH - 0.04 * WIDTH) / 4,
                                alignItems: 'center'
                            }}>
                                <View style={{
                                    width: WIDTH * 0.15,
                                    height: WIDTH * 0.15,
                                    borderRadius: WIDTH * 0.05,
                                }}/>
                                <View style={{
                                    width: WIDTH * 0.15,
                                    height: WIDTH * 0.03,
                                    borderRadius: WIDTH * 0.03,
                                    marginTop: WIDTH * 0.02
                                }}/>
                            </View>
                            <View style={{
                                width: (WIDTH - 0.04 * WIDTH) / 4,
                                alignItems: 'center'
                            }}>
                                <View style={{
                                    width: WIDTH * 0.15,
                                    height: WIDTH * 0.15,
                                    borderRadius: WIDTH * 0.05,
                                }}/>
                            </View>
                        </View>
                        <View style={{
                            paddingVertical: WIDTH * 0.03
                        }}>
                            <View style={{
                                width: WIDTH * 0.9,
                                height: WIDTH * 0.4,
                                borderRadius: WIDTH * 0.02,
                                alignSelf: 'center',
                            }}/>
                        </View>
                        <View style={{
                            flexDirection: 'row',
                            marginLeft: WIDTH * 0.05,
                            marginVertical: WIDTH * 0.03
                        }}>
                            <View>
                                <View style={{
                                    width: WIDTH * 0.45,
                                    height: WIDTH * 0.45,
                                    borderRadius: WIDTH * 0.02,
                                }}/>
                                <View style={{
                                    width: WIDTH * 0.45,
                                    height: WIDTH * 0.05,
                                    marginTop: WIDTH * 0.03,
                                    borderRadius: WIDTH * 0.02
                                }}/>
                                <View style={{
                                    width: WIDTH * 0.3,
                                    height: WIDTH * 0.05,
                                    marginTop: WIDTH * 0.03,
                                    borderRadius: WIDTH * 0.02
                                }}/>
                            </View>
                            <View style={{
                                marginLeft: WIDTH * 0.05
                            }}>
                                <View style={{
                                    width: WIDTH * 0.45,
                                    height: WIDTH * 0.45,
                                    borderRadius: WIDTH * 0.02,
                                }}/>
                                <View style={{
                                    width: WIDTH * 0.45,
                                    height: WIDTH * 0.05,
                                    marginTop: WIDTH * 0.03,
                                    borderRadius: WIDTH * 0.02
                                }}/>
                                <View style={{
                                    width: WIDTH * 0.3,
                                    height: WIDTH * 0.05,
                                    marginTop: WIDTH * 0.03,
                                    borderRadius: WIDTH * 0.02
                                }}/>
                            </View>
                        </View>
                    </SkeletonPlaceholder>
                </ScrollView>
                </ImageBackground>
            </SafeAreaView>
        </>
    );
}
