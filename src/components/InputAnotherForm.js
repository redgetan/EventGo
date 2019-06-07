import React, { Component } from 'react';
import { TextInput, Text, View, StyleSheet } from 'react-native';
import GradientButton from './GradientButton'

const styles = StyleSheet.create({
  view: {
    marginVertical: 34
  },
  label: {
    color: '#19769F',
    fontSize: 20,
    marginBottom: 20
  },
  success: {
    textAlign: 'center'
  }
})

export default class InputAnother extends Component {

  render() {
    return (
      <View>  
        <View style={styles.view}>
          <Text style={[styles.label, styles.success]}>Success!</Text>  
        </View>
        <GradientButton text="Input Another" onPress={this.props.onPress}  />
      </View>
    )
  }
}

