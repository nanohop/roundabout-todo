import React, { Component } from 'react';

import {
  StyleSheet,
  Text,
  View,
  ScrollView
} from 'react-native';

import TaskRow from './TaskRow'

export default class TaskList extends Component {

  render() {
    return (
      <ScrollView style={styles.container}>
        {
          this.props.tasks.map((task, i) => {
            return <TaskRow title={task} key={i} />
          })
        }
      </ScrollView>
    )
  }

}

const styles = StyleSheet.create({
  container: {
    flex: 1, 
    alignSelf: 'stretch'
  }
})

