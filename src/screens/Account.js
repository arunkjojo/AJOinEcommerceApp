import { View, Text, Image } from 'react-native'
import React from 'react'

const Account = () => {
  return (
    <View>
      <Text>Account</Text>
      <Image 
      style={{width: 100}}
      source={{uri: 'https://reactnative.dev/img/tiny_logo.png'}} />
    </View>
  )
}

export default Account