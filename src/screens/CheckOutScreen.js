import { StyleSheet, Text, View, TouchableOpacity } from 'react-native'
import React from 'react'
import { useSelector, useDispatch } from 'react-redux';
import { removeAllItem} from '../redux/cartSlice'
import createOrder from '../api/postApi/createOrder';

import { getObjecteData } from '../localStorage/localStorage'

const CheckOut = () => {
    const cart = useSelector((state) => state.cart.cart);
    const dispatch = useDispatch();

    const getTotal = () => {
        let totalQuantity = 0
        let totalPrice = 0
        cart.forEach(item => {
          totalQuantity += item.quantity
          let price=(item.price);
          totalPrice += price * item.quantity
        })
        return {totalPrice, totalQuantity}
    }
    const delivaryFee=getTotal().totalPrice>0?getTotal().totalPrice<=1999?100:0:0;
    const confirmOrder = () => {
        const [shippingData, setShippingData] = React.useState({});
        React.useEffect(()=>{
            getObjecteData('shippingData').then(res=>{
                console.log(res);
                setShippingData(res);
            }).catcj(err=>{
                console.log(err);
            })
        },[getObjecteData]);

        const products = cart.map(item=>{
            return {
                product_id: item.id,
                quantity: item.quantity
            }
        });

        const data = {
            payment_method: "bacs",
            payment_method_title: "Direct Bank Transfer",
            set_paid: false,
            customer_id:2,
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
            },
            line_items: products,
            shipping_lines: [
                {
                    method_id: "flat_rate",
                    method_title: "Flat Rate",
                    total: delivaryFee.toFixed(2)
                }
            ]
        };
        
        createOrder(data).then((res) => {
            // console.log(res)
            dispatch(removeAllItem());
        });

        // // WooCommerceAPI configurations
        // const WooCommerceAPIs = new WooCommerceAPI({
        //     url: 'https://123koin.com', // Your store URL
        //     consumerKey: 'ck_e3277b1b5ea1fd74f0a3d65c5500894a15adf568', // Your consumer key
        //     consumerSecret: 'cs_c9fe962981454ac13951e5fa111b8092a999a761', // Your consumer secret
        //     version: 'wc/v3', // WooCommerce WP REST API version
        //     wpAPI: true, // Enable the WP REST API integration
        //     ssl: true,
        //     queryStringAuth: true
        // });
        
        // WooCommerceAPIs.post("orders", data)
        //     .then((response) => {
        //         // console.log(response);
        //         dispatch(removeAllItem());
        //     })
        //     .catch((error) => {
        //         console.log(error);
        //     });
    }

    return (
        <View style={styles.container}>
            {cart.length > 0 && (
                <View style={styles.row}>
                <View style={styles.rowItem}>
                    <Text style={styles.label}>SubtotalItems({getTotal().totalQuantity}) </Text>
                    <View style={styles.rowItem}>
                    <Text style={styles.small}>₹ </Text>
                    <Text style={styles.value}>{(getTotal().totalPrice).toFixed(2)}</Text>
                    </View>
                </View>

                <View style={styles.rowItem}>
                    <Text style={styles.label}>Delivary Fee </Text>
                    <View style={styles.rowItem}>
                    <Text style={styles.small}>₹ </Text>
                    <Text style={styles.value}>{(delivaryFee).toFixed(2)}</Text>
                    </View>
                </View>
                <View style={styles.seperator}></View>
                <View style={styles.rowItem}>
                    <Text style={styles.label}>Total </Text>
                    <View style={styles.rowItem}>
                    <Text style={[styles.small, {fontSize:20}]}>₹ </Text>
                    <Text style={[styles.value,  {fontSize:20}]}>{(getTotal().totalPrice + delivaryFee).toFixed(2)}</Text>
                    </View>
                </View>
                <View style={styles.rowItem}>
                    <TouchableOpacity style={styles.payButton} onPress={() => confirmOrder()}>
                    <Text style={styles.payText}>
                        Confirm Orcer
                    </Text>
                    </TouchableOpacity>
                </View>
                </View>
            )}
        </View>
    )
}

export default CheckOut

const styles = StyleSheet.create({
    container: {
        flexDirection:'row',
        backgroundColor:'#fff',
    },
    row: {
        alignSelf:'flex-end', 
        width: '100%',
        shadowColor:'#666',
        backgroundColor:'#fff',
        marginBottom:15
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
    }
})