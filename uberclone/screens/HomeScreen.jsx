import { View, Text, SafeAreaView } from 'react-native'
import React                    from 'react'
import tw from 'twrnc';
import { Image } from 'react-native';
import NavOption from '../components/NavOption';
import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete';
import { GOOGLE_MAP_KEY } from '@env'
import { useDispatch } from 'react-redux';
import { setDestination, setOrigin } from '../slices/NavSlice';

const HomeScreen = () => {
    const dispacth = useDispatch()
  return (
    <SafeAreaView style={tw`bg-white h-full`}>
      <View style={tw`p-5`}>
        <Image
        resizeMode='contain'
        source={{
            uri: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/58/Uber_logo_2018.svg/2560px-Uber_logo_2018.svg.png"
        }}
        style={{
            width: 100,
            height: 100,
        }}
        />

        <GooglePlacesAutocomplete
        placeholder='Where From'
        styles={{
            container:{
                flex: 0,
            },
            textInput:{
                fontSize: 18
            }
        }}
        debounce={400}
        nearbyPlacesAPI='GooglePlacesSearch'

        query={{
            // key: GOOGLE_MAP_KEY,
            key: "AIzaSyDPujT5-Vyp7X1VkcLqqCynuRLr34NDH9Y",
            language: 'en',
          }}
          enablePoweredByContainer={false}
          onPress={(data, details = null) => {
              // 'details' is provided when fetchDetails = true
            //   console.log(data);
            //   console.log(details);

            dispacth(setOrigin({
                location: details.geometry.location,
                description: data.description
            }))
            dispacth(setDestination({
                location: null
            }))
            }}
           fetchDetails={true}
        />
        <NavOption />
      </View>
    </SafeAreaView>
  )
}

export default HomeScreen