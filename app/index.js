import React from 'react';
import { ImageBackground, StyleSheet, View, Text, Image } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { Stack, useRouter } from "expo-router";


const ScreenWithBackground = () => {
  const router =   useRouter();
  return (
    <>
    <Stack.Screen options={{
        headerTitle:"",
        headerStyle:{
            backgroundColor:"#22c55e"
        },
       headerBackground: () =>  <Image
       style={{ height: "100%", flex: 1 }}
       source={require('../assets/images/laptop-bed-night-room-interior.jpg')} 
   />
    }}>

    </Stack.Screen>
    <ImageBackground
      source={require("../assets/images/comfortable-modern-bedroom-with-elegant-decoration-lighting-generative-ai.jpg")} // Replace with the actual path to your background image
      style={styles.background}
    >
      <View style={styles.container}>
        <View>
      <View style={{flex:1, flexDirection:"row",  justifyContent: 'space-between', marginLeft:20}} className="absolute z-30">
                <BorderedButton/>
                <BorderedButton2/>
                <BorderedButton2/>
            </View>
       
      </View>
       <View className="mt-8 ">
       <Text className="text-3xl font-bold text-white m-4" style={{fontFamily:'DMBold'}}>Zifa App</Text>
       <View>
        <Text className="text-xl text-white m-4 bg-green-500 " style={{fontFamily:'DMRegular'}}>Transform Your Experience,</Text>
       </View>
       <Text className="text-xl text-white  bg-green-500 mx-4 w-48" style={{fontFamily:'DMRegular'}}>All in one App</Text>
       <TouchableOpacity className="bg-green-500" style={styles.continueButton} onPress={()=>router.push("/main")}>
        <Image source={require("../assets/icons/right-up.png")}
        resizeMode='cover'
      
    />
       </TouchableOpacity>

       </View>
      </View>
    </ImageBackground>
    </>
  );
};
const BorderedButton = ({ onPress, title }) => {
    return (
      <TouchableOpacity className="bg-green-500" style={styles.button} onPress={onPress}>
        <Text>{title}</Text>
      </TouchableOpacity>
    );
  };
  
  const BorderedButton2 = ({ onPress, title }) => {
    return (
      <TouchableOpacity className="bg-green-500" style={styles.button2} onPress={onPress}>
        <Text>{title}</Text>
        
      </TouchableOpacity>
    );
  };

const styles = StyleSheet.create({
  background: {
    flex: 1,
    resizeMode: 'cover', // or 'contain' based on your preference
  },
  container: {
    position:'absolute',
    bottom:120
   
  },
  text: {
    fontSize: 24,
    color: 'white',
  },
  button: {
   
    borderColor: '#32B162',
    borderRadius: 8,  
    width:65,
    height:15,
 
  },
  button2: {
   
    borderRadius: 8,  
    width:15,
    height:15,
    backgroundColor: '#f5f5f5', // Set a transparent 
    marginLeft:4
    
  }
  , button3: {
   
    borderRadius: 8,  
    width:15,
    height:15,
    backgroundColor: '#f5f5f5', // Set a transparent background
  },
  continueButton:{
    borderColor: '#32B162',
    borderRadius: 100,  
    width:60,
    height:60,
    marginTop:32,
    marginLeft:20,
    flex:1,
    flexDirection:"row",
    justifyContent:"center",
    alignItems:"center"
  },
 
});

export default ScreenWithBackground;
