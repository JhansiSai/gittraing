import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { NativeBaseProvider, Box } from 'native-base';
import {Text,Button} from 'native-base';

const Welcome=(props)=>
{
    return(
        <View>
            <Text>
                Hello world
            </Text>
            <Button onPress={()=> props.navigation.navigate("NextLevel")}>
                take me to next
            </Button>
        </View>
    )
}

export default Welcome;