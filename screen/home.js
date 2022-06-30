import {StyleSheet, View, Text,TouchableOpacity, Image } from 'react-native'
import React from 'react'
import Title from '../components/title'


export default function Home({navigation}) {
  return (
    <View style={styles.mainContainer}>
       <Title textTitle='Home'/>
       <View style={styles.imageContainer}>
          <Image
        
            source={{uri:`https://cdni.iconscout.com/illustration/premium/preview/education-achievement-5649077-4707133.png?w=0&h=700`}}
            style={styles.banner}
          />
       </View>
       <TouchableOpacity
        onPress={()=>navigation.navigate("Quiz")}
        style={styles.button}
        >
        <Text style={styles.buttonText}>Start Quiz</Text>
      </TouchableOpacity>
    </View>
  )
}

const styles = StyleSheet.create({
    banner: {
        width:400,
        height:370
    },
     imageContainer:{
        alignItems: 'center',
        justifyContent: 'center',
        padding:12,
        flex:1,
     },
        mainContainer:{
            paddingTop:40,
            paddingHorizontal:16,
            height:'100%',
            backgroundColor:'#fff',
        },
    button:{
        width:'100%',
        backgroundColor:'#0077b6',
        padding:15,
        borderRadius:16,
        alignItems: 'center',
        marginBottom:30,
    },
     buttonText:{
        color:'#fff',
        fontSize:20,
        fontWeight:'300',
      
    }                       
})
