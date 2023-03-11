import { View, Text, Image } from 'react-native'
import React from 'react'
import { FlatList } from 'react-native'
import { TouchableOpacity } from 'react-native'
import { Icon } from 'react-native-elements'
import tw from 'twrnc'
import { useNavigation } from '@react-navigation/native'


const data = [
    {
        id: '123',
        title: 'Get a ride',
        image: 'https://links.papareact.com/3pn',
        screen: 'MapScreen'
    },
    {
        id: '456',
        title: 'Order food',
        image: 'https://links.papareact.com/28w',
        screen: 'MapScreen'
    }
]
const NavOption = () => {
    const navigation = useNavigation()

  return (
    <FlatList 
    data={data}
    horizontal
    showsHorizontalScrollIndicator={false}
    keyExtractor={(item) => item.id}
    renderItem={({item}) => (
        <TouchableOpacity 
        style={tw`bg-gray-200 m-2 pl-6 p-2 pt-4 pb-8 w-40`}
        onPress={() => navigation.navigate(item.screen)}
        >
            <View>
                <Image 
                resizeMode='contain'
                source={{
                    uri: item.image
                }}
                style={{width: 120, height: 120,}}
                />
                <Text style={tw`mt-2 text-lg font-semibold`}>
                    {item.title}
                </Text>

                <Icon 
                name='arrowright'
                color='white'
                type='antdesign'
                style={tw`p-2 bg-black rounded-full mt-4 w-11 h-11`}
                />
            </View>
        </TouchableOpacity>
    )}
    />
  )
}

export default NavOption