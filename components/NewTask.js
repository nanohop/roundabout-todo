import React, { Component } from 'react';

import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  TextInput
} from 'react-native';


export default class NewTask extends Component {

  static navigationOptions = {
    title: 'New Task'
  }

  state = {
    task: ''
  }

  addTask = () => {
    if(this.state.task && this.state.task != '') {
      const action = this.props.navigation.state.params.addTask;
      action(this.state.task);
      this.props.navigation.goBack();
    }
  }

  render() {
    return (
      <View style={styles.container}>
        <TextInput 
          style={{
            height: 40,
            borderWidth: 1,
            borderColor: '#ccc',
            margin: 20,
            paddingLeft: 10,
            paddingRight: 10,
          }} 
          value={this.state.task} 
          onChangeText={(text) => this.setState({task: text})}
        />

        <TouchableOpacity onPress={this.addTask}>
          <Text style={styles.button}>Save</Text>
        </TouchableOpacity>
      </View>
    )
  }

}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    flex: 1
  },
  button: {
    padding: 10, 
    textAlign: 'center',
    fontSize: 14, 
    color: '#0066cc',
    backgroundColor: '#fff',
    margin: 20,
    borderWidth: 2,
    borderRadius: 4,
    borderColor: '#0066cc'
  }
})


