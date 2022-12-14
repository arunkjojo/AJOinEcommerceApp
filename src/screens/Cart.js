import React from 'react';
import {  ScrollView, View, Text, StyleSheet, Dimensions, TouchableOpacity } from 'react-native'
import { useSelector } from 'react-redux';
import CartItem from '../components/CartItem';
import { useNavigation } from "@react-navigation/native";

const {width} = Dimensions.get('screen');

const Cart = () => {
  const navigation = useNavigation();
  const cart = useSelector((state) => state.cart.cart)
  const getTotal = () => {
    let totalQuantity = 0
    let totalPrice = 0
    cart.forEach(item => {
      totalQuantity += item.quantity
      let price=(item.price);
      totalPrice += price.replace(/,/g, '') * item.quantity
    })
    return {totalPrice, totalQuantity}
  }
  React.useEffect(()=>{
    if(!cart.length>0){
      navigation.navigate("Home")
    }
  },[cart]);

  const delivaryFee=getTotal().totalPrice>0?getTotal().totalPrice<100000?1000:0:0;
  return (
      <ScrollView style={styles.container}>
        <ScrollView style={{alignSelf:'flex-start'}}>
          {cart?.map((item) => (
            <CartItem
              key={item.id}
              id={item.id}
              image={item.image}
              name={item.name}
              price={item.price} 
              quantity={item.quantity}
            />
          ))}
        </ScrollView>
        {cart.length > 0 && (
        <View style={styles.row}>
          <View style={styles.rowItem}>
            <Text style={styles.label}>SubtotalItems({getTotal().totalQuantity}) </Text>
            <View style={styles.rowItem}>
              <Text style={styles.small}>$ </Text>
              <Text style={styles.value}>{(getTotal().totalPrice).toFixed(2).replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,')}</Text>
            </View>
          </View>

          <View style={styles.rowItem}>
            <Text style={styles.label}>Delivary Fee </Text>
            <View style={styles.rowItem}>
              <Text style={styles.small}>$ </Text>
              <Text style={styles.value}>{(delivaryFee).toFixed(2).replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,')}</Text>
            </View>
          </View>
          <View style={styles.seperator}></View>
          <View style={styles.rowItem}>
            <Text style={styles.label}>Total </Text>
            <View style={styles.rowItem}>
              <Text style={[styles.small, {fontSize:20}]}>$ </Text>
              <Text style={[styles.value,  {fontSize:20}]}>{(getTotal().totalPrice + delivaryFee).toFixed(2).replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,')}</Text>
            </View>
          </View>
          <View style={styles.rowItem}>
            <TouchableOpacity style={styles.payButton} onPress={() => navigation.navigate("Home")}>
              <Text style={styles.payText}>
                Go to Payment
              </Text>
            </TouchableOpacity>
          </View>
        </View>)}
      </ScrollView>
  )
}

const styles = StyleSheet.create({
  container: {
    flexDirection:'row',
    backgroundColor:'#fff',
  },
  row:{
    alignSelf:'flex-end', 
    width:(width),
    shadowColor:'#666',
    backgroundColor:'#fff',
    marginBottom:15
  },
  seperator: {
    borderBottomColor: '#666',
    borderBottomWidth: StyleSheet.hairlineWidth,
    marginLeft: 10,
    marginRight: 10,
  },
  rowItem: {
    flexDirection: "row",
    justifyContent: 'space-between',
    marginLeft: 10,
    marginRight: 10,
    marginBottom: 5
  },
  label: {
    fontSize:18,
    color:'#666',
    fontStyle:'italic',
    fontWeight:'normal'
  },
  value: {
    fontSize:18,
    color:'#000',
    fontStyle:'normal',
    fontWeight:'bold'
  },
  small: {
    fontSize:18,
    color:'#000',
    fontStyle:'italic',
    fontWeight:'700'
  },
  payButton: {
    flex:1,
    justifyContent:'center',
    backgroundColor:'#000',
    marginLeft: 10,
    marginRight: 10,
    marginBottom: 5,
    borderRadius: 15,
  },
  payText: {
    color:'#fff',
    backgroundColor:'#000',
    textAlign:'center',
    fontSize: 18,
    alignSelf:'center',
    justifyContent:'center',
    marginHorizontal: 15,
    marginVertical: 10,
  },
})

export default Cart