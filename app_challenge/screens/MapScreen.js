import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import MapView from "react-native-maps";
import tw from 'twrnc';
import Map from "../components/Map"
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Provider from '../components/Provider';


const MapScreen = () => {
  
  const Stack = createNativeStackNavigator();

  return (
    <View>
      <View style={tw`h-1/2`}>
        <Map  

        />
      </View>

      <View style={tw`h-1/2`}>
      <Stack.Navigator>
      <Stack.Screen 
          name="Provider" 
            component={Provider} 
            options={{
              headerShown: false,
            }}
            />
      </Stack.Navigator>
      
      </View>
    </View>
  )
}

export default MapScreen

const styles = StyleSheet.create({})