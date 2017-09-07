import React from 'react';

import {
  AppRegistry,
  Text,
  TouchableOpacity,
  View,
  StyleSheet
} from 'react-native';

import { StackNavigator } from 'react-navigation';

import TaskList from './components/TaskList';
import NewTask from './components/NewTask';

class HomeScreen extends React.Component {

  state = {
    tasks: [
      "Task #1",
      "Task #2"
    ]
  }

  static navigationOptions = ({navigation}) => ({
    title: 'ToDo List',
  })

  addTask = (task) => {
    this.setState({
      tasks: [...this.state.tasks, task]
    })
  }

  render() {
    return( 
      <View style={{flex: 1, alignSelf: 'stretch'}}>
        <TaskList tasks={this.state.tasks} />
        <TouchableOpacity onPress={() => {
          this.props.navigation.navigate('NewTask', { addTask: this.addTask })
        }}>
          <Text style={styles.button}>Add Task</Text>
        </TouchableOpacity>
      </View>
    )
  }

}

const styles = StyleSheet.create({
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

const SimpleApp = StackNavigator({
  Home: { screen: HomeScreen },
  NewTask: { screen: NewTask },
});

AppRegistry.registerComponent('todo', () => SimpleApp);

