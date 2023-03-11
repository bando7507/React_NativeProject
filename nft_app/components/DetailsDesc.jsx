import { View, Text } from 'react-native'
import React, { useState } from 'react'
import { EthPrice, NFTTitle } from './SubInfo'
import { COLORS, FONTS, SIZES } from '../constants'

const DetailsDesc = ({ data }) => {
  const [text, setText] = useState(data.description.slice(0, 100))
  const [readMore, setReadMore] = useState(false)
  return (
    <>
      <View style={{width: '100%', flexDirection: 'row', justifyContent: 'space-between',paddingHorizontal: SIZES.font}}>
        <NFTTitle 
        title={data.name}
        subtitle={data.creator}
        titleSize={SIZES.extraLarge}
        subtitleSize={SIZES.font}
        />

        <EthPrice data={data.price} />
      </View>
      <View style={{marginVertical: SIZES.extraLarge * 1.5, paddingHorizontal: SIZES.font}}>
          <Text style={{
            fontSize: SIZES.font,
            fontFamily: FONTS.semiBold,
            color: COLORS.primary
          }}>
            Description
          </Text>

          <View style={{marginTop: SIZES.base}}>
          <Text style={{
            fontSize: SIZES.small,
            fontFamily: FONTS.regular,
            color: COLORS.secondary,
            lineHeight: SIZES.large
          }}>
            {text}{!readMore && '...'}
            <Text style={{
            fontSize: SIZES.font,
            fontFamily: FONTS.semiBold,
            color: COLORS.primary,
            lineHeight: SIZES.large
            }}
            onPress={() => {
              if(!readMore){
                setText(data.description)
                setReadMore(true)
              }else{
                setText(data.description.slice(0, 100))
                setReadMore(false)
              }
            }}
            >
             {readMore ? 'Show Less' : 'Read More'}
            </Text>
          </Text>
        </View>
        </View>
    </>
  )
}

export default DetailsDesc