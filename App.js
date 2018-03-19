import React from 'react';
import { StyleSheet, View } from 'react-native';
import Reusable from './src/common/Reusable';

export default class App extends React.Component {
  constructor(props){
    super(props);
    this.state={
      name:'rohit'
    }

  }
  // console.log(this.props.message);
  render() {
             
  return (
      
      <Reusable styleImage={{
        width: 51,
        height: 51,
       }}
       onchangeText={()=>{this.setState({name:'shyamal'})}} 
       sourceImage={{ uri: 'https://facebook.github.io/react/logo-og.png'}}>
       {this.state.name}
       </Reusable>
    
      
    );
  }
  }


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
