import React from 'react';
import {StyleSheet, Text, View, Dimensions, TouchableOpacity, Image} from "react-native";


const Shipperad = () => {
    return (
        <View style={styles.main}>
                <View style={styles.viewLeft} >
                    <Text style={styles.viewLeftText}>We ship Items To and from Uganda</Text>
                    <Text style={styles.viewLeftText}>Get 25% Discount</Text>

                    <TouchableOpacity style={styles.bookNow}>
                        <Text style={{textAlign:"center"}} >Book Now</Text>
                    </TouchableOpacity>
                </View>
                <View style={styles.viewRight} >
                    <View >
                        <Image style={{width:150, height:140, borderRadius:100}} source={require("../../assets/images/industrial-port-container-yard.jpg")}/>
                    </View>
                   
                </View>

        </View>
    );
}

const styles = StyleSheet.create({
main:{
    marginTop:30,
    flex:1,
    flexDirection:"row",
    justifyContent:"space-between",
    height:150,
    backgroundColor:"white",   
},
viewLeft:{
    backgroundColor:"#22c55e",
    borderTopRightRadius: 100,
    width:Dimensions.get("window").width/2,
    flex:1,
    justifyContent:"center"
},
viewLeftText:{
    marginTop:10,
    marginLeft:10,
    color:"white",
    fontSize:12

},

viewRight:{
  
    width:Dimensions.get("window").width/2,
    flex:1,
    justifyContent:"center",
    alignItems:"center",
    
    
},
header:{
    marginLeft:20
},
bookNow:{
    width:120,
    borderRadius:20,
    borderWidth:1,
    padding:7,
    marginTop:15,
    backgroundColor:"white",
    fontFamily:"DMBold",
    marginTop:10,
    marginLeft:10,

},
})
export default Shipperad;
