import React from 'react';
import {
  Text,
  TextInput,
  View,
  Stylesheet,
  TouchableOpacity,
} from 'react-native';

export const TodoForm = props => (
  <View style={styles.form}>
    <TextInput
      style={styles.input}
      value={props.newTodo}
      onChangeText={props.handleChange}
    />
    <TouchableOpacity style={styles.button} onPress={props.handlePress}>
      <Text style={styles.buttonText}>klsdjfls</Text>
    </TouchableOpacity>
  </View>
);

// eslint-disable-next-line no-undef
const styles = Stylesheet.create({
  container: {
    backgroundColor: 'lightblue',
  },
  engine: {
    position: 'absolute',
    right: 0,
  },

  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
  },
  highlight: {
    fontWeight: '700',
  },
  footer: {
    fontSize: 12,
    fontWeight: '600',
    padding: 4,
    paddingRight: 12,
    textAlign: 'right',
  },
});
