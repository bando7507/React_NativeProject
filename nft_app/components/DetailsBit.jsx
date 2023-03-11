import { View, Text, Image } from 'react-native'
import React from 'react'
import { COLORS, FONTS, SIZES } from '../constants'
import { EthPrice } from './SubInfo'

const DetailsBit = ({bid}) => {
  return (
    <View style={{
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'space-between',
      paddingHorizontal: SIZES.base,
      marginVertical: SIZES.base * 2
      }}>
      <Image
      resizeMode='contain'
      source={bid.image}
      style={{ width: 48, height: 48,}}
      />

      <View>
        <Text style={{
          fontSize: SIZES.small,
          fontFamily: FONTS.semiBold,
          color: COLORS.primary
        }}>
          Bid places by {bid.name}
        </Text>
        <Text style={{
          fontSize: SIZES.small - 2,
          fontFamily: FONTS.regular,
          color: COLORS.secondary,
          marginTop: 3,
        }}>
          {bid.date}
        </Text>
      </View>

      <EthPrice data={bid.price}/>
    </View>
  )
}

export default DetailsBit