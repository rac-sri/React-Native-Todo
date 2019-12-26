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
import {TodoForm} from './todoForm';

const {width, height} = Dimensions.get('window');

import {connect} from 'react-redux';

const mapActionsToProps = dispatch => ({
  createTodo(todo) {
    dispatch({type: 'CREATE_TODO', payload: 'new_todo'});
  },
});

const mapStateToProps = store => ({
  todos: store.todos,
});

export default class Main extends Component {
  static defaultProps = {
    todos: [],
  };
  constructor() {
    super();
    this.state = {
      newTodo: '',
    };
  }

  handleChange(e) {
    const {value} = e.target;
    this.setState({newTodo: value});
  }
  handlePress(e) {
    this.props.createTodo(this.state.newTodo);
    this.setState({newTodo: ''});
  }
  render() {
    return (
      <View style={styles.container}>
        <Reddit />
        <TextInput
          value={this.state.newTodo}
          onChange={this.handleChange.bind(this)}
        />
        <TodoForm
          handleChange={this.handleChange.bind(this)}
          handlePress={this.handlePress.bind()}
          value={this.state.newTodo}
        />
        {this.props.todos.map((todo, i) => (
          <Text key={i}>{todo} </Text>
        ))}
        <TouchableHighlight onPress={this.handlePress.bind(this)}>
          <Text>tap me</Text>
        </TouchableHighlight>
      </View>
    );
  }
}

export const MainFinal = connect(mapStateToProps, mapActionsToProps)(Main);
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
