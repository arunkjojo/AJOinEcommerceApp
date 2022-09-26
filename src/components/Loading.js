import { ImageBackground } from 'react-native'
import React from 'react'

const Loading = () => {
  return <ImageBackground style={{ width: '100%', height: '100%' }} source={require("../assets/images/loading-38.gif")} />
}

export default Loading
