import react from "react";
import {Text, View, StyleSheet, Dimensions, TouchableOpacity, Image, Linking} from "react-native";

const Visad = ({title, content}) =>{
    return(
        <View style={styles.card}>
              <View style={{ width:Dimensions.get('window'),  flex:1, flexDirection:"row", padding:10, justifyContent:"space-around"}}>
              <View style={{ width:Dimensions.get('window').width/2, padding:3}}>
                <Text style={{color:"white", fontFamily:"DMBold", fontSize:12.5}}>Secure your visa with ease through trusted UAE agencies. Click 'Book Now' for a seamless process!</Text>
                <TouchableOpacity style={styles.bookNow} onPress={()=>Linking.openURL('whatsapp://send?text=hello, I have an inquiry about the visa&phone=+971522437828')}>
                    <Text className="py-1" style={{textAlign:"center", fontSize:14}}>Book Now</Text>
                </TouchableOpacity>
              </View>
              <View style={{ width:Dimensions.get('window').width/2, padding:3, flex:1}}>
                  <Image source={require("../../assets/images/american-visa-document.jpg")} resizeMode="cover" style={{width:150, height:150, borderRadius:100}} /> 
              </View>
              </View>
            
    </View>
    )
}

const styles = StyleSheet.create({
    card:{
      backgroundColor:"purple",
      borderRadius:10,
      marginTop:10,
      marginLeft:10,
      marginRight:10,
      
    },
    bookNow:{
      width:120,
      borderRadius:20,
      borderWidth:1,
      padding:4,
      marginTop:20,
      backgroundColor:"white",
      fontFamily:"DMBold",

  },

  });
  

export default Visad;