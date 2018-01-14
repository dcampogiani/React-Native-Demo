/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  FlatList
} from 'react-native';
import Event from './Event';


export default class EventList extends Component<{}> {

  constructor(props) {
      super(props);

      this.state = {
        loading: false,
        data: [],
        error: null,
      };
    }

    componentDidMount() {
      this.makeRemoteRequest();
    }

    makeRemoteRequest = () => {
      const url = `https://blooming-shelf-93950.herokuapp.com/events?lat=44.4990967&lng=11.2614738&distance=1000&sort=popularity`;
      this.setState({ loading: true });
      fetch(url)
        .then(res => res.json())
        .then(res => {
          this.setState({
            data: res.events,
            error: res.error || null,
            loading: false,
          });
        })
        .catch(error => {
          this.setState({ error, loading: false });
        });
    };


  _keyExtractor = (item, index) => item.id;

  _renderItem = ({item}) => (
      <Event
        imageUri={item.coverPicture}
        title={item.name}
        description={item.description}
      />
    );

  render() {
    return (
      <FlatList
        data={this.state.data}
        keyExtractor={this._keyExtractor}
        renderItem={this._renderItem}
      />
    );
  }
}
