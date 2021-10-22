import React from 'react';
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import * as Theme from "../../../config/theme";
import ListProductScreen from './listProductScreen';
import {useSelector} from 'react-redux';
import {WIDTH} from '../../../utils/constant';

const StoreTab = createMaterialTopTabNavigator();

export default function StoreTopTab() {
    const {categories} = useSelector(state => state.categoryReducer);

    return (
        <StoreTab.Navigator
            screenOptions={{
                tabBarScrollEnabled: true,
                tabBarPressColor: Theme.colorMain,
                tabBarIndicatorStyle: {
                    backgroundColor: Theme.colorMain,
                },
                tabBarItemStyle: {
                    width: WIDTH * 0.3,
                },
                tabBarLabelStyle: {
                    textTransform: 'none',
                    fontSize: Theme.fontMedium,
                    color: 'black',
                }
            }}
        >
            {categories.map((category, index) => {
                category.index = index;
                return (
                    <StoreTab.Screen
                        name={category.name}
                        component={ListProductScreen}
                        initialParams={{ category: category }}
                        key={category.id}
                    />
                );
            })}
        </StoreTab.Navigator>
    );
};
