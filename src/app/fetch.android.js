import React, {Component} from 'react';
import {Text, View} from 'react-native';

export default class Fetch extends Component {
  componentWillMount() {
    fetch('https://www.reddit.com/.json', {method: 'get'}).then(res =>
      console.log(res),
    );
  }

  render() {
    return (
      <View>
        <Text> textInComponent </Text>
      </View>
    );
  }
}
