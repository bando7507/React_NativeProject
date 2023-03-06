import { View, Text } from 'react-native'
import React from 'react'
import { assets, COLORS, FONTS, SHADOWS, SIZES } from '../constants'
import { Image } from 'react-native'

export const NFTTitle = ({
    title,
    subtitle,
    titleSize,
    subtitleSize}) => {
  return (
    <View>
      <Text style={{
        fontFamily: FONTS.semiBold,
        fontSize: titleSize,
        color: COLORS.primary
      }}>{title}</Text>
      <Text style={{
        fontFamily: FONTS.regular,
        fontSize: subtitleSize,
        color: COLORS.primary
      }}>{subtitle}</Text>
    </View>
  )
}

export const EthPrice = ({data}) => {
    return (
      <View style={{
        alignItems: 'center',
        flexDirection: 'row',
      }}>
       <Image 
        source={assets.eth}
        resizeMode='contain'
        style={{
            width: 20,
            height: 20,
            marginRight: 2,
        }}
        />
        <Text style={{
            fontFamily: FONTS.medium,
            fontSize: SIZES.font,
            color: COLORS.primary
        }}>
            {data}
        </Text>
      </View>
    )
  }

  export const ImageCmp = ({item, id}) => {
    return (
        <Image 
        source={item}
        resizeMode='contain'
        style={{
            width: 48,
            height: 48,
            marginLeft: id === 0 ? 0 : -SIZES.font,
        }}
        />
    )
  }

  export const People = () => {
    return (
      <View style={{flexDirection: 'row',}}>
        {[assets.person02, assets.person03, assets.person04].map((item, id) =>(
            <ImageCmp item={item} key={id}/>
        ))}
      </View>
    )
  }
  export const EndDate = () => {
    return (
      <View style={{
        backgroundColor: COLORS.white,
        paddingHorizontal: SIZES.font,
        paddingVertical: SIZES.base,
        justifyContent: 'center',
        alignItems: 'center',
        ...SHADOWS.light
      }}>
        <Text style={{
            fontFamily: FONTS.regular,
            fontSize: SIZES.small,
            color: COLORS.primary
        }}>EndDate</Text>
        <Text style={{
            fontFamily: FONTS.semiBold,
            fontSize: SIZES.medium,
            color: COLORS.primary
        }}>12 h 30</Text>
      </View>
    )
  }

  export const SubInfo = () => {
    return (
    <View style={{
        width: '100%',
        paddingHorizontal: SIZES.font,
        marginTop: -SIZES.extraLarge,
        flexDirection: 'row',
        justifyContent: 'space-between',

    }}>
       <People />
       <EndDate />
    </View>
    )
  }
  
