import { View, Text, Image, StatusBar } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import FocuseStatusBar from '../components/FocuseStatusBar'
import { assets, COLORS, SHADOWS, SIZES } from '../constants'
import { CircleButton, RectButton } from '../components/Button'
import { FlatList } from 'react-native'
import DetailsBit from '../components/DetailsBit'
import { SubInfo } from '../components/SubInfo'



const HeaderDetails = ({ data, navigation }) =>{
  return(
    <View style={{ width: '100%', height: 373,}}>
      <Image 
      source={data.image}
      resizeMode='cover'
      style={{ width: '100%', height: '100%',}}
      />

      <CircleButton 
      imgUrl={assets.left}
      handlePress={() =>{navigation.goBack()}}
      left={15}
      top={StatusBar.currentHeight + 10}
      />

      <CircleButton 
      imgUrl={assets.heart}
      handlePress={() =>{navigation.goBack()}}
      right={15}
      top={StatusBar.currentHeight + 10}
      />
    </View>
  )
}

const Details = ({route, navigation}) => {
  const { item }  = route.params
  // console.log(item)
  return (
    <SafeAreaView style={{flex: 1}}>
     <FocuseStatusBar 
     barStyle='dark-content'
     backgroundColor='transparent'
     translucent={true}
     />
     <View style={{
      width: '100%',
      position: 'absolute',
      bottom: 0,
      paddingVertical: SIZES.font,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: 'rgba(255, 255,255, .5)'
     }}>
      <RectButton minWidth={170} fontSize={SIZES.large} {...SHADOWS.dark}/>
     </View>

     <FlatList 
     data={item.bids}
     renderItem={({item}) => <DetailsBit bid={item}/>}
     keyExtractor={(item) => item.id}
     showsVerticalScrollIndicator={false}
     contentContainerStyle={{ paddingBottom: SIZES.extraLarge * 3}}
     ListHeaderComponent={() =>(
      <React.Fragment>
        <HeaderDetails data={item} navigation={navigation}/>
        <SubInfo />
      </React.Fragment>
     )}
     />
    </SafeAreaView>
  )
}

export default Details