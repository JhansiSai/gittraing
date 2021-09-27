import React from 'react'
import { createStackNavigator, TransitionSpecs, HeaderStyleInterpolators, CardStyleInterpolators } from "@react-navigation/stack";
import HomeContainer from "../screens/Home/HomeContainer";

const Stack = createStackNavigator();

function ProfileStack() {
    return (
        <Stack.Navigator>
            <Stack.Screen 
                name='Home'
                component={HomeContainer}
                options={{ 
                    headerShown: true,
                    //headerTitle: props => <MasterHeader {...props} />
                }}
            /> 
        </Stack.Navigator>
    )
}

export default function ProfileNavigator() {
    return <ProfileStack />;
}