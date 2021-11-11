import React from 'react';
import { ScrollView } from 'react-native';

const ScrollContainer = (props) => {
  return (
    <ScrollView {...props}>
      {props.children}
    </ScrollView>
  )
};

export default ScrollContainer;