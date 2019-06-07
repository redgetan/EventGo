import React, { Component } from 'react';
import { TextInput, Text, View, StyleSheet } from 'react-native';
import GradientButton from './GradientButton'

const styles = StyleSheet.create({
  label: {
    color: '#19769F',
    fontSize: 20,
    marginBottom: 20
  },
  successLabel: {
    marginVertical: 34
  },
  codeInput: {
    height: 40,
    marginBottom: 20,
    borderColor: '#D5D5D5',
    borderWidth: 1,
    paddingLeft: 16
  }
});

function InputAnother(props) {
  return <View>  
    <Text style={props.style}>Success:</Text>  
    <GradientButton text="Input Another" onPress={props.onPress}  />
  </View>
}

function CodeSubmit(props) {
  return <View>
    <TextInput
      style={props.style}
      value={props.code}
      placeholder="XXX-XX-XXXX (Alphanumeric)"
      onChangeText={props.onChangeText}
    />
    <GradientButton text="Submit" onPress={props.onPress} />
  </View>
}

export default class CodeSubmitForm extends Component {

  constructor(props) {
    super(props);

    this.state= {
      code: "",
      submitted: false
    }
  }

  onCodeSubmit = () => {
    this.setState({ submitted: true })
  }

  onNewForm = () => {
    this.setState({ code: "", submitted: false })
  }

  onCodeTextChange = (text) => {
    this.setState({ code: text })
  }

  render() {
    return (
      <View>
        <Text style={styles.label}>Your Code:</Text>  
        {
          this.state.submitted ? (
            <InputAnother onPress={this.onNewForm} style={[styles.label, styles.successLabel]} />
          ) : (
            <CodeSubmit
              code={this.state.code}
              onChangeText={this.onCodeTextChange}
              onPress={this.onCodeSubmit}
              style={styles.codeInput}
            />
          )
        }
      </View>
    );
  }
}