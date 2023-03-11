import { View, Text } from 'react-native'
import React, { useState } from 'react'
import { SafeAreaView } from 'react-native'
import FocuseStatusBar from '../components/FocuseStatusBar'
import { COLORS, NFTData } from '../constants'
import { FlatList } from 'react-native'
import HomeHeader from '../components/HomeHeader'
import NFTcards from '../components/NFTcards'

const Home = () => { 
  const [nftData, setNftData] = useState(NFTData)
  
  const handleSearch = (value) =>{
    if(!value.length){
      setNftData(NFTData)
    }

    //avec ce code les nom doivent etre identique

    // const filteredData = NFTData.filter((item) => item.name.toLowerCase() === value.toLowerCase())
    
    //avec ce lui la on trouve l'article des le premiere lettres qu'on saisit
    const filteredData = NFTData.filter((item) => item.name.toLowerCase().includes(value.toLowerCase()))
    

    if(filteredData.length){
      setNftData(filteredData)
      console.log(filteredData);
    }else{
      setNftData(NFTData)
    }
  }



  return (
    <SafeAreaView style={{flex: 1}}>
      <FocuseStatusBar background={COLORS.primary}/>
      <View style={{flex: 1}}>

        <View style={{zIndex: 0}}>
        <FlatList 
          data={nftData}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) =><NFTcards item={ item }/> }
          ListHeaderComponent={<HomeHeader onSearch={handleSearch} data={NFTData}/>}
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