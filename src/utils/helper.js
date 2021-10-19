import * as Constant from "../utils/constant";
import { View, Text, Clipboard, Linking, TouchableOpacity, Image, ScrollView, SafeAreaView, Platform, StyleSheet, Keyboard, KeyboardAvoidingView } from 'react-native';
import {gold, platinum, silver, standard, medalPlatinum, medalGold, medalSilver, medalStandard} from '../assets/ranks';

export function formatCurrency(money) {
    return money.toLocaleString('it-IT', { style: 'currency', currency: 'VND' });
}

export function calculateDiscountPercent(price, compare_at_price) {
    let percent = Math.round(price / compare_at_price * 100);

    return `-${percent}%`;
}

export function sendSMS(body, phone) {
    const url = `sms:${phone || ''}?${Platform.OS === "ios" ? "&" : "?"}body=${body}`;
    console.log(url);
    Linking.canOpenURL(url).then(supported => {
        if (!supported) {
            console.log('Unsupported url: ' + url)
        } else {
            return Linking.openURL(url)
        }
    }).catch(err => console.error('An error occurred', err))
}

export function sendEmail(message, subject, emailTo) {
    const url = `mailto:${emailTo || ''}?subject=${subject}&body=${message}`;
    Linking.canOpenURL(url).then(supported => {
        if (!supported) {
            console.error('Unsupported url: ' + url)
        } else {
            return Linking.openURL(url)
        }
    }).catch(err => console.error('An error occurred', err))
}

export function getMemberCard(rank) {
    switch (rank.code) {
        case 'Standard':
            return standard;
        case 'Silver':
            return silver;
        case 'Gold':
            return gold;
        case 'Platinum':
            return platinum;
        default:
            return standard;
    }
}

export function getMemberMedal(rank) {
    switch (rank.code) {
        case 'Standard':
            return medalStandard;
        case 'Silver':
            return medalSilver;
        case 'Gold':
            return medalGold;
        case 'Platinum':
            return medalPlatinum;
        default:
            return medalStandard;
    }
}
