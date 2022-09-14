import { View, Text, StyleSheet, Button, TouchableOpacity, Dimensions } from 'react-native'
import React from 'react'
import { incrementQuantity, decrementQuantity, removeItem} from '../redux/cartSlice'
import { useDispatch } from 'react-redux'
import { Image } from 'react-native-elements'

const {width} = Dimensions.get('screen');
const CartItem = ({id, image, name, price, quantity=0}) => {
    
    const dispatch = useDispatch();
    let totalPrice = (price.replace(/,/g, '') * quantity).toFixed(2);
    return (
        <View style={styles.container}>
            
            <Image style={styles.images} source={require('../assets/images/products/p1.png')} />
            
            <View style={styles.content}>

                <View style={styles.row}>
                    <Text style={styles.title}>{name}</Text>
                    <View style={styles.remove}>
                        <TouchableOpacity
                            color="#000"
                            style={styles.removeButton}
                            onPress={() => dispatch(removeItem(id))}
                        >
                            <Text style={styles.removeText}>x</Text>
                        </TouchableOpacity>
                    </View>
                </View>

                <View style={styles.row}>
                    <Text  style={styles.qty}>Qty: {quantity}</Text>
                </View>

                <View style={styles.row}>
                    <View style={styles.prize}>
                        <Text style={styles.prizeIcon}>$ </Text>
                        <Text style={styles.prizeAmount}>{totalPrice}</Text>
                    </View>
                    <View style={styles.qtyAction}>
                        <TouchableOpacity style={styles.qtyMinusButton} onPress={() => dispatch(decrementQuantity(id))} >
                            <Text style={styles.minusIcon}>{'-'}</Text>
                        </TouchableOpacity>

                        <Text style={styles.qtyIcon}>{quantity<10?'0'+quantity:quantity}</Text>

                        <TouchableOpacity style={styles.qtyPlusButton} onPress={() => dispatch(incrementQuantity(id))} >
                            <Text style={styles.plusIcon}>{'+'}</Text>
                        </TouchableOpacity>
                        
                    </View>
                </View>

            </View>
        </View>
    )
}

const styles= StyleSheet.create({
    container: {
        width: width,
        flexDirection:'row',
        backgroundColor: '#fff'
    },
    images: {
        flex:1,
        height:100,
        width:100,
        margin: 10
    },

    content: {
        flex:1,
        flexDirection: 'column',
    },

    row: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-between'
    },

    title: {
        alignItems: 'flex-start',
        fontSize:17,
        color:'#000',
        fontWeight:'500',
        overflow:'hidden',
        
    },
    remove: {
        alignItems: 'flex-end',
        marginRight: 10,
    },
    removeText: {
        fontSize:20,
        color:'#666',
        fontWeight:'500',
    },
    qty: {
        flex:1,
        fontSize:16,
        color:'#666',
        marginBottom: 5,
        marginTop: 5,
    },

    prize: {
        flexDirection: "row",
        marginBottom: 5,
        marginTop: 25,
    },
    prizeIcon: {
        fontSize:16,
        color:'#000',
        fontWeight:'500'
    },
    prizeAmount: {
        fontSize:17,
        color:'#000',
        fontWeight:'bold'
    },

    qtyAction: {
        flexDirection: "row",
        marginBottom: 5,
        marginTop: 20,
        marginRight:10
    },
    qtyMinusButton: {
        fontSize: 12,
        margin: 5,
        width:25,
        height:50
    },
    minusIcon: {
        borderColor:'#000',
        backgroundColor:'#fff',
        borderStyle:'solid',
        borderRadius: 50,
        borderWidth: 1,

        color:'#000',
        textAlign: 'center',
        justifyContent: 'center'
    },
    qtyIcon: {
        fontSize: 18,
        fontWeight: 'bold',
        color: '#000',
        textAlign: 'center',
        justifyContent: 'center',
        margin: 5,
    },
    qtyPlusButton: {
        fontSize: 12,
        margin: 5,
        width:25,
        height:50
    },
    plusIcon: {
        borderColor:'#000',
        borderStyle:'solid',
        borderRadius: 50,
        borderWidth: 1,

        color:'#fff',
        backgroundColor:'#000',
        textAlign: 'center',
        justifyContent: 'center'
    },
})

export default CartItem