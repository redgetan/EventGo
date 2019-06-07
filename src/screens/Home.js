import React, { Component } from 'react';
import EventStats from '../components/EventStats';
import CodeSubmitForm from '../components/CodeSubmitForm';
import { View, StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  view: {
    paddingHorizontal: 28
  },
  eventStats: {
    marginBottom: 20
  }
});


export default class HomeScreen extends Component {

  render() {
    return (
      <View style={styles.view}>
        <EventStats style={styles.eventStats} />
        <CodeSubmitForm />
      </View>
    );
  }
}
