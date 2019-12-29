/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {Text, View, TextInput} from 'react-native';
import Main from './src/app/todo';
import Fetch from './src/app/fetch';
import {Provider} from 'react-redux';
import {store} from './src/app/store';

import {
  TouchableHighlight,
  SafeAreaView,
  StyleSheet,
  ScrollView,
  StatusBar,
} from 'react-native';

import {
  Header,
  LearnMoreLinks,
  Colors,
  DebugInstructions,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';
import TabView from 'react-native-scrollable-';
export default class App extends Component {
  render() {
    return (
      <>
        <Provider store={store}>
          <Main />
          <TabView tablabel="Todos" />
          <Fetch tablabel="other" />
        </Provider>
      </>
    );
  }
}
