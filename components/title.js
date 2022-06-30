import { StyleSheet, Text, View, TouchableOpacity, Image, } from 'react-native'
import React from 'react'

const Title = ({textTitle}) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>{textTitle}</Text>
    </View>
  )
}

export default Title

const styles = StyleSheet.create({
    container: {
        paddingVertical: 16,
        paddingHorizontal: 16,
        alignItems: 'center',
        justifyContent: 'center',
      
    },
    title: {
        fontSize: 40,
         padding:1,
    }
})