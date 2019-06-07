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
    let attendeeCount = Math.min(1, this.props.count)
    let voteCount = this.props.count

    return (
      <Text style={[styles.text, this.props.style]}>
        {attendeeCount} event attendees have submitted {voteCount} codes
      </Text>
    )
  }
}