import React, { Component } from 'react';
import { Button, StyleSheet } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';

const styles = StyleSheet.create({
  submitBtn: {
  }
});

export default class GradientButton extends Component {

  render() {
    return (
      <LinearGradient start={{x: 0, y: 0}} end={{x: 1, y: 0}} colors={['#19769F', '#35D8A6']} >
        <Button
          color="#ffffff"
          style={styles.submitBtn}
          onPress={this.props.onPress}
          title="Submit"
        />
      </LinearGradient>
    )
  }
}
