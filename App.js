import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { createStackNavigator} from "@react-navigation/stack"
import { createStore, applyMiddleware } from "redux"
import ReduxThunk from "redux-thunk"
import {Provider} from "react-redux"
import RootNavigator from './src/navigator/RootNavigator';
import TestScreen from './src/screen/TestScreen';
import reducers from "./src/redux/reducers"
import LoginScreen from './src/screen/LoginScreen';

const store = createStore(reducers, {}, applyMiddleware(ReduxThunk))
const Stack = createStackNavigator();

export default function App() {
  return (
    <Provider store={store}>
      <RootNavigator />
    </Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

