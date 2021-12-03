import React from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';
import { Link } from 'react-router-native';
import ScrollContainer from '../ScrollContainer';

const TabOptions = (props) => {
  return (
    <ScrollContainer 
      style={styles.navBar} 
      showsHorizontalScrollIndicator={false}
      horizontal={true}
    >
      
      <View style={{marginRight: 20}}><Link to='/'><Text style={styles.texts}>Todos</Text></Link></View>
      <View style={{marginRight: 20}}><Link to='/'><Text style={styles.texts}>Dietas</Text></Link></View>
      <View style={{marginRight: 20}}><Link to='/'><Text style={styles.texts}>Vitaminas</Text></Link></View>
      <View style={{marginRight: 20}}><Link to='/'><Text style={styles.texts}>Proteínas</Text></Link></View>
      <View style={{marginRight: 20}}><Link to='/'><Text style={styles.texts}>Carboidratos</Text></Link></View>
      <View style={{marginRight: 20}}><Link to='/'><Text style={styles.texts}>Gorduras</Text></Link></View>
      <View style={{marginRight: 20}}><Link to='/'><Text style={styles.texts}>Todos</Text></Link></View>
      
    </ScrollContainer>
      
  )
};

const styles = StyleSheet.create({
  

  texts: {
    color: '#9A9A9A',
    fontSize: 14,
    
  }
});

export default TabOptions;