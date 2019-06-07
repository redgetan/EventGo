import React, { Component } from 'react';
import { TextInput, Text, View, StyleSheet, Button } from 'react-native';

const styles = StyleSheet.create({
  label: {
    color: '#19769F',
    fontSize: 20,
    marginBottom: 20
  },
  codeInput: {
    height: 40,
    marginBottom: 20,
    borderColor: '#D5D5D5',
    borderWidth: 1,
    paddingLeft: 16
  },
  submitBtn: {
  }
});

    // gradient: #19769F
    // #35D8A6

export default class CodeSubmitForm extends Component {

  constructor(props) {
    super(props);

    this.state= {
      code: ""
    }
  }

  onCodeSubmit() {

  }

  onCodeTextChange(text) {
    this.setState({ code: text })
  }

  render() {
    return (
      <View>
        <Text style={styles.label}>Your Code:</Text>  
        <TextInput
          style={styles.codeInput}
          value={this.state.code}
          placeholder="XXX-XX-XXXX (Alphanumeric)"
          onChangeText={(text) => this.onCodeTextChange(text)}
        />
        <Button
          style={styles.submitBtn}
          onPress={this.onCodeSubmit}
          title="Submit"
        />
      </View>
    );
  }
}