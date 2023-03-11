import { View, Text } from 'react-native'
import React from 'react'
import tw from 'twrnc'
import Maps from '../components/Maps'

const MapScreen = () => {
  return (
    <View>
      <View style={tw`h-1/2`}>
        <Maps />
      </View>

      <View style={tw`h-1/2`}>
      </View>
    </View>
  )
}

export default MapScreen