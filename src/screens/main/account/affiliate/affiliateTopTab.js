import React from 'react';
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import * as Theme from "../../../../config/theme";
import ListAffiliateScreen from './listAffiliateScreen';
import ProgramInfoScreen from './programInfoScreen';

const AffiliateTab = createMaterialTopTabNavigator();
export const AffiliateTopTab = () => {
    return (
        <AffiliateTab.Navigator
            tabBarOptions={{
                pressColor: Theme.colorMain,
                indicatorStyle: {
                    backgroundColor: Theme.colorMain
                },
                style: {
                    borderBottomWidth: 1,
                    borderBottomColor: '#dedede'
                },
                labelStyle: {
                    textTransform: 'none',
                    color: 'black'
                }
            }}
        >
            <AffiliateTab.Screen
                name="ListAffiliate"
                component={ListAffiliateScreen}
                options={{
                    tabBarLabel: 'Danh sách giới thiệu',
                    cardStyle: {
                        backgroundColor: 'white',
                    },
                }}
            />
            <AffiliateTab.Screen
                name='ProgramInfo'
                component={ProgramInfoScreen}
                options={{
                    tabBarLabel: 'Thông tin chương trình',
                    cardStyle: {
                        backgroundColor: 'white',
                    },
                }}
            />
        </AffiliateTab.Navigator>
    );
};
