import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import MapView, {Marker} from 'react-native-maps'
import tw from 'twrnc';
import { useSelector } from 'react-redux';
import{ selectOrigin } from "../slices/navSlice"

const Map = () => {
    const origin = useSelector(selectOrigin);
  return (
    <MapView
        style={tw`flex-1`}
        mapType="mutedStandard"
        initialRegion={{
          latitude: -22.244258892557696,
          longitude:  -45.71340073521254,
          latitudeDelta: 0.0922,
          longitudeDelta: 0.0421,
          // latitude: origin.location.lat,
          // longitude:  otigin.location.lng,
          // latitudeDelta: 0.005,
          // longitudeDelta: 0.005,
        }}
        />
             
    );
};

export default Map

const styles = StyleSheet.create({})