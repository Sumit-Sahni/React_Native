import React from 'react';
import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';


const Result = ({navigation, route}) => {
  const {score} = route.params

  const resultBanner= score>30?"https://cdni.iconscout.com/illustration/premium/thumb/men-celebrating-victory-4587301-3856211.png" 
                               :"https://www.iconpacks.net/icons/2/free-sad-face-icon-2692-thumb.png"
  return (
    <View style={styles.container}>
     <Text style={styles.resultFont}>SCORE</Text>
    <Text style={styles.scoreValue}>{score}</Text>
    <View style={styles.bannerContainer}>
     <Image
    source={{
      uri:resultBanner,
    }}
    style={styles.banner}
    resizeMode="contain"
  />
</View>
<TouchableOpacity onPress={() => navigation.navigate('Home')} style={styles.button}>
  <Text style={styles.buttonText}>GO TO HOME</Text>
</TouchableOpacity>
</View>
  );
};


export default Result;

const styles = StyleSheet.create({
  resultFont:{
    fontSize:30,
    alignSelf:'center',
    marginVertical:20,
    fontWeight:'600',
  },
  banner: {
    height: 300,
    width: 300,
  },
  bannerContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    flex: 1,
  },
  container: {
    paddingTop: 40,
    paddingHorizontal: 20,
    height: '100%',
  },
  button: {
    width: '100%',
    backgroundColor: '#1A759F',
    padding: 16,
    borderRadius: 16,
    alignItems: 'center',
    marginBottom: 30,
  },
  buttonText: {
    fontSize: 24,
    fontWeight: '600',
    color: 'white',
  },
  scoreValue:{
    fontSize: 24,
    fontWeight:'800',
    alignSelf:'center'
  }
});