import { View, Text } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native'
import FocuseStatusBar from '../components/FocuseStatusBar'
import { COLORS, NFTData } from '../constants'
import { FlatList } from 'react-native'
import HomeHeader from '../components/HomeHeader'
import NFTcards from '../components/NFTcards'

const Home = () => {
  return (
    <SafeAreaView style={{flex: 1}}>
      <FocuseStatusBar background={COLORS.primary}/>
      <View style={{flex: 1}}>

        <View style={{zIndex: 0}}>
        <FlatList 
          data={NFTData}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) =><NFTcards item={ item }/> }
          ListHeaderComponent={<HomeHeader />}
          showsVerticalScrollIndicator={false}
          />
        </View>

        <View style={{
          position: 'absolute',
          left: 0,
          top: 0,
          right: 0,
          bottom: 0,
          zIndex: -1
        }}>
          <View style={{
            height: 300,
            backgroundColor: COLORS.primary
          }}/>
          <View style={{
            flex: 1,
            backgroundColor: COLORS.white
          }}/>
        </View>
      </View>
    </SafeAreaView>
  )
}

export default Home