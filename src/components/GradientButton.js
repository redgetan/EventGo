import React, { Component } from 'react';
import { Text, TouchableHighlight, StyleSheet } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';

const styles = StyleSheet.create({
  btn: {
    borderRadius: 4,
    shadowOffset: {
      height: 9
    },
    shadowRadius: 10,
    height: 40
  },
  touchable: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  text: {
    fontSize: 18,
    color: "#ffffff"
  }
});

export default class GradientButton extends Component {

  render() {
    return (
      <LinearGradient 
        start={{x: 0, y: 0}} 
        end={{x: 1, y: 0}} 
        colors={['#19769F', '#35D8A6']}
        style={[styles.btn, this.props.style]}
        >
        <TouchableHighlight
          style={styles.touchable}
          onPress={this.props.onPress}
        >
          <Text style={styles.text}>{this.props.text}</Text>
        </TouchableHighlight>
      </LinearGradient>
    )
  }
}
