import { View, Text, Image, TextInput } from 'react-native'
import React from 'react'
import { assets, COLORS, FONTS, SIZES } from '../constants'

const HomeHeader = () => {
  return (
    <View style={{
      padding: SIZES.font,
      backgroundColor: COLORS.primary
    }}>
      <View style={{
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
      }}>
        <Image 
        source={assets.logo}
        resizeMode='contain'
        style={{
          width: 90,
          height: 25,
        }}
        />

        <View style={{
          width: 45,
          height: 45,
        }}>
          <Image
          source={assets.person01}
          resizeMode='contain'
          style={{
            width: '100%',
            height: '100%',
          }}
          />
          <Image
          resizeMode='contain' 
          source={assets.badge}
          style={{
          position: 'absolute',
          width: 18,
          height: 18,
          bottom: 0,
          right: 0,            
          }}
          />
        </View>
      </View>
      <View style={{marginVertical: SIZES.font,}}>
        <Text style={{ fontFamily: FONTS.regular, fontSize: SIZES.small, color: COLORS.white}}>
          Hello Victoria 👌
        </Text>
        <Text style={{ fontFamily: FONTS.bold, fontSize: SIZES.large, color: COLORS.white, marginTop: SIZES.base/2,}}>
          Let's find masterpiece
        </Text>
      </View>

      <View style={{marginTop: SIZES.font}}>
        <View style={{
          width: '100%',
          backgroundColor: COLORS.gray,
          flexDirection: 'row',
          alignItems: 'center',
          borderRadius: SIZES.font,
          paddingVertical: SIZES.small -2,
          paddingHorizontal: SIZES.font,

        }}>
          <Image 
          source={assets.search}
          resizeMode='contain'
          style={{ width: 20, height: 20, marginRight: SIZES.font,}}
          />

          <TextInput 
          placeholder='search NFTs'
          style={{flex: 1}}
          onChangeText={() =>{}}
          />
        </View>
      </View>
    </View>
  )
}

export default HomeHeader