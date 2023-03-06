// import { View, Text } from 'react-native'
// import React from 'react'
import { StatusBar } from 'react-native'
import { useIsFocused } from '@react-navigation/native'

const FocuseStatusBar = (props) => {
    const isFocused = useIsFocused();
    return isFocused ? <StatusBar animated {...props}/> : null
}

export default FocuseStatusBar