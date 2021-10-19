import React from 'react';
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import * as Theme from "../../../../config/theme";
import RankScreen from './rankScreen';
import {useSelector} from 'react-redux';

// const ranks = [
//     { code: 'standard', name: 'Thành viên', minPoint: 0, maxPoint: 99 },
//     { code: 'silver', name: 'Bạc', minPoint: 100, maxPoint: 299 },
//     { code: 'gold', name: 'Vàng', minPoint: 300, maxPoint: 1499 },
//     { code: 'platinum', name: 'Bạch kim', minPoint: 1500, maxPoint: 9999999999 },
// ];
export const RankTopTab = () => {
    const RankTab = createMaterialTopTabNavigator();
    const ranks = useSelector(state => state.rankReducer.list_rank);

    return (
        <RankTab.Navigator
            tabBarOptions={{
                pressColor: Theme.colorMain,
                indicatorStyle: {
                    backgroundColor: Theme.colorMain
                },
                style: {
                    borderBottomWidth: 1,
                    borderBottomColor: '#f5f5f5'
                },
                labelStyle: {
                    textTransform: 'none',
                    fontSize: Theme.fontMedium
                },
                inactiveTintColor: '#1b1b1b',
                activeTintColor: Theme.colorMain,
            }}
        >
            {
                ranks && ranks.map((rank, index) => {
                    return (
                        <RankTab.Screen
                            name={rank.code}
                            component={RankScreen}
                            options={{
                                tabBarLabel: rank.name,
                            }}
                            initialParams={{ rank }}
                            key={index.toString()}
                        />
                    )
                })
            }
        </RankTab.Navigator>
    );
};
