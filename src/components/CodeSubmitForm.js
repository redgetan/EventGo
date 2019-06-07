import React, { Component } from 'react';
import { TextInput, Text, View, StyleSheet } from 'react-native';
import GradientButton from './GradientButton'

const styles = StyleSheet.create({
  codeInput: {
    height: 40,
    borderColor: '#D5D5D5',
    borderWidth: 1,
    paddingLeft: 16
  },
  inputError: {
    color: '#FF7474',
    borderColor: '#FF7474',
    borderWidth: 1
  },
  textError: {
    color: '#FF7474'
  },
  submitBtn: {
    marginTop: 20
  }
});

export default class CodeSubmitForm extends Component {

  constructor(props) {
    super(props);

    this.state = {
      code: "",
      error: null
    }
  }


  formatCode(text) {
    let firstBlock = text.slice(0,3)
    let secondBlock = text.slice(3,6)
    let thirdBlock = text.slice(6,10)

    let result = firstBlock

    if (text.length > 3) {
      result += "-"
      result += secondBlock
    }

    if (text.length > 6) {
      result += "-"
      result += thirdBlock
    }

    return result
  }

  isCodeFormatValid(code) {
    if (code.length === 0) return true
    return !code.match(/[^\w+]/)
  }

  onCodeSubmit = () => {
    if (this.state.code.length === 0) {
      this.setState({ error: "Cannot be blank" })
      return
    }

    if (this.state.code.length !== 10) {
      this.setState({ error: "Must be 10 characters" })
      return
    }

    this.setState({ error: null, code: "" })
    this.props.onCodeSubmitted()
  }

  onCodeTextChange = (text) => {
    text = text.replace(/-/g,"") // remove - character
    text = text.slice(0,10)      // dont go beyond 10 characters

    this.setState({ code: text })

    if (text.length > 0) {
      this.setState({ error: null })
    }
  }

  render() {
    let isFormatValid = this.isCodeFormatValid(this.state.code)
    let codeInputStyle = [styles.codeInput] 

    if (!isFormatValid || this.state.error) {
      codeInputStyle.push(styles.inputError)
    }

    return (
      <View>
        <TextInput
          style={codeInputStyle}
          value={this.formatCode(this.state.code)}
          placeholder="XXX-XXX-XXXX (Alphanumeric)"
          onChangeText={this.onCodeTextChange}
        />
        {
          !isFormatValid &&
            <Text style={styles.textError}>
              Invalid Format. Only Letters or Numbers Allowed
            </Text>
        }
        {
          this.state.error &&
            <Text style={styles.textError}>
              {this.state.error}
            </Text>
        }
        <GradientButton text="Submit" onPress={this.onCodeSubmit} style={styles.submitBtn} />
      </View>
    )
  }


}
