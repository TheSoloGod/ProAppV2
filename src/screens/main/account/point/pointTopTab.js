import React from 'react';
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import HistoryScreen from "./historyScreen";
import PointInfoScreen from "./pointInfoScreen";
import * as Theme from "../../../../config/theme";

const PointTab = createMaterialTopTabNavigator();
export const PointTopTab = () => {
    return (
        <PointTab.Navigator
            tabBarOptions={{
                pressColor: Theme.colorMain,
                indicatorStyle: {
                    backgroundColor: Theme.colorMain
                },
                style: {
                    borderBottomWidth: 2,
                    borderBottomColor: '#dedede'
                },
                labelStyle: {
                    textTransform: 'none',
                    fontSize: Theme.fontMedium,
                    color: 'black'
                }
            }}
        >
            <PointTab.Screen
                name="history"
                component={HistoryScreen}
                options={{
                    tabBarLabel: 'Lịch sử'
                }}
            />
            <PointTab.Screen
                name='pointInfo'
                component={PointInfoScreen}
                options={{
                    tabBarLabel: 'Thông tin'
                }}
            />
        </PointTab.Navigator>
    );
};
