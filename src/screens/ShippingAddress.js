import { StyleSheet, Text, TextInput, View } from 'react-native'
import React from 'react'

const ShippingAddress = () => {

    const customer_data = {
        email: "arunkjojo@gmail.com",
        first_name: "ARUN",
        last_name: "JOJO",
        username: "arunk.jojo",
        billing: {
            first_name: "ARUN",
            last_name: "JOJO",
            company: "",
            address_1: "MIYAPADAVI",
            address_2: "MANJESHWAR",
            city: "KASARAGOD",
            state: "KERALA",
            postcode: "671323",
            country: "IN",
            email: "arunkjojo@gmail.com",
            phone: "(+91)9400247717"
        },
        shipping: {
          first_name: "ARUN",
          last_name: "JOJO",
          company: "",
          address_1: "MIYAPADAVI",
          address_2: "MANJESHWAR",
          city: "KASARAGOD",
          state: "KERALA",
          postcode: "671323",
          country: "IN"
        }
    };

    const [shippingAddress, setShippingAddress]=React.useState({
        first_name: "ARUN",
        last_name: "JOJO",
        company: "",
        address_1: "MIYAPADAVI",
        address_2: "MANJESHWAR",
        city: "KASARAGOD",
        state: "KERALA",
        postcode: "671323",
        country: "IN"
    });
    
    return (
        <View >
          <Text > Shipping Address </Text>
          <View>
            <TextInput placeholder="First Name" value={shippingAddress.first_name}/>
            <TextInput placeholder="Last Name" value={shippingAddress.last_name}/>
            <TextInput placeholder="Address 1" value={shippingAddress.address_1}/>
            <TextInput placeholder="Address 2" value={shippingAddress.address_2}/>
            <TextInput placeholder="Address 3" value={shippingAddress.address_3}/>
            <TextInput placeholder="City" value={shippingAddress.city}/>
            <TextInput placeholder="State" value={shippingAddress.state}/>
            <TextInput placeholder="Pin Code" value={shippingAddress.postcode}/>
          </View>
        </View>
    );
}

export default ShippingAddress

const styles = StyleSheet.create({})