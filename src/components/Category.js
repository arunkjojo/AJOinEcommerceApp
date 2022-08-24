import React from 'react'
import { Image, StyleSheet, Text, Dimensions, View } from 'react-native'
import { useNavigation } from '@react-navigation/native';

const {width} = Dimensions.get('window');
const cardGap = 16;
const cardWidth = (width - cardGap*3)/2
const Category = ({data, i}) => {
    const navigation = useNavigation();
    return (
        <View style={[styles.card, {
            marginLeft: i % 2 !== 0 ? cardGap : 0}]} >
            <Image
                style={styles.image}
                source={{uri: `${data.image}`}}
                alt={data.name}
                resizeMode='cover'
            />
            <Text style={styles.title} onPress={() => navigation.navigate('Product List', { productListIds: data.productList })}>
                {data.name}
            </Text>
        </View>
    )
}

const styles=StyleSheet.create({
    card: {
        marginTop: cardGap,
        width: cardWidth,
        height: 200,
        backgroundColor: 'white',
        borderRadius: 16,
        shadowOpacity: 0.2,
        justifyContent: 'center',
        alignItems: 'center',
    },
    image: {
        height: 100,
        width: 150,
        margin: 2
    },
    title: {
        color: '#5a647d',
        fontWeight: 'bold',
        fontSize: 30,
        marginBottom: 10, 
        marginTop: 20
    }
})

export default Category