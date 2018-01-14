/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  View
} from 'react-native';
import EventList from './src/EventList';

export default class App extends Component<{}> {
  render() {
    return (
      <EventList>
      </EventList>
    );
  }
}
