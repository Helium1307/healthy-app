import React from 'react';
import { Text, View, StyleSheet  } from 'react-native';

import ScrollContainer from '../UI/ScrollContainer';
import ButtonCalc from '../UI/ButtonCalc';
import TabOptions from '../UI/TabOptions';
import InfoCard from '../UI/infoCard';

const Home = (props) => {
  return(
    <View style={styles.mainContainer}>
      <View style={styles.header}>
        <Text style={{fontSize: 18, marginBottom: 30}}>Cálculos importantes</Text>
        <View style={styles.scrollViewContainer}>
          <ScrollContainer 
            style={styles.scrollView}
            showsHorizontalScrollIndicator={false}
            horizontal={true} 
          >
            <ButtonCalc style={styles.button} title="Calcular o IMC"/>
            <ButtonCalc style={styles.button} title="Calcular a Taxa Metabólica Basal"/>
            <ButtonCalc style={styles.button} title="Calcular o IMC"/>
            <ButtonCalc style={styles.button} title="Calcular o IMC"/>
            <ButtonCalc style={styles.button} title="Calcular o IMC"/>
            <ButtonCalc style={styles.button} title="Calcular o IMC"/>
            <ButtonCalc style={styles.button} title="Calcular o IMC"/>
            <ButtonCalc style={styles.button} title="Calcular o IMC"/>

          </ScrollContainer>
        </View>
      </View>
      
      <View style={styles.tabOptionsContainer}>
        <TabOptions />
      </View>
        
      <ScrollContainer
        style={styles.scrollView}
        showsHorizontalScrollIndicator={false}
        horizontal={true}
      >
        <InfoCard/>
        <InfoCard/>
        <InfoCard/>
      </ScrollContainer>
    </View>
      
    
  )
};

const styles = StyleSheet.create({
  
  mainContainer: {
    flex: 1,
    width: '100%',
    height: '100%',

    paddingTop: 20,
    paddingLeft: 10,
    paddingBottom: 10,

    display: 'flex',

  },
  scrollViewContainer: {
    width: '100%',
    height: 90,

    marginBottom: 30,
  },
  header: {
    paddingTop: 35,
    padding: 20,
    alignItems: 'center',
  },

  tabOptionsContainer: {
    height: 45,
    padding: 3,
  }
  
});

export default Home;