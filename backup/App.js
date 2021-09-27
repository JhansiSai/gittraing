import { StyleSheet } from 'react-native';
import { NativeBaseProvider } from 'native-base';
import React from 'react';
import Navigation from "./Navigators";

export default function App() {
  return(
    <NativeBaseProvider>
      <Navigation/>
    </NativeBaseProvider>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
