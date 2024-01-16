import react from "react";
import {Text, View, StyleSheet, Dimensions} from "react-native";

const Visad = ({title, content}) =>{
    return(
        <View style={styles.card}>
        <View style={{width:Dimensions.get('window').width/2}}>
            <Text>Apply for Visa with our trusted Agents isn UAE </Text>
        </View>
        <View style={{width:Dimensions.get('window').width/2}}>
            <Text>Apply for Visa with our trusted Agents isn UAE </Text>
        </View>
    </View>
    )
}

const styles = StyleSheet.create({
    card: {
        flex:1,
        flexDirection:"row",
        width:Dimensions.get('window').width*100,
      backgroundColor: 'red',
      borderRadius: 8,
      padding: 10,
      margin: 10,
      shadowColor: '#000',
      shadowOffset: {
        width: 0,
        height: 1,
      },
      shadowOpacity: 0.25,
      shadowRadius: 4,
      elevation: 5,
    },
    title: {
      fontSize: 20,
      fontWeight: 'bold',
      marginBottom: 8,
    },
    content: {
      fontSize: 16,
    },

  });
  

export default Visad;