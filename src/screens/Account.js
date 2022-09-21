import { View, Text } from 'react-native'
import React from 'react'

const Account = () => {
  const [user, setUser]=React.useState(null);
  React.useEffect(()=>{
    WooCommerce.get("customers/25")
    .then((response) => {
      console.log(response);
    })
    .catch((error) => {
      console.log(error);
    });
  },[])
  return (
    <View>
      
    </View>
  )
}

export default Account