import { View, Text, StyleSheet, FlatList, TouchableOpacity, Image, ScrollView } from "react-native"
import { Stack } from "expo-router";
import Shipperad from "../../components/ads/Shipperad";
import PopularCard from "../../components/PopularCard";

const Main = () =>{
    const popularList = [
       {
        name:"sleep",
        image:<View style={styles.imageView}><Image style={styles.image} resizeMode="contain" source={require("../../assets/images/sleep.gif")}/></View>
       }
        ,
        {
            name:"Food",
             image:<View style={styles.imageView}><Image style={styles.image} resizeMode="contain" source={require("../../assets/images/vegan-food.gif")}/></View>

        },
        {
           name:"Groceries", 
           image:<View style={styles.imageView}><Image style={styles.image} resizeMode="contain" source={require("../../assets/images/grocery.gif")}/></View>

        },  
       {
           name:"Fashion", 
           image:<View style={styles.imageView}><Image style={styles.image} resizeMode="contain" source={require("../../assets/images/trench-coat.gif")}/></View>

        },

        {
            name:"Used Items", 
            image:<View style={styles.imageView}><Image style={styles.image} resizeMode="contain" source={require("../../assets/images/action-camera.gif")}/></View>
 
         },
    ]


    const servicesList = [
        {
         name:"sleep",
         image:<View style={styles.imageView}><Image style={styles.serviceImage} resizeMode="contain" source={require("../../assets/images/sleep.gif")}/></View>
        }
         ,
         {
             name:"Food",
              image:<View style={styles.imageView}><Image style={styles.serviceImage} resizeMode="contain" source={require("../../assets/images/vegan-food.gif")}/></View>
 
         },
         {
            name:"Groceries", 
            image:<View style={styles.imageView}><Image style={styles.serviceImage} resizeMode="contain" source={require("../../assets/images/grocery.gif")}/></View>
 
         },  
        {
            name:"Fashion", 
            image:<View style={styles.imageView}><Image style={styles.serviceImage} resizeMode="contain" source={require("../../assets/images/trench-coat.gif")}/></View>
 
         },   
     ]
    return(
        <ScrollView>
            <Stack.Screen options={{
                headerTitle:"",
                headerStyle:{
                    backgroundColor:"#22c55e"
                },
                headerShadowVisible:false
            }}>

            </Stack.Screen>
            <View style={styles.main}>
            <View style={styles.header} className="bg-green-500">
              
                <Text style={styles.headerText}>20% Discount On Your First Room Booking</Text>
                <View style={styles.headerImage}>
                    <Image style={styles.headerImageStyle} source={require("../../assets/images/bed1.jpg")}/>
                </View>
                <TouchableOpacity style={styles.bookNow}>
                    <Text className="py-1 text-center">Book Now</Text>
                </TouchableOpacity>
            </View>
            
        </View>
        <View style={styles.services}>
            {servicesList.map((item)=>{
                return(
                    <TouchableOpacity>
                    <PopularCard name={item.name} image={item.image} />
                </TouchableOpacity>
                )
            })}
        </View>
        <View style={styles.main}>
            <Shipperad/>
        </View>
        <View style={styles.popular}>
            {/** most popular items  
        <Text style={styles.popularText}>Most Popular Services Today</Text>
        <FlatList
                keyExtractor={(item)=>item.name}
                horizontal
                showsHorizontalScrollIndicator={false}
                data={popularList}
                renderItem={({item})=>(
                    <TouchableOpacity>
                        <PopularCard name={item.name} image={item.image} />
                    </TouchableOpacity>
                )}

            />
            */}
        </View>
        
        </ScrollView>
    )
}
const styles = StyleSheet.create({
    header:{
        padding:10,
        height:220,
        position:"relative",
        
    },
    headerText:{
        fontFamily:"DMBold",
        fontSize:20,
        marginTop:10,
        color:"white",
        lineHeight:32
        
    },
    main:{
        
       backgroundColor:"white"
    },
    image: {
       
        width: 80, // Set your desired width
        height: 80, // Set your desired height
        marginBottom: 10, // Optional: Add margin at the bottom of the image
        borderRadius:100, 
        borderWidth:1,
        padding:5,
        backgroundColor:"#fefefe"
      },
      serviceImage: {
       
        width: 80, // Set your desired width
        height: 80, // Set your desired height
        marginBottom: 10, // Optional: Add margin at the bottom of the image
        borderRadius:10, 
        borderWidth:1,
        padding:5,
        backgroundColor:"#fefefe"
      },
      imageView:{
        
       
      

    },
    bookNow:{
        width:120,
        borderRadius:20,
        borderWidth:1,
        padding:4,
        marginTop:40,
        backgroundColor:"white",
        fontFamily:"DMBold",

    },
    headerImage:{
        position:"absolute",
        backgroundColor:"white",
        borderRadius:100,
        height:150,
        width:150,
        right:0,
        bottom:8,
        zIndex:1,
       
    },
    headerImageStyle:{
        height:150,
        width:150,
        borderRadius:100,

    },
    services:{
        flex:1,
        flexDirection:"row",
        justifyContent:"space-around",
        backgroundColor:"white"
    },
    popular:{
        backgroundColor:"white",

    },
    popularText:{
        marginLeft:10,
        paddingTop:20
    }
})
export default Main;