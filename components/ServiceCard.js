import React from 'react';
import { View, Image, Text, StyleSheet } from 'react-native';

const ServiceCard = ({image, name}) => {
  return (
    <View style={styles.container}>
      <View className="bg-red-300 w-32 h-32">
      {image}
      <Text style={styles.text}>{name}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
    marginTop:15,
    marginLeft:5
   
  },
  
  text: {
    fontSize: 12,
    color:"black",
    textAlign:"center"

  },
});

export default ServiceCard;
