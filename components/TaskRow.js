import React, { Component } from 'react';

import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity
} from 'react-native';


export default class TaskRow extends Component {

  state = {
    complete: false
  }

  toggleComplete = () => {
    this.setState({complete: !this.state.complete})
  }

  render() {
    return (
      <TouchableOpacity onPress={this.toggleComplete}>
        <View style={[styles.row, {
          backgroundColor: this.state.complete ? '#eeeeee' : '#ffffff'
        }]}>
          <Text style={{
            textDecorationLine: this.state.complete ? 'line-through' : 'none'
          }}>{this.props.title}</Text>
        </View>
      </TouchableOpacity>
    )
  }

}

const styles = StyleSheet.create({
  row: {
    padding: 15,
    backgroundColor: '#ffffff',
    borderBottomWidth: 1,
    borderColor: '#ddd'    
  }
})


