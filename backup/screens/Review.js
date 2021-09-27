import { StyleSheet, Text, View } from 'react-native';
import { NativeBaseProvider, Box } from 'native-base';
import {Container} from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom'
import * as React from 'react';

export default function Review()
{
  return(
      
      <View style={{ flex: 5, justifyContent: "Center"}}>
        <Text color="emerald.400">UNDER REVIEW</Text>
      </View>
    
  )
}