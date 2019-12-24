import React, {Component} from 'react';
import {Text, View, TextInput, TouchableOpacity} from 'react-native';
import {
  TouchableHighlight,
  SafeAreaView,
  StyleSheet,
  ScrollView,
  StatusBar,
  Dimensions,
} from 'react-native';

import {
  Header,
  LearnMoreLinks,
  Colors,
  DebugInstructions,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';
import {Reddit} from './fetch';

const {width, height} = Dimensions.get('window');
export default class Main extends Component {
  constructor() {
    super();
    this.state = {
      todos: [1, 2, 3],
      newTodo: '',
    };
  }

  handleChange(e) {
    const {value} = e.target;
    this.setState({newTodo: value});
  }
  handlePress(e) {
    console.log('Fdsfjkds');
  }
  render() {
    return (
      <View style={styles.container}>
        <Reddit />
        <TextInput
          value={this.state.newTodo}
          onChange={this.handleChange.bind(this)}
        />
        {this.state.todos.map((todo, i) => (
          <Text key={i}>{todo} </Text>
        ))}
        <TouchableHighlight onPress={this.handlePress.bind(this)}>
          <Text>tap me</Text>
        </TouchableHighlight>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  scrollView: {
    backgroundColor: Colors.lighter,
  },
  container: {
    backgroundColor: 'lightblue',
    width: width / 3,
  },
  engine: {
    position: 'absolute',
    right: 0,
  },
  body: {
    backgroundColor: Colors.white,
  },
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
    color: Colors.black,
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
    color: Colors.dark,
  },
  highlight: {
    fontWeight: '700',
  },
  footer: {
    color: Colors.dark,
    fontSize: 12,
    fontWeight: '600',
    padding: 4,
    paddingRight: 12,
    textAlign: 'right',
  },
});
