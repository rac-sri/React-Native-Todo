import React, {Component} from 'react';
import {Text, View, TouchableOpacity} from 'react-native';
import {connect} from 'react-redux';
import {ADD_POST} from './reducers';
const _Reddit = props => (
  <View>
    {this.props.posts.map(posts => (
      <Text>{posts.name}</Text>
    ))}
    <TouchableOpacity onPress={props.addRedditPost}>
      <Text>Add</Text>
    </TouchableOpacity>
  </View>
);
const mapStateToProps = state => ({
  posts: state.posts,
});

const mapActionsToProps = dispatch => ({
  addRedditPost(post = {name: 'new post'}) {
    dispatch({type: ADD_POST, payload: post});
  },
});
// eslint-disable-next-line prettier/prettier
export const Reddit = connect(mapStateToProps, mapActionsToProps)(_Reddit);
