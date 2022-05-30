import { StyleSheet, Text, View, SafeAreaView, Image} from 'react-native'
import React from 'react'
import tw from 'twrnc';
import NavOptions from '../components/NavOptions';
import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete';
import {GOOGLE_MAPS_APIKEY} from "@env";
import { useDispatch } from 'react-redux';
import { setDestination, setOrigin } from '../slices/navSlice';

const HomeScreen = () => {
  const dispatch = useDispatch()

  return (
    <SafeAreaView style={tw`bg-white h-full`}>
      <View style={tw`p-5`}>
        <Text style={tw`px-3 text-2xl font-semibold text-blue-600 text-center`}
        >NeverAlone</Text>
        <GooglePlacesAutocomplete
          placeholder= 'Oncê tá?'
          styles={{
              container:{
                flex: 0,
              },
              textInput:{
                fontSize: 18,
              }
          }}
          onPress={(data, details = null) => {
            dispatch(
              setOrigin({
              location: details.geometry.location,
              description: data.description,
              })
            );
            dispatch(setDestination(null));
          }}
          fetchDetails = {true}
          returnKeyType={"search"}
          enablePoweredByContainer={false}
          minLength={2}
          query={{
            key:GOOGLE_MAPS_APIKEY,
            language: 'en'
          }}
          nearbyPlacesAPI='GooglePlacesSearch'
          debounce={400}
        />
        <NavOptions></NavOptions>
        
      </View>
    </SafeAreaView>
  )
}

export default HomeScreen

const styles = StyleSheet.create({})