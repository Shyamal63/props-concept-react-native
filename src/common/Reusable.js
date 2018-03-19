import React from 'react';
import { StyleSheet, Text, View,Image,style } from 'react-native';

const Reusable = ({props,children,message,onchangeText,sourceImage,styleImage}) => {


    return (
    <View style={{top:20}}>
        <Text onPress={onchangeText}>{children}</Text>
        <Image 

          style={styleImage}
          source={sourceImage}
        />
   </View>
    );
  }



const styles = StyleSheet.create({
  container: {
    
    color:'red',
    alignItems: 'center',
    justifyContent: 'center',
    alignSelf:'center'
  },
});
export default Reusable;