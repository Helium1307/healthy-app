import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const ButtonCalc = (props) => {
  return (
    <View style={styles.button} >
      
        <Text style={{color: '#fafafa', fontSize: 16}}>{props.title}</Text>
      
    </View>
      
  )
};

const styles = StyleSheet.create({
  button: {
    backgroundColor: '#62E2B4',
   
    marginRight: 15,

    width: 155,
    height: 86,

    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',

    borderRadius: 10,

  }
  
  
  
});

export default ButtonCalc;