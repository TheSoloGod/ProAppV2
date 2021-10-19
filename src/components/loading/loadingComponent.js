import React from 'react';
import {SafeAreaView, ScrollView, View, Text, ActivityIndicator, Image} from 'react-native';
import * as AppConst from '../../utils/constant';
import * as Theme from '../../config/theme';
import {bgGradient, loading} from '../../assets/images';
import Modal from 'react-native-modal';
import {
    BallIndicator,
    BarIndicator,
    DotIndicator,
    MaterialIndicator,
    PacmanIndicator,
    PulseIndicator,
    SkypeIndicator,
    UIActivityIndicator,
    WaveIndicator,
} from 'react-native-indicators';

export default function LoadingComponent({is_visible = true}) {
    const {WIDTH, HEIGHT} = AppConst;

    return (
        <View>
            <Modal
                isVisible={is_visible}
                backdropOpacity={0.1}
                backdropColor={'black'}
            >
                <View style={{
                    flex: 1,
                    alignItems: 'center',
                    justifyContent: 'center'
                }}>
                    <WaveIndicator
                        color={Theme.colorMain}
                        size={WIDTH * 0.3}
                        count={3}
                        waveFactor={0.5}
                    />
                    {/*<Image source={loading} style={{width: 150, height: 150, borderRadius: 150}} />*/}
                </View>
            </Modal>
        </View>
    );
}
