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

export default class App extends Component {
  render() {
    return <Main />;
  }
}
