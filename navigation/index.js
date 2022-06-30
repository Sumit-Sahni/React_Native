import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from '../screen/home';
import Quiz from '../screen/quiz';
import Results from '../screen/results';

const Stack = createNativeStackNavigator();

const  MyStack = ()=> {
  return (
    <Stack.Navigator>
      <Stack.Screen name='Home' component={Home} options={{headerShown:false}} />
      <Stack.Screen name="Quiz" component={Quiz} options={{headerShown:false}} />
      <Stack.Screen name="Results" component={Results}options={{headerShown:false}}  />
    </Stack.Navigator>
  );
}

export default MyStack;