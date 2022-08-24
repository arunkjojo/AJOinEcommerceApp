import React from 'react'
import { Image, StyleSheet, Text, View } from 'react-native'
import { Button } from '@react-native-material/core'
import { useNavigation } from '@react-navigation/native';

const {width} = Dimensions.get('window');
const cardGap = 16;
const cardWidth = (width - cardGap*3)/2

const Product = ({productData, key} ) => {
    const navigation = useNavigation();
    return (
        <View style={[styles.productBox, {
            marginLeft: key % 2 !== 0 ? cardGap : 0}]}>
            <Image 
                onPress={() => navigation.navigate('Product Details')}
                style={styles.productImage}
                source={{uri: `${productData.image}`}}
                alt={productData.name}
                resizeMode='cover'
            />
            <Text style={styles.productTitle} onPress={() => navigation.navigate('Product Details')}>
                {productData.name}
            </Text>
            <Text style={styles.productRate} >
                $ {productData.prize}
            </Text>
            <Text h6 style={styles.productDescription}>
                {productData.sortDescription}
            </Text>
            <Button variant='text' title="More" color='primary' onPress={() => navigation.navigate('Product Details')} />
        </View>
    )
}

const styles=StyleSheet.create({
    productBox: {
        marginTop: cardGap,
        width: cardWidth,
        height: 400,
        backgroundColor: 'white',
        borderRadius: 16,
        shadowOpacity: 0.2,
        justifyContent: 'center',
        alignItems: 'center',
    },
    productImage: {
        width: 300,
        height: 200,
        margin: 2
    },
    productTitle: {
        color: '#5a647d',
        fontWeight: 'bold',
        fontSize: 30,
        marginBottom: 10, 
        marginTop: 20
    },
    productRate: {
        fontWeight: 'bold',
        marginBottom: 10
    },
    productDescription: {
        fontSize: 15,
        color: '#c1c4cd'
    },
})

export default Product