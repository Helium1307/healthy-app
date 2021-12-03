import React from 'react';
import { View,Image , Text, StyleSheet } from 'react-native';
import { Link } from 'react-router-native';
import ScrollContainer from '../ScrollContainer';


const InfoCard = (props) => {
  return (
    <View style={styles.container}>
      <Link to={'/'} style={styles.link}>
        <View>
          <View style={{paddingLeft: 10}}><Text style={{fontSize:18}}>Low Carb</Text></View>
          <View style={{paddingLeft: 10}}><Text style={{fontSize:12}}>Uma dieta pobre em carboidratos</Text></View>
        </View>
      </Link>
    </View>

      
  )
};

const styles = StyleSheet.create({
  
  container :{
    borderColor: '#000',
    borderStyle: 'solid',
    borderWidth: 1,
    borderRadius: 15,

    width: 211,
    height: 252,

    marginTop: 50,
    marginRight: 30,

  },
  link: {
    width: 211,
    height: 252,
    justifyContent: 'flex-end',

    paddingBottom: 40,

  },
  texts: {
    color: '#9A9A9A',
    fontSize: 14
  }
});

export default InfoCard;