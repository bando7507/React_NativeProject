import { View, Text } from 'react-native'
import React from 'react'

const DetailsBit = ({bid}) => {
  return (
    <View>
      <Text>{bid.name}</Text>
    </View>
  )
}

export default DetailsBit