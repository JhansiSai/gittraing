import React from 'react'
import { createStackNavigator, TransitionSpecs, HeaderStyleInterpolators, CardStyleInterpolators } from "@react-navigation/stack";
import HomeContainer from "../screens/Home/HomeContainer";

const Stack = createStackNavigator();

function OrdersStack() {
    return (
        <Stack.Navigator>
            <Stack.Screen 
                name='Home'
                component={HomeContainer}
                options={{ 
                    headerShown: true,
                   // headerTitle: props => <MasterHeader {...props} />
                }}
            /> 
        </Stack.Navigator>
    )
}

export default function OrdersNavigator() {
    return <OrdersStack />;
}