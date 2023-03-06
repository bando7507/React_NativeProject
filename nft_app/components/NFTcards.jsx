import { View, Text } from 'react-native'
import React from 'react'
import { assets, COLORS, SHADOWS, SIZES } from '../constants'
import { Image } from 'react-native'
import { CircleButton } from './Button'
import { EthPrice, NFTTitle, SubInfo } from './SubInfo'
import { RectButton } from  './Button'
import { useNavigation } from '@react-navigation/native'

const NFTcards = ({item}) => {

    const navigation = useNavigation()
  return (
    <View style={{
        backgroundColor: COLORS.white,
        borderRadius: SIZES.font,
        margin: SIZES.base,
        marginBottom: SIZES.extraLarge,
        ...SHADOWS.dark
    }}>
        <View style={{width: "100%", height: 250}}>
            <Image 
            source={item.image} 
            resizeMode='cover'
            style={{
                width: '100%',
                height: '100%',
                borderTopLeftRadius: SIZES.font,
                borderTopRightRadius: SIZES.font,
            }}
            />

            <CircleButton imgUrl={assets.heart} right={10} top={10}/>
        </View>
            <SubInfo />

            <View style={{
                width: '100%',
                padding: SIZES.font,
            }}>
                <NFTTitle 
                title={item.name}
                subtitle={item.creator}
                titleSize={SIZES.large}
                subtitleSize={SIZES.small}
                />

                <View style={{
                    marginTop: SIZES.font,
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    flexDirection: 'row',
                }}>
                    <EthPrice data={item.price}/>
                    <RectButton 
                    minWidth={100}
                    fontSize={SIZES.font}
                    handlePress={() => navigation.navigate('Details', {item})}                
                    />
                </View>
            </View>
    </View>
  )
}

export default NFTcards