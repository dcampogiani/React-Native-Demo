/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image
} from 'react-native';


export default class Event extends Component<{}> {
  render() {
    return (
      <View>
        <Image style={styles.image}
          source={{uri: this.props.imageUri}}>
        </Image>
        <Text style={styles.title}>
          {this.props.title}
        </Text>
        <Text numberOfLines={3} style={styles.description}>
          {this.props.description}
        </Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  image: {
    height : 180,
    margin: 10,
  },
  title: {
    marginLeft: 10,
    marginRight: 10,
    marginBottom: 5,
    fontSize: 20,
  },
  description: {
    marginLeft: 10,
    marginRight: 10,
  },
});
