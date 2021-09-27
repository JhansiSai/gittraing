import React, { useContext } from "react";
import { View } from "react-native";
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import HomeNavigator from "./HomeNavigator";
import OrdersNavigator from "./OrdersNavigator";
import ProfileNavigator from "./ProfileNavigator";

const Tab = createMaterialBottomTabNavigator();
export default Main = () => {
  
    return (
      <Tab.Navigator
        initialRouteName="Home" 
        barStyle={{ backgroundColor: '#195bbc', paddingBottom: 1 }}
        showLabel={false}
        labeled={false}
        tabBarOptions={{
          keyboardHidesTabBar: true,
          activeTintColor: "#e91e63",
          sceneAnimationEnabled: true,
        }}
      >
        <Tab.Screen
          name="Home"
          component={HomeNavigator}
          activeColor="#e91e63"
          options={{
            tabBarLabel: 'Shop',
            tabBarIcon: ({ color }) => (
              <MaterialCommunityIcons name="home" color={color} size={25} />
            ), 
          }}
        />
        <Tab.Screen
          name="Orders"
          component={OrdersNavigator}
          options={{
            showLabel: false,
            tabBarLabel: 'Orders',
            tabBarIcon: ({ color }) => (
              <View>
                <MaterialCommunityIcons name="home" color={color} size={25} />
              </View>
            ),
          }}
        />
        
        <Tab.Screen
          name="Profile"
          component={ProfileNavigator} 
          options={{
            tabBarLabel: 'Profile',
            tabBarIcon: ({ color }) => (
              <MaterialCommunityIcons name="face-profile" color={color} size={30} />
            ),
          }}
        />
      </Tab.Navigator>
    );
  };
  