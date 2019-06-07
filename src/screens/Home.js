import React, { Component } from 'react';
import { Text, View, StyleSheet } from 'react-native';

import EventStats from '../components/EventStats';
import CodeSubmitForm from '../components/CodeSubmitForm';
import InputAnotherForm from '../components/InputAnotherForm';

const styles = StyleSheet.create({
  view: {
    paddingHorizontal: 28
  },
  eventStats: {
    marginBottom: 20
  },
  label: {
    color: '#19769F',
    fontSize: 20,
    marginBottom: 20
  }
});

export default class HomeScreen extends Component {

  constructor(props) {
    super(props);

    this.state= {
      submitted: false,
      count: 0
    }
  }

  onCodeSubmitted = () => {
    this.setState((state, props) => {
      return {
        submitted: true,
        count: state.count + 1
      }
    })
  }

  onNewForm = () => {
    this.setState({ submitted: false })
  }

  render() {
    return (
      <View style={styles.view}>
        <EventStats style={styles.eventStats} count={this.state.count} />
        <Text style={styles.label}>Your Code:</Text>  
        {
          this.state.submitted ? (
            <InputAnotherForm onPress={this.onNewForm} />
          ) : (
            <CodeSubmitForm
              onChangeText={this.onCodeTextChange}
              onCodeSubmitted={this.onCodeSubmitted}
            />
          )
        }
      </View>
    );
  }
}
