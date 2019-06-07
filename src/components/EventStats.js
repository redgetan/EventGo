import React, { Component } from 'react';
import { Text, View, StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  text: {
    color: '#95989A',
    fontSize: 12,
    marginTop: 121
  }
});

export default class EventStats extends Component {

  render() {
    return (
      <Text style={[styles.text, this.props.style]}>10 event attendees have submitted 7411 codes</Text>
    )
  }
}