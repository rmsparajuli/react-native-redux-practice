import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';
import Counter from './src/components/counter';
import Route from './src/routes/route';
import Next from './src/components/next';
import {
  Router,
  Scene
} from 'react-native-router-flux';
import {Provider} from 'react-redux';
import {createStore, applyMiddleware} from 'redux';
import reduxLogger from 'redux-logger';
import reducer from './src/reducers';


const hamroStore = createStore(reducer, applyMiddleware(reduxLogger));

const state = hamroStore.getState();

hamroStore.dispatch({
  type:'CALLED_FROM_APP_JS',
  payload:'REact'
});

export default class App extends React.Component {

  render() {
    // let pic={
    //           uri:'https://www.desktopbackground.org/download/360x640/2011/11/12/295816_windows-7-rc-login-backgrounds_1024x768_h.jpg'
    // };
    hamroStore.dispatch({
      type:'SECOND_TIME_CALLING'

    });
    return (
      
      <Provider store={hamroStore}>
      <Router>
        <Scene key="root">
          <Scene key="home" initial component={Counter}/>            
          <Scene key="next" component={Next} />
        </Scene>
      </Router>
      </Provider>
      
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#AAA',
    alignItems: 'center',
    justifyContent: 'center',
  },
  hometext:{
    flex:1,
    backgroundColor:'green',
    alignItems:'center',
    justifyContent:'center',
    color:'blue',
    fontWeight:'bold',
    fontSize:30,

  }
});
